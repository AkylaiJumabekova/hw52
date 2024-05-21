import React from "react";

interface CardProps {
    rank: string;
    suit: string;
}

const MyCard: React.FC<CardProps> = ({rank, suit}) => {

    return (
        <div className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{suit}</span>
        </div>
    );
};

export default MyCard;
