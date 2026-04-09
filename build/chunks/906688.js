/** chunk id: 906688 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var a = n(827734),
    r = n(582754),
    l = n(397927),
    s = n(736653),
    o = n(682174),
    d = n(927018),
    c = n(579157);
let u = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    },
    A = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    };

function _(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: a = l._3J.SIZE_40
    } = e, _ = (0, s.Ay)(), h = (0, d.vM)(t);
    if (null == h) return null;
    let m = (0, l.KjH)(a),
        {
            name: g,
            rarity: p
        } = h,
        {
            color: E
        } = (0, d.ag)(p),
        I = (0, r.Mw)(_) ? u : A,
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
            children: (0, i.jsx)(l.OR, {
                size: "custom",
                color: n ? E : I.trophy,
                width: f,
                height: f
            })
        }), !n && (0, i.jsx)("div", {
            className: c.dq,
            style: N,
            children: (0, i.jsx)(l.XAi, {
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
_.Sizes = l._3J