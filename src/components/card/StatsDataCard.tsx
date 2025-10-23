import React from 'react';
import Reveal from '../animation/Reveal';
interface StatsDataType {
    label: string;
    value: number | string;
    description: string;
    bgColor: string;
    textColor: string;
    subTextColor?: string;
}
const StatsData = ({ data }: { data: StatsDataType }) => {
    return (
        <div className={`p-10 rounded-lg flex flex-col justify-between ${data.bgColor}`}>
            <Reveal width="100%">
                <p className={`mb-4 ${data.textColor}`}>{data.description}</p>
            </Reveal>
            <div>
                <Reveal width="fit-content">
                    <h3 className={`text-4xl font-bold mb-2 ${data.textColor}`}>{data.value}</h3>
                </Reveal>
                <Reveal width="fit-content">
                    <p className={`text-lg ${data.subTextColor ? data.subTextColor : data.textColor}`}>{data.label}</p>
                </Reveal>
            </div>
        </div>
    );
};



export default StatsData;