/** chunk id: 906688 params = (module,exports,require) **/
n.d(e, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(827734),
    s = n(582754),
    l = n(397927),
    a = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(983684);
let h = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    },
    u = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    };

function C(t) {
    let {
        achievementId: e,
        unlocked: n,
        size: r = l._3J.SIZE_40
    } = t, C = (0, a.Ay)(), _ = (0, c.vM)(e);
    if (null == _) return null;
    let A = (0, l.KjH)(r),
        {
            name: E,
            rarity: g
        } = _,
        {
            color: T
        } = (0, c.ag)(g),
        L = (0, s.Mw)(C) ? h : u,
        O = (A.size - A.offset - 2 * A.stroke) * .8,
        S = A.size - A.stroke,
        p = {
            width: .4 * O,
            height: .4 * O
        },
        I = {
            width: p.width + 1,
            height: p.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: S,
            height: S,
            padding: A.stroke
        },
        "aria-label": `${E()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(l.OR, {
                size: "custom",
                color: n ? T : L.trophy,
                width: O,
                height: O
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(l.XAi, {
                size: "custom",
                color: L.locked,
                ...p
            })
        }), n && g === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...p
            })
        })]
    })
}
C.Sizes = l._3J