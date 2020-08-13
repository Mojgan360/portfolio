import React from 'react'
import ProgressBar from 'react-animated-progress-bar'
//  const myRef = document.querySelector('.scrollable-div')

const MainProgressBar = ({
  percentage,
  trackPathColor,
  hollowBackgroundColor,
  fontColor,
}) => {
  return (
    <div>
      {/* <ProgressBar
        width='400px'
        height='10px'
        rect
        fontColor='gray'
        percentage='70'
        rectPadding='1px'
        rectBorderRadius='20px'
        trackPathColor='transparent'
        bgColor='#333333'
        trackBorderColor='grey'
      /> */}
      <ProgressBar
        width='300px'
        height='10px'
        fontColor={fontColor}
        trackWidth='10'
        percentage={percentage}
        trackPathColor={trackPathColor}
        trackBorderColor='black'
        hollowBackgroundColor={hollowBackgroundColor}
        defColor={{
          fair: 'orangered',
          good: 'yellow',
          excellent: 'green',
          poor: 'red',
        }}
        //  scrollArea={myAppRef}
      />
    </div>
  )
}

export default MainProgressBar
