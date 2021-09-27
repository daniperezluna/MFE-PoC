const Help = ({ match }) => {
  return (
    <div className="help">
      <h1>Help {match.params.id}</h1>
      {match.params.id === "1" ? (
        <section>
          <h2>How to use the app</h2>
          <p>
            This app is designed to help you to buy books. To start, you need to
            login
          </p>
        </section>
      ) : (
        <section>
          <h2>How to add a book to the cart</h2>
          <p> To add a book to the cart click on 'Add to Cart' button.</p>
        </section>
      )}
    </div>
  );
};

export default Help;
