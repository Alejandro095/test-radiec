import { createContext, useContext, useEffect, useState } from 'react';
import io from "socket.io-client";

const ENDPOINT = "https://micro-radiec.herokuapp.com/"

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {

    const [state, setState] = useState({})

    useEffect(() => {
       
        const run = () => {
            const socket = io(ENDPOINT)

            // socket.on("void", (msg) => {
            //     console.log("::SOCKET ", msg);
            //     if(msg) {
            //         setState(msg)
            //     }
            // })

             fetch("https://cors-anywhere.herokuapp.com/http://micro-radiec.herokuapp.com/api/current-song").then(raw => raw.json()).then((song) => {
                console.log("::FETCH ", song.track);
                
                if(song) {
                    setState(song.track)
                }
            });

        }
       
        run()

    }, [])

    return <SocketContext.Provider value={state}> {children} </SocketContext.Provider>
};

const useSocket = () => useContext(SocketContext)

export {SocketContextProvider, useSocket };
