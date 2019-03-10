import * as React from 'react';

import { Sprite } from 'react-game-kit';

import RunningRightSpriteSrc from "./assets/running-right.png";

const SCALE = 5;
const SPRITE_SIZE = 32;
const SCALED_SPRITE_SIZE = 32 * SCALE;
const FRAMES = 8;

const IDEAL_INTERVAL = 500;
const MILLIS_PER_HOUR = 1000 * 60 * 60;
const LARGEST_MISS = 100;

function RFGameRoot() {
  const [speed, setSpeed] = React.useState(1);
  const [lastInputTime, setLastInputTime] = React.useState(0);
  const [distance, setDistance] = React.useState(0);
  return (
    <div
      onClick={() => {
        const largestMiss = Math.max(LARGEST_MISS - Math.pow(1.2, speed), 30);
        const d = new Date();
        const millis = d.getMilliseconds();
        const diff = Math.abs(millis - lastInputTime);
        const tapPrecisionMiss = Math.abs(diff - IDEAL_INTERVAL);
        console.log(tapPrecisionMiss);
        let newSpeed;
        if (tapPrecisionMiss > largestMiss) {
          newSpeed = Math.max(speed - 3, 1);
        } else if (tapPrecisionMiss > largestMiss / 2) {
          newSpeed = speed + 1;
        } else if (tapPrecisionMiss > largestMiss / 4) {
          newSpeed = speed + 2;
        } else {
          newSpeed = speed + 3;
        }

        setSpeed(newSpeed);
        setDistance(distance + (newSpeed * IDEAL_INTERVAL / MILLIS_PER_HOUR));
        
        setLastInputTime(millis);
      }}>
      <div
        style={{
          overflow: 'hidden',
          height: SCALED_SPRITE_SIZE,
          width: SCALED_SPRITE_SIZE
        }}>
        <Sprite
          style={{ height: SCALED_SPRITE_SIZE, width: FRAMES * SCALED_SPRITE_SIZE }}
          scale={SCALE}
          steps={[FRAMES - 1]}
          src={RunningRightSpriteSrc}
          repeat={true}
          state={0}
          ticksPerFrame={10 / speed}
          tileHeight={SPRITE_SIZE}
          tileWidth={SPRITE_SIZE}
        />
      </div>
      <div
        className="game-font"
      >
        {speed} MPH, {distance} miles
      </div>
    </div>

  );
}
export default RFGameRoot;
