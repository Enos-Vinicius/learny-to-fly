import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemOpenMenu = [
    {title: "Menu", src: "../../../assets/icons/menu.svg", alt: "Ícone Menu"},
  ]
  itemsMenuCenter = [
    {title: "Página Inicial", router: "/", src: "../../../assets/icons/home.svg", alt: "Ícone de Home"},
    {title: "Explorar",       router: "explore", src: "../../../assets/icons/explorar.svg", alt: "Ícone de Explorar"},
    {title: "Calendário",     router: "date", src: "../../../assets/icons/calendar.svg", alt: "Ícone de Calendário"},
    {title: "Trilha",         router: "trail", src: "../../../assets/icons/trail.svg", alt: "Ícone de Trilha"},
    {title: "Cópia",          router: "copy", src: "../../../assets/icons/self-copy.svg", alt: "Ícone de Cópia"},
    {title: "Mentoria",       router: "mentor", src: "../../../assets/icons/mentor.svg", alt: "Ícone de Mentoria"},
    {title: "Perfil",         router: "profile", src: "../../../assets/icons/profile.svg", alt: "Ícone de Perfil"},
  ];
  itemsMenuFooter = [
    {title: "Dúvidas", router: "question", src: "../../../assets/icons/questions.svg", alt: "Ícone de Dúvidas"},
    {title: "Sair",    router: "logout", src: "../../../assets/icons/logout.svg", alt: "Ícone de Sair"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
