import "./App.scss";
import { Container } from "semantic-ui-react";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ReposResults from "../ReposResults/ReposResults";
import Message from "../Message/Message";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);
  // const [searchResults, setSearchResults] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [newSearch, setNewSearch] = useState("react");

  const loadRepositories = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${newSearch}`
      );

      setRepositories(response.data.items);
      setTotalCount(response.data.total_count);

      console.log(response.data.total_count);
      console.log(response.data.items);
      console.log(repositories);
    } catch (error) {
      alert("Le serveur ne fonctionne plus, revenez plus tard.");
    }
  };

  useEffect(() => {
    console.log("Hello ! Le composant App est rendu");
    loadRepositories();
    console.log("Chargement repositories 1er affichage OK");
  }, []);

  return (
    <Container>
      <Header />
      <Message
        totalCount={totalCount}
        // Check if Input is Controlled
        // newSearch={newSearch}
      />

      <SearchBar
        newSearch={newSearch}
        setNewSearch={setNewSearch}
        loadRepositories={loadRepositories}
      />

      <ReposResults repositories={repositories} />
    </Container>
  );
}

export default App;
