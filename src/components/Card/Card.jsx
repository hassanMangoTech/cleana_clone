import './card.scss'

const Card = ({img, heading, para,number}) => {
  return (
    <div className='card-main'>
      <div className='card-img'>
          <img src={img} alt="" />
          <span>{number}</span>
      </div>
      <h5>{heading}</h5>
      <p>{para}</p>
    </div>
  )
}

export default Card