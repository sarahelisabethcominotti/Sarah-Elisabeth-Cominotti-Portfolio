import { useContext } from "react";
import { CardsContext } from '../App';


function CardsContent() {
  const cards = useContext(CardsContext);

  return (
    <div className="work-section">
        {cards.map((card) => (
        <div key={card.id} className="card-item">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href={card.projectLink}>Project Link</a>
          <p>Tags: {card.tag}</p>
          {card.backgroundImage && (
            <img src={card.backgroundImage.url} alt={card.title} height="200px" width="200px"/>
          )}
        </div>
      ))}
    </div>
  )
}

export default CardsContent