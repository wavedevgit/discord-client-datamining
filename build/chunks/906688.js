/** chunk id: 906688 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(582754),
    a = n(397927),
    s = n(736653),
    o = n(682174),
    d = n(927018),
    c = n(715438);
let u = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    },
    A = {
        trophy: r.A.unsafe_rawColors.PRIMARY_400.css,
        locked: r.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: r.A.unsafe_rawColors.GREEN_330.css
    };

function h(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: r = a._3J.SIZE_40
    } = e, h = (0, s.Ay)(), _ = (0, d.vM)(t);
    if (null == _) return null;
    let m = (0, a.KjH)(r),
        {
            name: g,
            rarity: p
        } = _,
        {
            color: E
        } = (0, d.ag)(p),
        I = (0, l.Mw)(h) ? u : A,
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
        "aria-label": `${g()??""}`,
        children: [(0, i.jsx)("div", {
            className: c.r5,
            children: (0, i.jsx)(a.OR, {
                size: "custom",
                color: n ? E : I.trophy,
                width: f,
                height: f
            })
        }), !n && (0, i.jsx)("div", {
            className: c.dq,
            style: N,
            children: (0, i.jsx)(a.XAi, {
                size: "custom",
                color: I.locked,
                ...T
            })
        }), n && p === d.md.LEGENDARY && (0, i.jsx)("div", {
            className: c.dq,
            style: N,
            children: (0, i.jsx)(o.A, {
                className: c.ox,
                ...T
            })
        })]
    })
}
h.Sizes = a._3J