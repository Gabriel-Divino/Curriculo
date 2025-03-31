import { Component } from '@angular/core';


interface ProjectInterface{
  link : string,
  title : string,
  github : string,
  describe : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})

export class HomeComponent {

  links : ProjectInterface[] = [
    {
      link : "https://bets-two-nu.vercel.app/",
      title : "Apostas Esportivas",
      github : "https://github.com/Gabriel-Divino/bets-public",
      describe:""
    },
    {
      link : "https://cassino-299.pages.dev/",
      title : "Cassino Online",
      github : "https://github.com/Gabriel-Divino/Cassino",
      describe:""
    },
    {
      link : "https://shop-delta-dusky.vercel.app/",
      title : "E-commerce",
      github : "https://github.com/Gabriel-Divino/Shop-Portfolio",
      describe:""
    },
    {
      link : "https://rede-social-front-end-sepia.vercel.app/",
      title : "Rede Social",
      github : "https://github.com/Gabriel-Divino/social-network-public",
      describe:""
    },

  ]

  currentProjectIndex = 0;

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.links.length;
  }

  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.links.length) % this.links.length;
  }

}
