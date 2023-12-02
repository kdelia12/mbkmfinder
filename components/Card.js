function Card(props) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{props.name}</h2>
          <p className="text-gray-600 text-sm">Activity: {props.activity_name}</p>
          <p className="text-gray-600 text-sm">Quota: {props.total}</p>
          <p className="text-gray-600 text-sm">Location: {props.location}</p>
          <p className="text-gray-600 text-sm">Mitra: {props.mitra_name}</p>
          <p className="text-gray-600 text-sm"><a href={props.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Jump to page</a></p>
        </div>
      </div>
    );
  }
  
  export default Card;