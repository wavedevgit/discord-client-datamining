/** chunk id: 906688 params = (module,exports,require) **/
n.d(e, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(582754),
    a = n(397927),
    s = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(715438);
let u = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    },
    h = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    };

function C(t) {
    let {
        achievementId: e,
        unlocked: n,
        size: r = a._3J.SIZE_40
    } = t, C = (0, s.Ay)(), g = (0, c.vM)(e);
    if (null == g) return null;
    let A = (0, a.KjH)(r),
        {
            name: E,
            rarity: _
        } = g,
        {
            color: m
        } = (0, c.ag)(_),
        p = (0, l.Mw)(C) ? u : h,
        L = (A.size - A.offset - 2 * A.stroke) * .8,
        O = A.size - A.stroke,
        T = {
            width: .4 * L,
            height: .4 * L
        },
        I = {
            width: T.width + 1,
            height: T.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: O,
            height: O,
            padding: A.stroke
        },
        "aria-label": `${E()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(a.OR, {
                size: "custom",
                color: n ? m : p.trophy,
                width: L,
                height: L
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(a.XAi, {
                size: "custom",
                color: p.locked,
                ...T
            })
        }), n && _ === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...T
            })
        })]
    })
}
C.Sizes = a._3J