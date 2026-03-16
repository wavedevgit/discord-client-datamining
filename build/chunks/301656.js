/** chunk id: 301656 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(397927),
    o = n(532197),
    d = n(403362),
    c = n(874486),
    u = n(927018),
    _ = n(508971),
    m = n(985018),
    g = n(872722);

function A(e) {
    let {
        onBackClick: t
    } = e, n = (0, l.bG)([c.A], () => c.A.getAllUnlockedAchievements()), A = s.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), h = s.useMemo(() => Object.values(u.l0).filter(d.Vq).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(r.DUT, {
            onClick: t,
            className: g.vv,
            children: [(0, i.jsx)(o.A, {
                direction: o.A.Directions.LEFT,
                className: g.Kk
            }), (0, i.jsx)(r.Text, {
                variant: "text-lg/normal",
                color: "text-default",
                children: m.intl.string(m.t["13/7kX"])
            })]
        }), (0, i.jsxs)("div", {
            className: g.N1,
            children: [(0, i.jsxs)("div", {
                className: g.if,
                children: [(0, i.jsx)(r.Heading, {
                    variant: "heading-lg/extrabold",
                    color: "text-strong",
                    children: m.intl.string(m.t["6jI0hd"])
                }), (0, i.jsx)(r.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: m.intl.string(m.t.GuUItX)
                })]
            }), (0, i.jsx)("div", {
                className: g.nr,
                children: (0, i.jsx)(r.OR, {
                    size: "custom",
                    color: a.A.unsafe_rawColors.ORANGE_345.css,
                    width: 40,
                    height: 40
                })
            })]
        }), A.length > 0 && (0, i.jsx)("div", {
            className: g.yF,
            children: (0, i.jsx)("div", {
                className: g.Eh,
                children: A.map(e => {
                    let {
                        achievementId: t,
                        dateUnlocked: n
                    } = e;
                    return (0, i.jsx)(_.A, {
                        achievementId: t,
                        dateUnlocked: n
                    }, t)
                })
            })
        }), h.length > 0 && (0, i.jsxs)("div", {
            className: g.yF,
            children: [(0, i.jsx)("div", {
                className: g.if,
                children: (0, i.jsx)(r.Text, {
                    variant: "text-md/bold",
                    color: "text-default",
                    children: m.intl.string(m.t.GFyMg1)
                })
            }), (0, i.jsx)("div", {
                className: g.Eh,
                children: h.map(e => (0, i.jsx)(_.A, {
                    achievementId: e.id
                }, e.id))
            })]
        }), (0, i.jsx)("div", {
            className: g.yF,
            children: (0, i.jsx)("div", {
                className: g.F3
            })
        })]
    })
}