/** chunk id: 240626 params = (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(502572),
    d = n(732955),
    c = n(397927),
    u = n(775602),
    _ = n(531260),
    m = n(657516),
    g = n(983511),
    A = n(342744),
    h = n(87719),
    x = n(287809),
    p = n(166403),
    T = n(473145),
    E = n(927578),
    C = n(432334),
    S = n(101135),
    f = n(708030),
    N = n(652215),
    b = n(788868),
    I = n(985018),
    v = n(412026);

function j(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: l,
        onUncancel: r,
        premiumSubscription: a,
        useReducedMotion: u,
        fractionalState: _
    } = e, m = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), g = (0, T.I5)(t), A = a?.isPaused === !0 && _ === b.xc.NONE, h = I.intl.string(I.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: v.Hp,
        children: [(0, i.jsxs)("div", {
            className: v.YL,
            children: [(0, i.jsx)(f.A, {
                className: v.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: g,
                useReducedMotion: u
            }), g && null != a ? (0, i.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: I.intl.format(I.t.Z4ULRD, {
                    date: a.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != m ? (0, i.jsx)(S.A, {
                cooldown: m.getTime()
            }) : (0, i.jsx)(c.Text, {
                className: v.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: I.intl.string(I.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: v.E7,
            children: [n && !g && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: I.intl.string(I.t.twFU3R),
                        onClick: () => l(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            }), g && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: I.intl.string(I.t["2glQNp"]),
                        onClick: () => r(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function O(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(g.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function y(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(A.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let R = function(e) {
    let t, n, l, {
            guildBoostSlots: d
        } = e,
        g = (0, a.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        A = g?.isPausedOrPausePending === !0,
        {
            fractionalState: S
        } = (0, _.A)(),
        f = (0, a.bG)([u.A], () => u.A.useReducedMotion),
        R = (0, a.bG)([x.default], () => x.default.getCurrentUser()),
        P = S === b.xc.FP_SUB_PAUSED,
        D = A && !P,
        {
            appliedGuildBoostSlots: L,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: G,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: k
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return d.forEach(l => {
                !(0, T.I5)(l) && n++, l.isOnCooldown() ? i = !0 : s = !1, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: i,
                allGuildBoostsAreOnCooldown: s
            }
        }, [d]),
        V = null != g ? E.Ay.getNumIncludedPremiumGuildSubscriptionSlots(g.planId) : 0,
        w = Math.max(0, V - L.length),
        B = G > V,
        H = V === d.length,
        F = H ? w : 1,
        Y = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < F; t++) e.push((0, i.jsx)(C.A, {
                className: v.YA,
                useReducedMotion: f
            }, t));
            return e
        }, [F, f]),
        z = s.useMemo(() => M.find(e => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let X = M.length;
    if (t = H ? I.intl.formatToPlainString(k ? I.t["3DW6Dc"] : I.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: X
        }) : I.intl.formatToPlainString(k ? I.t["3DW6Dc"] : I.t.BPadnO, {
            numUnappliedGuildBoostSlots: X
        }), E.Ay.isPremium(R)) {
        let e = (e, t) => (0, i.jsx)(c.DUT, {
            className: v.nw,
            tag: "span",
            onClick: () => {
                (0, h.e)()
            },
            children: e
        }, t);
        n = k ? I.intl.format(I.t.omcpSE, {
            learnMoreHook: e
        }) : I.intl.format(I.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: X,
            learnMoreHook: e
        })
    } else n = k ? I.intl.string(I.t["8pcUZi"]) : I.intl.formatToPlainString(I.t.Kaw82o, {
        numUnappliedGuildBoostSlots: X
    });
    return l = A && S === b.xc.NONE ? I.intl.string(I.t.mOWsF1) : I.intl.string(I.t.xr4m5B), (0, i.jsx)("div", {
        className: v.iE,
        children: (0, i.jsxs)("div", {
            className: r()(v.Qs, [v.Yq]),
            children: [(0, i.jsxs)("div", {
                className: v.wx,
                children: [(0, i.jsxs)("div", {
                    className: v.RW,
                    children: [(0, i.jsx)("div", {
                        className: v.PS,
                        children: Y
                    }), (0, i.jsxs)("div", {
                        className: v.__invalid_headerCopy,
                        children: [(0, i.jsx)(c.Heading, {
                            className: v.gg,
                            variant: "heading-lg/bold",
                            children: t
                        }), (0, i.jsx)(c.Text, {
                            className: v.__invalid_headerSubheading,
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: n
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: v.di,
                    children: (0, i.jsx)(o.A, {
                        shouldShow: null == z || D,
                        text: l,
                        "aria-label": l.toString(),
                        children: e => (0, i.jsx)(c.Button, {
                            variant: "primary",
                            text: I.intl.string(I.t.BMx1iy),
                            ...e,
                            disabled: null == z || D,
                            onClick: null != z ? () => {
                                (0, c.mMO)(async () => e => (0, i.jsx)(m.default, {
                                    ...e,
                                    guildBoostSlots: [z],
                                    locationSection: N.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!H || U) && (0, i.jsx)("ul", {
                className: v.LU,
                children: M.map(e => (0, i.jsx)(j, {
                    guildBoostSlot: e,
                    isCancellable: B,
                    onCancel: O,
                    onUncancel: y,
                    premiumSubscription: g,
                    useReducedMotion: f,
                    fractionalState: S
                }, e.id))
            })]
        })
    })
}