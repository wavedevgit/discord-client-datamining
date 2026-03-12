/** chunk id: 240626 params = (module,exports,require) **/
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
    A = n(983511),
    m = n(342744),
    h = n(87719),
    p = n(287809),
    x = n(166403),
    E = n(473145),
    T = n(927578),
    S = n(432334),
    C = n(101135),
    I = n(708030),
    f = n(652215),
    N = n(788868),
    b = n(985018),
    v = n(412026);

function O(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: l,
        onUncancel: a,
        premiumSubscription: r,
        useReducedMotion: u,
        fractionalState: _
    } = e, g = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), A = (0, E.I5)(t), m = r?.isPaused === !0 && _ === N.xc.NONE, h = b.intl.string(b.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: v.Hp,
        children: [(0, i.jsxs)("div", {
            className: v.YL,
            children: [(0, i.jsx)(I.A, {
                className: v.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: A,
                useReducedMotion: u
            }), A && null != r ? (0, i.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: b.intl.format(b.t.Z4ULRD, {
                    date: r.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != g ? (0, i.jsx)(C.A, {
                cooldown: g.getTime()
            }) : (0, i.jsx)(c.Text, {
                className: v.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: b.intl.string(b.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: v.E7,
            children: [n && !A && (0, i.jsx)(o.A, {
                shouldShow: m,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: b.intl.string(b.t.twFU3R),
                        onClick: () => l(t),
                        disabled: m,
                        size: "sm"
                    })
                })
            }), A && (0, i.jsx)(o.A, {
                shouldShow: m,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: v.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: b.intl.string(b.t["2glQNp"]),
                        onClick: () => a(t),
                        disabled: m,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function j(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(A.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function R(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(m.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let y = function(e) {
    let t, n, l, {
            guildBoostSlots: d
        } = e,
        A = (0, r.bG)([x.A], () => x.A.getPremiumTypeSubscription()),
        m = A?.isPausedOrPausePending === !0,
        {
            fractionalState: C
        } = (0, _.A)(),
        I = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        y = (0, r.bG)([p.default], () => p.default.getCurrentUser()),
        P = C === N.xc.FP_SUB_PAUSED,
        D = m && !P,
        {
            appliedGuildBoostSlots: L,
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
        V = null != A ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(A.planId) : 0,
        w = Math.max(0, V - L.length),
        H = M > V,
        B = V === d.length,
        F = B ? w : 1,
        Y = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < F; t++) e.push((0, i.jsx)(S.A, {
                className: v.YA,
                useReducedMotion: I
            }, t));
            return e
        }, [F, I]),
        z = s.useMemo(() => G.find(e => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let X = G.length;
    if (t = B ? b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: X
        }) : b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t.BPadnO, {
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
        n = k ? b.intl.format(b.t.omcpSE, {
            learnMoreHook: e
        }) : b.intl.format(b.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: X,
            learnMoreHook: e
        })
    } else n = k ? b.intl.string(b.t["8pcUZi"]) : b.intl.formatToPlainString(b.t.Kaw82o, {
        numUnappliedGuildBoostSlots: X
    });
    return l = m && C === N.xc.NONE ? b.intl.string(b.t.mOWsF1) : b.intl.string(b.t.xr4m5B), (0, i.jsx)("div", {
        className: v.iE,
        children: (0, i.jsxs)("div", {
            className: a()(v.Qs, [v.Yq]),
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
                            text: b.intl.string(b.t.BMx1iy),
                            ...e,
                            disabled: null == z || D,
                            onClick: null != z ? () => {
                                (0, c.mMO)(async () => e => (0, i.jsx)(g.default, {
                                    ...e,
                                    guildBoostSlots: [z],
                                    locationSection: f.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!B || U) && (0, i.jsx)("ul", {
                className: v.LU,
                children: G.map(e => (0, i.jsx)(O, {
                    guildBoostSlot: e,
                    isCancellable: H,
                    onCancel: j,
                    onUncancel: R,
                    premiumSubscription: A,
                    useReducedMotion: I,
                    fractionalState: C
                }, e.id))
            })]
        })
    })
}