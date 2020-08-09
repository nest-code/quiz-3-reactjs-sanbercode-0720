import React, { useState, createContext } from "react";

export const DaftarMovieContext = createContext();

export const DaftarMovieProvider = props => {
  const [daftarMovie, setDaftarMovie] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <DaftarMovieContext.Provider value={[daftarMovie, setDaftarMovie]}>
      {props.children}
    </DaftarMovieContext.Provider>
  );
};