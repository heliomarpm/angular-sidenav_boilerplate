import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private colorTheme: string = 'light-theme';
  public themeSelected = new Subject<string>();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

  watchColorTheme(): Observable<any> {
    return this.themeSelected.asObservable();
  }

  initializeTheme() {
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }

  updateColorTheme(theme: 'dark-theme' | 'light-theme') {
    this.setColorTheme(theme);
    const previuosTheme = (theme === 'light-theme' ? 'dark-theme' : 'light-theme');
    this.renderer.removeClass(document.body, previuosTheme);
    this.renderer.addClass(document.body, theme);
  }

  isDarkMode(): boolean {
    return this.getColorTheme() === 'dark-theme';
  }

  private setColorTheme(theme: string) {
    this.colorTheme = theme;
    localStorage.setItem('color-theme', theme);
    this.themeSelected.next(theme);
  }

  getColorTheme() {
    if (localStorage.getItem('color-theme') === null) {
      this.setColorTheme('light-theme');
      return 'light-theme';
    }else {
      return localStorage.getItem('color-theme');
    }
  }
}
