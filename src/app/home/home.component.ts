import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

export class HomeComponent implements OnInit{


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


  ngOnInit(): void {
    this.change()
  }

  nextProject() {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.links.length;
    this.change()
  }

  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.links.length) % this.links.length;
    this.change()
  }


  change(){
    let x  : any = document.getElementById('iframe');
    x.src = this.links[this.currentProjectIndex].link;
  }

}
