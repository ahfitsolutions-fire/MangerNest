export default function ImageSection({ image, title, text }) {
  return (
    <section className="image-section">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  )
}
