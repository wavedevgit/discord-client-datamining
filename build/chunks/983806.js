/** Chunk was on 5606 **/
/** chunk id: 983806, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => A
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(843282),
    o = n(397927),
    c = n(10005),
    d = n(809697),
    u = n(153739),
    p = n(834981),
    _ = n(343906),
    m = n(191627),
    g = n(842130),
    f = n(985018),
    b = n(377148);
let h = () => {
        let e = (0, p.vx)(),
            t = (0, u.y3)(),
            {
                selectTeenUser: n
            } = (0, c.A)({}),
            l = e.map(e => ({
                label: e,
                value: e
            })),
            d = i.useCallback(e => (0, r.jsx)(_.O, {
                userId: e.value,
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            }), []);
        return 0 === e.length ? null : (0, r.jsx)("div", {
            className: s()(b.Gq, {
                [b.wS]: e.length > 1
            }),
            children: e.length > 1 ? (0, r.jsx)(a.Pw, {
                renderOptionLabel: d,
                renderOptionValue: e => {
                    let [t] = e;
                    return d(t)
                },
                serialize: e => e,
                select: e => {
                    n(e)
                },
                isSelected: e => e === (null == t ? void 0 : t.id),
                options: l,
                "data-migration-pending": !0
            }) : (0, r.jsx)(_.O, {
                userId: e[0],
                avatarSize: o._3J.SIZE_24,
                hideUserTag: !0
            })
        })
    },
    A = () => {
        let {
            selectedTab: e,
            handleTabChange: t
        } = (0, d.A)(), n = i.useCallback(() => {
            t(m.u9.ACTIVITY)
        }, [t]);
        return (0, r.jsxs)(o.BJc, {
            gap: 32,
            children: [(0, r.jsxs)(o.DUT, {
                className: b.Gv,
                onClick: n,
                "aria-label": f.intl.string(f.t.ybUZql),
                children: [(0, r.jsx)(o.Zge, {
                    size: "sm",
                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT
                }), (0, r.jsx)(o.Text, {
                    variant: "eyebrow",
                    color: "text-default",
                    children: f.intl.string(f.t["13/7kX"])
                })]
            }), (0, r.jsxs)(o.BJc, {
                direction: "horizontal",
                align: "center",
                justify: "space-between",
                children: [(0, r.jsxs)(o.BJc, {
                    gap: 4,
                    className: b.gn,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: f.intl.string(g.default.RZqaJn)
                    }), (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        children: f.intl.string(e === m.u9.CONTENT_AND_SOCIAL ? f.t["+o1pDZ"] : f.t.OAuOHD)
                    })]
                }), (0, r.jsx)(h, {})]
            })]
        })
    }