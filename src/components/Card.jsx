import React, {useState} from 'react';

const Card = ({language}) => {
  const [votes, setVotes] = useState(0)
    const handleClick = () => {
        setVotes((prev) => prev + 1)
    }
  return (
    <div className='card'>
      {language}
      <button onClick={handleClick}
       type="button">click!</button>
      <p>{votes}</p>
    </div>
  );
}

export default Card;