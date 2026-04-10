/** chunk id: 834269 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    l = n(435371),
    r = n(890687),
    a = n(985018),
    s = n(342225);
let o = e => {
    let {
        children: t,
        multiplier: n
    } = e, o = (0, r.Oq)() ? a.intl.format(a.t.NpUfej, {
        bonusOrbMultiplier: n
    }) : a.intl.format(a.t["G5k+lZ"], {
        bonusOrbMultiplier: n
    });
    return (0, i.jsx)(l.un, {
        title: a.intl.string(a.t.F2MShO),
        body: o,
        asset: (0, i.jsx)("img", {
            src: s.A,
            alt: "",
            "aria-hidden": !0
        }),
        assetSize: 80,
        position: "right",
        align: "center",
        asContainer: !0,
        children: t
    })
}