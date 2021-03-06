export default () => {
  return `<!DOCTYPE html>
  <html lang="en" >
  <head>
  <meta charset="UTF-8">
  <title>404</title>
  <style>
  #svgContainer {
      width: 500px;
      height: 100px;
      margin: 0 auto;
      margin-top: 200px;
      text-align: center;
      font-size: 14px;
      color: #333;
      font-family:Arial, Helvetica, sans-serif;
  }
  img {
      width: 60px;
      height: 60px;
  }
  h3 {color: black;}
  
  </style>
  </head>
  <body>
  <div id="svgContainer">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC91BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD32WoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4WsAAAAAAAAAAAD/6HRiVir+3201LxcAAAD/4W0AAAD9320AAAD8xWt/GEw/qfX8TFny8vJ/cDe2trahWX393W391Wz90mweGQ38yGvdwl/92m1KQiD912wRDwfy1Wh/YzUHBgMHAgP8z2z8y2sXPlqxnEyGdjpeEThTQSNAORwyLBUrIxIMCQTtumTjyGLMoFaZhkFfPi5SSCNLOh8YFAoNDAYvgbv8zGzpzWTWvVzMtFjKslfDrFS/p1K3kU+tmEqdikOVhEB0WzFlWSxeUigIFiE+Ih8GERkuKBMgDRACBwolZZP2wGjbq12ngkyrhkmmkkejkEalgUaceUWDXz12UzgNIzN0ZTFvYS9oWy1YTSY+MBooDQ8LAwU6nuUkYo4bSWrs0GXisGDTtFv0SFjsRVfCmFIUN1CplUmRcT0PKTyLejtVDzJJDStPMCdZRiY/CyVGOx42HBw5MxkzJxUmHhAWCAsTBAs3lNc0js4xhcIrdqsnbJwiXogeUHXotWPauGDWp13KN1TaP1O/MlOzLVG6pFC9lFCxi06ifkoSMEaee0ORfz6CcjiGaTh4ajR3XTNoRjJWNCtQPiI1CiAwGBk3KxcgBhMaCg7HoLOsbY3ptmO8mFTAoVHTPVCjJ0+3oE6NHk3KPUegjUWXckV4GURxFUSNaUGXdkCWdD+PbT9lEzxkEzyJazp7bTVtWC5nUSthVSpmHiQqCBkaBRA7n+fJpbeXfImgV3yfVXv32mqRO2fgwGJ6RF+HJ1jkQleGJle6OEKeMDibLzeOKzILHy13JCpdHCFbGyBYGx9QGBw0GxtKFho/ExY6ERQyDxIHfyLPAAAAN3RSTlMAxgz6357SjD95bDf0zb+rhWAgFqJ0RuzZsqZVLn4SBv7k2IhkUUQjG+lxTDAplFoW8d7JtVQmsC9W0QAACDVJREFUaN61mlOAHEEQhmPbtu2uiTe5bGzbtm3btm3btm3bzkOqenu3tzMzyUwy+V7ueq92/quq7mpNIKskCBs5UsTAIYLFDBouWODYwSOFiRsqkKOkipshFhgQIXSoIM4opAwdGMwJly1+jH+WSB4nKPyJCMn+xZ+o0UOAl461B5bv1ayxu2GiRNUbNS3Xa+u2IvXAS7BI6f9SIl7I1OCh2OCabmZA0/KzSgmToMFT/IVEkEjgoWTtlg2ZKQ1bDKoqDINHsasRNzxwKm91sz/gzjtPBC2yvWQEFxI1mRWKt5pj35kYnnxXIQmLtKhk05nonmxvK87sUL6qxxlr3TkaEIMaMZs0rg1EYCshi0CWVSlStmkVwEMW9o8avEjNPcb+CvdgINL+QSMcGVWsxv6WtkAk+61GTK5RqDD7a9oAEfo3GoG5hlaA/QMDgTAvMhEBKaGVZv9EKyCimvdd0ijkYv/GekDCG2ukAaS1phUkw3/3JZKRRiianWZo5Mg/M4hUIhuUdkr6vNHkiAPwgqlfaSQFpIcTjhDuqpSWhL9ohKVg7dTIEUdoAUh0g947REMKM2fIiw9MnErRyEjCG1CjNHOI4lXwiUkVkfB8hCBFmVO0pFVZPD+NMN5glWHOUYSmML/um4T3LJ5251iv1rDQ2NpPGkppdGRIxvatTRJja5JGuJwUaVQXn+vNSjL8PaCaoymRVT++EInNC6PDKSFOymqcHpAajqeEoLES1pf2PRqnsMMiA/DRIX1zbm/N8bwTzWiFxAcJlsa6GqeQmXGfvrt29T07hpnS/EK/Wv0ubNJ9XllU/FD4sw5JmHaufp2AM2z6UZP/oT142HeWqVwXtTg6r/GcBsyAp19AUsvIYjdI2jOFJmKpFwd/btQ4pY0CAQr79Bbkp6TURrXiF+GzMG0Tqmlmw6Q7EEN39e3Tb7axLwv4o6f369631nwgVjKFdCSCeQ/QNJNhsrEU5eKycOogIH1VC56O6Z4+UXw3dzaRYpAdNaKIvBtPJtPxr/OPKpE5qBisVL2rRc3uyoYia/B4gWJQTTEVoRD5d8xSqKkL52z1C6pIR4BofL7aYhqulZ3UJKw62GnTL+Eq1V7tasPUdgBAhEAhUWS8FPk38uKW/4y6Xd5aL1hy3oNr/E5kTDPLGtXFnnlAuVHywyxi99ZNM+nC1XvewomntlWRJuClapFeTOAS27cVmsFgHFVuxxzwYNWX4uBHx/Iibpk8+7eumq52NRlYV9pb3gjTxnRkBxDUG9RYjEYholbhFrXBH1uroGW56o9sBx5KDuAiMlxyPmlZGbxs7kKO25qkyuZCfDrFmlC4ROLlaKxeSQh0nrB0eK4l+EtbyyI90bp/Lg9d+gMnkSjCNTTZvfIKibKogCzHX8vb6sOduYSUyYwicjDyzIsOMqG+MNyMjabMMsXQfFEuKQNIjECyrHBcOwCZvNBnRl2FWWcWmi/NJRkJVLpkgeQcIw0/o/qUOztHRTzzkoWd8YMgstRzbmBruZ/RCGxXsrMyRft2ufygTpZDTlqcOvgZT4egLLbz2gGQxbkklPtQcvrlVKHeIbnXDmxDw5GQOQ3iOYdorglKYtaVaNlHecIibMYSu6ztJp5Mhr9ihBLuCLS55kthwU0lpEuAqIA8yGeFZ2i5F7/RwfuI5YCEkctUD5eoLgyX/wcxLWfOnPfzWCE/Wt71pIWeUX8zEFHkgttDjao03BfJ8Yrsxa8esiTyEC19ha/sO+AEVrcORAkgd0csxFiRH8QB/OphSyLPc+a8Ar8SWt0EcfYDp10H8DIsp0VXDqPdNBq9c8CPsMp2TjAP/JhI09BUUnmS/w88eklmB9C+JetZhObVAJo0Qug2ppzeVUFQqRw/H7uT0zJXAeFLFXdTd/E2YqOlbLEFowfU7liyZMe2vWiGqAdQ6rxlkZn4pMFM8JgXevWwQOJ/ZDuYd2Kr0BLftxiago04+mMPjrobKod/WnDehiOVfWuqkpR23QGOpKC6AtlrIyM1mWAbNjIYHEVJCiiu8A52Yt3qNeNyj32xZvXaE8Yid/wdaYzZjJlSf6imqCiuLDi3dlxuP8auXndKHyzhiPxafOPjQYkv+U0ptkPH5v6Vtb/ITCON2v4TcZIEJgedEpfsJaSSW8e4dVJBFJRixb3/WSmqv8ZHtsYqtwD5nlvPcalxDoiTTECDPaLZ4bNxxGYBMv+4gTNejQpA5JXXKHSWanKMXlFTKKreV7wxcMYv5zBRuUSJbHwhoFcpKDdqxOdXhipT76oa16kV3OxqQ69S2iVViA+nfxUZO/UAEAETldPtJOYXc+qYJAp5Q9ZMrPZ/3H69xqdw+u2nocBp65bnT0RC86s5qWLqDDFs6Nfb7z9+61QKBAEt1QoBof50OddaUynkHf1N2oAhlac09DvYJlL++XpuxhFNpUFRc5mSRXoyjhy4qXnn/dMF3dzx2i+U8XpTvcWOWfKVgoA2PRsyibstX58ol2bmV3RV+2g6mYJyKmvYuFyr8mfWNyrOFGoGABI7iOUL5purNEMdc8bMACJiQjtX5SWqaXoKlS7gYjpcRQs2mFQMiPh2L/0vaoYUalC6QNHChV0u5ipctECBgg0KaVqPOkAETmH/9YW5JGOBPkOAkzThX72IMXdStz8pVLtcBTjh0/79KyUVtxwxV+javEQAcIKGDPJPL8fUq3PN0J8a2+sUEyYxQ8Zz4DWfKhVvXOu9oUa3FV27jl41vnnvS9tnyHOkYPGj/O8XlkKkSeD4q1cqgUPGDeQIUSIHD2YskNymD/Zfh7M8KH4CAE5+DkzmehsAAAAASUVORK5CYII=" alt="">
      <p>你的页面被我藏起来了</p>
      <h3>404</h3>
  </div>
  </body>
  </html>
  
`
}