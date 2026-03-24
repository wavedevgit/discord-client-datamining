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
    g = n(657516),
    _ = n(983511),
    x = n(342744),
    A = n(87719),
    h = n(287809),
    p = n(166403),
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
    } = e, g = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), _ = (0, f.I5)(t), x = r?.isPaused === !0 && m === N.xc.NONE, A = v.intl.string(v.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: I.Hp,
        children: [(0, i.jsxs)("div", {
            className: I.YL,
            children: [(0, i.jsx)(b.A, {
                className: I.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: _,
                useReducedMotion: u
            }), _ && null != r ? (0, i.jsx)(c.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: v.intl.format(v.t.Z4ULRD, {
                    date: r.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != g ? (0, i.jsx)(S.A, {
                cooldown: g.getTime()
            }) : (0, i.jsx)(c.Text, {
                className: I.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: v.intl.string(v.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: I.E7,
            children: [n && !_ && (0, i.jsx)(o.A, {
                shouldShow: x,
                text: A,
                "aria-label": A.toString(),
                children: e => (0, i.jsx)("div", {
                    className: I.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: v.intl.string(v.t.twFU3R),
                        onClick: () => l(t),
                        disabled: x,
                        size: "sm"
                    })
                })
            }), _ && (0, i.jsx)(o.A, {
                shouldShow: x,
                text: A,
                "aria-label": A.toString(),
                children: e => (0, i.jsx)("div", {
                    className: I.LB,
                    children: (0, i.jsx)(d.QWc, {
                        ...e,
                        variant: "primary",
                        text: v.intl.string(v.t["2glQNp"]),
                        onClick: () => a(t),
                        disabled: x,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function y(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(_.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function O(e) {
    (0, c.mMO)(async () => t => (0, i.jsx)(x.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let R = function(e) {
    let t, n, l, {
            guildBoostSlots: d
        } = e,
        _ = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        x = _?.isPausedOrPausePending === !0,
        {
            fractionalState: S
        } = (0, m.A)(),
        b = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        R = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
        L = S === N.xc.FP_SUB_PAUSED,
        P = x && !L,
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
                !(0, f.I5)(l) && n++, l.isOnCooldown() ? i = !0 : s = !1, null != l.premiumGuildSubscription ? e.push(l) : t.push(l)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: i,
                allGuildBoostsAreOnCooldown: s
            }
        }, [d]),
        w = null != _ ? T.Ay.getNumIncludedPremiumGuildSubscriptionSlots(_.planId) : 0,
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
    if (t = F ? v.intl.formatToPlainString(k ? v.t["3DW6Dc"] : v.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: X
        }) : v.intl.formatToPlainString(k ? v.t["3DW6Dc"] : v.t.BPadnO, {
            numUnappliedGuildBoostSlots: X
        }), T.Ay.isPremium(R)) {
        let e = (e, t) => (0, i.jsx)(c.DUT, {
            className: I.nw,
            tag: "span",
            onClick: () => {
                (0, A.e)()
            },
            children: e
        }, t);
        n = k ? v.intl.format(v.t.omcpSE, {
            learnMoreHook: e
        }) : v.intl.format(v.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: X,
            learnMoreHook: e
        })
    } else n = k ? v.intl.string(v.t["8pcUZi"]) : v.intl.formatToPlainString(v.t.Kaw82o, {
        numUnappliedGuildBoostSlots: X
    });
    return l = x && S === N.xc.NONE ? v.intl.string(v.t.mOWsF1) : v.intl.string(v.t.xr4m5B), (0, i.jsx)("div", {
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
                                (0, c.mMO)(async () => e => (0, i.jsx)(g.default, {
                                    ...e,
                                    guildBoostSlots: [Y],
                                    locationSection: C.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!F || U) && (0, i.jsx)("ul", {
                className: I.LU,
                children: G.map(e => (0, i.jsx)(j, {
                    guildBoostSlot: e,
                    isCancellable: B,
                    onCancel: y,
                    onUncancel: O,
                    premiumSubscription: _,
                    useReducedMotion: b,
                    fractionalState: S
                }, e.id))
            })]
        })
    })
}