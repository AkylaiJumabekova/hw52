import React from "react";

interface CardProps {
    rank: string;
    suit: string;
}

const MyCard: React.FC<CardProps> = ({rank, suit}) => {
    const logos: { [key: string]: string } = {
        hearts: "♥️",
        diams: "♦️",
        clubs: "♣️",
        spades: "♠️"
    };

    return (
        <div className={`card rank-${rank.toLowerCase()} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{logos[suit]}</span>
        </div>
    );
};

export default MyCard;
