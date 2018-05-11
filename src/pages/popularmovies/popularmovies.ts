import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MdbProvider } from '../../providers/mdb.provider';

/**
 * Generated class for the PopularmoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "PopularmoviesPage"
})
@Component({
  selector: 'page-popularmovies',
  templateUrl: 'popularmovies.html',
})
export class PopularmoviesPage {

  films = [];
  page = 1;
  maximumpages = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams, public movieService: MdbProvider, public toastCtrl: ToastController) {
    this.loadMovies();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularmoviesPage');
  }

  loadMovies(infiniteScroll?) {
    this.movieService.getMovies(this.page).then(movies => {
      this.films = this.films.concat(movies['results']);

      console.log(this.films);
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Failed to Load Movies. Try Refreshing',
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true,
        cssClass: 'toaster'
      });
      toast.present();
    });
  }

  loadMoreMovies(infiniteScroll) {
    this.page++;
    this.loadMovies(infiniteScroll);

    if (this.page === this.maximumpages) {
      infiniteScroll.enable(false);
    }
  }

}
