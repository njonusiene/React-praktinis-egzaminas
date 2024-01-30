import { Link } from "react-router-dom";
import { GiPeaceDove } from "react-icons/gi";

const Page404 = () => {
  return (
    <div className="page404">
        <img src="https://media1.giphy.com/media/3o6vY2wgzLY2K1MKB2/giphy.webp?cid=ecf05e47xrzocy8itev2vqa40p3sorda8nalmjz6kbpofprs&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="flower" /><br />
        <h1 >Sorry , page was not found. <GiPeaceDove /> </h1><br />
        <Link to="/" className="button">Main page</Link>
    </div>
  )
}

export default Page404