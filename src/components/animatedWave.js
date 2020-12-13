import React from 'react';

export function AnimatedWave() {
    return(
        <div className="waves d-none d-lg-block">
            <svg width="100%" height="180px" fill="none">
            <path 
                fill="#be2121" 
                d="
                M0 67
                C 273,183
                    822,-40
                    1920.00,106 

                V 359 
                H 0 
                V 67
                Z">
                <animate 
                repeatCount="indefinite" 
                fill="#be2121" 
                attributeName="d" 
                dur="15s" 
                values="
                    M0 77 
                    C 473,283
                    822,-40
                    1920,116 

                    V 359 
                    H 0 
                    V 67 
                    Z; 

                    M0 77 
                    C 473,-40
                    1222,283
                    1920,136 

                    V 359 
                    H 0 
                    V 67 
                    Z; 

                    M0 77 
                    C 973,260
                    1722,-53
                    1920,120 

                    V 359 
                    H 0 
                    V 67 
                    Z; 

                    M0 77 
                    C 473,283
                    822,-40
                    1920,116 

                    V 359 
                    H 0 
                    V 67 
                    Z
                    ">
                </animate>
            </path>
            </svg>
        </div>
    )
}