import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import { SearchBar } from "../../components/searchBar";
import { api } from "../../services/api";

interface moviesProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
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
      <View style={style.header}>
        <SearchBar />
      </View>
      <View style={style.content}>
      <Text style={style.text}>Filmes Populares</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => Alert.alert(item.overview)}>
            <Image
              style={style.posterPath}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
              />
          </TouchableOpacity>
        )}
        />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242A32",
    alignItems: "center",
  },
  content:{
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  header: {
    marginTop: 50,
  },

  text: {
    color: "#fff",
    fontSize: 22,
    textAlign: "left",
    marginLeft: 0,
  },

  posterPath: {
    width: 144,
    height: 210,
    borderRadius: 20,
    margin: 5,
  },
});
