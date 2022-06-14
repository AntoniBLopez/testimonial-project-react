import './App.css';
import Testimonials from './Components/Testimonials';

function App() {
  return (
    <div className="App">
      <main className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonials
          image='Shawn'
          name='Shawn Wang'
          country='Singapore'
          position='Software Engineer'
          business='Amazon'
          text="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. "
          boldFont={<strong>freeCodeCamp changed my life.</strong>}
          finalText=''
        />
        <Testimonials
          image='Sarah'
          name='Sarah Chima'
          country='Nigeria'
          position='Software Engineer'
          business='ChatDesk'
          text=''
          boldFont={<strong>freeCodeCamp was the gateway to my career </strong>}
          finalText='as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
        />
        <Testimonials
          image='Emma'
          name='Emma Bostian'
          country='Sweden'
          position='Software Engineer'
          business='Spotify'
          text="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on "
          boldFont={<strong>freeCodeCamp gave me the skills </strong>}
          finalText='and confidence I needed to land my dream job as a software engineer at Spotify.'
        />
      </main>
    </div>
  );
}

export default App;
