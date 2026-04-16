/** chunk id: 911647 params = (module,exports,require) **/
r.d(t, {
    A: () => C
});
var s = r(627968),
    n = r(64700),
    i = r(503698),
    a = r.n(i),
    l = r(735438),
    o = r(311907),
    c = r(397927),
    d = r(702211),
    u = r(773669),
    m = r(290863),
    x = r(405269),
    A = r(927578),
    h = r(993408),
    g = r(821701),
    _ = r(536572),
    p = r(162232),
    v = r(985018),
    j = r(304452);
let I = [{
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
    y = e => {
        let {
            purchase: t
        } = e, r = (0, o.bG)([u.default], () => u.default.locale), n = (0, h.gA)(t), i = null != t.expiresAt ? (0, x.Tf)(Date.now(), t.expiresAt) : null, a = (0, _.Sw)(t), l = t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
        });
        return (0, s.jsxs)("div", {
            className: j.c6,
            children: [(0, s.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: a
            }), null != i && (0, s.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: v.intl.format(v.t.Io7ozn, {
                    days: i.days.toString()
                })
            }), (0, s.jsxs)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [v.intl.format(v.t.gW9R4B, {
                    date: l
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
            }), n && (0, s.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: v.intl.string(v.t.nKdAlO)
            })]
        })
    },
    C = e => {
        let {
            user: t,
            guildId: r,
            avatarDecoration: i,
            className: u
        } = e, x = (0, o.bG)([m.A], () => m.A.getStatus(t.id)), {
            product: C,
            purchase: E
        } = (0, g.A)(i?.skuId), T = A.Ay.canUseCollectibles(t), S = null != E ? (0, h.gA)(E) : (0, h.G0)(C), f = !T && (0, h.gA)(E), k = (0, d.b)(!S || T), N = (0, _.Sw)(E), O = (0, _.VG)(C), P = n.useMemo(() => f ? v.intl.string(v.t["7vkeu5"]) : S && T && !k ? v.intl.string(v.t.hmyYK8) : S && !T && k ? v.intl.string(v.t.q0PlFn) : !S || T || k ? v.intl.string(v.t.fEGjVQ) : v.intl.string(v.t["0xs2sA"]), [f, S, T, k]);
        return null != i && (null == E || f) ? (0, s.jsxs)("div", {
            className: a()(j.kk, j.O7, u),
            children: [(0, s.jsx)("div", {
                className: j.Bo,
                children: (0, s.jsx)(p.A, {
                    user: t,
                    guildId: r,
                    avatarDecorationOverride: i
                })
            }), (0, s.jsxs)("div", {
                className: j.hx,
                children: [(0, s.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: (0, l.isEmpty)(N) ? O : N
                }), (0, s.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: P
                })]
            })]
        }) : (0, s.jsxs)("div", {
            className: a()(j.kk, u),
            children: [(0, s.jsxs)("div", {
                className: j.$M,
                children: [(0, s.jsx)("div", {
                    className: j.TB,
                    children: (0, s.jsx)(p.A, {
                        user: t,
                        guildId: r,
                        avatarDecorationOverride: i
                    })
                }), (0, s.jsx)("div", {
                    className: j.Kh,
                    children: I.map(e => {
                        let {
                            avatarSize: n,
                            showStatus: a
                        } = e;
                        return (0, s.jsx)("div", {
                            className: j.CX,
                            children: (0, s.jsx)(p.A, {
                                user: t,
                                guildId: r,
                                avatarSize: n,
                                avatarDecorationOverride: i,
                                status: a ? x : void 0,
                                "aria-hidden": !0
                            })
                        }, `${n}${a}`)
                    })
                })]
            }), null != E && (0, s.jsx)(y, {
                purchase: E
            })]
        })
    }