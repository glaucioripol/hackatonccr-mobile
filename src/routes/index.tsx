import React from 'react'
import { useSelector } from 'react-redux'

import { authState } from '../redux/auth/selectors'

import { AuthenticatedNavigate } from './AuthenticatedNavigate'
import { NotAuthenticatedNavigate } from './NotAuthenticatedNavigate'

export const Routes: React.FC = () => {
  const { authToken } = useSelector(authState)
  // return <>{authToken ? <AuthenticatedNavigate /> : <NotAuthenticatedNavigate />}</>
  return <>{!'' ? <AuthenticatedNavigate /> : <NotAuthenticatedNavigate />}</>
}
