/** chunk id: 834269 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(435371),
    l = n(890687),
    r = n(985018),
    s = n(342225);
let o = e => {
    let {
        children: t,
        multiplier: n
    } = e, o = (0, l.Oq)() ? r.intl.format(r.t.NpUfej, {
        bonusOrbMultiplier: n
    }) : r.intl.format(r.t["G5k+lZ"], {
        bonusOrbMultiplier: n
    });
    return (0, i.jsx)(a.un, {
        title: r.intl.string(r.t.F2MShO),
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