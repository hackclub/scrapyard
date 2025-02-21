import React from 'react'

function Loading() {
  return (
    <div className="loading">
      <style>
        {`
          .loading {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #477b78;
            flex-direction: column;
          }
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid #007bff;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 2s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

export default Loading
