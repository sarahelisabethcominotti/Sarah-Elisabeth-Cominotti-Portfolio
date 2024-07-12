import { useContext } from "react";
import { CardsContext } from '../App';


function CardsContent() {
  const cards = useContext(CardsContext);

  return (
    <div>
        {cards.map((card) => (
        <div key={card.id} className="card-item">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href={card.projectLink}>Project Link</a>
          <p>Tags: {card.tag}</p>
          {card.backgroundImage && (
            <img src={card.backgroundImage} alt={card.title} />
          )}
        </div>
      ))}
    </div>
  )
}

export default CardsContent