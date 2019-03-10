import * as React from 'react';

import { Sprite } from 'react-game-kit';

import RunningRightSpriteSrc from "./assets/running-right.png";

const SCALE = 5;
const SPRITE_SIZE = 32;
const SCALED_SPRITE_SIZE = 32 * SCALE;
const FRAMES = 8;

class Game extends React.Component<{}> {
  render() {
    return (
      <div style={{
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
          tileHeight={SPRITE_SIZE}
          tileWidth={SPRITE_SIZE}
        />
      </div>

    );
  }
}
export default Game;
