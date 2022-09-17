import React from 'react'

import "./Wrapper.scss"

import SubWrapper from './SubWrapper/SubWrapper'

export default function Wrapper() {
  return (
    <div className='Wrapper'>
        <SubWrapper></SubWrapper>
        <SubWrapper></SubWrapper>
        <SubWrapper></SubWrapper>
    </div>
  )
}
