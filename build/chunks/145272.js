/** Chunk was on web.js **/
/** chunk id: 145272, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => R
}), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    a = n(310784),
    o = n.n(a),
    s = n(503698),
    l = n.n(s),
    c = n(156828),
    u = n(317097),
    d = n(714385),
    f = n(990078),
    p = n(732955),
    _ = n(397927),
    h = n(971745),
    m = n(467135),
    g = n(230835),
    E = n(738419),
    y = n(520650),
    b = n(985018),
    O = n(217590);

function v() {
    return (0, r.jsx)("div", {
        className: O.wG,
        children: (0, r.jsx)(_.y$y, {})
    })
}
let A = (0, c.Fe)({
        createPromise: () => Promise.all([n.e("47950"), n.e("86537")]).then(n.bind(n, 33136)),
        webpackId: 33136,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: v
    }),
    I = 5,
    S = "#000000";

function T(e, t) {
    return e.length < 1 ? 0 : t / (e.length - 1) * 80 + 10
}

function C(e) {
    let {
        colors: t,
        selectedIndex: n,
        onColorSelect: a
    } = e, [o, s] = i.useMemo(() => {
        let e = t.map((e, n) => T(t, n)),
            n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
        return [e, {
            background: "linear-gradient(to right, ".concat(n, ")")
        }]
    }, [t]);
    return (0, r.jsx)("div", {
        className: O.wS,
        style: s,
        children: t.map((e, t) => {
            let s = o[t],
                c = t === n;
            return (0, r.jsxs)(i.Fragment, {
                children: [(0, r.jsx)(_.DUT, {
                    className: l()(O.pX, {
                        [O.wH]: c
                    }),
                    style: {
                        left: "".concat(s, "%"),
                        backgroundColor: e
                    },
                    onClick: () => a(t),
                    children: (0, r.jsx)("div", {
                        className: O.Px
                    })
                }), c && (0, r.jsx)("div", {
                    className: O.gQ,
                    style: {
                        left: "".concat(s, "%")
                    }
                })]
            }, t)
        })
    })
}

function N(e) {
    let {
        color: t
    } = e, n = i.useMemo(() => ({
        backgroundColor: (0, u.qt)(t) ? t : S
    }), [t]);
    return (0, r.jsx)("div", {
        className: O.ld,
        style: n,
        "aria-label": "Color preview"
    })
}

function w(e) {
    if (!(0, u.qt)(e)) return e;
    let t = o()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex()
}

function R(e) {
    let {
        value: t,
        onChange: n,
        className: a,
        colors: o,
        setColors: s
    } = e, c = (0, h.A)(), [v, S] = i.useState(0), [T, R] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && v < o.length) {
            let e = o[v];
            (0, u.qt)(e) && (R(e), n(e))
        }
        v >= o.length && S(0)
    }, [v, o, n]);
    let P = e => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t
        },
        D = e => {
            let t = P(e);
            if (R(t), (0, u.qt)(t) && ((0, E.CE)(), n(t), o.length > 0)) {
                let e = [...o];
                e[v] = t, s(e)
            }
        },
        L = i.useCallback(e => {
            R(e.hex)
        }, []),
        x = e => {
            if ((0, E.VE)(), n(e.hex), o.length > 0) {
                let t = [...o];
                t[v] = e.hex, s(t)
            }
        },
        M = async () => {
            if (null != c) try {
                let {
                    sRGBHex: e
                } = await c.open();
                (0, E.AL)(), D(e)
            } catch (e) {}
        }, j = () => {
            if (o.length === I) return;
            0 === o.length && (0, g.eq)(), (0, E.HU)();
            let e = o.length > 0 ? o[o.length - 1] : T,
                t = o.length > 0 ? w(e) : e,
                n = [...o, t];
            s(n), S(n.length - 1)
        }, k = e => {
            if (o.length > 1) {
                (0, E.f1)();
                let t = o.filter((t, n) => n !== e);
                s(t), v >= t.length ? S(t.length - 1) : v > e && S(v - 1)
            }
        }, U = e => {
            S(e), (0, E.mx)()
        }, G = o.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(O.kL, a),
        children: [G && (0, r.jsx)(C, {
            colors: o,
            selectedIndex: v,
            onColorSelect: U
        }), (0, r.jsx)(A, {
            onChange: L,
            onChangeComplete: x,
            color: T
        }), (0, r.jsxs)("div", {
            className: O.Xr,
            children: [(0, r.jsx)(N, {
                color: T
            }), (0, r.jsx)("input", {
                className: O.Im,
                value: T.toUpperCase(),
                onChange: e => D(e.target.value),
                maxLength: 7,
                placeholder: m.OT,
                type: "text"
            }), (0, r.jsxs)("div", {
                className: O.hE,
                children: [null != c && (0, r.jsx)(f.m, {
                    text: b.intl.string(y.default["NCFz+N"]),
                    children: (0, r.jsx)(p.K0, {
                        variant: "icon-only",
                        size: "sm",
                        onClick: M,
                        icon: d.d,
                        "aria-label": b.intl.string(y.default["NCFz+N"])
                    })
                }), G && (0, r.jsx)(f.m, {
                    text: b.intl.string(b.t.N86XcP),
                    children: (0, r.jsx)(p.K0, {
                        variant: "icon-only",
                        size: "sm",
                        onClick: () => k(v),
                        icon: _.QGg,
                        "aria-label": b.intl.string(b.t.N86XcP)
                    })
                })]
            })]
        }), o.length < I && (0, r.jsx)(p.$nd, {
            variant: "secondary",
            size: "md",
            onClick: j,
            icon: _.TIR,
            text: b.intl.string(y.default.JUQcdT),
            fullWidth: !0
        })]
    })
}