import ReactPlayer from 'react-player';

export default function MediaRunning({ video }: { video: any }) {
  if (video) {
    return (
      <ReactPlayer
        url="https://www.youtube.com/watch?v=nOQyWbPO2Ds"
        width="100%"
        height="100%"
        playing={false}
        controls={true}
        muted={true}
      />
    );
  }
  return '';
}
