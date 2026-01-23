/** Chunk was on web.js **/
/** chunk id: 906688, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var r = n(627968);
n(64700);
var i = n(827734),
    a = n(582754),
    s = n(397927),
    o = n(736653),
    l = n(682174),
    c = n(927018),
    u = n(715438);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            d(e, t, n[t])
        })
    }
    return e
}
let p = {
        trophy: i.A.unsafe_rawColors.PRIMARY_400.css,
        locked: i.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: i.A.unsafe_rawColors.GREEN_330.css
    },
    _ = {
        trophy: i.A.unsafe_rawColors.PRIMARY_400.css,
        locked: i.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: i.A.unsafe_rawColors.GREEN_330.css
    },
    h = .8,
    m = .4,
    g = 1;

function E(e) {
    var t;
    let {
        achievementId: n,
        unlocked: i,
        size: d = s._3J.SIZE_40
    } = e, E = (0, o.Ay)(), y = (0, c.vM)(n);
    if (null == y) return null;
    let b = (0, s.KjH)(d),
        {
            name: O,
            rarity: v
        } = y,
        {
            color: A
        } = (0, c.ag)(v),
        I = (0, a.Mw)(E) ? p : _,
        S = (b.size - b.offset - 2 * b.stroke) * h,
        T = b.size - b.stroke,
        C = {
            width: S * m,
            height: S * m
        },
        N = {
            width: C.width + g,
            height: C.height + g,
            right: b.stroke + g,
            bottom: b.stroke + g,
            padding: 0
        };
    return (0, r.jsxs)("div", {
        className: u.kL,
        style: {
            width: T,
            height: T,
            padding: b.stroke
        },
        "aria-label": "".concat(null != (t = O()) ? t : ""),
        children: [(0, r.jsx)("div", {
            className: u.r5,
            children: (0, r.jsx)(s.OR, {
                size: "custom",
                color: i ? A : I.trophy,
                width: S,
                height: S
            })
        }), !i && (0, r.jsx)("div", {
            className: u.dq,
            style: N,
            children: (0, r.jsx)(s.XAi, f({
                size: "custom",
                color: I.locked
            }, C))
        }), i && v === c.md.LEGENDARY && (0, r.jsx)("div", {
            className: u.dq,
            style: N,
            children: (0, r.jsx)(l.A, f({
                className: u.ox
            }, C))
        })]
    })
}
E.Sizes = s._3J