/** chunk id: 834269 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(435371),
    r = n(890687),
    l = n(985018),
    s = n(342225);
let o = e => {
    let {
        children: t,
        multiplier: n
    } = e, o = (0, r.Oq)() ? l.intl.format(l.t.NpUfej, {
        bonusOrbMultiplier: n
    }) : l.intl.format(l.t["G5k+lZ"], {
        bonusOrbMultiplier: n
    });
    return (0, i.jsx)(a.un, {
        title: l.intl.string(l.t.F2MShO),
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