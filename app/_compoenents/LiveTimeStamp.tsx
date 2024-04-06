"use client";
import React from 'react';
import TimeAgo from 'timeago-react';


type Props = {
    time: string;
}

function LiveTimeStamp({ time }: Props) {
    return (
        <TimeAgo datetime={time} />
    )
}

export default LiveTimeStamp;