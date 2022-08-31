/* eslint-disable prettier/prettier */
import CIcon from '@coreui/icons-react'
import PropTypes from 'prop-types'
import {
  CButton,
  CCard,
  CCardBody,
  CCloseButton,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import { cilPlus } from '@coreui/icons'
import React, { useEffect, useState } from 'react'

function Info() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    console.log(contacts)
  }, [])

  const addContact = (contact) => {
    contacts.push(contact)
    setContacts([...contacts])
  }

  return (
    <div>
      <CCard className="mb-4">
        <CCardBody>
          <div className="mb-3">
            <CFormLabel htmlFor="formFileSm">Avatar</CFormLabel>
            <CFormInput type="file" size="sm" id="formFileSm" />
          </div>
          <div>
            <h3>Information</h3>
            <div className='d-flex'>
              <CButton color="primary" shape="rounded-0" size="sm" className='m-1' onClick={()=>{}}>
                Update
              </CButton>
            </div>
            <CForm>
              <CFormInput
                type="text"
                id="name"
                label="Fullname"
                placeholder="Tu PM"
                aria-describedby="exampleFormControlInputHelpInline"
              />
              <CFormInput
                type="text"
                id="job_title"
                label="Job title"
                placeholder="SW Engineer"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CForm>
            <div>
              {contacts.map((item, index) => (
                <div key={index} className="d-flex" style={{margin: '10px 0'}}>
                  <div style={{width: '10%'}}>
                    {item.type}
                  </div>
                  <div style={{width: '15%'}}>
                    {item.title}
                  </div>
                  <div style={{width: '75%'}}>
                    {item.url}
                  </div>
                  <div>
                    <CCloseButton />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Addition add={addContact} />
            </div>
          </div>
        </CCardBody>
      </CCard>
    </div>
  )
}

const OPTIONS = [
  { label: 'zalo', value: 'zalo' },
  { label: 'facebook', value: 'facebook' },
  { label: 'email', value: 'email' },
  { label: 'telegram', value: 'telegram' },
]



const Addition = ({add}) => {
  const [type, setType] = useState(OPTIONS[1].value)
  const [title, setTitle] = useState()
  const [url, setUrl] = useState()

  const onChangeType = (e) => {
    setType(e.target.value)
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const onAddClicked = () =>{
    add({type, title, url})
  }

  useEffect(()=>{
    console.log(type)
  }, [type])


  return (
    <div className="mt-4">
      <CRow>
        <CCol sm>
          <CFormSelect
            value={type}
            onChange={onChangeType}
            label="Type"
            aria-label="Default select example"
            options={OPTIONS}
          ></CFormSelect>
        </CCol>
        <CCol sm>
          <CFormInput
            type="text"
            id="title"
            label="Title"
            placeholder="etc: Zalo"
            aria-describedby="exampleFormControlInputHelpInline"
            value={title}
            onChange={onChangeTitle}
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CFormInput
            type="text"
            id="url"
            label="URL"
            placeholder="etc: https://domain.com"
            aria-describedby="exampleFormControlInputHelpInline"
            value={url}
            onChange={onChangeUrl}
          />
        </CCol>
      </CRow>
      <div className='mt-2'>
        <CButton color="primary" shape="rounded-0" size="sm" className='m-1' onClick={onAddClicked}>
          Add
        </CButton>
        <CButton color="secondary" shape="rounded-0" size="sm">
          Cancel
        </CButton>
      </div>
    </div>
  )
}

Addition.propTypes = {
  add: PropTypes.func
}

export default Info
