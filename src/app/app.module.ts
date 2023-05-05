import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HederComponent } from './components/heder/heder.component';
import { ButtonComponent } from './components/button/button.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { CommunityCardComponent } from './components/community-card/community-card.component';
import { SectionWithImageComponent } from './components/section-with-image/section-with-image.component';
import { MarketingCardComponent } from './components/marketing-card/marketing-card.component';
import { SectionMembersComponent } from './section-members/section-members.component';
import { MembersCardComponent } from './members-card/members-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionReviewsComponent } from './components/section-reviews/section-reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HederComponent,
    ButtonComponent,
    SectionWithTitleComponent,
    CommunityCardComponent,
    SectionWithImageComponent,
    MarketingCardComponent,
    SectionMembersComponent,
    MembersCardComponent,
    FooterComponent,
    SectionReviewsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
