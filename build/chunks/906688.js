/** chunk id: 906688 params = (module,exports,require) **/
n.d(e, {
    A: () => _
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(582754),
    a = n(397927),
    s = n(736653),
    o = n(682174),
    u = n(927018),
    c = n(579157);
let d = {
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
        size: r = a._3J.SIZE_40
    } = t, _ = (0, s.Ay)(), E = (0, u.vM)(e);
    if (null == E) return null;
    let A = (0, a.KjH)(r),
        {
            name: C,
            rarity: T
        } = E,
        {
            color: g
        } = (0, u.ag)(T),
        f = (0, l.Mw)(_) ? d : h,
        O = (A.size - A.offset - 2 * A.stroke) * .8,
        I = A.size - A.stroke,
        p = {
            width: .4 * O,
            height: .4 * O
        },
        L = {
            width: p.width + 1,
            height: p.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: c.kL,
        style: {
            width: I,
            height: I,
            padding: A.stroke
        },
        "aria-label": `${C()??""}`,
        children: [(0, i.jsx)("div", {
            className: c.r5,
            children: (0, i.jsx)(a.OR, {
                size: "custom",
                color: n ? g : f.trophy,
                width: O,
                height: O
            })
        }), !n && (0, i.jsx)("div", {
            className: c.dq,
            style: L,
            children: (0, i.jsx)(a.XAi, {
                size: "custom",
                color: f.locked,
                ...p
            })
        }), n && T === u.md.LEGENDARY && (0, i.jsx)("div", {
            className: c.dq,
            style: L,
            children: (0, i.jsx)(o.A, {
                className: c.ox,
                ...p
            })
        })]
    })
}
_.Sizes = a._3J