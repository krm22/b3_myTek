import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MdbProvider } from '../../providers/mdb.provider';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ViewShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-show',
  templateUrl: 'view-show.html',
})
export class ViewShowPage {

  movieinfosegment = "info";
  overview: any;
  website: any;
  title: any;
  genres: any;
  poster: any;
  backdrop: any;
  productioncompanies: any;
  networks: any;
  numberofseasons: any;
  numberofepisodes: any;
  seasons: any;
  episodes: any;
  firstairdate: any;
  lastairdate: any;
  runtime: any;
  status: any;
  createdby: any;
  id: any;
  cast: any;
  similarshows: any;
  type = "tv";
  information: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public movieService: MdbProvider) {
    this.id = this.navParams.get('film').id;
    this.loadFilmDetails();
    this.loadCast();
    this.loadSimilarShows();
  }

  refreshDetails(refresher) {
    this.loadFilmDetails();
    this.loadCast();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewShowPage');
  }

  loadFilmDetails() {
    this.http.get('https://api.themoviedb.org/3/tv/' + this.id + '?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76').subscribe((data: any) => {
      this.overview = data.overview;
      this.website = data.homepage;
      this.genres = data.genres;
      this.poster = "https://image.tmdb.org/t/p/original" + data.poster_path;
      this.backdrop = data.backdrop_path;
      this.productioncompanies = data.production_companies;
      this.firstairdate = "First Air Date " + data.first_air_date;
      this.runtime = data.episode_run_time + " Minutes";
      this.status = data.status;
      this.title = data.name;
      this.lastairdate = "First Air Date " + data.last_air_date;
      this.networks = data.networks;
      this.numberofepisodes = data.number_of_episodes;
      this.numberofseasons = data.number_of_seasons;
      this.seasons = data.seasons;
      this.createdby = data.created_by;
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

  loadSimilarShows() {
    this.movieService.getSimilar(this.type, this.id).then((similar: any) => {
      this.similarshows = similar.results;
      console.log(this.similarshows);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  toggleSection(season,i) {
    this.movieService.getEpisodes(season.season_number, this.id).then((episode: any) => {
      this.episodes = episode.episodes;
      console.log(this.episodes);
    }).catch(err => {
      console.error("There was an error" + err);
    });
    this.seasons[i].open = !this.seasons[i].open;
  }

  toggleItem(i, j) {
    this.episodes[j].open = !this.episodes[j].open;
  }

  openDetails(serie) {
    this.navCtrl.push('ViewShowPage', { film: serie });
  }

  openActor(actor) {
    this.navCtrl.push('ViewActorPage', { actor: actor });
  }

}
