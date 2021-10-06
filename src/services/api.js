import React from "react";
import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";
import qs from "qs";

export const getMovies = async (type) => {
  const url = BASE_URL;

  try {
    const params = {
      api_key: APP_KEY,
    };

    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url + `/movie/${type}`, {
      params,
    });
    let movies = response.data.results;
    console.log("korekore", response.data.results);
    return movies;
  } catch (error) {
    throw error;
  }
};
