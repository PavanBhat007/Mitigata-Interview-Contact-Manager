import React, { use, useState } from 'react'
import { FaChevronDown, FaHeart, FaEdit } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";

import "../App.css"

const contact = {
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@techsolutions.com",
  "phone": "+1-555-123-4567",
  "company": "Tech Solutions Inc",
  "position": "Senior Frontend Developer",
  "category": "Work",
  "isFavorite": true,
  "avatar": "https://via.placeholder.com/150/0066cc/ffffff?text=JD",
  "notes": "Met at React conference 2023. Great mentor for junior developers.",
  "createdAt": "2024-01-15T10:30:00Z",
  "lastContacted": "2024-01-18T14:20:00Z",
  "tags": ["react", "javascript", "mentor", "frontend"]
}

const Contact = () => {
  const [expanded, setExpanded] = useState(false);
  const [fav, setFav] = useState(contact.isFavorite);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='contact-card-container'>
      <div className='card-base'>
        <div className='headline'>
          {/* <img src={contact.avatar} alt="Avatar" /> */}
          <RxAvatar size={40} />
          <h3 className='name'>{contact.firstName} {contact.lastName}</h3>
        </div>
        <div className='subrow'>
          <p className='contact'><b>Email</b>: {contact.email}, <b>Phone</b>: {contact.phone}</p>
          <div className='buttons'>
            <button onClick={() => setExpanded((prev) => !prev)} className='btn btn-expand'>
              <FaChevronDown size={18} />
            </button>
            <button onClick={() => setExpanded((prev) => !prev)} className='btn'>
              <span className='favorite'>{contact.isFavorite ? <FaHeart size={18} /> : <CiHeart size={18} />}</span>
            </button>
            <button onClick={() => setExpanded((prev) => !prev)} className='btn'>
              <FaEdit size={18} />
            </button>
          </div>
        </div>
      </div>
      <p className='note'>{contact.notes}</p>
      {expanded && (
        <div className='card-expanded'>
          <p className='company'><b>Company</b>: {contact.company}, Position: {contact.position}</p>
          <p className='category'><b>Category</b>: {contact.category}</p>
          <p className='date-field'><b>Created Date</b>: {contact.createdAt.split("T")[0]} </p>
          <p className='date-field'><b>Last Contacted</b>: {contact.lastContacted.split("T")[0]} </p>
        </div>
      )}
    </div>
  )
}

export default Contact
