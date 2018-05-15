import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { MdbProvider } from "../../providers/mdb.provider";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AuthProvider } from '../../providers/auth.provider';


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  films: any;
  nowplayingfilms: any;
  upcomingfilms: any;
  topratedfilms: any;
  series: any;
  topratedseries: any;
  todayseries: any;
  fakecards: Array<any> = new Array(5);
  page = 1;
  maximumpages = 6;

  options: NativeTransitionOptions = {
    duration       :  600, // in milliseconds (ms), default 400
    iosdelay       :   50, // ms to wait for the iOS webview to update before animation kicks in, default 60
    androiddelay   :  100
  };

  draweropts: NativeTransitionOptions = {
    origin: "right", // 'left|right', open the drawer from this side of the view, default 'left'
    action: "close", // 'open|close', default 'open', note that close is not behaving nicely on Crosswalk
    duration: 300, // in milliseconds (ms), default 400
    iosdelay: 50 // ms to wait for the iOS webview to update before animation kicks in, default 60
  };

  flipopts: NativeTransitionOptions = {
    direction: "up", // 'left|right|up|down', default 'right' (Android currently only supports left and right)
    duration: 600, // in milliseconds (ms), default 400
    iosdelay: 50, // ms to wait for the iOS webview to update before animation kicks in, default 60
    androiddelay: 100,  // same as above but for Android, default 70
    winphonedelay: 150 // same as above but for Windows Phone, default 200
  };

  slideopts: NativeTransitionOptions = {
    direction: "up", // 'left|right|up|down', default 'left' (which is like 'next')
    duration: 500, // in milliseconds (ms), default 400
    slowdownfactor: 4, // overlap views (higher number is more) or no overlap (1). -1 doesn't slide at all. Default 4
    /* slidePixels: 20, // optional, works nice with slowdownfactor -1 to create a 'material design'-like effect. Default not set so it slides the entire page. */
    iosdelay: 100, // ms to wait for the iOS webview to update before animation kicks in, default 60
    androiddelay: 150, // same as above but for Android, default 70
    winphonedelay: 250, // same as above but for Windows Phone, default 200,
    fixedPixelsTop: 0, // the number of pixels of your fixed header, default 0 (iOS and Android)
    fixedPixelsBottom: 0  // the number of pixels of your fixed footer (f.i. a tab bar), default 0 (iOS and Android)
  };

  constructor
  (
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public movieService: MdbProvider,
    public toastCtrl: ToastController,
    private nativePageTransitions: NativePageTransitions,
    public authCtrl: AuthProvider
  )
  {
    this.loadMovies();
    this.loadNowPlayingMovies();
    this.loadTopRatedMovies();
    this.loadUpcomingMovies();
    this.loadtvShows();
    this.loadtopRatedtvShows();
    this.loadtodayShows();

  }

  refreshMovies(refresher) {
    this.loadMovies();
    this.loadNowPlayingMovies();
    this.loadUpcomingMovies();
    this.loadtvShows();
    this.loadtopRatedtvShows();
    this.loadtodayShows();
    this.loadTopRatedMovies();

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }


  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  logout() {
    this.authCtrl.logout().subscribe(success => {
      this.navCtrl.push('WelcomePage')
    });
  }

  loadMovies(infiniteScroll?) {
    this.movieService.getMovies(this.page).then((movies: any) => {
      this.films = movies.results;
      console.log(movies);
      console.log(movies.results);
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

  loadTopRatedMovies() {
    this.movieService.getTopRatedMovies(this.page).then((topratedfilms: any) => {
      this.topratedfilms = topratedfilms.results;
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

    if(this.page === this.maximumpages) {
      infiniteScroll.enable(false);
    }
  }

  loadNowPlayingMovies() {
    this.movieService.getCinemaMovies(this.page).then((popmovies: any) => {
      this.nowplayingfilms = popmovies.results;
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

  loadUpcomingMovies() {
    this.movieService.getUpcomingMovies(this.page).then((upcomingmovies: any) => {
      this.upcomingfilms = upcomingmovies.results;
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

  loadtvShows() {
    this.movieService.gettvShows(this.page).then((tvshows: any )=> {
      this.series = tvshows.results;
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Failed to Load TV Shows. Try Refreshing',
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true,
        cssClass: 'toaster'
      });
      toast.present();
    });
  }

  loadtopRatedtvShows() {
    this.movieService.gettopratedtvShows(this.page).then((tvshows: any) => {
      this.topratedseries = tvshows.results;
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Failed to Load TV Shows. Try Refreshing',
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true,
        cssClass: 'toaster'
      });
      toast.present();
    });
  }

  loadtodayShows() {
    this.movieService.getTodaytvShows(this.page).then((tvshows: any) => {
      this.todayseries = tvshows.results;
    }).catch(err => {
      let toast = this.toastCtrl.create({
        message: 'Failed to Load TV Shows. Try Refreshing',
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true,
        cssClass: 'toaster'
      });
      toast.present();
    });
  }

  openFeed() {
    this.nativePageTransitions.drawer(this.draweropts);
    this.navCtrl.push('FeedPage');
  }

  openSeriesDetails(serie) {
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.push('ViewShowPage', { film: serie });
  }

  openDetails(film) {
    this.nativePageTransitions.fade(this.options);
    this.navCtrl.push('ViewMoviePage', { film: film });
  }

  openAll(value) {
    if(value === "popularmovies") {

      this.nativePageTransitions.fade(this.options);
      this.navCtrl.push('PopularmoviesPage', { category: value });

    } else if (value === "topratedmovies") {

      this.nativePageTransitions.fade(this.options);
      this.navCtrl.push('TopratedmoviesPage', { category: value });

    } else if (value === "upcomingmovies") {

      this.nativePageTransitions.fade(this.options);
      this.navCtrl.push('UpcomingmoviesPage', { category: value });

    } else if (value === "onairmovies") {

      this.nativePageTransitions.fade(this.options);
      this.navCtrl.push('NowplayingmoviesPage', { category: value });

    } else if (value === "popularshows") {

      this.nativePageTransitions.flip(this.flipopts);
      this.navCtrl.push('PopularshowsPage', { category: value });

    } else if (value === "topratedshows") {

      this.nativePageTransitions.drawer(this.draweropts);
      this.navCtrl.push('TopratedshowsPage', { category: value });

    } else if (value === "todayshows") {

      this.nativePageTransitions.slide(this.slideopts);
      this.navCtrl.push('TodayshowsPage', { category: value });

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

}
