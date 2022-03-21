import { FECTH_DATA } from "../type";
import axios from "axios";

export const fecth = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US&page=1"
    );

    dispatch({
      type: FECTH_DATA,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const singleMovie = (data) => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       `https://api.themoviedb.org/3/movie/${data.id}?api_key=9f9076158baa1526af5c4cf189980da9&language=en-US`
//     );
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };
