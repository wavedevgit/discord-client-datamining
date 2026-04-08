/** chunk id: 906688 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(827734),
    r = n(582754),
    s = n(397927),
    l = n(736653),
    o = n(682174),
    c = n(927018),
    d = n(983684);
let _ = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    },
    h = {
        trophy: a.A.unsafe_rawColors.PRIMARY_400.css,
        locked: a.A.unsafe_rawColors.PRIMARY_400.css,
        unlocked: a.A.unsafe_rawColors.GREEN_330.css
    };

function u(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: a = s._3J.SIZE_40
    } = e, u = (0, l.Ay)(), C = (0, c.vM)(t);
    if (null == C) return null;
    let A = (0, s.KjH)(a),
        {
            name: g,
            rarity: E
        } = C,
        {
            color: T
        } = (0, c.ag)(E),
        m = (0, r.Mw)(u) ? _ : h,
        p = (A.size - A.offset - 2 * A.stroke) * .8,
        L = A.size - A.stroke,
        O = {
            width: .4 * p,
            height: .4 * p
        },
        I = {
            width: O.width + 1,
            height: O.height + 1,
            right: A.stroke + 1,
            bottom: A.stroke + 1,
            padding: 0
        };
    return (0, i.jsxs)("div", {
        className: d.kL,
        style: {
            width: L,
            height: L,
            padding: A.stroke
        },
        "aria-label": `${g()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? T : m.trophy,
                width: p,
                height: p
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: m.locked,
                ...O
            })
        }), n && E === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...O
            })
        })]
    })
}
u.Sizes = s._3J