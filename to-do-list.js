<script>
function List({ data }) {
        return (
          <div>
            <ul>
              {data.map((item, index) => {
                return <li>{item}</li>; 
              })}
            </ul>
          </div>
        );
      }

      function App() {
        const cars = ["toyota", "honda", "tesla"];
        return (
          <div>
            <List data={cars} />
          </div>
        );
      }

      const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);
      root.render(<App />);
    </script>
