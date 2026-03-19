/** chunk id: 530240 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    N: () => v
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(497766),
    a = n(417597),
    r = n(397927),
    o = n(775602),
    d = n(531260),
    c = n(39672),
    u = n(545934),
    _ = n(71393),
    m = n(473145),
    g = n(927578),
    A = n(661191),
    x = n(101135),
    h = n(708030),
    p = n(358172),
    T = n(652215),
    E = n(788868),
    S = n(985018),
    C = n(325234);

function f(e) {
    let {
        guildTier: t,
        guildBoostSlot: n,
        showAltText: a,
        isCanceled: o,
        premiumSubscription: d,
        fractionalPremiumInfo: c
    } = e, u = s.useMemo(() => {
        if (o) {
            let e = d.currentPeriodEnd;
            return d.isPausedForFractionalPremium && (e = c.endsAt.toDate()), S.intl.format(S.t.Z4ULRD, {
                date: e
            })
        }
        let e = null != n.premiumGuildSubscription ? A.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
        return S.intl.formatToPlainString(S.t.lY2Bur, {
            date: new Date(e)
        })
    }, [n, o, d, c]), _ = s.useMemo(() => (function(e) {
        if (null == e || e === T.TVA.NONE) return "";
        let t = [S.intl.formatToPlainString(S.t["dLlKX/"], {
            numEmojiSlots: E.TG[e].limits.emoji
        }), S.intl.formatToPlainString(S.t["+ANIfv"], {
            numStickerSlots: E.TG[e].limits.stickers
        }), S.intl.formatToPlainString(S.t["4gt60b"], {
            numSoundboardSlots: E.TG[e].limits.soundboardSounds
        }), S.intl.formatToPlainString(S.t.XahSjZ, {
            resolution: E.TG[e].limits.screenShareQualityResolution,
            framerate: E.TG[e].limits.screenShareQualityFramerate
        }), S.intl.formatToPlainString(S.t.NbNs7S, {
            bitrate: E.TG[e].limits.bitrate / 1e3
        }), S.intl.formatToPlainString(S.t.VVKcpn, {
            filesize: E.TG[e].limits.fileSize / 1024 / 1024
        }), S.intl.formatToPlainString(S.t.TbpCvv, {
            numVideoStageSeats: E.TG[e].limits.stageVideoUsers
        }), S.intl.string(S.t.LDyX3i), S.intl.string(S.t.YtGlPW)];
        e >= T.TVA.TIER_2 && (t.push(S.intl.string(S.t.SztbtN)), t.push(S.intl.string(S.t["3GK91n"]))), e >= T.TVA.TIER_3 && t.push(S.intl.string(S.t["XUUJd+"]));
        let n = t[Math.floor(Math.random() * t.length)];
        return S.intl.format(S.t["/dOAmQ"], {
            perk: n
        })
    })(t), [t]), m = (0, r.pnh)(a, {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1
        },
        leave: {
            opacity: 0
        }
    }, "animate-always");
    return o || t === T.TVA.NONE ? (0, i.jsx)("div", {
        className: C.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: u
        })
    }) : m((e, t) => (0, i.jsx)(l.animated.div, {
        style: e,
        className: C.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: t ? _ : u
        })
    }))
}

function N(e) {
    let {
        guildTier: t,
        guildBoostSlot: n,
        premiumSubscription: l,
        hasCancelableGuildBoostSlot: u,
        showAltText: _,
        isLastGuildBoostSlot: g
    } = e, A = (0, a.bG)([o.A], () => o.A.useReducedMotion), p = s.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), T = s.useMemo(() => null != p && p > new Date, [p]), E = (0, m.I5)(n), N = (0, d.A)(), I = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: C.PW,
        children: [(0, i.jsxs)("div", {
            className: C.$U,
            children: [(0, i.jsx)(h.A, {
                isCanceled: E,
                hasCooldown: T,
                useReducedMotion: A
            }), (0, i.jsx)("div", {
                className: C.vh,
                children: null != p && T && !E ? (0, i.jsx)(x.A, {
                    className: C.xm,
                    cooldown: p.getTime()
                }) : (0, i.jsx)(f, {
                    guildTier: t,
                    guildBoostSlot: n,
                    showAltText: _,
                    isCanceled: E,
                    premiumSubscription: l,
                    fractionalPremiumInfo: N
                })
            }), (0, i.jsx)(r.YNO, {
                targetElementRef: I,
                renderPopout: function(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(c.A, {
                        onClose: t,
                        guildBoostSlot: n,
                        premiumSubscription: l,
                        hasCancelableGuildBoostSlot: u,
                        fractionalState: N.fractionalState
                    })
                },
                position: "right",
                align: "center",
                children: e => (0, i.jsx)(r.DUT, {
                    ...e,
                    innerRef: I,
                    "aria-label": S.intl.string(S.t.PdRCRg),
                    className: C.oU,
                    children: (0, i.jsx)(r.FHP, {
                        size: "md",
                        color: "currentColor"
                    })
                })
            })]
        }), !g && (0, i.jsx)("div", {
            className: C.eX
        })]
    })
}

function I(e) {
    let {
        guildId: t,
        guildBoostSlotRecords: n,
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: l,
        showAltText: r
    } = e, o = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: C.ag,
        children: [(0, i.jsx)(p.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(N, {
            guildTier: o?.premiumTier,
            guildBoostSlot: e,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: l,
            showAltText: r,
            isLastGuildBoostSlot: t === n.length - 1
        }, e.id))]
    })
}

function b(e) {
    let {
        guildId: t,
        appliedGuildBoosts: n,
        premiumSubscription: s
    } = e, l = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]), r = A.default.fromTimestamp(Date.now());
    if (n.forEach(e => {
            (null == r || 0 > A.default.compare(e.id, r)) && (r = e.id)
        }), null == r) return null;
    let o = u.A.createFromServer({
        id: A.default.fromTimestamp(Date.now()),
        subscription_id: s.id,
        canceled: !1,
        premium_guild_subscription: {
            id: r,
            guild_id: t
        },
        cooldown_ends_at: null
    }, s);
    return (0, i.jsxs)("div", {
        className: C.ag,
        children: [(0, i.jsx)(p.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(N, {
            guildTier: l?.premiumTier,
            guildBoostSlot: o,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: !1,
            showAltText: !1,
            isLastGuildBoostSlot: t === n.length - 1
        }, t))]
    })
}

function v(e) {
    let {
        appliedGuildBoosts: t,
        premiumSubscription: n
    } = e, l = s.useMemo(() => {
        let e = {};
        return t.forEach(t => {
            let n = t.guildId;
            n in e || (e[n] = []), e[n].push(t)
        }), e
    }, [t]);
    return null == n || 0 === t.length ? null : (0, i.jsxs)("div", {
        className: C.iE,
        children: [(0, i.jsx)("div", {
            className: C.kL,
            children: A.default.keys(l).map(e => (0, i.jsx)(b, {
                guildId: e,
                premiumSubscription: n,
                appliedGuildBoosts: l[e]
            }, e))
        }), (0, i.jsx)("div", {
            className: C.vK
        })]
    })
}

function j(e) {
    let {
        guildBoostSlots: t,
        premiumSubscription: n
    } = e, [l, a] = s.useState(!1);
    s.useEffect(() => {
        let e = -1;
        return null != n && (e = setInterval(() => {
            a(e => !e)
        }, 3e3)), () => {
            clearInterval(e)
        }
    }, [n]);
    let {
        boostsByGuildId: r,
        numActiveGuildBoostSlots: o
    } = s.useMemo(() => {
        let e = 0,
            n = {};
        return Object.keys(t).forEach(i => {
            let s = t[i];
            if (!(0, m.I5)(s) && e++, null != s.premiumGuildSubscription) {
                let e = s.premiumGuildSubscription.guildId;
                e in n || (n[e] = []), n[e].push(s)
            }
        }), {
            boostsByGuildId: n,
            numActiveGuildBoostSlots: e
        }
    }, [t]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let d = o > g.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: C.iE,
        children: [(0, i.jsx)("div", {
            className: C.kL,
            children: A.default.keys(r).map(e => (0, i.jsx)(I, {
                guildId: e,
                guildBoostSlotRecords: r[e],
                premiumSubscription: n,
                hasCancelableGuildBoostSlot: d,
                showAltText: l
            }, e))
        }), (0, i.jsx)("div", {
            className: C.vK
        })]
    })
}