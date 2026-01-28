/** Chunk was on 5606 **/
/** chunk id: 301656, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(638769);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(827734),
    a = n(397927),
    o = n(532197),
    c = n(403362),
    d = n(874486),
    u = n(927018),
    p = n(508971),
    _ = n(985018),
    m = n(872722);

function g(e) {
    let {
        onBackClick: t
    } = e, n = (0, l.bG)([d.A], () => d.A.getAllUnlockedAchievements()), g = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), f = i.useMemo(() => Object.values(u.l0).filter(c.Vq).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(a.DUT, {
            onClick: t,
            className: m.vv,
            children: [(0, r.jsx)(o.A, {
                direction: o.A.Directions.LEFT,
                className: m.Kk
            }), (0, r.jsx)(a.Text, {
                variant: "text-lg/normal",
                color: "text-default",
                children: _.intl.string(_.t["13/7kX"])
            })]
        }), (0, r.jsxs)("div", {
            className: m.N1,
            children: [(0, r.jsxs)("div", {
                className: m.if,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-lg/extrabold",
                    color: "text-strong",
                    children: _.intl.string(_.t["6jI0hd"])
                }), (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: _.intl.string(_.t.GuUItX)
                })]
            }), (0, r.jsx)("div", {
                className: m.nr,
                children: (0, r.jsx)(a.OR, {
                    size: "custom",
                    color: s.A.unsafe_rawColors.ORANGE_345.css,
                    width: 40,
                    height: 40
                })
            })]
        }), g.length > 0 && (0, r.jsx)("div", {
            className: m.yF,
            children: (0, r.jsx)("div", {
                className: m.Eh,
                children: g.map(e => {
                    let {
                        achievementId: t,
                        dateUnlocked: n
                    } = e;
                    return (0, r.jsx)(p.A, {
                        achievementId: t,
                        dateUnlocked: n
                    }, t)
                })
            })
        }), f.length > 0 && (0, r.jsxs)("div", {
            className: m.yF,
            children: [(0, r.jsx)("div", {
                className: m.if,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-md/bold",
                    color: "text-default",
                    children: _.intl.string(_.t.GFyMg1)
                })
            }), (0, r.jsx)("div", {
                className: m.Eh,
                children: f.map(e => (0, r.jsx)(p.A, {
                    achievementId: e.id
                }, e.id))
            })]
        }), (0, r.jsx)("div", {
            className: m.yF,
            children: (0, r.jsx)("div", {
                className: m.F3
            })
        })]
    })
}