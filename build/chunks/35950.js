/** chunk id: 35950 params = (module,exports,require) **/
l.d(t, {
    A: () => v
});
var n = l(627968),
    s = l(64700),
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
    g = l(927578),
    h = l(359701),
    _ = l(550111),
    j = l(985018),
    y = l(514748);
let C = e => {
        let {
            purchase: t,
            product: l,
            user: i
        } = e, d = (0, c.bG)([x.default], () => x.default.locale), p = (0, m.Sw)(t), h = (0, m.VG)(l), _ = g.Ay.canUseCollectibles(i), C = (0, u.gA)(t), v = (0, u.G0)(l), E = !_ && C, [I, T] = s.useState(null);
        s.useEffect(() => {
            T(t?.expiresAt != null ? (0, A.Tf)(Date.now(), t.expiresAt) : null)
        }, [t?.expiresAt]);
        let N = null == t || E;
        return (0, n.jsxs)("div", {
            className: r()(y.ip, {
                [y.w6]: N
            }),
            children: [(0, n.jsx)(o.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: (0, a.isEmpty)(p) ? h : p
            }), N ? (0, n.jsx)(o.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: E ? j.intl.string(j.t.nD78oa) : v && _ ? j.intl.string(j.t.hmyYK8) : v ? j.intl.string(j.t.JY1i0u) : j.intl.string(j.t.fEGjVQ)
            }) : (0, n.jsxs)(n.Fragment, {
                children: [null != I && (0, n.jsx)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: j.intl.format(j.t.Io7ozn, {
                        days: I.days.toString()
                    })
                }), (0, n.jsxs)(o.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [j.intl.format(j.t.gW9R4B, {
                        date: t.purchasedAt.toLocaleDateString(d, {
                            month: "long",
                            year: "numeric"
                        })
                    }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("br", {}), j.intl.format(j.t.eZSTa5, {
                            date: t.expiresAt.toLocaleDateString(d, {
                                minute: "numeric",
                                hour: "numeric",
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                        })]
                    })]
                }), C && (0, n.jsx)(o.Text, {
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
            nameplate: s
        } = e, i = (0, c.cf)([p.A], () => p.A.getPendingChanges(l)), {
            product: a,
            purchase: o
        } = (0, d.A)(s?.skuId), m = g.Ay.canUseCollectibles(t), x = (0, u.gA)(o), A = null == o || !m && x;
        return (0, n.jsxs)("div", {
            className: r()(y.i1, {
                [y.Zj]: null != s && A
            }),
            children: [(0, n.jsx)("div", {
                className: y.u_,
                role: "img",
                "aria-label": j.intl.string(j.t.SZeUdR),
                children: (0, n.jsxs)("div", {
                    className: y.Xp,
                    "aria-hidden": !0,
                    children: [(0, n.jsx)(h._, {
                        width: 124,
                        opacity: .9
                    }), (0, n.jsx)(h._, {
                        width: 124,
                        opacity: .9
                    }), (0, n.jsx)(_.A, {
                        ...i,
                        user: t,
                        guildId: l,
                        nameplate: s,
                        isHighlighted: !0
                    }), (0, n.jsx)(h._, {
                        width: 124,
                        opacity: .9
                    }), (0, n.jsx)(h._, {
                        width: 124,
                        opacity: .9
                    })]
                })
            }), null != s && (0, n.jsx)(C, {
                purchase: o,
                product: a,
                user: t
            })]
        })
    }