import { CiChat1 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";

import Button from "./button"
import { useState } from "react";


const Form = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [text, settext] = useState("")
    function callNO() {
        alert("call for this number +9286456478555")
    }
    function chatno() {
        alert("chat on whatsapp +928645647896")
    }
    function emailme() {
        alert("emil : HamzaJanzaib@gmail.com")
    }
    const onSubmit = (e) => {
        // console.log(e);
        e.preventDefault(); // Prevents page reload
        setname(e.target[0].value)
        setemail(e.target[1].value)
        settext(e.target[2].value)

    }

    return (
        <section className="form-main">
            <div className="button-group">
                <Button
                    onClick={chatno}
                    text="SUPPORT CHAT"
                    icon={<CiChat1 fontSize="20px" />}
                />
                <Button
                    onClick={callNO}
                    text="VIA CALL"
                    icon={<CiPhone fontSize="20px" />}
                />
            </div>
            <Button
                onClick={emailme}
                isoutlinwe={true}
                text="VIA EMAIL FORM"
                icon={<MdOutlineAttachEmail fontSize="18px" />}
            />
            <form 
            onSubmit={onSubmit}
            className="form-field" >
                <div className="box">
                    <label htmlFor="name"> Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="box">
                    <label htmlFor="name"> Email</label>
                    <input type="email" name="name" />
                </div>
                <div className="box">
                    <label id="textarea" htmlFor="name">text</label>
                    <textarea type="email" rows={8} name="name" />
                </div>
                <div className="BUTT">
                    <Button  text="SUBMIT" />
                </div>
               <h1> name: {name} <br /></h1>
                <h1>email: {email} <br /></h1>
                <p><h1>text:</h1> {text}</p>
            </form>
        </section>
    )
}

export default Form