/** chunk id: 906688, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968);
n(64700);
var l = n(827734),
    i = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(682174),
    c = n(927018),
    u = n(715438);

function d(e) {
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
let p = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css
    },
    h = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css
    };

function g(e) {
    var t;
    let {
        achievementId: n,
        unlocked: l,
        size: g = s._3J.SIZE_40
    } = e, f = (0, a.Ay)(), m = (0, c.vM)(n);
    if (null == m) return null;
    let b = (0, s.KjH)(g),
        {
            name: A,
            rarity: y
        } = m,
        {
            color: O
        } = (0, c.ag)(y),
        j = (0, i.Mw)(f) ? p : h,
        x = (b.size - b.offset - 2 * b.stroke) * .8,
        _ = b.size - b.stroke,
        v = {
            width: .4 * x,
            height: .4 * x
        },
        E = {
            width: v.width + 1,
            height: v.height + 1,
            right: b.stroke + 1,
            bottom: b.stroke + 1,
            padding: 0
        };
    return (0, r.jsxs)("div", {
        className: u.kL,
        style: {
            width: _,
            height: _,
            padding: b.stroke
        },
        "aria-label": "".concat(null != (t = A()) ? t : ""),
        children: [(0, r.jsx)("div", {
            className: u.r5,
            children: (0, r.jsx)(s.OR, {
                size: "custom",
                color: l ? O : j.trophy,
                width: x,
                height: x
            })
        }), !l && (0, r.jsx)("div", {
            className: u.dq,
            style: E,
            children: (0, r.jsx)(s.XAi, d({
                size: "custom",
                color: j.locked
            }, v))
        }), l && y === c.md.LEGENDARY && (0, r.jsx)("div", {
            className: u.dq,
            style: E,
            children: (0, r.jsx)(o.A, d({
                className: u.ox
            }, v))
        })]
    })
}
g.Sizes = s._3J