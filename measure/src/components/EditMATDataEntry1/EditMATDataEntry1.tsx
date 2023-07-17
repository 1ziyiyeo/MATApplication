import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './EditMATDataEntry1.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse9Icon } from './Ellipse9Icon.js';
import { Ellipse10Icon } from './Ellipse10Icon.js';
import { Ellipse11Icon } from './Ellipse11Icon.js';
import { Ellipse12Icon } from './Ellipse12Icon.js';
import { Ellipse13Icon } from './Ellipse13Icon.js';
import { ExitMatBtn } from './ExitMatBtn/ExitMatBtn';
import { Group2Icon } from './Group2Icon.js';
import { Rectangle6Icon } from './Rectangle6Icon.js';
import { Rectangle92Icon2 } from './Rectangle92Icon2.js';
import { Rectangle92Icon3 } from './Rectangle92Icon3.js';
import { Rectangle92Icon } from './Rectangle92Icon.js';
import { ReviewTab } from './ReviewTab/ReviewTab';

interface Props {
  className?: string;
}
/* @figmaId 297:944 */
export const EditMATDataEntry1: FC<Props> = memo(function EditMATDataEntry1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon2} />
      </div>
      <ReviewTab
        classes={{ rectangle69: classes.rectangle69 }}
        swap={{
          ellipse13: <Ellipse13Icon className={classes.icon} />,
        }}
      />
      <div className={classes.rectangle82}></div>
      <div className={classes.patientDetails}>Patient Details</div>
      <div className={classes.rectangle65}></div>
      <div className={classes.ellipse9}>
        <Ellipse9Icon className={classes.icon3} />
      </div>
     
      <div className={classes.ellipse12}>
        <Ellipse12Icon className={classes.icon5} />
      </div>
      <div className={classes.seated}>Seated</div>
      <div className={classes.rectangle68}></div>
     
      <div className={classes.ellipse10}>
        <Ellipse10Icon className={classes.icon7} />
      </div>
      <div className={classes.currentSeating}>Current Seating</div>
      <div className={classes.rectangle66}></div>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon9} />
      </div>
      <div className={classes.supine}>Supine</div>
      <div className={classes.rectangle67}></div>
      <ExitMatBtn classes={{ rectangle60: classes.rectangle60 }} />
      <div className={classes.mATAssessmentTool}>MAT Assessment Tool</div>
      
      
      
      <div className={classes.johnSmith}>John Smith</div>
      <div className={classes.rectangle21}></div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon10} />
      </div>
      <div className={classes.rectangle20}></div>
      
     
      
      
     
    </div>
  );
});
