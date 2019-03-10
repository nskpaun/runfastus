declare module 'gatsby-plugin-mailchimp' {
  type MailChimpResult = {
    msg: string
    result: string
  }
  function addToMailchimp(email: string): Promise<MailChimpResult>
  export default addToMailchimp
}

declare module 'typography-theme-wordpress-2016' {
  import {TypographyOptions} from 'typography'
  let Theme: TypographyOptions
  export default Theme
}
    
declare module 'react-game-kit' {
    import { ComponentType } from 'react';
    import { Body as MatterBody } from 'matter-js';

    /**
     * The Sprite component lets you define sprite animations using sprite sheets. When creating a sprite sheet, define sprite tile dimensions that will be provided via the tileHeight & tileWidth props. Next, each animation state is represented by a row, with steps of the animation represented as columns.
     */
    export const Sprite: React.ComponentType<
        Partial<{
            style: any;
            offset: [number, number];
            onPlayStateChanged: Function;
            repeat: boolean;
            scale: number;
            src: string;
            state: number;
            steps: Array<any>;
            ticksPerFrame: number;
            tileHeight: number;
            tileWidth: number;
        }>
    >;
    class AudioPlayer {
        constructor(url: string, callback: () => void);
        play(options: undefined | { loop?: boolean; volume?: number; offset?: number }) : void;
        context: any;
        buffer: any;
    }
    export const Loop: React.ComponentType<{}>;
    export const Stage: React.ComponentType<Partial<{ height: number; width: number; style: any }>>;
    export class KeyListener {
        LEFT: number;
        RIGHT: number;
        UP: number;
        DOWN: number;
        SPACE: number;

        subscribe(keys: number[]): void;
        unsubscribe(): void;
        isDown(key: number): boolean;
    }

    class Body extends React.Component<{
        shape?: 'rectangle' | 'circle';
        args: number[];
        inertia: number;
        [key: string]: any;
    }> {
        body: MatterBody;
    }

    export const TileMap: React.ComponentType<{}>;

    export const World: React.ComponentType<{
        gravity?: number;
        onCollision?: Function;
        onInit?: Function;
        onUpdate?: Function;
    }>;
}

declare module "*.png" {
  const value: any;
  export default value;
}
