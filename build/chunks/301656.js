/** chunk id: 301656 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(827734),
    a = n(397927),
    o = n(532197),
    d = n(403362),
    c = n(874486),
    u = n(927018),
    m = n(508971),
    g = n(985018),
    _ = n(827735);

function x(e) {
    let {
        onBackClick: t
    } = e, n = (0, l.bG)([c.A], () => c.A.getAllUnlockedAchievements()), x = s.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]), h = s.useMemo(() => Object.values(u.l0).filter(d.Vq).filter(e => null == n[e.id]).sort((e, t) => e.rarity - t.rarity), [n]);
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(a.DUT, {
            onClick: t,
            className: _.vv,
            children: [(0, i.jsx)(o.A, {
                direction: o.A.Directions.LEFT,
                className: _.Kk
            }), (0, i.jsx)(a.Text, {
                variant: "text-lg/normal",
                color: "text-default",
                children: g.intl.string(g.t["13/7kX"])
            })]
        }), (0, i.jsxs)("div", {
            className: _.N1,
            children: [(0, i.jsxs)("div", {
                className: _.if,
                children: [(0, i.jsx)(a.Heading, {
                    variant: "heading-lg/extrabold",
                    color: "text-strong",
                    children: g.intl.string(g.t["6jI0hd"])
                }), (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: g.intl.string(g.t.GuUItX)
                })]
            }), (0, i.jsx)("div", {
                className: _.nr,
                children: (0, i.jsx)(a.OR, {
                    size: "custom",
                    color: r.A.unsafe_rawColors.ORANGE_345.css,
                    width: 40,
                    height: 40
                })
            })]
        }), x.length > 0 && (0, i.jsx)("div", {
            className: _.yF,
            children: (0, i.jsx)("div", {
                className: _.Eh,
                children: x.map(e => {
                    let {
                        achievementId: t,
                        dateUnlocked: n
                    } = e;
                    return (0, i.jsx)(m.A, {
                        achievementId: t,
                        dateUnlocked: n
                    }, t)
                })
            })
        }), h.length > 0 && (0, i.jsxs)("div", {
            className: _.yF,
            children: [(0, i.jsx)("div", {
                className: _.if,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-md/bold",
                    color: "text-default",
                    children: g.intl.string(g.t.GFyMg1)
                })
            }), (0, i.jsx)("div", {
                className: _.Eh,
                children: h.map(e => (0, i.jsx)(m.A, {
                    achievementId: e.id
                }, e.id))
            })]
        }), (0, i.jsx)("div", {
            className: _.yF,
            children: (0, i.jsx)("div", {
                className: _.F3
            })
        })]
    })
}