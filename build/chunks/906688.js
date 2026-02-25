/** chunk id: 906688, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => C
});
var n = i(627968);
i(64700);
var r = i(827734),
    l = i(582754),
    a = i(397927),
    s = i(736653),
    o = i(682174),
    c = i(927018),
    d = i(489172);
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

function C(e) {
    let {
        achievementId: t,
        unlocked: i,
        size: r = a._3J.SIZE_40
    } = e, C = (0, s.Ay)(), E = (0, c.vM)(t);
    if (null == E) return null;
    let g = (0, a.KjH)(r),
        {
            name: A,
            rarity: _
        } = E,
        {
            color: p
        } = (0, c.ag)(_),
        m = (0, l.Mw)(C) ? u : h,
        L = (g.size - g.offset - 2 * g.stroke) * .8,
        O = g.size - g.stroke,
        f = {
            width: .4 * L,
            height: .4 * L
        },
        I = {
            width: f.width + 1,
            height: f.height + 1,
            right: g.stroke + 1,
            bottom: g.stroke + 1,
            padding: 0
        };
    return (0, n.jsxs)("div", {
        className: d.kL,
        style: {
            width: O,
            height: O,
            padding: g.stroke
        },
        "aria-label": `${A()??""}`,
        children: [(0, n.jsx)("div", {
            className: d.r5,
            children: (0, n.jsx)(a.OR, {
                size: "custom",
                color: i ? p : m.trophy,
                width: L,
                height: L
            })
        }), !i && (0, n.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, n.jsx)(a.XAi, {
                size: "custom",
                color: m.locked,
                ...f
            })
        }), i && _ === c.md.LEGENDARY && (0, n.jsx)("div", {
            className: d.dq,
            style: I,
            children: (0, n.jsx)(o.A, {
                className: d.ox,
                ...f
            })
        })]
    })
}
C.Sizes = a._3J