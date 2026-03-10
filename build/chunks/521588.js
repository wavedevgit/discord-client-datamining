/** chunk id: 521588 params = (module,exports,require) **/
"use strict";
n.d(t, {
    a: () => r
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(483618);
let r = e => {
    let {
        left: t,
        top: n = 0,
        right: s = 0,
        bottom: r,
        size: o = 8,
        alert: c = !1,
        showBlurpleTreatment: d = !1,
        maskColor: u = 2,
        additionalStyles: h
    } = e;
    return (0, i.jsx)("span", {
        className: l()(a.Om, {
            [a.xE]: c,
            [a.nB]: d,
            [a.GS]: 0 === u,
            [a.Pn]: 1 === u,
            [a.HP]: 2 === u,
            [a.gl]: 3 === u,
            [h ?? ""]: void 0 !== h
        }),
        style: {
            height: o,
            width: o,
            left: t,
            top: n,
            right: s,
            bottom: r
        }
    })
}