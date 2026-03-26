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
    d = n(927018),
    c = n(579157);
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
        size: r = a._3J.SIZE_40
    } = t, _ = (0, s.Ay)(), A = (0, d.vM)(e);
    if (null == A) return null;
    let C = (0, a.KjH)(r),
        {
            name: g,
            rarity: E
        } = A,
        {
            color: T
        } = (0, d.ag)(E),
        I = (0, l.Mw)(_) ? u : h,
        O = (C.size - C.offset - 2 * C.stroke) * .8,
        f = C.size - C.stroke,
        L = {
            width: .4 * O,
            height: .4 * O
        },
        p = {
            width: L.width + 1,
            height: L.height + 1,
            right: C.stroke + 1,
            bottom: C.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: c.kL,
        style: {
            width: f,
            height: f,
            padding: C.stroke
        },
        "aria-label": `${g()??""}`,
        children: [(0, i.jsx)("div", {
            className: c.r5,
            children: (0, i.jsx)(a.OR, {
                size: "custom",
                color: n ? T : I.trophy,
                width: O,
                height: O
            })
        }), !n && (0, i.jsx)("div", {
            className: c.dq,
            style: p,
            children: (0, i.jsx)(a.XAi, {
                size: "custom",
                color: I.locked,
                ...L
            })
        }), n && E === d.md.LEGENDARY && (0, i.jsx)("div", {
            className: c.dq,
            style: p,
            children: (0, i.jsx)(o.A, {
                className: c.ox,
                ...L
            })
        })]
    })
}
_.Sizes = a._3J