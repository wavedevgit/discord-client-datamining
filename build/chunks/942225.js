/** chunk id: 942225 params = (module,exports,require) **/
r.d(t, {
    A: () => f
});
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(735438),
    o = r(311907),
    c = r(397927),
    d = r(993408),
    u = r(821701),
    m = r(536572),
    x = r(702211),
    A = r(773669),
    h = r(290863),
    g = r(405269),
    p = r(927578),
    _ = r(291661),
    v = r(985018),
    j = r(455509);
let y = [{
        avatarSize: c._3J.SIZE_40,
        showStatus: !1
    }, {
        avatarSize: c._3J.SIZE_32,
        showStatus: !1
    }, {
        avatarSize: c._3J.SIZE_40,
        showStatus: !0
    }, {
        avatarSize: c._3J.SIZE_32,
        showStatus: !0
    }],
    I = e => {
        let {
            purchase: t
        } = e, r = (0, o.bG)([A.default], () => A.default.locale), i = (0, d.gA)(t), n = null != t.expiresAt ? (0, g.Tf)(Date.now(), t.expiresAt) : null, l = (0, m.Sw)(t), a = t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
        });
        return (0, s.jsxs)("div", {
            className: j.c6,
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: l
            }), null != n && (0, s.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: v.intl.format(v.t.Io7ozn, {
                    days: n.days.toString()
                })
            }), (0, s.jsxs)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [v.intl.format(v.t.gW9R4B, {
                    date: a
                }), null != t.expiresAt && (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("br", {}), v.intl.format(v.t.eZSTa5, {
                        date: t.expiresAt.toLocaleDateString(r, {
                            minute: "numeric",
                            hour: "numeric",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })
                    })]
                })]
            }), i && (0, s.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: v.intl.string(v.t.nKdAlO)
            })]
        })
    },
    f = e => {
        let {
            user: t,
            guildId: r,
            avatarDecoration: n,
            className: A
        } = e, g = (0, o.bG)([h.A], () => h.A.getStatus(t.id)), {
            product: f,
            purchase: C
        } = (0, u.A)(n?.skuId), E = p.Ay.canUseCollectibles(t), S = null != C ? (0, d.gA)(C) : (0, d.G0)(f), T = !E && (0, d.gA)(C), k = (0, x.b)(!S || E), N = (0, m.Sw)(C), P = (0, m.VG)(f), O = i.useMemo(() => T ? v.intl.string(v.t["7vkeu5"]) : S && E && !k ? v.intl.string(v.t.hmyYK8) : S && !E && k ? v.intl.string(v.t.q0PlFn) : !S || E || k ? v.intl.string(v.t.fEGjVQ) : v.intl.string(v.t["0xs2sA"]), [T, S, E, k]);
        return null != n && (null == C || T) ? (0, s.jsxs)("div", {
            className: l()(j.kk, j.O7, A),
            children: [(0, s.jsx)("div", {
                className: j.Bo,
                children: (0, s.jsx)(_.A, {
                    user: t,
                    guildId: r,
                    avatarDecorationOverride: n
                })
            }), (0, s.jsxs)("div", {
                className: j.hx,
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(N) ? P : N
                }), (0, s.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: O
                })]
            })]
        }) : (0, s.jsxs)("div", {
            className: l()(j.kk, A),
            children: [(0, s.jsxs)("div", {
                className: j.$M,
                children: [(0, s.jsx)("div", {
                    className: j.TB,
                    children: (0, s.jsx)(_.A, {
                        user: t,
                        guildId: r,
                        avatarDecorationOverride: n
                    })
                }), (0, s.jsx)("div", {
                    className: j.Kh,
                    children: y.map(e => {
                        let {
                            avatarSize: i,
                            showStatus: l
                        } = e;
                        return (0, s.jsx)("div", {
                            className: j.CX,
                            children: (0, s.jsx)(_.A, {
                                user: t,
                                guildId: r,
                                avatarSize: i,
                                avatarDecorationOverride: n,
                                status: l ? g : void 0,
                                "aria-hidden": !0
                            })
                        }, `${i}${l}`)
                    })
                })]
            }), null != C && (0, s.jsx)(I, {
                purchase: C
            })]
        })
    }