import React from "react";
import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";
import qs from "qs";
const url = BASE_URL;

export const getMovies = async (type) => {
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
    return movies;
  } catch (error) {
    throw error;
  }
};

export const getMovie = async (id, type) => {
  try {
    const params = {
      api_key: APP_KEY,
    };

    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url + `/${type}/${id}`, {
      params,
    });
    let movie = response.data;
    return movie;
  } catch (error) {
    throw error;
  }
};

export const searchContents = async (type, text) => {
  try {
    const params = {
      api_key: APP_KEY,
    };

    const searchAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await searchAxios.get(
      url + `/search/${type}?&query=${text}`,
      {
        params,
      }
    );
    let serchResults = response.data.results;
    return serchResults;
  } catch (error) {
    throw error;
  }
};

export const getTvshows = async (type) => {
  try {
    const params = {
      api_key: APP_KEY,
    };

    const searchAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await searchAxios.get(url + `/tv/${type}`, {
      params,
    });
    let tvShows = response.data.results;
    return tvShows;
  } catch (error) {
    throw error;
  }
};
