/** chunk id: 920409 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(155718),
    i = n(594808),
    o = n(207963),
    c = n(953756),
    d = n(292366),
    u = n(324877),
    m = n(376391);

function p(e) {
    let {
        components: t,
        accessory: n,
        renderComponents: a
    } = e, {
        message: p
    } = (0, o.jc)(), [A, h] = (0, c.zn)(), C = (0, c.Hq)(h), E = n.type === s.I5.BUTTON;
    return (0, l.jsxs)("div", {
        className: m.uW,
        ref: A,
        children: [(0, l.jsxs)("div", {
            className: m.Y_,
            children: [(0, l.jsx)("div", {
                className: r()(m.zt, {
                    [m.uf]: E
                }),
                children: a(t)
            }), (0, l.jsx)("div", {
                className: r()(m.LP, {
                    [m.HQ]: C
                }),
                children: function(e) {
                    switch (e.type) {
                        case s.I5.BUTTON:
                            return (0, l.jsx)(d.A, {
                                ...e
                            });
                        case s.I5.THUMBNAIL:
                            return (0, l.jsx)(u.A, {
                                ...e
                            })
                    }
                }(n)
            })]
        }), null != p ? (0, l.jsx)(i.Ay, {
            message: p,
            component: e
        }) : null]
    })
}