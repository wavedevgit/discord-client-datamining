/** chunk id: 906688 params = (module,exports,require) **/
i.d(e, {
    A: () => C
});
var n = i(627968);
i(64700);
var r = i(827734),
    l = i(582754),
    s = i(397927),
    a = i(736653),
    o = i(682174),
    c = i(927018),
    d = i(715438);
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
        unlocked: i,
        size: r = s._3J.SIZE_40
    } = t, C = (0, a.Ay)(), g = (0, c.vM)(e);
    if (null == g) return null;
    let A = (0, s.KjH)(r),
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
    return (0, n.jsxs)("div", {
        className: d.kL,
        style: {
            width: O,
            height: O,
            padding: A.stroke
        },
        "aria-label": `${E()??""}`,
        children: [(0, n.jsx)("div", {
            className: d.r5,
            children: (0, n.jsx)(s.OR, {
                size: "custom",
                color: i ? m : p.trophy,
                width: L,
                height: L
            })
        }), !i && (0, n.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, n.jsx)(s.XAi, {
                size: "custom",
                color: p.locked,
                ...T
            })
        }), i && _ === c.md.LEGENDARY && (0, n.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, n.jsx)(o.A, {
                className: d.ox,
                ...T
            })
        })]
    })
}
C.Sizes = s._3J