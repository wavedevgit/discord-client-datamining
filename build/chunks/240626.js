/** chunk id: 240626 params = (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(502572),
    d = n(732955),
    c = n(397927),
    u = n(775602),
    m = n(531260),
    _ = n(657516),
    g = n(983511),
    A = n(342744),
    x = n(87719),
    p = n(287809),
    h = n(166403),
    f = n(473145),
    T = n(927578),
    E = n(432334),
    S = n(101135),
    b = n(708030),
    C = n(652215),
    N = n(788868),
    v = n(985018),
    I = n(652804);

function j(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: l,
        onUncancel: a,
        premiumSubscription: r,
        useReducedMotion: u,
        fractionalState: m
    } = e, _ = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), g = (0, f.I5)(t), A = r?.isPaused === !0 && m === N.xc.NONE, x = v.intl.string(v.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: I.Hp,
        children: [(0, i.jsxs)("div", {
            className: I.YL,
            children: [(0, i.jsx)(b.A, {
                className: I.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: g,
                useReducedMotion: u
            }), g && null != r ? (0, i.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: v.intl.format(v.t.Z4ULRD, {
                    date: r.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != _ ? (0, i.jsx)(S.A, {
                cooldown: _.getTime()
            }) : (0, i.jsx)(c.Text, {
                className: I.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: v.intl.string(v.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: I.E7,
            children: [n && !g && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: x,
                "aria-label": x.toString(),
                children: e => (0, i.jsx)("div", {
                    className: I.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: v.intl.string(v.t.twFU3R),
                        onClick: () => l(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            }), g && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: x,
                "aria-label": x.toString(),
                children: e => (0, i.jsx)("div", {
                    className: I.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: v.intl.string(v.t["2glQNp"]),
                        onClick: () => a(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function y(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(g.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function O(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(A.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let R = function(e) {
    let t, n, l, {
            guildBoostSlots: d
        } = e,
        g = (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
        A = g?.isPausedOrPausePending === !0,
        {
            fractionalState: S
        } = (0, m.A)(),
        b = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        R = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        L = S === N.xc.FP_SUB_PAUSED,
        P = A && !L,
        {
            appliedGuildBoostSlots: D,
            unappliedGuildBoostSlots: G,
            numActiveGuildBoostSlots: M,
            hasCooldownBoosts: k,
            allGuildBoostsAreOnCooldown: U
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return d.forEach(l => {
                !(0, f.I5)(l) && n++, l.isOnCooldown() ? i = !0 : s = !1, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: i,
                allGuildBoostsAreOnCooldown: s
            }
        }, [d]),
        w = null != g ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(g.planId) : 0,
        V = Math.max(0, w - D.length),
        B = M > w,
        F = w === d.length,
        H = F ? V : 1,
        z = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < H; t++) e.push((0, i.jsx)(E.A, {
                className: I.YA,
                useReducedMotion: b
            }, t));
            return e
        }, [H, b]),
        Y = s.useMemo(() => G.find(e => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let X = G.length;
    if (t = F ? v.intl.formatToPlainString(U ? v.t["3DW6Dc"] : v.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: X
        }) : v.intl.formatToPlainString(U ? v.t["3DW6Dc"] : v.t.BPadnO, {
            numUnappliedGuildBoostSlots: X
        }), T.Ay.isPremium(R)) {
        let e = (e, t) => (0, i.jsx)(c.DUT, {
            className: I.nw,
            tag: "span",
            onClick: () => {
                (0, x.e)()
            },
            children: e
        }, t);
        n = U ? v.intl.format(v.t.omcpSE, {
            learnMoreHook: e
        }) : v.intl.format(v.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: X,
            learnMoreHook: e
        })
    } else n = U ? v.intl.string(v.t["8pcUZi"]) : v.intl.formatToPlainString(v.t.Kaw82o, {
        numUnappliedGuildBoostSlots: X
    });
    return l = A && S === N.xc.NONE ? v.intl.string(v.t.mOWsF1) : v.intl.string(v.t.xr4m5B), (0, i.jsx)("div", {
        className: I.iE,
        children: (0, i.jsxs)("div", {
            className: a()(I.Qs, [I.Yq]),
            children: [(0, i.jsxs)("div", {
                className: I.wx,
                children: [(0, i.jsxs)("div", {
                    className: I.RW,
                    children: [(0, i.jsx)("div", {
                        className: I.PS,
                        children: z
                    }), (0, i.jsxs)("div", {
                        className: I.__invalid_headerCopy,
                        children: [(0, i.jsx)(c.Heading, {
                            className: I.gg,
                            variant: "heading-lg/bold",
                            children: t
                        }), (0, i.jsx)(c.Text, {
                            className: I.__invalid_headerSubheading,
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: n
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: I.di,
                    children: (0, i.jsx)(o.A, {
                        shouldShow: null == Y || P,
                        text: l,
                        "aria-label": l.toString(),
                        children: e => (0, i.jsx)(c.Button, {
                            variant: "primary",
                            text: v.intl.string(v.t.BMx1iy),
                            ...e,
                            disabled: null == Y || P,
                            onClick: null != Y ? () => {
                                (0, c.mMO)(async () => e => (0, i.jsx)(_.default, {
                                    ...e,
                                    guildBoostSlots: [Y],
                                    locationSection: C.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!F || k) && (0, i.jsx)("ul", {
                className: I.LU,
                children: G.map(e => (0, i.jsx)(j, {
                    guildBoostSlot: e,
                    isCancellable: B,
                    onCancel: y,
                    onUncancel: O,
                    premiumSubscription: g,
                    useReducedMotion: b,
                    fractionalState: S
                }, e.id))
            })]
        })
    })
}