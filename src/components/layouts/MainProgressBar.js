import React from 'react'
import ProgressBar from 'react-animated-progress-bar'
//  const myRef = document.querySelector('.scrollable-div')

const MainProgressBar = ({
  percentage,
  trackPathColor,
  hollowBackgroundColor,
  fontColor,
  children,
}) => {
  return (
    <ProgressBar
      width='250'
      height='10px'
      fontColor={fontColor}
      trackWidth='15'
      percentage={percentage}
      trackPathColor={trackPathColor}
      trackBorderColor='black'
      hollowBackgroundColor={hollowBackgroundColor}
      defColor={{
        fair: 'orangered',
        good: '#29f5bb',
        excellent: '#08AF80',
        poor: 'red',
      }}
      //  scrollArea={myAppRef}
    />
  )
}

export default MainProgressBar
