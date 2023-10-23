import { useEffect, useState } from 'react';
import { getGithubContentUrl } from '~/utils/utils';

export default function ScrollToTop({ postId }: { postId: string }) {
  const [reading, setReading] = useState(0);
  const handleToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const entryContent = document.getElementById('single-entry-content') as HTMLDivElement | null;
    if (entryContent) {
      let totalEntryH = entryContent.offsetTop + entryContent.offsetHeight;
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let scrolled = (winScroll / totalEntryH) * 100;
      if (scrolled > 100) {
        scrolled = 100;
      }
      setReading(scrolled | 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="inline-flex self-center gap-1 sm:gap-2 sticky mt-8 bottom-5 sm:bottom-8 z-40 justify-center items-center opacity-100">
      <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-full ring-1 ring-offset-1 ring-neutral-900/5 p-1.5 flex items-center justify-center gap-1 sm:gap-2 text-xs">
        <div className="relative flex items-center leading-none group transition-colors text-xs  text-neutral-700 dark:text-neutral-200  hover:text-rose-600 dark:hover:text-rose-500">
          <a
            href={getGithubContentUrl(postId)}
            target="_blank"
            className="h-9 w-9 transition-colors duration-75 flex-shrink-0 flex items-center justify-center rounded-full bg-neutral-50 dark:bg-neutral-800 group-hover:bg-rose-50 dark:group-hover/PostCardLikeAction:bg-rose-100"
          >
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="border-s h-4 border-neutral-200 dark:border-neutral-700" />
        <a
          href="#comments"
          className="nc-PostCardCommentBtn group relative flex items-center text-neutral-600 transition-colors dark:text-neutral-200 hover:text-teal-600 dark:hover:text-teal-500  text-xs"
        >
          <span className="flex-shrink-0 flex items-center justify-center rounded-full bg-neutral-50 transition-colors duration-75 dark:bg-neutral-800 group-hover:bg-teal-50 dark:group-hover/PostCardCommentBtn:bg-teal-100 w-9 h-9">
            <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
              />
            </svg>
          </span>
        </a>
        <div className="border-s h-4 border-neutral-200 dark:border-neutral-700" />
        <button
          className="w-9 h-9 items-center justify-center bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full flex"
          onClick={handleToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06l-6.22-6.22V21a.75.75 0 01-1.5 0V4.81l-6.22 6.22a.75.75 0 11-1.06-1.06l7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="border-s h-4 border-neutral-200 dark:border-neutral-700" />
        <button className="w-9 h-9 items-center justify-center flex" onClick={handleToTop}>{`${reading}%`}</button>
      </div>
    </div>
  );
}
