/** chunk id: 906688 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(582754),
    r = n(397927),
    s = n(736653),
    o = n(682174),
    d = n(927018),
    c = n(579157);
let u = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css
    },
    A = {
        trophy: l.A.unsafe_rawColors.PRIMARY_400.css,
        locked: l.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: l.A.unsafe_rawColors.GREEN_330.css
    };

function h(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: l = r._3J.SIZE_40
    } = e, h = (0, s.Ay)(), _ = (0, d.vM)(t);
    if (null == _) return null;
    let m = (0, r.KjH)(l),
        {
            name: p,
            rarity: g
        } = _,
        {
            color: E
        } = (0, d.ag)(g),
        I = (0, a.Mw)(h) ? u : A,
        f = (m.size - m.offset - 2 * m.stroke) * .8,
        C = m.size - m.stroke,
        T = {
            width: .4 * f,
            height: .4 * f
        },
        N = {
            width: T.width + 1,
            height: T.height + 1,
            right: m.stroke + 1,
            bottom: m.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: c.kL,
        style: {
            width: C,
            height: C,
            padding: m.stroke
        },
        "aria-label": `${p()??""}`,
        children: [(0, i.jsx)("div", {
            className: c.r5,
            children: (0, i.jsx)(r.OR, {
                size: "custom",
                color: n ? E : I.trophy,
                width: f,
                height: f
            })
        }), !n && (0, i.jsx)("div", {
            className: c.dq,
            style: N,
            children: (0, i.jsx)(r.XAi, {
                size: "custom",
                color: I.locked,
                ...T
            })
        }), n && g === d.md.LEGENDARY && (0, i.jsx)("div", {
            className: c.dq,
            style: N,
            children: (0, i.jsx)(o.A, {
                className: c.ox,
                ...T
            })
        })]
    })
}
h.Sizes = r._3J