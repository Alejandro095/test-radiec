import { createContext, useContext, useEffect, useState } from 'react';
import io from "socket.io-client"

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {

    const [state, setState] = useState({})

    useEffect(() => {
        const socket = io("https://micro-radiec.herokuapp.com/");
        socket.on("void", setState);
    }, [])

    return <SocketContext.Provider value={state}> {children} </SocketContext.Provider>
};

const useSocket = () => useContext(SocketContext)

export {SocketContextProvider, useSocket};
