import React, { useCallback } from 'react'
import { SvgCss } from 'react-native-svg'

import { primaryColor, secondaryColor } from '../../common/colors'

interface IProps {
  selected?: boolean
}

export const IcMulher: React.FC<IProps> = ({ selected }) => {
  const getCurrentColor = () => (selected ? secondaryColor : primaryColor)
  const currenteColor = useCallback(getCurrentColor, [selected])()
  const svgWoman = `
  <svg id="Mulher" xmlns="http://www.w3.org/2000/svg" width="22.095" height="42" viewBox="0 0 22.095 42">
    <path id="Caminho_211" data-name="Caminho 211" d="M2083.033,1556.236h.008a3.391,3.391,0,0,0,0-6.781h-.008a3.391,3.391,0,0,0,0,6.781Z" transform="translate(-2071.989 -1549.454)" fill=${currenteColor}/>
    <path id="Caminho_212" data-name="Caminho 212" d="M1949.588,1715.95l-3.813-12.555s-.927-3.041-3.941-3.041h-6.428c-3.014,0-3.94,3.041-3.94,3.041l-3.813,12.555a1.657,1.657,0,1,0,3.155,1.013l3.309-11.311.655.2-4.281,14.844h3.692v12.016a1.931,1.931,0,0,0,1.908,2.038,2.038,2.038,0,0,0,2.038-2.038V1720.7h.985v12.016a2.038,2.038,0,0,0,2.038,2.038,1.931,1.931,0,0,0,1.908-2.038V1720.7h3.692l-4.281-14.844.655-.2,3.309,11.311a1.657,1.657,0,1,0,3.155-1.013Z" transform="translate(-1927.572 -1692.752)" fill=${currenteColor}/>
  </svg>`

  return <SvgCss xml={svgWoman} width="100%" height="100%" />
}

IcMulher.defaultProps = {
  selected: false,
}
