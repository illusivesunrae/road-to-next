const Heading = ({ title, description, children }) => {
  const myStyling = {
    padding: '1rem',
    fontWeight: 'bold',
  };

  return (
    <div>
      <div style={myStyling}>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
      {children}
    </div>
  );
};

export { Heading };
