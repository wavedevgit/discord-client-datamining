/** Chunk was on 49559 **/
/** chunk id: 920409, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    i = n(155718),
    o = n(594808),
    s = n(207963),
    c = n(953756),
    u = n(292366),
    d = n(324877),
    p = n(996017);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function f(e) {
    let {
        components: t,
        accessory: n,
        renderComponents: l
    } = e, {
        message: f
    } = (0, s.jc)(), [O, b] = (0, c.zn)(), y = (0, c.Hq)(b), h = n.type === i.I5.BUTTON;
    return (0, r.jsxs)("div", {
        className: p.uW,
        ref: O,
        children: [(0, r.jsxs)("div", {
            className: p.Y_,
            children: [(0, r.jsx)("div", {
                className: a()(p.zt, {
                    [p.uf]: h
                }),
                children: l(t)
            }), (0, r.jsx)("div", {
                className: a()(p.LP, {
                    [p.HQ]: y
                }),
                children: function(e) {
                    switch (e.type) {
                        case i.I5.BUTTON:
                            return (0, r.jsx)(u.A, m({}, e));
                        case i.I5.THUMBNAIL:
                            return (0, r.jsx)(d.A, m({}, e))
                    }
                }(n)
            })]
        }), null != f ? (0, r.jsx)(o.Ay, {
            message: f,
            component: e
        }) : null]
    })
}