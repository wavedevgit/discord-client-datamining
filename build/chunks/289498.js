/** chunk id: 289498 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(990078),
    r = n(582754),
    o = n(397927),
    d = n(736653),
    c = n(573648),
    u = n(681819),
    m = n(882997),
    g = n(954571),
    _ = n(652215),
    x = n(277816);
let A = e => {
    let {
        disabled: t = !1,
        type: n,
        className: s,
        innerClassName: A,
        onConnect: h
    } = e, p = (0, d.Ay)(), f = c.A.get((0, u.ML)(n));
    return (0, i.jsx)(a.m, {
        text: f.name,
        children: (0, i.jsx)("div", {
            className: l()(x.iE, s),
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("button", {
                    className: l()(x.vW, A),
                    type: "button",
                    disabled: t,
                    style: {
                        backgroundImage: `url('${(0,r.Mw)(p)?f.icon.darkSVG:f.icon.lightSVG}')`
                    },
                    onClick: null != h ? h : () => {
                        let e;
                        return e = c.A.get(n), void((0, m.A)({
                            platformType: e.type,
                            location: "Friends List"
                        }), g.default.track(_.HAw.ACCOUNT_LINK_STEP, {
                            previous_step: "desktop connections",
                            current_step: "desktop oauth",
                            platform_type: e.type
                        }))
                    },
                    "aria-label": f.name
                })
            })
        })
    })
}