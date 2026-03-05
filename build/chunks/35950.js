/** chunk id: 35950 params = (module,exports,require) **/
l.d(t, {
    A: () => v
});
var s = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    a = l(735438),
    c = l(311907),
    o = l(397927),
    u = l(993408),
    d = l(821701),
    m = l(536572),
    p = l(836602),
    x = l(773669),
    A = l(405269),
    h = l(927578),
    _ = l(359701),
    g = l(550111),
    j = l(985018),
    y = l(476318);
let C = e => {
        let {
            purchase: t,
            product: l,
            user: i
        } = e, d = (0, c.bG)([x.default], () => x.default.locale), p = (0, m.Sw)(t), _ = (0, m.VG)(l), g = h.Ay.canUseCollectibles(i), C = (0, u.gA)(t), v = (0, u.G0)(l), E = !g && C, [N, I] = n.useState(null);
        n.useEffect(() => {
            I(t?.expiresAt != null ? (0, A.Tf)(Date.now(), t.expiresAt) : null)
        }, [t?.expiresAt]);
        let b = null == t || E;
        return (0, s.jsxs)("div", {
            className: r()(y.ip, {
                [y.w6]: b
            }),
            children: [(0, s.jsx)(o.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: (0, a.isEmpty)(p) ? _ : p
            }), b ? (0, s.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: E ? j.intl.string(j.t.nD78oa) : v && g ? j.intl.string(j.t.hmyYK8) : v ? j.intl.string(j.t.JY1i0u) : j.intl.string(j.t.fEGjVQ)
            }) : (0, s.jsxs)(s.Fragment, {
                children: [null != N && (0, s.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.Io7ozn, {
                        days: N.days.toString()
                    })
                }), (0, s.jsxs)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [j.intl.format(j.t.gW9R4B, {
                        date: t.purchasedAt.toLocaleDateString(d, {
                            month: "long",
                            year: "numeric"
                        })
                    }), null != t.expiresAt && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
                            date: t.expiresAt.toLocaleDateString(d, {
                                minute: "numeric",
                                hour: "numeric",
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                        })]
                    })]
                }), C && (0, s.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.string(j.t.nKdAlO)
                })]
            })]
        })
    },
    v = e => {
        let {
            user: t,
            guildId: l,
            nameplate: n
        } = e, i = (0, c.cf)([p.A], () => p.A.getPendingChanges(l)), {
            product: a,
            purchase: o
        } = (0, d.A)(n?.skuId), m = h.Ay.canUseCollectibles(t), x = (0, u.gA)(o), A = null == o || !m && x;
        return (0, s.jsxs)("div", {
            className: r()(y.i1, {
                [y.Zj]: null != n && A
            }),
            children: [(0, s.jsx)("div", {
                className: y.u_,
                role: "img",
                "aria-label": j.intl.string(j.t.SZeUdR),
                children: (0, s.jsxs)("div", {
                    className: y.Xp,
                    "aria-hidden": !0,
                    children: [(0, s.jsx)(_._, {
                        width: 124,
                        opacity: .9
                    }), (0, s.jsx)(_._, {
                        width: 124,
                        opacity: .9
                    }), (0, s.jsx)(g.A, {
                        ...i,
                        user: t,
                        guildId: l,
                        nameplate: n,
                        isHighlighted: !0
                    }), (0, s.jsx)(_._, {
                        width: 124,
                        opacity: .9
                    }), (0, s.jsx)(_._, {
                        width: 124,
                        opacity: .9
                    })]
                })
            }), null != n && (0, s.jsx)(C, {
                purchase: o,
                product: a,
                user: t
            })]
        })
    }