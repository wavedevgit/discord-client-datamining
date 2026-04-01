/** chunk id: 983806 params = (module,exports,require) **/
n.d(t, {
    b: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(843282),
    o = n(397927),
    d = n(10005),
    c = n(809697),
    u = n(153739),
    m = n(834981),
    g = n(343906),
    _ = n(191627),
    x = n(842130),
    A = n(985018),
    h = n(967629);
let p = () => {
        let e = (0, m.vx)(),
            t = (0, u.y3)(),
            {
                selectTeenUser: n
            } = (0, d.A)({}),
            l = e.map(e => ({
                label: e,
                value: e
            })),
            c = s.useCallback(e => (0, i.jsx)(g.O, {
                userId: e.value,
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            }), []);
        return 0 === e.length ? null : (0, i.jsx)("div", {
            className: a()(h.Gq, {
                [h.wS]: e.length > 1
            }),
            children: e.length > 1 ? (0, i.jsx)(r.Pw, {
                renderOptionLabel: c,
                renderOptionValue: e => {
                    let [t] = e;
                    return c(t)
                },
                serialize: e => e,
                select: e => {
                    n(e)
                },
                isSelected: e => e === t?.id,
                options: l,
                "data-migration-pending": !0
            }) : (0, i.jsx)(g.O, {
                userId: e[0],
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            })
        })
    },
    T = () => {
        let {
            selectedTab: e,
            handleTabChange: t
        } = (0, c.A)(), n = s.useCallback(() => {
            t(_.u9.ACTIVITY)
        }, [t]);
        return (0, i.jsxs)(o.BJc, {
            gap: 32,
            children: [(0, i.jsxs)(o.DUT, {
                className: h.Gv,
                onClick: n,
                "aria-label": A.intl.string(A.t.ybUZql),
                children: [(0, i.jsx)(o.Zge, {
                    size: "sm",
                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }), (0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: A.intl.string(A.t["13/7kX"])
                })]
            }), (0, i.jsxs)(o.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [(0, i.jsxs)(o.BJc, {
                    gap: 4,
                    className: h.gn,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: A.intl.string(x.default.RZqaJn)
                    }), (0, i.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: A.intl.string(e === _.u9.CONTENT_AND_SOCIAL ? A.t["+o1pDZ"] : A.t.OAuOHD)
                    })]
                }), (0, i.jsx)(p, {})]
            })]
        })
    }