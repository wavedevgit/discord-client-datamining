/** chunk id: 906688 params = (module,exports,require) **/
n.d(e, {
    A: () => A
});
var i = n(627968);
n(64700);
var r = n(827734),
    l = n(582754),
    s = n(397927),
    a = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(489172);
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

function A(t) {
    let {
        achievementId: e,
        unlocked: n,
        size: r = s._3J.SIZE_40
    } = t, A = (0, a.Ay)(), _ = (0, c.vM)(e);
    if (null == _) return null;
    let C = (0, s.KjH)(r),
        {
            name: g,
            rarity: E
        } = _,
        {
            color: T
        } = (0, c.ag)(E),
        I = (0, l.Mw)(A) ? u : h,
        L = (C.size - C.offset - 2 * C.stroke) * .8,
        O = C.size - C.stroke,
        S = {
            width: .4 * L,
            height: .4 * L
        },
        m = {
            width: S.width + 1,
            height: S.height + 1,
            right: C.stroke + 1,
            bottom: C.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: O,
            height: O,
            padding: C.stroke
        },
        "aria-label": `${g()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? T : I.trophy,
                width: L,
                height: L
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: m,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: I.locked,
                ...S
            })
        }), n && E === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: m,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...S
            })
        })]
    })
}
A.Sizes = s._3J