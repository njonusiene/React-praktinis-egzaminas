import { GiSpotedFlower } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="content">
      <div className="cards-container">
        <article className="card">
          <img src="https://plus.unsplash.com/premium_photo-1661762164216-adb87dea8399?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="garden"  />
          <h2>Quality</h2> 
          <p>Our bouquets are always made by the best quality fresh flowers, so that it would delight the recipient for longer.</p>
          <span><GiSpotedFlower /></span>
        </article>

        <article className="card">
          <img src="https://plus.unsplash.com/premium_photo-1671974490018-813bcb0d6635?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
          <h2>Fresh</h2>
          <p>Every Interflora bouquet is hand-made in a local flower shop and delivered by the florist.</p> 
          <span><GiSpotedFlower /></span>
        </article>

        <article className="card">
          <img src="https://images.unsplash.com/photo-1587743368367-67ec3e7377f2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
          <h2>Smile</h2> 
          <p>Flower store has been offering high quality flower and gift delivery service more than 30 years. We love to see Your smile.</p>
          <span><GiSpotedFlower /></span>
        </article>
      </div>
      <div className="sectionbutton">
        <Link to='/Flowers'><GiSpotedFlower />Choose Your Flowers<GiSpotedFlower /></Link>
      </div>
    </section>
  )
}

export default HomeSection
