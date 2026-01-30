/** chunk id: 942225, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => O
});
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    a = r(735438),
    o = r(311907),
    c = r(397927),
    u = r(993408),
    d = r(821701),
    m = r(645178),
    p = r(702211),
    x = r(773669),
    g = r(290863),
    h = r(405269),
    A = r(927578),
    v = r(291661),
    y = r(985018),
    f = r(455509);
let _ = [{
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
    j = e => {
        let {
            purchase: t
        } = e, r = (0, o.bG)([x.default], () => x.default.locale), l = (0, u.gA)(t), i = null != t.expiresAt ? (0, h.Tf)(Date.now(), t.expiresAt) : null, s = (0, m.Tk)(t), a = t.purchasedAt.toLocaleDateString(r, {
            month: "long",
            year: "numeric"
        });
        return (0, n.jsxs)("div", {
            className: f.c6,
            children: [(0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: s
            }), null != i && (0, n.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: y.intl.format(y.t.Io7ozn, {
                    days: i.days.toString()
                })
            }), (0, n.jsxs)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [y.intl.format(y.t.gW9R4B, {
                    date: a
                }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("br", {}), y.intl.format(y.t.eZSTa5, {
                        date: t.expiresAt.toLocaleDateString(r, {
                            minute: "numeric",
                            hour: "numeric",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })
                    })]
                })]
            }), l && (0, n.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: y.intl.string(y.t.nKdAlO)
            })]
        })
    },
    O = e => {
        let {
            user: t,
            guildId: r,
            avatarDecoration: i,
            className: x
        } = e, h = (0, o.bG)([g.A], () => g.A.getStatus(t.id)), {
            product: O,
            purchase: b
        } = (0, d.A)(null == i ? void 0 : i.skuId), I = A.Ay.canUseCollectibles(t), P = null != b ? (0, u.gA)(b) : (0, u.G0)(O), S = !I && (0, u.gA)(b), E = (0, p.b)(!P || I), C = (0, m.Tk)(b), w = (0, m.o7)(O), T = l.useMemo(() => S ? y.intl.string(y.t["7vkeu5"]) : P && I && !E ? y.intl.string(y.t.hmyYK8) : P && !I && E ? y.intl.string(y.t.q0PlFn) : !P || I || E ? y.intl.string(y.t.fEGjVQ) : y.intl.string(y.t["0xs2sA"]), [S, P, I, E]);
        return null != i && (null == b || S) ? (0, n.jsxs)("div", {
            className: s()(f.kk, f.O7, x),
            children: [(0, n.jsx)("div", {
                className: f.Bo,
                children: (0, n.jsx)(v.A, {
                    user: t,
                    guildId: r,
                    avatarDecorationOverride: i
                })
            }), (0, n.jsxs)("div", {
                className: f.hx,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(C) ? w : C
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: T
                })]
            })]
        }) : (0, n.jsxs)("div", {
            className: s()(f.kk, x),
            children: [(0, n.jsxs)("div", {
                className: f.$M,
                children: [(0, n.jsx)("div", {
                    className: f.TB,
                    children: (0, n.jsx)(v.A, {
                        user: t,
                        guildId: r,
                        avatarDecorationOverride: i
                    })
                }), (0, n.jsx)("div", {
                    className: f.Kh,
                    children: _.map(e => {
                        let {
                            avatarSize: l,
                            showStatus: s
                        } = e;
                        return (0, n.jsx)("div", {
                            className: f.CX,
                            children: (0, n.jsx)(v.A, {
                                user: t,
                                guildId: r,
                                avatarSize: l,
                                avatarDecorationOverride: i,
                                status: s ? h : void 0,
                                "aria-hidden": !0
                            })
                        }, "".concat(l).concat(s))
                    })
                })]
            }), null != b && (0, n.jsx)(j, {
                purchase: b
            })]
        })
    }