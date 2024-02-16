import { Component, HostListener, ElementRef, ViewChild, OnInit } from "@angular/core";
import * as $ from "jquery";
import { OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";
import {PreloaderService} from '../../service/preloader.service'
import { Observable } from 'rxjs';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent{
  isSticky: boolean = false;
  private routeSub: Subscription;
  constructor(private router: Router,private preloaderService: PreloaderService) {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        document.body.classList.remove("mobile_menu_overlay_on");
      }
    });
  }
  ngOnInit() {

    window.addEventListener("scroll", this.scroll, true);

    const navSidebarButton = document.querySelector(".navSidebar-button");
    if (navSidebarButton) {
      navSidebarButton.addEventListener("click", (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(".info-group")?.classList.add("isActive");
      });
    }

    const closeSideWidget = document.querySelector(".close-side-widget");
    if (closeSideWidget) {
      closeSideWidget.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document.querySelector(".info-group")?.classList.remove("isActive");
      });
    }

    const xsSidebarWidget = document.querySelector(".xs-sidebar-widget");
    if (xsSidebarWidget) {
      xsSidebarWidget.addEventListener("click", (e: Event) => {
        e.stopPropagation();
      });
    }
    const searchBoxOuter = document.querySelector(".search-box-outer");
    if (searchBoxOuter) {
      searchBoxOuter.addEventListener("click", () => {
        document.body.classList.add("search-active");
      });
    }

    const closeSearch = document.querySelector(".close-search");
    if (closeSearch) {
      closeSearch.addEventListener("click", () => {
        document.body.classList.remove("search-active");
      });
    }

    const canvasCartTrigger = document.querySelector(".or-canvas-cart-trigger");
    if (canvasCartTrigger) {
      canvasCartTrigger.addEventListener("click", () => {
        document
          .querySelector(".or-ofcanvas-cart-wrapper")
          ?.classList.toggle("or-canvas-cart-on");
      });
    }
    const openMobileMenu = document.querySelector(".open_mobile_menu");
    if (openMobileMenu) {
      openMobileMenu.addEventListener("click", () => {
        document
          .querySelector(".mobile_menu_wrap")
          ?.classList.toggle("mobile_menu_on");
        document.body.classList.toggle("mobile_menu_overlay_on");
      });
    }

    const dropdownBtns = document.querySelectorAll(
      ".mobile_menu li.dropdown .dropdown-btn"
    );
    if (dropdownBtns) {
      dropdownBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const ul = btn.previousElementSibling;
          if (ul && ul instanceof HTMLElement) {
            ul.style.display = ul.style.display === "block" ? "none" : "block";
          }
        });
      });
    }

    const allDropdownBtns = document.querySelectorAll(".dropdown-btn");
    if (allDropdownBtns) {
      allDropdownBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("toggle-open");
        });
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener("scroll", this.scroll, true);
    this.routeSub.unsubscribe();
  }

  private scroll = (): void => {
    this.onWindowScroll();
  };
  stickyHeader = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.stickyHeader = window.pageYOffset > 200;
  }
  closediv() {
    const $mobileMenuWrap = $(".mobile_menu_wrap");
    if ($mobileMenuWrap.hasClass("mobile_menu_on")) {
      $mobileMenuWrap.removeClass("mobile_menu_on");
      document.body.classList.remove("mobile_menu_overlay_on");
      // document.body.classList.remove('mobile_menu_overlay_on');
    }
  }

}
