/** chunk id: 983806, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => E
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(843282),
    o = n(397927),
    c = n(10005),
    d = n(809697),
    u = n(153739),
    _ = n(834981),
    m = n(343906),
    A = n(191627),
    g = n(870236),
    h = n(985018),
    x = n(888718);
let p = () => {
        let e = (0, _.vx)(),
            t = (0, u.y3)(),
            {
                selectTeenUser: n
            } = (0, c.A)({}),
            a = e.map(e => ({
                label: e,
                value: e
            })),
            d = s.useCallback(e => (0, i.jsx)(m.O, {
                userId: e.value,
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            }), []);
        return 0 === e.length ? null : (0, i.jsx)("div", {
            className: l()(x.Gq, {
                [x.wS]: e.length > 1
            }),
            children: e.length > 1 ? (0, i.jsx)(r.Pw, {
                renderOptionLabel: d,
                renderOptionValue: e => {
                    let [t] = e;
                    return d(t)
                },
                serialize: e => e,
                select: e => {
                    n(e)
                },
                isSelected: e => e === t?.id,
                options: a,
                "data-migration-pending": !0
            }) : (0, i.jsx)(m.O, {
                userId: e[0],
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            })
        })
    },
    E = () => {
        let {
            selectedTab: e,
            handleTabChange: t
        } = (0, d.A)(), n = s.useCallback(() => {
            t(A.u9.ACTIVITY)
        }, [t]);
        return (0, i.jsxs)(o.BJc, {
            gap: 32,
            children: [(0, i.jsxs)(o.DUT, {
                className: x.Gv,
                onClick: n,
                "aria-label": h.intl.string(h.t.ybUZql),
                children: [(0, i.jsx)(o.Zge, {
                    size: "sm",
                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }), (0, i.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: h.intl.string(h.t["13/7kX"])
                })]
            }), (0, i.jsxs)(o.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [(0, i.jsxs)(o.BJc, {
                    gap: 4,
                    className: x.gn,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: h.intl.string(g.default.RZqaJn)
                    }), (0, i.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: h.intl.string(e === A.u9.CONTENT_AND_SOCIAL ? h.t["+o1pDZ"] : h.t.OAuOHD)
                    })]
                }), (0, i.jsx)(p, {})]
            })]
        })
    }