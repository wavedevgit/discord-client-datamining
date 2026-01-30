/** chunk id: 475833, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(427262),
    o = n(585665);
let c = e => {
    let {
        user: t,
        fill: n,
        hideUserTag: i
    } = e, c = "\xa0(@".concat(a.Ay.getUserTag(t, {
        decoration: "never"
    }), ")");
    return (0, r.jsxs)(s.Text, {
        className: l()([{
            [o.GS]: n
        }]),
        variant: "text-md/medium",
        children: [(0, r.jsx)("span", {
            className: o.Xh,
            children: a.Ay.getName(t)
        }), i ? null : (0, r.jsx)("span", {
            className: o.D2,
            children: c
        })]
    })
}