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

  tecnologias : any[] = [
    { nome: 'JavaScript', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { nome: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { nome: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' },
    { nome: 'Typescript', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1200px-Typescript.svg.png' },
    { nome: 'NestJS', img: 'https://i.namu.wiki/i/X7RPRZJiL_bDk-b5yfaeCqEaINp3iwm7ngVhzN9LDg4hNjz0Bs3QTo7pgbCfGW3xp_sQZxMGUfnxBAXGNFwGKw.svg' },
    { nome: 'Next.js', img: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png' },
    { nome: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { nome: 'Solidity', img: 'https://solidity-portuguese.readthedocs.io/pt/latest/_images/logo.svg' },
    { nome: 'SQL', img: 'https://w7.pngwing.com/pngs/747/798/png-transparent-mysql-logo-mysql-database-web-development-computer-software-dolphin-marine-mammal-animals-text-thumbnail.png' },
    { nome: 'MongoDB', img: 'https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png' },
    { nome: 'CSS', img: 'https://codigosimples.net/wp-content/uploads/2016/03/css3.jpg' },
    { nome: 'Tailwind', img: 'https://codekitapp.com/images/help/free-tailwind-icon@2x.png' },
    { nome: 'HTML', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s' },
    { nome: 'Bootstrap', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' }
  ];


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
    this.loadProject();
  }

  prevProject() {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.links.length) % this.links.length;
    this.loadProject();
  }

  loadProject() {
    document.getElementById("tituloProjeto")!.textContent = this.links[this.currentProjectIndex].title;
    (document.getElementById("iframeProjeto") as any).src = this.links[this.currentProjectIndex].link;
    (document.getElementById("linkProjeto") as any).href = this.links[this.currentProjectIndex].link;
    (document.getElementById("githubProjeto") as any).href = this.links[this.currentProjectIndex].github;
  }


  change(){
    let x  : any = document.getElementById('iframe');
    x.src = this.links[this.currentProjectIndex].link;
  }

  openModal() {
    document.getElementById("modalProjetos")?.classList.remove("hidden");
    this.loadProject();
  }

  closeModal() {
    document.getElementById("modalProjetos")?.classList.add("hidden");
  }

}
