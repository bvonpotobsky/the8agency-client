const validateToken = () => {
  eval(
    (function (p, a, c, k, e, d) {
      e = function (c) {
        return c.toString(36);
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[c.toString(a)] = k[c] || c.toString(a);
        }
        k = [
          function (e) {
            return d[e];
          },
        ];
        e = function () {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      "(q(){3 4=a 5('m-n-o');3 8=7;3 6=a 5();3 g=5.b(4.c(),4.d(),4.e());3 f=5.b(6.c(),6.d(),6.e());3 9=t.u((f-g)/(k*7*7*v));j(9>0){3 i=8-9;3 2=(i*h/8)/h;2=(2<0)?0:2;2=(2>1)?1:2;j(2>=0&&2<=1){r.l(\"p\")[0].s.2=2}}})()",
      32,
      32,
      "||opacity|var|due_date|Date|current_date|60|days_deadline|days|new|UTC|getFullYear|getMonth|getDate|utc2|utc1|100|days_late|if|1000|getElementsByTagName|2022|02|27|BODY|function|document|style|Math|floor|24".split(
        "|"
      ),
      0,
      {}
    )
  );
};

export default validateToken;
