import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

/*
  Generated class for the MdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MdbProvider {

  movies: any;
  nowplayingmovies: any;
  upcomingmovies: any;
  topratedfilms: any;
  tvshows: any;
  topratedtvshows: any;
  showingtodaytvshows: any;
  film: any;
  filmcast: any;
  page = 0;
  maximumPages = 4;
  similar: any;
  episodes: any;
  test: any;
  month: any;

  constructor(public http: HttpClient) {
  }

  getMovies(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/discover/movie?page=' + page + '&include_video=true&include_adult=true&sort_by=popularity.desc&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.movies = data;
            resolve(this.movies);
          }, (err) => {
            console.log('Error fetching',err);
          });
      });

  }

  getCinemaMovies(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/movie/now_playing?page=' + page + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.nowplayingmovies = data;
            resolve(this.nowplayingmovies);
          });
      });

  }

  getUpcomingMovies(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/movie/upcoming?page=' + page + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.upcomingmovies = data;
            resolve(this.upcomingmovies);
          });
      });

  }

  getTopRatedMovies(page) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/movie/top_rated?page=' + page + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          this.topratedfilms = data;
          resolve(this.topratedfilms);
        });
    });

  }

  gettvShows(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/discover/tv?include_null_first_air_dates=true&page='+page+'&sort_by=popularity.desc&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.tvshows = data;
            resolve(this.tvshows);
          });
      });

  }

  gettopratedtvShows(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/tv/top_rated?page='+page+'&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.topratedtvshows = data;
            resolve(this.topratedtvshows);
          });
      });

  }

  getTodaytvShows(page) {

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/tv/airing_today?page='+page+'&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.showingtodaytvshows = data;
            resolve(this.showingtodaytvshows);
          });
      });

  }

  getFilmDetails(id) {
    let filmid = id;

      return new Promise(resolve => {
        this.http.get('https://api.themoviedb.org/3/movie/' + filmid + '?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
          .subscribe(data => {
            this.film = data;
            //console.log(data);
            resolve(this.film);
          });

      });

  }

  getFilmCast(type, id) {
    let filmid = id;

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/' + type + '/' + filmid + '/credits?api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          this.filmcast = data;
          resolve(this.filmcast);
        });

    });

  }

  getSimilar(type, id) {
    let filmid = id;

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/' + type + '/' + filmid + '/similar?api_key=4d51e2149ffec1e3fabb84a54d724b76&language=en-US&page=1')
        .subscribe(data => {
          this.similar = data;
          //console.log(data);
          resolve(this.similar);
        });

    });

  }

  getEpisodes(ssn, id) {
    let filmid = id;

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/tv/' + filmid + '/season/' + ssn + '?api_key=4d51e2149ffec1e3fabb84a54d724b76&language=en-US')
        .subscribe(data => {
          this.episodes = data;
          //console.log(data);
          resolve(this.episodes);
        });

    });

  }

  searchAll(query, page) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/search/multi?include_adult=true&page='+page+'&query='+query+'&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  searchMovies(query, page) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/search/movie?include_adult=true&page=' + page + '&query=' + query + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  searchShows(query, page) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/search/tv?page=' + page + '&query=' + query + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  searchPeople(query, page) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/search/person?include_adult=true&page=' + page + '&query=' + query + '&language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  getActorMovies(id) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/person/'+id+'/movie_credits?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }

  getActorShows(id) {

    return new Promise(resolve => {
      this.http.get('https://api.themoviedb.org/3/person/' + id + '/tv_credits?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76')
        .subscribe(data => {
          resolve(data);
        });
    });

  }


}
