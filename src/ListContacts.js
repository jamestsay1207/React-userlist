import React, { Component } from 'react'

//無狀態版本 stateless functional Componet
//使用function 的話 就不用再做this props.contacts
function  ListContacts (props){
  return (
    <ol className='contact-list'>
    {props.contacts.map((contact) => (
      <li key={contact.id} className='contact-list-item'>
        <div className='contact-avatar' style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}/>
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
        </div>
        <button className='contact-remove'>
          Remove
        </button>
      </li>
    ))}
  </ol>
  )
}




// class ListContacts extends Component {
//   //render渲染 不
//   render() {
//     return (
//       //在下面要加他裡面的樣式的方式 要在裡面使用大括號
//       //可以在外面中作css或者是載裡面做樣式

//       <ol className='contact-list'>
//         {this.props.contacts.map((contact) => (
//           <li key={contact.id} className='contact-list-item'>
//             <div className='contact-avatar' style={{
//               backgroundImage: `url(${contact.avatarURL})`
//             }}/>
//             <div className='contact-details'>
//               <p>{contact.name}</p>
//               <p>{contact.email}</p>
//             </div>
//             <button className='contact-remove'>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ol>
//     )
//   }
// }

export default ListContacts