import './style.css';

const SmileyContent = ({ type }) => {
  let d = null;
  
  if (type === 'smileyYes') {
    d = 'M 141.62986,124.11544 A 48.216164,48.216179 0 0 1 99.873435,148.22353 48.216164,48.216179 0 0 1 58.117013,124.11544';
  } else if (type === 'smileyStrongYes') {
    d = 'M 145.8564,116.12287 A 48.216164,53.573532 0 0 1 99.892118,153.58088 48.216164,53.573532 0 0 1 53.901722,116.16246 m -0.101509,-0.0831 c 29.09283,-6.43568 59.458677,-7.82227 92.146447,0';
  } else if (type === 'smileyNeutral') {
    d = 'M 67.726167,132.14468 H 132.01085';
  } else if (type === 'smileyNo') {
    d = 'm 67.726167,148.21585 c 0,-21.42823 26.785283,-42.85645 64.284683,-32.14234';
  } else if (type === 'smileyStrongNo') {
    d = 'm 141.62305,139.87305 c -8.6128,-14.91675 -24.52922,-24.10566 -41.753909,-24.10547 -17.224684,-1.9e-4 -33.141103,9.18872 -41.753907,24.10547';
  }

  return (
    <>
      <g className="smiley-eyes">
        <circle cx="70" cy="75" r="12" />
        <circle cx="130" cy="75" r="12" />
      </g>

      <path className="smiley-mouth" d={d} />
    </>
  );
};

const SymbolContent = ({ type }) => {
  if (type === 'symbolQuestion') {
    return (
      <>
        <path
          fill="none"
          strokeWidth="8"
          d="m 73.083205,78.57419 c 10e-6,-14.79308 11.992188,-26.78528 26.785285,-26.78528 14.7931,0 26.78528,11.9922 26.78528,26.78528 0,21.42823 -26.78528,16.07117 -26.78528,37.4994"
        />
        <circle fill="#5a5a5a" cx="100" cy="142" r="8" />
      </>
    );
  }

  if (type === 'symbolTick') {
    return (
      <path 
        fill="none"
        strokeWidth="8"
        d="M 57.141863,94.671752 89.285972,126.81586 142.85949,73.242346"
      />
    )
  }
  
  return null;
};

export const Icon = ({ type }) => {
  let content = null;

  if (type.startsWith('smiley')) {
    content = <SmileyContent type={type} />;
  } else if (type.startsWith('symbol')) {
    content = <SymbolContent type={type} />;
  }

  return (
    <svg className="icon" viewBox="0 0 200 200">
      <circle className="icon__circle" cx="100" cy="100" r="85" />
      { content }
    </svg>
  );
};
