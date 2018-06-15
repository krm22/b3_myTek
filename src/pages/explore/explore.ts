
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MdbProvider } from "./../../providers/mdb.provider";


@IonicPage({
  name: 'ExplorePage'
})
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  resultssegment = "all";
  allresults: any;
  movies: any;
  shows: any;
  people: any;
  query: any;
  page = "1" ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MdbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorePage');
  }

  getResults(ev: any) {
    this.query =  ev.target.value;

    this.search();
  }

  search() {
    this.movieService.searchAll(this.query, this.page).then((data: any) => {
      this.allresults = data.results;
      console.log(this.allresults);
    }).catch(err => {
      console.error("There was an error" + err);
    });

    this.movieService.searchMovies(this.query, this.page).then((data: any) => {
      this.movies = data.results;
      console.log(this.movies);
    }).catch(err => {
      console.error("There was an error" + err);
    });

    this.movieService.searchShows(this.query, this.page).then((data: any) => {
      this.shows = data.results;
      console.log(this.shows);
    }).catch(err => {
      console.error("There was an error" + err);
    });

    this.movieService.searchPeople(this.query, this.page).then((data: any) => {
      this.people = data.results;
      console.log(this.people);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  openResult(result) {
    if(result.media_type === "movie") {
      this.navCtrl.push('ViewMoviePage', { film: result });
    } else if (result.media_type === "tv") {
      this.navCtrl.push('ViewShowPage', { film: result });
    } else if (result.media_type === "person") {
      this.navCtrl.push('ViewActorPage', { actor: result });
    }
  }

  openMovie(movie) {
    this.navCtrl.push('ViewMoviePage', { film: movie });
  }

  openShow(show) {
    this.navCtrl.push('ViewShowPage', { film: show });
  }

  openActor(actor) {
    this.navCtrl.push('ViewActorPage', { actor: actor });
  }

}
