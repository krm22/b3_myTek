import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MdbProvider } from "../../providers/mdb.provider";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ViewMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-movie',
  templateUrl: 'view-movie.html',
})
export class ViewMoviePage {

  movieinfosegment = "info";
  description: any;
  website: any;
  budget: any;
  title: any;
  genres: any;
  poster: any;
  backdrop: any;
  productioncompanies: any;
  releasedate: any;
  runtime: any;
  status: any;
  tagline: any;
  id: any;
  cast: any;
  similarmovies: any;
  type = "movie";


  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MdbProvider, public http: HttpClient) {

    this.id = this.navParams.get('film').id;
    this.loadFilmDetails();
    this.loadCast();
    this.loadSimilarMovies();
  }

  refreshDetails(refresher) {
    this.loadFilmDetails();
    this.loadCast();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMoviePage');
  }

  ionViewDidLeave() {
    this.id = '';
  }

  loadFilmDetails() {
    this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76').subscribe((data: any) => {
      this.description = data.overview;
      this.website = data.homepage;
      this.budget = "budget " + data.budget;
      this.genres = data.genres;
      this.poster = "https://image.tmdb.org/t/p/original"+data.poster_path;
      this.backdrop = data.backdrop_path;
      this.productioncompanies = data.production_companies;
      this.releasedate = "Release Date " + data.release_date;
      this.runtime = data.runtime + " Minutes";
      this.status = data.status;
      this.tagline = data.tagline;
      this.title = data.original_title;
      //this.id = data.id;
      console.log(data);
    });
  }


  loadCast() {
    this.movieService.getFilmCast(this.type,this.id).then((filmcast: any) => {
      this.cast = filmcast.cast;
      console.log(this.cast);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  loadSimilarMovies() {
    this.movieService.getSimilar(this.type, this.id).then((similar: any) => {
      this.similarmovies = similar.results;
      console.log(this.similarmovies);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  openDetails(movie) {
    this.navCtrl.push('ViewMoviePage', { film: movie });
  }

  openActor(actor) {
    this.navCtrl.push('ViewActorPage', { actor: actor});
  }

  // addMovie(){
  //   this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76').subscribe((data: any) => {
  //     this.description = data.overview;
  //     this.genres = data.genres;
  //     this.poster = "https://image.tmdb.org/t/p/original"+ data.poster_path;
  //     this.releasedate =  data.release_date;
  //     this.title = data.original_title;
  //     console.log(data);
  //   });
  // }




}
