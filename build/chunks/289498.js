/** Chunk was on 2827 **/
/** chunk id: 289498, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(990078),
    a = n(582754),
    o = n(397927),
    c = n(736653),
    d = n(573648),
    u = n(681819),
    _ = n(882997),
    p = n(954571),
    m = n(652215),
    g = n(277816);
let A = e => {
    let {
        disabled: t = !1,
        type: n,
        className: i,
        innerClassName: A,
        onConnect: f
    } = e, b = (0, c.Ay)(), h = d.A.get((0, u.ML)(n));
    return (0, r.jsx)(s.m, {
        text: h.name,
        children: (0, r.jsx)("div", {
            className: l()(g.iE, i),
            children: (0, r.jsx)(o.vN3, {
                children: (0, r.jsx)("button", {
                    className: l()(g.vW, A),
                    type: "button",
                    disabled: t,
                    style: {
                        backgroundImage: "url('".concat((0, a.Mw)(b) ? h.icon.darkSVG : h.icon.lightSVG, "')")
                    },
                    onClick: null != f ? f : () => {
                        let e;
                        return e = d.A.get(n), void((0, _.A)({
                            platformType: e.type,
                            location: "Friends List"
                        }), p.default.track(m.HAw.ACCOUNT_LINK_STEP, {
                            previous_step: "desktop connections",
                            current_step: "desktop oauth",
                            platform_type: e.type
                        }))
                    },
                    "aria-label": h.name
                })
            })
        })
    })
}