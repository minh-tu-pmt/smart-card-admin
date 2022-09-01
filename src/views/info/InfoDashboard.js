/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { collection, getDocs } from "firebase/firestore";
import { database } from '../../hook/firebase'
import { CAvatar, CButton, CCard, CCardBody, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import default_avatar from '../../assets/images/avatars/default.jpg';
import { useNavigate } from 'react-router-dom';

const HEADER = [
  { label: 'No.', header_cell: true },
  { label: 'Avatar', header_cell: false },
  { label: 'Name', header_cell: false },
  { label: 'Title', header_cell: false },
  { label: 'Action', header_cell: false }
]

function InfoDashboard(props) {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])

  const getData = async () => {
    const data = []
    const querySnapshot = await getDocs(collection(database, "users"));
    querySnapshot.forEach((doc) => {
      data.push({id:doc.id, ...doc.data()})
    });
    setUsers([...data])
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(users)
  const onEditClick = (id) => {
    navigate(`/info/${id}`)
  }

  return (
    <div>
      <CCard>
        <CCardBody>
          <h4>Info Dashboard</h4>
          <CTable>
            <CTableHead color="light">
              <CTableRow>
                {HEADER.map((item, index) => (
                  <CTableHeaderCell key={index} scope="col">{item.label}</CTableHeaderCell>
                ))}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {users.map((item, index) => (
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>
                    <CAvatar src={item.photoURL || default_avatar} size="md" />
                  </CTableDataCell>
                  <CTableDataCell>{item.displayName || ''}</CTableDataCell>
                  <CTableDataCell>{item.bio || ''}</CTableDataCell>
                  <CTableDataCell style={{width: '150px'}}>
                    <CButton color='info' size='sm' className='text-light me-2' onClick={() => {onEditClick(item.id)}}>Edit</CButton>
                    <CButton color='danger' size='sm' className='text-light'>Remove</CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

InfoDashboard.propTypes = {}

export default InfoDashboard
