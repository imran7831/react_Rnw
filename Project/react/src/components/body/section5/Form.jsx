import React, { useState } from 'react'

const Form = () => {
const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <div>
          <div onSubmit={handleSubmit}>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 0,
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              style={{
                flex: '1 1 300px',
                padding: '1rem 1.25rem',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '4px 0 0 4px',
                outline: 'none',
                minWidth: '200px'
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: '500',
                backgroundColor: '#FDD835',
                border: 'none',
                color: '#000',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FBC02D'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FDD835'}
            >
              Get My Discount
            </button>
          </div>
        </div>
    </div>
  )
}

export default Form