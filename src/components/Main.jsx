import Form from "./Form"

const Main = () => {
    return (
        <section className="contaner">
            <div className="text">
                <h1>CONTACT US:</h1>
                <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL</p>
            </div>
            <div className="cover">
            <div className="left">
                <Form /> 
            </div>
            <div className="right">
                <img src="./public/Service 24_7-pana 1.svg" alt="" />
            </div>
            </div>
        </section>
    )
}

export default Main