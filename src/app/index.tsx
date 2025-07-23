import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Pressable, Image, TextInput } from "react-native";
import { api } from "../services/api";
import { SearchBar } from "../components/searchBar";

interface moviesProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
export default function Index() {
  const loadPopularMovies = async () => {
    try {
      const response = await api.get("/movie/popular");
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    loadPopularMovies();
  }, []);
  
  const [movies, setMovies] = useState<moviesProps[]>([]);

  return (
    <View style={style.container}>
      <View style={{marginTop: 50, marginBottom: 20}}>
      <SearchBar />
      </View>
      <FlatList 
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => console.log(item.overview)}>
            <Image
              style={style.posterPath}
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              />
          </Pressable>
        )}
      />
      <Text style={style.text}>Total de filmes: {movies.length}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242A32",
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },

  posterPath:{
    width: 144,
    height: 210,
    borderRadius: 10,
    margin: 5,
  }
});
