/** Chunk was on 41727 **/
/** chunk id: 521588, original params: e,t,n (module,exports,require) **/
n.d(t, {
    a: () => a
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(483618);
let a = e => {
    let {
        left: t,
        top: n = 0,
        right: l = 0,
        bottom: a,
        size: o = 8,
        alert: c = !1,
        showBlurpleTreatment: u = !1,
        maskColor: d = 2,
        additionalStyles: p
    } = e;
    return (0, r.jsx)("span", {
        className: i()(s.Om, {
            [s.xE]: c,
            [s.nB]: u,
            [s.GS]: 0 === d,
            [s.Pn]: 1 === d,
            [s.HP]: 2 === d,
            [s.gl]: 3 === d,
            [null != p ? p : ""]: void 0 !== p
        }),
        style: {
            height: o,
            width: o,
            left: t,
            top: n,
            right: l,
            bottom: a
        }
    })
}