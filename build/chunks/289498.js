/** chunk id: 289498 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    g = n(954571),
    A = n(652215),
    m = n(277816);
let h = e => {
    let {
        disabled: t = !1,
        type: n,
        className: s,
        innerClassName: h,
        onConnect: p
    } = e, x = (0, d.Ay)(), E = c.A.get((0, u.ML)(n));
    return (0, i.jsx)(a.m, {
        text: E.name,
        children: (0, i.jsx)("div", {
            className: l()(m.iE, s),
            children: (0, i.jsx)(o.vN3, {
                children: (0, i.jsx)("button", {
                    className: l()(m.vW, h),
                    type: "button",
                    disabled: t,
                    style: {
                        backgroundImage: `url('${(0,r.Mw)(x)?E.icon.darkSVG:E.icon.lightSVG}')`
                    },
                    onClick: null != p ? p : () => {
                        let e;
                        return e = c.A.get(n), void((0, _.A)({
                            platformType: e.type,
                            location: "Friends List"
                        }), g.default.track(A.HAw.ACCOUNT_LINK_STEP, {
                            previous_step: "desktop connections",
                            current_step: "desktop oauth",
                            platform_type: e.type
                        }))
                    },
                    "aria-label": E.name
                })
            })
        })
    })
}