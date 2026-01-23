/** Chunk was on web.js **/
/** chunk id: 240626, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(502572),
    c = n(732955),
    u = n(397927),
    d = n(775602),
    f = n(531260),
    p = n(657516),
    _ = n(983511),
    h = n(342744),
    m = n(87719),
    g = n(287809),
    E = n(166403),
    y = n(473145),
    b = n(927578),
    O = n(432334),
    v = n(101135),
    A = n(708030),
    I = n(652215),
    S = n(788868),
    T = n(985018),
    C = n(652804);

function N(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            N(e, t, n[t])
        })
    }
    return e
}

function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function P(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function D(e) {
    let {
        guildBoostSlot: t,
        isCancellable: n,
        onCancel: a,
        onUncancel: s,
        premiumSubscription: o,
        useReducedMotion: d,
        fractionalState: f
    } = e, p = i.useMemo(() => null != t.cooldownEndsAt ? new Date(t.cooldownEndsAt) : null, [t]), _ = (0, y.I5)(t), h = (null == o ? void 0 : o.isPaused) === !0 && f === S.xc.NONE, m = T.intl.string(T.t.mOWsF1);
    return (0, r.jsxs)("li", {
        className: C.Hp,
        children: [(0, r.jsxs)("div", {
            className: C.YL,
            children: [(0, r.jsx)(A.A, {
                className: C.W6,
                hasCooldown: t.isOnCooldown(),
                isCanceled: _,
                useReducedMotion: d
            }), _ && null != o ? (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-sm/medium",
                children: T.intl.format(T.t.Z4ULRD, {
                    date: o.currentPeriodEnd
                })
            }) : t.isOnCooldown() && null != p ? (0, r.jsx)(v.A, {
                cooldown: p.getTime()
            }) : (0, r.jsx)(u.Text, {
                className: C.__invalid_unappliedGuildBoostSlotDescription,
                color: "text-muted",
                variant: "text-sm/medium",
                children: T.intl.string(T.t["2mcafz"])
            })]
        }), (0, r.jsxs)("div", {
            className: C.E7,
            children: [n && !_ && (0, r.jsx)(l.A, {
                shouldShow: h,
                text: m,
                "aria-label": m.toString(),
                children: e => (0, r.jsx)("div", {
                    className: C.LB,
                    children: (0, r.jsx)(c.QWc, P(w({}, e), {
                        variant: "primary",
                        text: T.intl.string(T.t.twFU3R),
                        onClick: () => a(t),
                        disabled: h,
                        size: "sm"
                    }))
                })
            }), _ && (0, r.jsx)(l.A, {
                shouldShow: h,
                text: m,
                "aria-label": m.toString(),
                children: e => (0, r.jsx)("div", {
                    className: C.LB,
                    children: (0, r.jsx)(c.QWc, P(w({}, e), {
                        variant: "primary",
                        text: T.intl.string(T.t["2glQNp"]),
                        onClick: () => s(t),
                        disabled: h,
                        size: "sm"
                    }))
                })
            })]
        })]
    }, t.id)
}

function x(e) {
    (0, u.mMO)(async () => t => (0, r.jsx)(p.default, P(w({}, t), {
        guildBoostSlots: [e],
        locationSection: I.JJy.SETTINGS_PREMIUM
    })))
}

function L(e) {
    (0, u.mMO)(async () => t => (0, r.jsx)(_.default, P(w({}, t), {
        guildBoostSlot: e
    })))
}

function j(e) {
    (0, u.mMO)(async () => t => (0, r.jsx)(h.default, P(w({}, t), {
        guildBoostSlotId: e.id
    })))
}
let M = function(e) {
    let t, n, a, {
            guildBoostSlots: c
        } = e,
        p = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
        _ = (null == p ? void 0 : p.isPausedOrPausePending) === !0,
        {
            fractionalState: h
        } = (0, f.A)(),
        v = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        A = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        I = h === S.xc.FP_SUB_PAUSED,
        N = _ && !I,
        {
            appliedGuildBoostSlots: R,
            unappliedGuildBoostSlots: M,
            numActiveGuildBoostSlots: k,
            hasCooldownBoosts: U,
            allGuildBoostsAreOnCooldown: G
        } = i.useMemo(() => {
            let e = [],
                t = [],
                n = 0,
                r = !1,
                i = !0;
            return c.forEach(a => {
                !(0, y.I5)(a) && n++, a.isOnCooldown() ? r = !0 : i = !1, null != a.premiumGuildSubscription ? e.push(a) : t.push(a)
            }), {
                appliedGuildBoostSlots: e,
                unappliedGuildBoostSlots: t,
                numActiveGuildBoostSlots: n,
                hasCooldownBoosts: r,
                allGuildBoostsAreOnCooldown: i
            }
        }, [c]),
        V = null != p ? b.Ay.getNumIncludedPremiumGuildSubscriptionSlots(p.planId) : 0,
        F = Math.max(0, V - R.length),
        B = k > V,
        H = V === c.length,
        Y = H ? F : 1,
        W = i.useMemo(() => {
            let e = [];
            for (let t = 0; t < Y; t++) e.push((0, r.jsx)(O.A, {
                className: C.YA,
                useReducedMotion: v
            }, t));
            return e
        }, [Y, v]),
        K = i.useMemo(() => M.find(e => e.isAvailable()), [M]);
    if (0 === M.length) return null;
    let z = M.length;
    if (t = H ? T.intl.formatToPlainString(G ? T.t["3DW6Dc"] : T.t["/u15Qc"], {
            numUnappliedGuildBoostSlots: z
        }) : T.intl.formatToPlainString(G ? T.t["3DW6Dc"] : T.t.BPadnO, {
            numUnappliedGuildBoostSlots: z
        }), b.Ay.isPremium(A)) {
        let e = (e, t) => (0, r.jsx)(u.DUT, {
            className: C.nw,
            tag: "span",
            onClick: () => {
                (0, m.Z)()
            },
            children: e
        }, t);
        n = G ? T.intl.format(T.t.omcpSE, {
            learnMoreHook: e
        }) : T.intl.format(T.t["5mAkVi"], {
            numUnappliedGuildBoostSlots: z,
            learnMoreHook: e
        })
    } else n = G ? T.intl.string(T.t["8pcUZi"]) : T.intl.formatToPlainString(T.t.Kaw82o, {
        numUnappliedGuildBoostSlots: z
    });
    return a = _ && h === S.xc.NONE ? T.intl.string(T.t.mOWsF1) : T.intl.string(T.t.xr4m5B), (0, r.jsx)("div", {
        className: C.iE,
        children: (0, r.jsxs)("div", {
            className: s()(C.Qs, [C.Yq]),
            children: [(0, r.jsxs)("div", {
                className: C.wx,
                children: [(0, r.jsxs)("div", {
                    className: C.RW,
                    children: [(0, r.jsx)("div", {
                        className: C.PS,
                        children: W
                    }), (0, r.jsxs)("div", {
                        className: C.__invalid_headerCopy,
                        children: [(0, r.jsx)(u.Heading, {
                            className: C.gg,
                            variant: "heading-lg/bold",
                            children: t
                        }), (0, r.jsx)(u.Text, {
                            className: C.__invalid_headerSubheading,
                            color: "text-strong",
                            variant: "text-sm/normal",
                            children: n
                        })]
                    })]
                }), (0, r.jsx)("div", {
                    className: C.di,
                    children: (0, r.jsx)(l.A, {
                        shouldShow: null == K || N,
                        text: a,
                        "aria-label": a.toString(),
                        children: e => (0, r.jsx)(u.Button, P(w({
                            variant: "primary",
                            text: T.intl.string(T.t.BMx1iy)
                        }, e), {
                            disabled: null == K || N,
                            onClick: null != K ? () => x(K) : void 0
                        }))
                    })
                })]
            }), (!H || U) && (0, r.jsx)("ul", {
                className: C.LU,
                children: M.map(e => (0, r.jsx)(D, {
                    guildBoostSlot: e,
                    isCancellable: B,
                    onCancel: L,
                    onUncancel: j,
                    premiumSubscription: p,
                    useReducedMotion: v,
                    fractionalState: h
                }, e.id))
            })]
        })
    })
}