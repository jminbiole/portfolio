const time2 = 3000;
export default function(){
  this.transition(
    this.fromRoute('portfolio.main-page'),
    this.toRoute('portfolio.skills'),
    this.use('fade', {
      use: [`flyTo`, { time2 }],
    }),
    this.reverse('toRight', {
      use: [`flyTo`, { time2 }],
    })
  );
}
