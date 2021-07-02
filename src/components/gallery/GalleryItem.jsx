export default function GalleryItem({ data }) {
  return (
    <div className="box-item">
      <img className="box-img" src={data.uri} alt={data.name} />
      <div className="box-img-text">
        <h1>{data.size}</h1>
      </div>
    </div>
  );
}
