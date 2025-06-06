import React from "react";

function CustomLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="https://cdn-icons-png.flaticon.com/512/3659/3659784.png" 
        alt="Music Logo" 
        style={{ width: '32px', height: '32px' }}
      />
      <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>.04Musical</h3>
    </div>
  );
}

export const components = {
  Logo: CustomLogo,
};