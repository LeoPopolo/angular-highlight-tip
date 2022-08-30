import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild("inicio") inicio!: ElementRef;
  @ViewChild("productos") productos!: ElementRef;
  @ViewChild("nosotros") nosotros!: ElementRef;
  @ViewChild("contacto") contacto!: ElementRef;

  topMenuTip: string = '0px';
  leftMenuTip: string = '0px';

  step: number = 0;
  tipText: string = "boton de inicio, te lleva a la pantalla de inicio";

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.step = 1;
    this.moveMenuTip(this.inicio);

    this.cd.detectChanges();
  }

  nextTip() {
    this.step ++;

    switch(this.step) {
      case 2:
        this.tipText = "Podes ver todos los productos de tu catálogo";
        this.moveMenuTip(this.productos);
      break;
      case 3:
        this.tipText = "Te contamos quienes somos y como empezamos nuestro negocio";
        this.moveMenuTip(this.nosotros);
      break;
      case 4:
        this.tipText = "Nuestras redes sociales y maneras de contactarnos";
        this.moveMenuTip(this.contacto);
      break;
    }
  }

  moveMenuTip(element: ElementRef) {
    const elementPosition = element.nativeElement.getBoundingClientRect();

    this.topMenuTip = (elementPosition.bottom + 20) + 'px';
    this.leftMenuTip = elementPosition.left + 'px';
  }
}
