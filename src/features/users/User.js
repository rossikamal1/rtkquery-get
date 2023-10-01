import React from 'react'
import { useGetUsersQuery } from '../api/apiSlice'

const UserCard = ({ content }) => {
  return (
    <div className="col-lg-12 mb-3 " key={content.id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{content.firstname}</h5>
          <p className="card-text">{content.lastname}</p>
          <p className="card-text">{content.email}</p>
          
        </div>
      </div>
    </div>
  )
}

function User() {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery()

  let userContent

  if (isLoading) {
    userContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    userContent = users.map((item) => {
      return <UserCard content={item} key={item.id} />
    })
  } else if (isError) {
    userContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }

  return <div>{userContent}</div>
}

export default User
