import React, { createContext, useState } from 'react'

const ModeContext = createContext();
const ModeDispatch = createContext();

const Context = (props) => {

    const [mode, setMode] = useState(false);

    return (
        <>
            <ModeContext.Provider value={mode}>
                <ModeDispatch.Provider value={setMode}>
                    {props.children}
                </ModeDispatch.Provider>
            </ModeContext.Provider>
        </>
    )
}

export default Context

export { ModeContext, ModeDispatch }