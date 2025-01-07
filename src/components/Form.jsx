import { CiChat1 } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";

import Button from "./button"
import { useState } from "react";


const Form = () => {

    const [val, setval] = useState("")

    function putdata(e) {
        e.preventDefault()
        setval
    }
    return (
        <section className="form-main">
            <div className="button-group">
                <h1>{val}</h1>
                <Button
                    text="SUPPORT CHAT"
                    icon={<CiChat1 fontSize="20px" />}
                />
                <Button
                    text="VIA CALL"
                    icon={<CiPhone fontSize="20px" />}
                />
            </div>
            <Button
                isoutlinwe={true}
                text="VIA EMAIL FORM"
                icon={<MdOutlineAttachEmail fontSize="18px" />}
            />
            <form className="form-field" >
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
                    <Button onClick={putdata} text="SUBMIT" />
                </div>
            </form>
        </section>
    )
}

export default Form