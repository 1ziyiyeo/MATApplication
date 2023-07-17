import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Ellipse13Icon } from './Ellipse13Icon.js';
import classes from './ReviewTab.module.css';

interface Props {
  className?: string;
  classes?: {
    rectangle69?: string;
  };
  swap?: {
    ellipse13?: ReactNode;
  };
}
/* @figmaId 213:729 */
export const ReviewTab: FC<Props> = memo(function ReviewTab(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle92}></div>
      <div className={classes.review}>Review</div>
      <div className={`${props.classes?.rectangle69 || ''} ${classes.rectangle69}`}></div>
      <div className={classes.ellipse13}>{props.swap?.ellipse13 || <Ellipse13Icon className={classes.icon} />}</div>
    </div>
  );
});
