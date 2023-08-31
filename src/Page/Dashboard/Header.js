import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Management Software App</h1>
            <h4>Bano Qabil</h4>
            <h5>Apni Dunya Aap Paida Kr</h5>
            <h6>Credit By Sir Abdullah MotiWala</h6>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
                
            </div>
        </header>
    )
}

export default Header