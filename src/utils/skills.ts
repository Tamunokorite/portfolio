interface Skill {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  name: string
}

export const skills: Skill[] = [
  {
    id: 1,
    icon: `
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.2334 20.7833L25.2167 1.76665C24.6334 1.18331 23.8167 0.833313 23 0.833313C22.1834 0.833313 21.3667 1.18331 20.7834 1.76665L16.7 5.84998L21.4834 10.6333C21.95 10.4 22.4167 10.2833 23 10.2833C24.9834 10.2833 26.5 11.8 26.5 13.7833C26.5 14.3666 26.3834 14.8333 26.15 15.3L30.8167 19.9666C31.2834 19.7333 31.75 19.6166 32.3334 19.6166C34.3167 19.6166 35.8334 21.1333 35.8334 23.1166C35.8334 25.1 34.3167 26.6166 32.3334 26.6166C30.35 26.6166 28.8334 25.1 28.8334 23.1166C28.8334 22.5333 28.95 22.0666 29.1834 21.6L24.5167 16.9333C24.4 16.9333 24.2834 17.05 24.1667 17.05V29.1833C25.5667 29.65 26.5 30.9333 26.5 32.45C26.5 34.4333 24.9834 35.95 23 35.95C21.0167 35.95 19.5 34.4333 19.5 32.45C19.5 30.9333 20.4334 29.65 21.8334 29.1833V16.9333C20.4334 16.4666 19.5 15.1833 19.5 13.6666C19.5 13.0833 19.6167 12.6166 19.85 12.15L15.0667 7.36665L1.76671 20.7833C1.18337 21.3666 0.833374 22.1833 0.833374 23C0.833374 23.8166 1.18337 24.6333 1.76671 25.2166L20.7834 44.2333C21.3667 44.8167 22.1834 45.1666 23 45.1666C23.8167 45.1666 24.6334 44.8167 25.2167 44.2333L44.2334 25.2166C44.8167 24.6333 45.1667 23.8166 45.1667 23C45.1667 22.1833 44.8167 21.3666 44.2334 20.7833Z" fill="black"/>
      </svg>
    `,
    name: 'Git',
  },
  {
    id: 2,
    icon: `
      <svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1147 17.9176C23.1912 19.666 24.361 21.3414 26.839 21.3414C28.9203 21.3414 30.0123 20.3069 30.0123 18.8758C30.0123 17.1631 28.883 16.5549 26.5932 15.5578L25.3378 15.0227C21.715 13.4858 19.3054 11.56 19.3054 7.49225C19.3054 3.74336 22.1754 0.890471 26.6601 0.890471C29.8536 0.890471 32.1481 1.99647 33.8032 4.89292L29.8925 7.39269C29.0323 5.8558 28.1021 5.2507 26.6601 5.2507C25.1885 5.2507 24.2567 6.17936 24.2567 7.39269C24.2567 8.89225 25.1901 9.49892 27.3445 10.4276L28.5998 10.9627C32.8698 12.7811 35.2778 14.6385 35.2778 18.8136C35.2778 23.3122 31.725 25.7778 26.9556 25.7778C22.2905 25.7778 19.6414 23.4367 18.1667 20.5387L22.1147 17.9176ZM4.09207 18.0451C4.87918 19.4545 6.0754 20.5387 7.79584 20.5387C9.44162 20.5387 10.389 19.8885 10.389 17.3607V0.888916H15.5736V18.1571C15.5736 23.3947 12.5356 25.7778 8.09918 25.7778C4.09051 25.7778 1.19718 23.0618 0.0180664 20.5387L4.09207 18.0451Z" fill="black"/>
      </svg>
    `,
    name: 'JavaScript',
  },
  {
    id: 3,
    icon: `
      <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_630_24" style={{ "maskType": "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="56">
        <path d="M0.5 0H56.5V56H0.5V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_630_24)">
        <path d="M55.1677 2.04696e-06H1.83C1.47705 0.000620178 1.13876 0.141263 0.889408 0.391057C0.640052 0.640851 0.500002 0.979382 0.500002 1.33234V54.67C0.499695 54.8451 0.533947 55.0184 0.600794 55.1802C0.667641 55.342 0.765768 55.489 0.889548 55.6128C1.01333 55.7366 1.16033 55.8347 1.32211 55.9015C1.48389 55.9684 1.65728 56.0026 1.83234 56.0023H55.17C55.345 56.0023 55.5182 55.9679 55.6799 55.9009C55.8415 55.834 55.9884 55.7358 56.1121 55.6121C56.2358 55.4884 56.334 55.3415 56.4009 55.1799C56.4679 55.0182 56.5023 54.845 56.5023 54.67V1.33C56.502 1.15504 56.4673 0.981846 56.4 0.820317C56.3328 0.658788 56.2344 0.512085 56.1105 0.388583C55.9865 0.265081 55.8395 0.167199 55.6777 0.100526C55.5159 0.0338536 55.3426 -0.000304639 55.1677 2.04696e-06ZM33.834 29.9273H27.1677V50.666H21.8337V29.9273H15.1673V25.333H33.834V29.9273ZM35.3273 49.4807V43.939C35.3273 43.939 38.356 46.221 41.989 46.221C45.622 46.221 45.482 43.8457 45.482 43.519C45.482 40.0727 35.1873 40.0727 35.1873 32.4333C35.1873 22.0453 50.1883 26.145 50.1883 26.145L50.0017 31.0823C50.0017 31.0823 47.4863 29.4047 44.6443 29.4047C41.8023 29.4047 40.778 30.758 40.778 32.2C40.778 35.9263 51.166 35.5553 51.166 43.0547C51.166 54.6047 35.3273 49.483 35.3273 49.483" fill="#040404"/>
        </g>
      </svg>
    `,
    name: 'TypeScript',
  },
  {
    id: 4,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'Python'
  },
  {
    id: 5,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'Node.js'
  },
  {
    id: 6,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'Express.js'
  },
  {
    id: 7,
    icon: `
      <svg 
        width="54" 
        height="54" 
        viewBox="0 0 256 256" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path 
            d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" 
            fill="#000000"
          />
        </g>
      </svg>
    `,
    name: 'Next.js',
  },
  {
    id: 8,
    icon: `
      <svg 
        width="54" 
        height="54" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>react</title>
        <rect width="24" height="24" fill="none"/>
        <path 
          d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
          fill="#040404"
        />
      </svg>
    `,
    name: 'React',
  },
  {
    id: 9,
    icon: `
      <svg 
        width="54" 
        height="54" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>react</title>
        <rect width="24" height="24" fill="none"/>
        <path 
          d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
          fill="#040404"
        />
      </svg>
    `,
    name: 'React Native',
  },
  {
    id: 10,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'PostgreSQL'
  },
  {
    id: 11,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'MySQL'
  },
  {
    id: 12,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'MongoDB'
  },
  {
    id: 13,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'AWS'
  },
  {
    id: 14,
    icon: `
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5818 26.125H33.3389C36.8901 26.125 39.6874 23.1202 39.6874 19.5542V7.39254C39.6874 3.93104 36.7859 1.33054 33.3196 0.753036C31.126 0.387724 28.8593 0.221474 26.6753 0.231974C24.4922 0.242036 22.4701 0.427974 20.6356 0.753036C15.2303 1.70722 14.3124 3.7066 14.3124 7.39254V12.125H26.9999V13.875H9.40195C5.6902 13.875 2.43957 16.1097 1.42326 20.3548C0.250321 25.2198 0.198258 28.1943 1.42326 33.2742C2.33107 37.055 4.49888 39.6875 8.21107 39.6875H12.5624V33.979C12.5624 29.7628 16.2497 26.125 20.5818 26.125ZM19.7777 9.01435C18.4538 9.01435 17.3811 7.92979 17.3811 6.58841C17.3811 5.24135 18.4534 4.14672 19.7777 4.14672C21.0968 4.14672 22.1748 5.24135 22.1748 6.58841C22.1743 7.92979 21.0963 9.01435 19.7777 9.01435ZM52.4979 20.3548C51.58 16.6588 49.8278 13.875 46.1108 13.875H41.4374V19.5542C41.4374 23.951 37.5901 27.4375 33.3389 27.4375H20.5818C17.0871 27.4375 14.3124 30.6426 14.3124 34.1426V46.3051C14.3124 49.7657 17.2634 51.8018 20.6396 52.795C24.6829 53.9837 28.5119 54.1985 33.3494 52.795C36.5646 51.8635 39.6874 49.9902 39.6874 46.3051V41.4375H26.9999V39.6875H46.1108C49.8226 39.6875 51.2064 37.1605 52.4979 33.2737C53.8309 29.2728 53.7736 25.4867 52.4979 20.3548ZM34.1426 44.6824C35.4669 44.6824 36.5396 45.767 36.5396 47.1092C36.5396 48.455 35.4673 49.55 34.1426 49.55C32.8235 49.55 31.7459 48.4554 31.7459 47.1092C31.7459 45.767 32.8235 44.6824 34.1426 44.6824Z" fill="#020202"/>
      </svg>
    `,
    name: 'Firebase'
  },
]