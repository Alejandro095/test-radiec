import {useEffect, useState} from "react"

const useResponsive = (maxWidth) => {
   
    const [show, setShow] = useState(false)

    useEffect(() => {

        if(typeof maxWidth == "string") {
            maxWidth = Number(maxWidth.replace("px", ""));
        }

        const update = () => window.innerWidth >= maxWidth ? setShow(true) : setShow(false)

        if(window) {
            update()
            window.addEventListener("resize", update)
            
            return () => {
                window.removeEventListener("resize", () => {
                    console.log("Evento removido")
                })
            }
        }
    })

    return show
  };
  
  export default useResponsive;
  