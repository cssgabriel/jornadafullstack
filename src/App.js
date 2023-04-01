import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Paulo"
          description="Brecker: o goleiro"
          music="Música épica"
          url="https://privaty.com.br/wp-content/uploads/2023/03/gato-1.mp4"
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="cssGabriel"
          description="jornadadev fullstack"
          music="Música eletronica"
          src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
