/** chunk id: 906688 params = (module,exports,require) **/
n.d(e, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(579157);
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

function _(t) {
    let {
        achievementId: e,
        unlocked: n,
        size: r = s._3J.SIZE_40
    } = t, _ = (0, a.Ay)(), C = (0, c.vM)(e);
    if (null == C) return null;
    let A = (0, s.KjH)(r),
        {
            name: E,
            rarity: T
        } = C,
        {
            color: g
        } = (0, c.ag)(T),
        f = (0, l.Mw)(_) ? u : h,
        O = (A.size - A.offset - 2 * A.stroke) * .8,
        p = A.size - A.stroke,
        L = {
            width: .4 * O,
            height: .4 * O
        },
        I = {
            width: L.width + 1,
            height: L.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: p,
            height: p,
            padding: A.stroke
        },
        "aria-label": `${E()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? g : f.trophy,
                width: O,
                height: O
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: f.locked,
                ...L
            })
        }), n && T === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...L
            })
        })]
    })
}
_.Sizes = s._3J