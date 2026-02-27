/** chunk id: 906688, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
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

function C(e) {
    let {
        achievementId: t,
        unlocked: n,
        size: r = s._3J.SIZE_40
    } = e, C = (0, a.Ay)(), E = (0, c.vM)(t);
    if (null == E) return null;
    let A = (0, s.KjH)(r),
        {
            name: _,
            rarity: g
        } = E,
        {
            color: p
        } = (0, c.ag)(g),
        m = (0, l.Mw)(C) ? u : h,
        L = (A.size - A.offset - 2 * A.stroke) * .8,
        O = A.size - A.stroke,
        f = {
            width: .4 * L,
            height: .4 * L
        },
        T = {
            width: f.width + 1,
            height: f.height + 1,
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
        "aria-label": `${_()??""}`,
        children: [(0, i.jsx)("div", {
            className: d.r5,
            children: (0, i.jsx)(s.OR, {
                size: "custom",
                color: n ? p : m.trophy,
                width: L,
                height: L
            })
        }), !n && (0, i.jsx)("div", {
            className: d.dq,
            style: T,
            children: (0, i.jsx)(s.XAi, {
                size: "custom",
                color: m.locked,
                ...f
            })
        }), n && g === c.md.LEGENDARY && (0, i.jsx)("div", {
            className: d.dq,
            style: T,
            children: (0, i.jsx)(o.A, {
                className: d.ox,
                ...f
            })
        })]
    })
}
C.Sizes = s._3J