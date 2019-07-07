import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Picture from "./components/Picture";
import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      <Picture
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <Picture
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <Picture
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
    </Wrapper>
  );
}

export default App;
