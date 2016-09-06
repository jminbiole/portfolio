const time2 = 2000;
export default function(){
  this.transition(
    this.fromRoute('portfolio.landing-page'),
    this.toRoute('portfolio.main-page'),
    this.use('crossFade', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
}
