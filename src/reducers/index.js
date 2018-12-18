import { combineReducers } from "redux";

const songReducer = () => {
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Macarena",
      duration: "2:05"
    },
    {
      title: "Barbie",
      duration: "5:05"
    },
    {
      title: "I want it that way",
      duration: "1:05"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
