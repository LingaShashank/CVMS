import React from 'react'

const ContactUs = () => {
  const users = [{ user: "Linga Shashank",
                 phone: "9866239168",
                 email: "lingashashank@gmail.com"
                },
                { user: "Imran Rasool",
                 phone: "9866238782",
                 email: "Rasool@gmail.com"
                },
                { user: "Adnan",
                 phone: "98526239168",
                 email: "Adnan@gmail.com"
                }
              ]
  return (
    <div>
      <h3>Meet US</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.user} <br />
            <strong>Phone:</strong> {user.phone} <br />
            <strong>Email:</strong> {user.email} <br />
            <br />
          </li>
        ))}
      </ul>
    </div>

  )
}

export default ContactUs