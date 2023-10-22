import { Combobox, Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { HashtagIcon, MagnifyingGlassIcon, NewspaperIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import type { SearchIndex } from '~/types';

export type SearchResultItem = {
  [key: string]: {
    heading: string;
    data: SearchIndex[];
  };
};

const searchPost = (rawIndex: any, query: string) => {
  const fuse = new Fuse(rawIndex, {
    keys: ['title', 'id'],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
  });
  const posts = fuse.search(query).reduce<SearchResultItem>((group: SearchResultItem, result: Fuse.FuseResult<any>) => {
    const { heading } = result.item;
    if (group[heading] === undefined) {
      group[heading] = {
        heading: heading,
        data: [result.item],
      };
    } else {
      group[heading]['data'].push(result.item);
    }
    return group;
  }, {} as SearchResultItem);

  return Object.values(posts);
};

export default function Search({ searchData = [] }: { searchData: SearchIndex[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const posts = searchPost(searchData, query);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const handlerSearchQuery = ({ target }: { target: HTMLInputElement }) => {
    setQuery(target.value);
  };

  const handlerSelectSearchItem = (post: SearchIndex) => {
    window.location.href = post.permalink;
  };

  const handlerCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="flex items-center justify-center self-center text-2xl w-12 h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
      >
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="w-6 h-6" />
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99]" onClose={handlerCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/40 transition-opacity opacity-100" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="block mx-auto max-w-2xl transform divide-y divide-gray-100 dark:divide-slate-700 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:text-slate-300 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all opacity-100 scale-100">
                <Combobox onChange={handlerSelectSearchItem}>
                  <div className="relative">
                    <MagnifyingGlassIcon className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" />
                    <Combobox.Input
                      value={query}
                      onChange={handlerSearchQuery}
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 dark:text-gray-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    />
                  </div>
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                  >
                    {posts.length > 0 &&
                      posts.map((post) => (
                        <li key={post.heading}>
                          <h2 className="text-xs font-semibold text-gray-900 dark:text-gray-300">{post.heading}</h2>
                          {post.data.length > 0 && (
                            <ul className="-mx-4 mt-2 text-sm text-gray-700 dark:text-slate-300">
                              {post.data.map((data) => (
                                <Combobox.Option as={Fragment} value={data} key={data.id}>
                                  {({ active }) => (
                                    <li
                                      className={`cursor-pointer flex select-none items-center px-4 py-2 ${
                                        active ? 'bg-indigo-600 text-white' : ''
                                      }`}
                                    >
                                      {data.heading === 'Posts' && (
                                        <NewspaperIcon
                                          className={`w-5 h-5 flex-none ${active ? 'text-white' : 'text-gray-400'}`}
                                        />
                                      )}

                                      {data.heading === 'Categories' && (
                                        <Squares2X2Icon
                                          className={`w-5 h-5 flex-none ${active ? 'text-white' : 'text-gray-400'}`}
                                        />
                                      )}

                                      {data.heading === 'Tags' && (
                                        <HashtagIcon
                                          className={`w-5 h-5 flex-none ${active ? 'text-white' : 'text-gray-400'}`}
                                        />
                                      )}

                                      <span className="ms-3 flex-auto truncate">{data.title}</span>
                                    </li>
                                  )}
                                </Combobox.Option>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    {posts.length < 1 && (
                      <div className="min-h-[10rem] text-gray-900 dark:text-gray-300 h-full w-full flex items-center justify-center">
                        No results found
                      </div>
                    )}
                  </Combobox.Options>
                </Combobox>
                <div className="flex flex-wrap items-center bg-gray-50 dark:bg-neutral-900/95 py-2.5 px-4 text-xs text-gray-700 dark:text-slate-300">
                  <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white dark:bg-gray-800 font-semibold sm:mx-2 border-gray-400 dark:border-slate-700 text-gray-900 dark:text-slate-300">
                    &crarr;
                  </kbd>
                  <span>to select</span>
                  <kbd className="ml-1 flex h-5 w-5 items-center justify-center rounded border bg-white dark:bg-gray-800 font-semibold sm:ml-2 border-gray-400 dark:border-slate-700 text-gray-900 dark:text-slate-300">
                    &uarr;
                  </kbd>
                  <kbd className="mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white dark:bg-gray-800 font-semibold sm:mr-2 border-gray-400 dark:border-slate-700 text-gray-900 dark:text-slate-300">
                    &darr;
                  </kbd>
                  <span>to navigate</span>
                  <kbd className="mx-1 flex h-5 w-8 items-center justify-center rounded border bg-white dark:bg-gray-800 font-semibold sm:mx-2 border-gray-400 dark:border-slate-700 text-gray-900 dark:text-slate-300">
                    esc
                  </kbd>
                  <span>to close</span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
