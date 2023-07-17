import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ExitMatBtn.module.css';
import { Rectangle43Icon } from './Rectangle43Icon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle60?: string;
  };
}
/* @figmaId 213:674 */
export const ExitMatBtn: FC<Props> = memo(function ExitMatBtn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle43}>
        <Rectangle43Icon className={classes.icon} />
      </div>
      <div className={`${props.classes?.rectangle60 || ''} ${classes.rectangle60}`}></div>
      <div className={classes.exitMAT}>Exit MAT</div>
    </div>
  );
});
