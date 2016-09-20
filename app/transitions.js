const time2 = 3000;
export default function(){
  this.transition(
    this.fromRoute('portfolio.main-page'),
    this.toRoute('portfolio.main-page.about'),
    this.use('toDown', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toUp', {
      use: [`flyTo`, { time2 }],
    })
  );
}
