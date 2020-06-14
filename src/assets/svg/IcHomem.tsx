import React, { useCallback } from 'react'
import { SvgCss } from 'react-native-svg'

import { primaryColor } from '../../common/colors'

interface IProps {
  selected?: boolean
}

export const IcHomem: React.FC<IProps> = ({ selected }) => {
  const getCurrentColor = () => (selected ? '#fff' : primaryColor)
  const currenteColor = useCallback(getCurrentColor, [selected])()
  const svgMan = `
  <svg id="homem" xmlns="http://www.w3.org/2000/svg" width="17.086" height="42" viewBox="0 0 17.086 42">
    <path id="Caminho_213" data-name="Caminho 213" d="M703.261,1717.283v15.7a2.038,2.038,0,0,0,4.076,0v-27.041h.658v11.762a1.657,1.657,0,0,0,3.314,0v-13.055a4.013,4.013,0,0,0-4.013-4.013h-9.06a4.013,4.013,0,0,0-4.013,4.013v13.055a1.657,1.657,0,0,0,3.314,0v-11.762h.658v27.041a2.038,2.038,0,0,0,4.075,0v-15.7Z" transform="translate(-694.222 -1693.025)" fill="${currenteColor}"/>
    <path id="Caminho_214" data-name="Caminho 214" d="M803.285,1552.845a3.391,3.391,0,1,1-3.391-3.391A3.391,3.391,0,0,1,803.285,1552.845Z" transform="translate(-791.351 -1549.454)" fill=${currenteColor}/>
  </svg>`
  return <SvgCss xml={svgMan} width="100%" height="100%" />
}

IcHomem.defaultProps = {
  selected: false,
}
