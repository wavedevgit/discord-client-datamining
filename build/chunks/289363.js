/** chunk id: 289363 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => p
});
var l = n(627968),
    a = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(311907),
    o = n(397927),
    c = n(303136),
    d = n(769015),
    u = n(287809),
    m = n(486020),
    f = n(60934),
    h = n(268920),
    x = n(633217);
let g = () => (0, l.jsx)("div", {
        className: f.Vi,
        children: (0, l.jsx)(c.A, {
            src: x.A,
            fallbackImage: h.A,
            className: f.LG
        })
    }),
    p = a.memo(function(e) {
        let {
            application: t,
            isIncentivizedAccountLinking: n
        } = e, a = (0, s.bG)([u.default], () => u.default.getCurrentUser()), i = m.Ay.getUserAvatarURL(a), c = r()(f.pw, {
            [f.yi]: n
        });
        return (0, l.jsxs)("div", {
            className: r()(f.Y, {
                [f.VT]: n
            }),
            children: [(0, l.jsx)(d.A, {
                className: f.my,
                game: t,
                size: d.M.MEDIUM,
                "aria-label": t.name
            }), (0, l.jsxs)("div", {
                className: r()(f.I5, {
                    [f.BE]: n
                }),
                children: [(0, l.jsx)("div", {
                    className: c
                }), n ? (0, l.jsx)(g, {}) : (0, l.jsx)("div", {
                    className: c
                }), (0, l.jsx)("div", {
                    className: c
                })]
            }), (0, l.jsx)(o.euF, {
                className: f.my,
                src: i,
                size: o._3J.SIZE_48,
                "aria-label": a.username
            })]
        })
    })