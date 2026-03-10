import { router } from "expo-router";
import React from "react";
import { Image, Pressable } from "react-native";

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}
const MoviePoster = ({ poster, id, smallPoster = false, className }: Props) => {
  return (
    <Pressable
      className="active:opacity-90 px-2"
      onPress={() =>
        router.push({
          pathname: "/movie/[id]",
          params: { id },
        })
      }
    >
      <Image
        source={{ uri: poster }}
        className={`shadow-lg rounded-2xl w-full h-full ${className}`}
        style={{
          width: smallPoster ? 85 : 150,
          height: smallPoster ? 130 : 250,
        }}
      />
    </Pressable>
  );
};

export default MoviePoster;
