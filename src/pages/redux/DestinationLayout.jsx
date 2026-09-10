function DestinationLayout({ destination }) {
  const handleDetails = () => {
    alert(`
Destination: ${destination.name}
Days: ${destination.days}
Fact: ${destination.fact}
    `);
  };

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex align-items-center justify-content-between">
          <h2 className="card-title fs-4 mb-0">{destination.name}</h2>

          <button className="btn btn-primary" onClick={handleDetails}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationLayout;
