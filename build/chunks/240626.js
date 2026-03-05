/** chunk id: 240626, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
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
    _ = n(531260),
    g = n(657516),
    m = n(983511),
    A = n(342744),
    h = n(87719),
    p = n(287809),
    x = n(166403),
    E = n(473145),
    T = n(927578),
    S = n(432334),
    C = n(101135),
    f = n(708030),
    I = n(652215),
    b = n(788868),
    N = n(985018),
    v = n(652804);

function j(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: l,
        onUncancel: a,
        premiumSubscription: r,
        useReducedMotion: u,
        fractionalState: _
    } = e, g = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), m = (0, E.I5)(t), A = r?.isPaused === !0 && _ === b.xc.NONE, h = N.intl.string(N.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: v.Hp,
        children: [(0, i.jsxs)("div", {
            className: v.YL,
            children: [(0, i.jsx)(f.A, {
                className: v.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: m,
                useReducedMotion: u
            }), m && null != r ? (0, i.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: N.intl.format(N.t.Z4ULRD, {
                    date: r.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != g ? (0, i.jsx)(C.A, {
                cooldown: g.getTime()
            }) : (0, i.jsx)(c.Text, {
                className: v.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: N.intl.string(N.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: v.E7,
            children: [n && !m && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: N.intl.string(N.t.twFU3R),
                        onClick: () => l(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            }), m && (0, i.jsx)(o.A, {
                shouldShow: A,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: N.intl.string(N.t["2glQNp"]),
                        onClick: () => a(t),
                        disabled: A,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function O(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(m.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function R(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(A.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let y = function(e) {
    let t, n, l, {
            guildBoostSlots: d
        } = e,
        m = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        A = m?.isPausedOrPausePending === !0,
        {
            fractionalState: C
        } = (0, _.A)(),
        f = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        y = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        P = C === b.xc.FP_SUB_PAUSED,
        L = A && !P,
        {
            appliedGuildBoostSlots: D,
            unappliedGuildBoostSlots: G,
            numActiveGuildBoostSlots: M,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: k
        } = s.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                i = !1,
                s = !0;
            return d.forEach(l => {
                !(0, E.I5)(l) && n++, l.isOnCooldown() ? i = !0 : s = !1, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: i,
                allGuildBoostsAreOnCooldown: s
            }
        }, [d]),
        V = null != m ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(m.planId) : 0,
        w = Math.max(0, V - D.length),
        H = M > V,
        B = V === d.length,
        Y = B ? w : 1,
        F = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < Y; t++) e.push((0, i.jsx)(S.A, {
                className: v.YA,
                useReducedMotion: f
            }, t));
            return e
        }, [Y, f]),
        z = s.useMemo(() => G.find(e => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let X = G.length;
    if (t = B ? N.intl.formatToPlainString(k ? N.t["3DW6Dc"] : N.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: X
        }) : N.intl.formatToPlainString(k ? N.t["3DW6Dc"] : N.t.BPadnO, {
            numUnappliedGuildBoostSlots: X
        }), T.Ay.isPremium(y)) {
        let e = (e, t) => (0, i.jsx)(c.DUT, {
            className: v.nw,
            tag: "span",
            onClick: () => {
                (0, h.e)()
            },
            children: e
        }, t);
        n = k ? N.intl.format(N.t.omcpSE, {
            learnMoreHook: e
        }) : N.intl.format(N.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: X,
            learnMoreHook: e
        })
    } else n = k ? N.intl.string(N.t["8pcUZi"]) : N.intl.formatToPlainString(N.t.Kaw82o, {
        numUnappliedGuildBoostSlots: X
    });
    return l = A && C === b.xc.NONE ? N.intl.string(N.t.mOWsF1) : N.intl.string(N.t.xr4m5B), (0, i.jsx)("div", {
        className: v.iE,
        children: (0, i.jsxs)("div", {
            className: a()(v.Qs, [v.Yq]),
            children: [(0, i.jsxs)("div", {
                className: v.wx,
                children: [(0, i.jsxs)("div", {
                    className: v.RW,
                    children: [(0, i.jsx)("div", {
                        className: v.PS,
                        children: F
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
                        shouldShow: null == z || L,
                        text: l,
                        "aria-label": l.toString(),
                        children: e => (0, i.jsx)(c.Button, {
                            variant: "primary",
                            text: N.intl.string(N.t.BMx1iy),
                            ...e,
                            disabled: null == z || L,
                            onClick: null != z ? () => {
                                (0, c.mMO)(async () => e => (0, i.jsx)(g.default, {
                                    ...e,
                                    guildBoostSlots: [z],
                                    locationSection: I.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!B || U) && (0, i.jsx)("ul", {
                className: v.LU,
                children: G.map(e => (0, i.jsx)(j, {
                    guildBoostSlot: e,
                    isCancellable: H,
                    onCancel: O,
                    onUncancel: R,
                    premiumSubscription: m,
                    useReducedMotion: f,
                    fractionalState: C
                }, e.id))
            })]
        })
    })
}