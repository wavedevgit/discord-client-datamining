/** chunk id: 289498 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    _ = n(882997),
    m = n(954571),
    g = n(652215),
    A = n(501154);
let x = e => {
    let {
        disabled: t = !1,
        type: n,
        className: s,
        innerClassName: x,
        onConnect: h
    } = e, p = (0, d.Ay)(), T = c.A.get((0, u.ML)(n));
    return (0, i.jsx)(a.m, {
        text: T.name,
        children: (0, i.jsx)("div", {
            className: l()(A.iE, s),
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("button", {
                    className: l()(A.vW, x),
                    type: "button",
                    disabled: t,
                    style: {
                        backgroundImage: `url('${(0,r.Mw)(p)?T.icon.darkSVG:T.icon.lightSVG}')`
                    },
                    onClick: null != h ? h : () => {
                        let e;
                        return e = c.A.get(n), void((0, _.A)({
                            platformType: e.type,
                            location: "Friends List"
                        }), m.default.track(g.HAw.ACCOUNT_LINK_STEP, {
                            previous_step: "desktop connections",
                            current_step: "desktop oauth",
                            platform_type: e.type
                        }))
                    },
                    "aria-label": T.name
                })
            })
        })
    })
}