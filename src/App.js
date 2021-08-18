import './App.css';
import banner from './ComingSoonBanner.svg';
import nameDate from './JandMwithDate.svg';
import styled from 'styled-components';

const NameDate = styled.img `
@media(max-width: 500px) {
  width: 90%;
}
  width: 69%;
  padding: 6% 0% 3% 2%;`

const ComingSoon = styled.img `
@media (max-width: 500px) {
  max-width: 75%;
}
  height: 64%;
  padding: 0% 3% 0% 0%;
`

function App() {
  return (
    <div className="App">
      <NameDate src={nameDate} alt="Julia And Marlies, June 25, 2022" />
      <ComingSoon src={banner} alt="Celebration information coming soon!" />
    </div>
  );
}

export default App;
