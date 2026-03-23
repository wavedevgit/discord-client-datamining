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
    d = n(715438);
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
            name: g,
            rarity: E
        } = C,
        {
            color: T
        } = (0, c.ag)(E),
        L = (0, l.Mw)(_) ? u : h,
        I = (A.size - A.offset - 2 * A.stroke) * .8,
        O = A.size - A.stroke,
        S = {
            width: .4 * I,
            height: .4 * I
        },
        p = {
            width: S.width + 1,
            height: S.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: O,
            height: O,
            padding: A.stroke
        },
        "aria-label": `${g()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? T : L.trophy,
                width: I,
                height: I
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: p,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: L.locked,
                ...S
            })
        }), n && E === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: p,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...S
            })
        })]
    })
}
_.Sizes = s._3J