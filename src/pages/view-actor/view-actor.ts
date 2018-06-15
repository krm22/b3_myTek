import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MdbProvider } from "./../../providers/mdb.provider";
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ViewActorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-actor',
  templateUrl: 'view-actor.html',
})
export class ViewActorPage {
  actorsegment = "info";
  id: any;
  name: any;
  biography: any;
  birthday: any;
  gender: any;
  pob: any;
  died: any;
  website: any;
  shows: any;
  movies: any;
  poster: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MdbProvider, public http: HttpClient) {
    this.id = this.navParams.get('actor').id;
    this.getActorDetails();
    this.loadActorMovies();
    this.loadActorShows();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewActorPage');
  }

  getActorDetails() {
    this.http.get('https://api.themoviedb.org/3/person/' + this.id +'?language=en-US&api_key=4d51e2149ffec1e3fabb84a54d724b76').subscribe((data: any) => {
      this.name = data.name;
      this.biography = data.biography;
      this.birthday = data.birthday;
      this.pob = data.place_of_birth;
      this.website = data.homepage;
      this.poster = data.profile_path;
      if(data.gender === 1) {
        this.gender = "Female";
      } else if (data.gender === 2) {
        this.gender = "Male";
      }
      if (data.deathday === null) {
        this.died = "Still Alive";
      } else {
        this.died = data.deathday;
      }
      console.log(data);
    });
  }

  loadActorMovies() {
    this.movieService.getActorMovies(this.id).then((data: any) => {
      this.movies = data.cast;
      console.log(this.movies);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  loadActorShows() {
    this.movieService.getActorShows(this.id).then((data: any) => {
      this.shows = data.cast;
      console.log(this.shows);
    }).catch(err => {
      console.error("There was an error" + err);
    });
  }

  openMovieDetails(movie) {
    this.navCtrl.push('ViewMoviePage', { film: movie });
  }

  openShowDetails(show) {
    this.navCtrl.push('ViewShowPage', { film: show });
  }

}
