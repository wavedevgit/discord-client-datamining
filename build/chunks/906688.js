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
    u = n(579157);
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
        size: r = s._3J.SIZE_40
    } = t, _ = (0, a.Ay)(), E = (0, c.vM)(e);
    if (null == E) return null;
    let C = (0, s.KjH)(r),
        {
            name: A,
            rarity: T
        } = E,
        {
            color: g
        } = (0, c.ag)(T),
        L = (0, l.Mw)(_) ? d : h,
        O = (C.size - C.offset - 2 * C.stroke) * .8,
        S = C.size - C.stroke,
        I = {
            width: .4 * O,
            height: .4 * O
        },
        m = {
            width: I.width + 1,
            height: I.height + 1,
            right: C.stroke + 1,
            bottom: C.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: u.kL,
        style: {
            width: S,
            height: S,
            padding: C.stroke
        },
        "aria-label": `${A()??""}`,
        children: [(0, i.jsx)("div", {
            className: u.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? g : L.trophy,
                width: O,
                height: O
            })
        }), !n && (0, i.jsx)("div", {
            className: u.dq,
            style: m,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: L.locked,
                ...I
            })
        }), n && T === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: u.dq,
            style: m,
            children: (0, i.jsx)(o.A, {
                className: u.ox,
                ...I
            })
        })]
    })
}
_.Sizes = s._3J