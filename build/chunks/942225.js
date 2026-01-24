/** Chunk was on 68406 **/
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
    v = r(927578),
    A = r(291661),
    f = r(985018),
    y = r(455509);
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
            className: y.c6,
            children: [(0, n.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: s
            }), null != i && (0, n.jsx)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: f.intl.format(f.t.Io7ozn, {
                    days: i.days.toString()
                })
            }), (0, n.jsxs)(c.Text, {
                variant: "text-xxs/normal",
                color: "text-muted",
                children: [f.intl.format(f.t.gW9R4B, {
                    date: a
                }), null != t.expiresAt && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("br", {}), f.intl.format(f.t.eZSTa5, {
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
                children: f.intl.string(f.t.nKdAlO)
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
        } = (0, d.A)(null == i ? void 0 : i.skuId), I = v.Ay.canUseCollectibles(t), S = null != b ? (0, u.gA)(b) : (0, u.G0)(O), E = !I && (0, u.gA)(b), P = (0, p.b)(!S || I), w = (0, m.Tk)(b), C = (0, m.o7)(O), T = l.useMemo(() => E ? f.intl.string(f.t["7vkeu5"]) : S && I && !P ? f.intl.string(f.t.hmyYK8) : S && !I && P ? f.intl.string(f.t.q0PlFn) : !S || I || P ? f.intl.string(f.t.fEGjVQ) : f.intl.string(f.t["0xs2sA"]), [E, S, I, P]);
        return null != i && (null == b || E) ? (0, n.jsxs)("div", {
            className: s()(y.kk, y.O7, x),
            children: [(0, n.jsx)("div", {
                className: y.Bo,
                children: (0, n.jsx)(A.A, {
                    user: t,
                    guildId: r,
                    avatarDecorationOverride: i
                })
            }), (0, n.jsxs)("div", {
                className: y.hx,
                children: [(0, n.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    children: (0, a.isEmpty)(w) ? C : w
                }), (0, n.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: T
                })]
            })]
        }) : (0, n.jsxs)("div", {
            className: s()(y.kk, x),
            children: [(0, n.jsxs)("div", {
                className: y.$M,
                children: [(0, n.jsx)("div", {
                    className: y.TB,
                    children: (0, n.jsx)(A.A, {
                        user: t,
                        guildId: r,
                        avatarDecorationOverride: i
                    })
                }), (0, n.jsx)("div", {
                    className: y.Kh,
                    children: _.map(e => {
                        let {
                            avatarSize: l,
                            showStatus: s
                        } = e;
                        return (0, n.jsx)("div", {
                            className: y.CX,
                            children: (0, n.jsx)(A.A, {
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