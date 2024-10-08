import { useState } from "react";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={toggleLike} style={{ cursor: 'pointer' }}>
      {isLiked ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="35" viewBox="0 0 41 35" fill="none">
          <path d="M3.41666 12.25C3.41645 11.2035 3.66061 10.1674 4.13485 9.20231C4.6091 8.23724 5.30392 7.36254 6.17872 6.62934C7.05352 5.89614 8.09074 5.31915 9.22976 4.93208C10.3688 4.54501 11.5868 4.35563 12.8125 4.37501C14.2628 4.36843 15.6982 4.62507 17.0235 5.1279C18.3489 5.63074 19.5339 6.36829 20.5 7.29167C21.4661 6.36829 22.6511 5.63074 23.9765 5.1279C25.3018 4.62507 26.7372 4.36843 28.1875 4.37501C29.4132 4.35563 30.6312 4.54501 31.7702 4.93208C32.9093 5.31915 33.9465 5.89614 34.8213 6.62934C35.6961 7.36254 36.3909 8.23724 36.8651 9.20231C37.3394 10.1674 37.5835 11.2035 37.5833 12.25C37.5833 20.0608 26.6859 25.9583 20.5 30.625C14.3278 25.919 3.41666 20.0667 3.41666 12.25Z" fill="#FC3A74"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="25" viewBox="0 0 34 25" fill="none">
          <path d="M16.8757 2.16461C15.032 0.772624 12.6187 6.46793e-05 10.114 0C8.78831 0.0011333 7.47596 0.217516 6.25249 0.636696C5.02903 1.05588 3.9186 1.66958 2.98511 2.44248C-0.996448 5.72552 -0.994756 10.8606 2.9885 14.1297L15.3951 24.3164C15.6828 24.7319 16.2378 25 16.8757 25C17.1377 24.9979 17.3954 24.9454 17.6281 24.8467C17.8609 24.748 18.0622 24.6059 18.2159 24.4318L30.763 14.1297C34.7462 10.8592 34.7462 5.72552 30.7596 2.43692C29.8266 1.66544 28.717 1.05299 27.4948 0.634772C26.2725 0.216558 24.9616 0.000833064 23.6375 0C21.1328 0.000336166 18.7197 0.772859 16.8757 2.16461ZM28.3669 4.40147C31.0117 6.58414 31.0134 9.99361 28.3703 12.1652L16.8757 21.603L5.38116 12.1652C2.73806 9.99361 2.73976 6.58414 5.37777 4.40702C6.66379 3.35667 8.34576 2.7787 10.114 2.7787C11.8823 2.7787 13.5575 3.35667 14.8334 4.40425L15.6794 5.09892C15.8364 5.22806 16.0229 5.3305 16.2282 5.4004C16.4335 5.4703 16.6535 5.50628 16.8757 5.50628C17.098 5.50628 17.318 5.4703 17.5233 5.4004C17.7286 5.3305 17.9151 5.22806 18.0721 5.09892L18.9181 4.40425C21.4766 2.30771 25.8118 2.31327 28.3669 4.40147Z" fill="#FC3A74" />
        </svg>
      )}
    </div>
  );
};

export default LikeButton





// import React, { useState } from 'react';
// import styled from 'styled-components';

// const LikeButton = () => {
//   const [liked, setLiked] = useState(false);

//   const toggleLike = () => {
//     setLiked(!liked);
//   };

//   return (
//     <Button liked={liked} onClick={toggleLike}>
//       <svg viewBox="0 0 24 24">
//         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//       </svg>
//     </Button>
//   );
// };

// export default LikeButton;

    
//     const Button = styled.button`
//       background-color: transparent;
//       border: none;
//       cursor: pointer;
//       display: flex;
//       align-items: center;
//       padding: 0;
//       outline: none;
    
//       svg {
//         fill: ${props => (props.liked ? '#ed1010' : '#ccc')};
//         width: 30px;
//         height: 30px;
//         transition: fill 0.2s ease-in-out;
//       }
    
//       &:hover svg {
//         fill: ${props => (props.liked ? '#ec0f0f' : '#bbb')};
//       }
//     `;