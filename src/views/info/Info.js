/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types'
import {
  CAvatar,
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
import CIcon from '@coreui/icons-react';
import { cilPen, cilX } from '@coreui/icons'
import React, { useEffect, useRef, useState } from 'react'

import { doc, getDoc, setDoc} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { database } from '../../hook/firebase'
import { useParams } from 'react-router-dom'
import default_avatar from '../../assets/images/avatars/default.jpg';
import email_icon from '../../assets/icon/email_icon.png';
import fb_icon from '../../assets/icon/fb_icon.png';
import zalo_icon from '../../assets/icon/logo_zalo.png';
import telegram_icon from '../../assets/icon/telegram_icon.png';
import phone_icon from '../../assets/icon/phone_icon.jpg'
import contact_icon from '../../assets/icon/contact_icon.png'

const OPTIONS = [
  { label: 'zalo', value: 'zalo' },
  { label: 'facebook', value: 'facebook' },
  { label: 'email', value: 'email' },
  { label: 'telegram', value: 'telegram' },
  { label: 'phone', value: 'phone' },
  { label: 'other', value: 'other' },
]

const getIcon = (type) => {
  switch (type) {
    case 'zalo':
      return zalo_icon
    case 'facebook':
      return fb_icon
    case 'email':
      return email_icon
    case 'telegram':
      return telegram_icon
    case 'phone':
      return phone_icon
    default:
      return contact_icon
  }
}

function makeid(length=32) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random()*charactersLength));
 }
 return result;
}

function Info() {
  const params = useParams()
  const [image, setImage] = useState()
  const [contacts, setContacts] = useState()
  const fileRef = useRef()

  const onChangeName = (e) => {
    const name = e.target.value;
    setContacts({ ...contacts, displayName: name })
  }

  const onChangeJobTitle = (e) => {
    const title = e.target.value;
    setContacts({ ...contacts, bio: title })
  }

  const onChangeImage = (e) => {
    setImage(e.target.files[0])
    e.target.value = null
  }

  const onUpdateClick = async() => {
    console.log(contacts)
    const docRef = await setDoc(doc(database, "users", params.id), contacts)
    console.log(docRef)
  }

  const getData = async (id) => {
    const docRef = doc(database, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setContacts(docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getData(params.id)
  }, [])

  const addContact = (contact) => {
    const tmp = {...contacts}
    if(tmp.links){
      tmp.links.push(contact)
    }
    else{
      tmp.links = [contact]
    }
    setContacts(tmp)
  }

  const onClearClick = () => {
    const tmp = {...contacts}
    tmp.links=[]
    setContacts(tmp)
  }

  const uploadFile = () => {
    const imgID = makeid();
    const storage = getStorage();
    const storageRef = ref(storage, imgID);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
      getDownloadURL(ref(storage, imgID)).then((url) => {
        setContacts({...contacts, photoURL: url})
        setImage(null)
      })
      .catch((error) => {
        // Handle any errors
        console.log(error)
      });
    });
  }

  return (
    <div>
      <CCard className="mb-4">
        <CCardBody>
          <h3>Information</h3>
          {contacts ?
            <>
              <div className='d-flex'>
                <CButton color="primary" shape="rounded-0" size="sm" className='m-1' onClick={onUpdateClick}>
                  Update
                </CButton>
              </div>
              <div className="mb-3">
                <div>
                  <CFormLabel htmlFor="formFileSm">Avatar</CFormLabel>
                </div>
                <div className='d-inline-block' style={{ position: 'relative' }}>
                  <CAvatar src={image ? URL.createObjectURL(image) : (contacts.photoURL || default_avatar)} style={{ width: '10rem', height: '10rem' }} />
                  <div className='d-flex p-2' style={{ position: 'absolute', top: 0, right: 0, cursor: 'pointer' }} onClick={() => { fileRef.current.click() }}>
                    <CIcon icon={cilPen}></CIcon>
                  </div>
                </div>
                <CFormInput ref={fileRef} type="file"
                  size="sm" id="formFileSm" onChange={onChangeImage} accept="image/*" hidden />
                {image && <CButton color="primary" shape="rounded-0" size="sm" className='m-1' onClick={uploadFile}>
                  Upload
                </CButton>}
              </div>

              <div>
                <CForm>
                  <CFormInput
                    type="text"
                    id="name"
                    label="Fullname"
                    placeholder="Tu PM"
                    value={contacts.displayName || ''}
                    onChange={onChangeName}
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                  <CFormInput
                    type="text"
                    id="job_title"
                    label="Job title"
                    placeholder="SW Engineer"
                    value={contacts.bio || ''}
                    onChange={onChangeJobTitle}
                    aria-describedby="exampleFormControlInputHelpInline"
                  />
                </CForm>
                <div>
                  <div className='mt-4' style={{fontWeight: 700, fontSize: 20}}>List contacts</div>
                  {contacts.links && contacts.links.map((item, index) => (
                    <div key={index} className="d-flex p-2 align-items-center" style={{ margin: '10px 0', border: '1px solid rgba(0,0,0,0.7)' }}>
                      <div style={{ width: '10%' }}>
                        <CAvatar src={getIcon(item.type)} size='md'></CAvatar>
                      </div>
                      <div style={{ width: '15%' }}>
                        {item.title}
                      </div>
                      <div style={{ width: '75%' }}>
                        {item.url}
                      </div>
                      <div>
                        <CCloseButton />
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <Addition add={addContact} clear = {onClearClick}/>
                </div>
              </div>
            </> : null}
        </CCardBody>
      </CCard>
    </div>
  )
}

const Addition = ({ add, clear }) => {
  const [type, setType] = useState(OPTIONS[1].value)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const onChangeType = (e) => {
    setType(e.target.value)
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeUrl = (e) => {
    setUrl(e.target.value)
  }

  const onAddClicked = () => {
    add({ type, title, url })
  }

  useEffect(() => {
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
        <CButton color="primary" shape="rounded-0" size="sm" className='me-1' onClick={onAddClicked}>
          Add
        </CButton>
        <CButton color="danger" shape="rounded-0" size="sm" className='me-1' onClick={clear}>
          Clear
        </CButton>
        <CButton color="secondary" shape="rounded-0" size="sm">
          Cancel
        </CButton>
        
      </div>
    </div>
  )
}

Addition.propTypes = {
  add: PropTypes.func,
  clear: PropTypes.func
}

export default Info
