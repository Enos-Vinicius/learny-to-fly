import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itemOpenMenu = [
    {title: "Menu", cursor: "cursor-pointer", src: "../../../assets/icons/menu.svg", alt: "Ícone Menu"},
  ]
  itemsMenuCenter = [
    {title: "Página Inicial", cursor: "cursor-pointer", router: "/", src: "../../../assets/icons/home.svg", alt: "Ícone de Home"},
    {title: "Explorar",       cursor: "cursor-pointer", router: "/explore", src: "../../../assets/icons/explorar.svg", alt: "Ícone de Explorar"},
    {title: "Calendário",     cursor: "cursor-pointer", router: "/date", src: "../../../assets/icons/calendar.svg", alt: "Ícone de Calendário"},
    {title: "Trilha",         cursor: "no-drop", router: "trail", src: "../../../assets/icons/trail.svg", alt: "Ícone de Trilha"},
    {title: "Cópia",          cursor: "no-drop", router: "copy", src: "../../../assets/icons/self-copy.svg", alt: "Ícone de Cópia"},
    {title: "Mentoria",       cursor: "no-drop", router: "mentor", src: "../../../assets/icons/mentor.svg", alt: "Ícone de Mentoria"},
    {title: "Perfil",         cursor: "no-drop", router: "profile", src: "../../../assets/icons/profile.svg", alt: "Ícone de Perfil"},
  ];
  itemsMenuFooter = [
    {title: "Dúvidas", cursor: "no-drop", router: "question", src: "../../../assets/icons/questions.svg", alt: "Ícone de Dúvidas"},
    {title: "Sair",    cursor: "no-drop", router: "logout", src: "../../../assets/icons/logout.svg", alt: "Ícone de Sair"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
