/** chunk id: 906688 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var a = n(827734),
    r = n(582754),
    l = n(397927),
    s = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(489172);
let u = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    },
    _ = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    };

function h(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: a = l._3J.SIZE_40
    } = e, h = (0, s.Ay)(), C = (0, c.vM)(t);
    if (null == C) return null;
    let g = (0, l.KjH)(a),
        {
            name: A,
            rarity: m
        } = C,
        {
            color: E
        } = (0, c.ag)(m),
        p = (0, r.Mw)(h) ? u : _,
        b = (g.size - g.offset - 2 * g.stroke) * .8,
        T = g.size - g.stroke,
        I = {
            width: .4 * b,
            height: .4 * b
        },
        L = {
            width: I.width + 1,
            height: I.height + 1,
            right: g.stroke + 1,
            bottom: g.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: T,
            height: T,
            padding: g.stroke
        },
        "aria-label": `${A()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(l.OR, {
                size: "custom",
                color: n ? E : p.trophy,
                width: b,
                height: b
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: L,
            children: (0, i.jsx)(l.XAi, {
                size: "custom",
                color: p.locked,
                ...I
            })
        }), n && m === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: L,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...I
            })
        })]
    })
}
h.Sizes = l._3J