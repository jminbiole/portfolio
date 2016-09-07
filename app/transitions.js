const time2 = 3000;
export default function(){
  this.transition(
    this.fromRoute('portfolio.landing-page'),
    this.toRoute('portfolio.main-page'),
    this.use('fade', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
}
