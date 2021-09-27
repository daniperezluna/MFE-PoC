import React from 'react'; // If react is not imported in each component, browser throws: "ReferenceError: React is not defined"

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Help Section</h1>
    </div>
  );
}

export default Home;
