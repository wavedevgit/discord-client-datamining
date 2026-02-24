/** chunk id: 240626, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(321073);
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(311907),
    o = n(502572),
    c = n(732955),
    d = n(397927),
    u = n(775602),
    _ = n(531260),
    m = n(657516),
    A = n(983511),
    g = n(342744),
    h = n(87719),
    x = n(287809),
    p = n(166403),
    E = n(473145),
    C = n(927578),
    T = n(432334),
    S = n(101135),
    I = n(708030),
    f = n(652215),
    N = n(788868),
    b = n(985018),
    j = n(652804);

function v(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: a,
        onUncancel: l,
        premiumSubscription: r,
        useReducedMotion: u,
        fractionalState: _
    } = e, m = s.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), A = (0, E.I5)(t), g = r?.isPaused === !0 && _ === N.xc.NONE, h = b.intl.string(b.t.mOWsF1);
    return (0, i.jsxs)("li", {
        className: j.Hp,
        children: [(0, i.jsxs)("div", {
            className: j.YL,
            children: [(0, i.jsx)(I.A, {
                className: j.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: A,
                useReducedMotion: u
            }), A && null != r ? (0, i.jsx)(d.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: b.intl.format(b.t.Z4ULRD, {
                    date: r.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != m ? (0, i.jsx)(S.A, {
                cooldown: m.getTime()
            }) : (0, i.jsx)(d.Text, {
                className: j.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: b.intl.string(b.t["2mcafz"])
            })]
        }), (0, i.jsxs)("div", {
            className: j.E7,
            children: [n && !A && (0, i.jsx)(o.A, {
                shouldShow: g,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: j.LB,
                    children: (0, i.jsx)(c.QWc, {
                        ...e,
                        variant: "primary",
                        text: b.intl.string(b.t.twFU3R),
                        onClick: () => a(t),
                        disabled: g,
                        size: "sm"
                    })
                })
            }), A && (0, i.jsx)(o.A, {
                shouldShow: g,
                text: h,
                "aria-label": h.toString(),
                children: e => (0, i.jsx)("div", {
                    className: j.LB,
                    children: (0, i.jsx)(c.QWc, {
                        ...e,
                        variant: "primary",
                        text: b.intl.string(b.t["2glQNp"]),
                        onClick: () => l(t),
                        disabled: g,
                        size: "sm"
                    })
                })
            })]
        })]
    }, t.id)
}

function O(e) {
    (0, d.mMO)(async () => t => (0, i.jsx)(A.default, {
        ...t,
        guildBoostSlot: e
    }))
}

function R(e) {
    (0, d.mMO)(async () => t => (0, i.jsx)(g.default, {
        ...t,
        guildBoostSlotId: e.id
    }))
}
let y = function(e) {
    let t, n, a, {
            guildBoostSlots: c
        } = e,
        A = (0, r.bG)([p.A], () => p.A.getPremiumTypeSubscription()),
        g = A?.isPausedOrPausePending === !0,
        {
            fractionalState: S
        } = (0, _.A)(),
        I = (0, r.bG)([u.A], () => u.A.useReducedMotion),
        y = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
        P = S === N.xc.FP_SUB_PAUSED,
        L = g && !P,
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
            return c.forEach(a => {
                !(0, E.I5)(a) && n++, a.isOnCooldown() ? i = !0 : s = !1, null != a.premiumGuildSubscription ? e.push(a) : t.push(a)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: i,
                allGuildBoostsAreOnCooldown: s
            }
        }, [c]),
        V = null != A ? C.Ay.getNumIncludedPremiumGuildSubscriptionSlots(A.planId) : 0,
        H = Math.max(0, V - D.length),
        w = M > V,
        B = V === c.length,
        Y = B ? H : 1,
        F = s.useMemo(() => {
            let e = [];
            for (let t = 0; t < Y; t++) e.push((0, i.jsx)(T.A, {
                className: j.YA,
                useReducedMotion: I
            }, t));
            return e
        }, [Y, I]),
        z = s.useMemo(() => G.find(e => e.isAvailable()), [G]);
    if (0 === G.length) return null;
    let W = G.length;
    if (t = B ? b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: W
        }) : b.intl.formatToPlainString(k ? b.t["3DW6Dc"] : b.t.BPadnO, {
            numUnappliedGuildBoostSlots: W
        }), C.Ay.isPremium(y)) {
        let e = (e, t) => (0, i.jsx)(d.DUT, {
            className: j.nw,
            tag: "span",
            onClick: () => {
                (0, h.e)()
            },
            children: e
        }, t);
        n = k ? b.intl.format(b.t.omcpSE, {
            learnMoreHook: e
        }) : b.intl.format(b.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: W,
            learnMoreHook: e
        })
    } else n = k ? b.intl.string(b.t["8pcUZi"]) : b.intl.formatToPlainString(b.t.Kaw82o, {
        numUnappliedGuildBoostSlots: W
    });
    return a = g && S === N.xc.NONE ? b.intl.string(b.t.mOWsF1) : b.intl.string(b.t.xr4m5B), (0, i.jsx)("div", {
        className: j.iE,
        children: (0, i.jsxs)("div", {
            className: l()(j.Qs, [j.Yq]),
            children: [(0, i.jsxs)("div", {
                className: j.wx,
                children: [(0, i.jsxs)("div", {
                    className: j.RW,
                    children: [(0, i.jsx)("div", {
                        className: j.PS,
                        children: F
                    }), (0, i.jsxs)("div", {
                        className: j.__invalid_headerCopy,
                        children: [(0, i.jsx)(d.Heading, {
                            className: j.gg,
                            variant: "heading-lg/bold",
                            children: t
                        }), (0, i.jsx)(d.Text, {
                            className: j.__invalid_headerSubheading,
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: n
                        })]
                    })]
                }), (0, i.jsx)("div", {
                    className: j.di,
                    children: (0, i.jsx)(o.A, {
                        shouldShow: null == z || L,
                        text: a,
                        "aria-label": a.toString(),
                        children: e => (0, i.jsx)(d.Button, {
                            variant: "primary",
                            text: b.intl.string(b.t.BMx1iy),
                            ...e,
                            disabled: null == z || L,
                            onClick: null != z ? () => {
                                (0, d.mMO)(async () => e => (0, i.jsx)(m.default, {
                                    ...e,
                                    guildBoostSlots: [z],
                                    locationSection: f.JJy.SETTINGS_PREMIUM
                                }))
                            } : void 0
                        })
                    })
                })]
            }), (!B || U) && (0, i.jsx)("ul", {
                className: j.LU,
                children: G.map(e => (0, i.jsx)(v, {
                    guildBoostSlot: e,
                    isCancellable: w,
                    onCancel: O,
                    onUncancel: R,
                    premiumSubscription: A,
                    useReducedMotion: I,
                    fractionalState: S
                }, e.id))
            })]
        })
    })
}