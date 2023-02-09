import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { movies } from "./movies";

const Container = styled.div`
  width: 100vw;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  gap: 100px;
  height: 100vh;
  background-color: #111;
  color: #fff;
  padding: 50px 0;
  overflow-y: scroll;
`;
const Top = styled.div``;

const SearchBar = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 62vw;
  padding: 0 25px;
  font-size: 25px;
  text-align: center;
  color: #fff;
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Movies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;
  width: 62vw;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 250px;
`;

const MovieImage = styled.img`
  width: 250px;
  height: 330px;
  border-radius: 5px;
  overflow: hidden;
  object-fit: cover;
`;

const MovieTitle = styled.h1`
  margin: 0;
  padding: 0;
`;

const MovieDescription = styled.div`
  opacity: 0.5;
`;

function App() {
  const [query, setQuery] = useState("");

  const filteredMovies = movies.filter((movie) => {
    return movie.name.toLocaleLowerCase().includes(query);
  });

  return (
    <Container>
      <Top>
        <SearchBar
          placeholder="Search Movies"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </Top>

      <Movies>
        {filteredMovies.map((item) => (
          <Movie kye={item.id} {...item} />
        ))}
      </Movies>
    </Container>
  );
}

function Movie({ img, name, description }) {
  return (
    <MovieContainer>
      <MovieImage src={img} />
      <MovieTitle>{name}</MovieTitle>
      <MovieDescription>{description}</MovieDescription>
    </MovieContainer>
  );
}

export default App;
