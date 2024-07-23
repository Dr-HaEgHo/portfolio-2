import { experienceProps } from '@/types';
import React, { FC } from 'react'
import { Timeline, Events, Event } from 'vertical-timeline-component-react';

const ExperienceCard:FC<experienceProps> = ({data}) => {

    const customTheme = {
		borderDotColor: '#2b2b2cbf',
		descriptionColor: '#D6d6d6',
		dotColor: '#9f1fef',
		eventColor: '#fff',
		lineColor: '#9f1fef',
		subtitleColor: '#7c7c7c',
		titleColor: '#fff',
		yearColor: '#fff',
	};

    return (
        <Timeline lang="en" theme={customTheme} dateFormat="only-number" collapse={true} withoutDay >
            {
                data?.map((item) => (
                    <Events
                        key={item.id}
                        title={item.role}
                        subtitle={`${item.company}: ${item.startDate} - ${item.endDate}`}
                        startDate="2020/12/02"
                        endDate="2022/12/02"
                        active
                        defaultClosed
                    >
                        <Event
                            title={item.stack.map((item) => item).join(' || ') as unknown as string}
                            description={item.summary}
                        />
                    </Events>
                ))
            }
        </Timeline>
    );
  }

export default ExperienceCard