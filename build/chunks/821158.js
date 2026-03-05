/** chunk id: 821158, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(421380),
    l = n(397927),
    a = n(954571),
    r = n(322631),
    o = n(652215),
    d = n(985018),
    c = n(865047);
let u = e => {
    let {
        setIsAllPerksVisible: t,
        previousComponent: n
    } = e;
    return (0, i.jsx)(l.wLn, {
        "data-migration-pending": !0,
        color: s.XD.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: l._Jd.SMALL,
        className: c.Wg,
        onClick: () => {
            t(!0), a.default.track(o.HAw.NITRO_HOME_NAVIGATION, {
                current_component: n,
                next_component: r.A2.SEE_ALL,
                interaction_component: "See All Button"
            })
        },
        children: (0, i.jsxs)("div", {
            className: c.zB,
            children: [d.intl.string(d.t["37C26f"]), (0, i.jsx)(l._BQ, {
                color: "currentColor"
            })]
        })
    })
}