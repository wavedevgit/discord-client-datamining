/** chunk id: 530240 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    N: () => I
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
    m = n(71393),
    g = n(473145),
    _ = n(927578),
    x = n(661191),
    A = n(101135),
    h = n(708030),
    p = n(358172),
    f = n(652215),
    T = n(788868),
    E = n(985018),
    S = n(325234);

function b(e) {
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
            return d.isPausedForFractionalPremium && (e = c.endsAt.toDate()), E.intl.format(E.t.Z4ULRD, {
                date: e
            })
        }
        let e = null != n.premiumGuildSubscription ? x.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
        return E.intl.formatToPlainString(E.t.lY2Bur, {
            date: new Date(e)
        })
    }, [n, o, d, c]), m = s.useMemo(() => (function(e) {
        if (null == e || e === f.TVA.NONE) return "";
        let t = [E.intl.formatToPlainString(E.t["dLlKX/"], {
            numEmojiSlots: T.TG[e].limits.emoji
        }), E.intl.formatToPlainString(E.t["+ANIfv"], {
            numStickerSlots: T.TG[e].limits.stickers
        }), E.intl.formatToPlainString(E.t["4gt60b"], {
            numSoundboardSlots: T.TG[e].limits.soundboardSounds
        }), E.intl.formatToPlainString(E.t.XahSjZ, {
            resolution: T.TG[e].limits.screenShareQualityResolution,
            framerate: T.TG[e].limits.screenShareQualityFramerate
        }), E.intl.formatToPlainString(E.t.NbNs7S, {
            bitrate: T.TG[e].limits.bitrate / 1e3
        }), E.intl.formatToPlainString(E.t.VVKcpn, {
            filesize: T.TG[e].limits.fileSize / 1024 / 1024
        }), E.intl.formatToPlainString(E.t.TbpCvv, {
            numVideoStageSeats: T.TG[e].limits.stageVideoUsers
        }), E.intl.string(E.t.LDyX3i), E.intl.string(E.t.YtGlPW)];
        e >= f.TVA.TIER_2 && (t.push(E.intl.string(E.t.SztbtN)), t.push(E.intl.string(E.t["3GK91n"]))), e >= f.TVA.TIER_3 && t.push(E.intl.string(E.t["XUUJd+"]));
        let n = t[Math.floor(Math.random() * t.length)];
        return E.intl.format(E.t["/dOAmQ"], {
            perk: n
        })
    })(t), [t]), g = (0, r.pnh)(a, {
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
    return o || t === f.TVA.NONE ? (0, i.jsx)("div", {
        className: S.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: u
        })
    }) : g((e, t) => (0, i.jsx)(l.animated.div, {
        style: e,
        className: S.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: t ? m : u
        })
    }))
}

function C(e) {
    let {
        guildTier: t,
        guildBoostSlot: n,
        premiumSubscription: l,
        hasCancelableGuildBoostSlot: u,
        showAltText: m,
        isLastGuildBoostSlot: _
    } = e, x = (0, a.bG)([o.A], () => o.A.useReducedMotion), p = s.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), f = s.useMemo(() => null != p && p > new Date, [p]), T = (0, g.I5)(n), C = (0, d.A)(), N = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: S.PW,
        children: [(0, i.jsxs)("div", {
            className: S.$U,
            children: [(0, i.jsx)(h.A, {
                isCanceled: T,
                hasCooldown: f,
                useReducedMotion: x
            }), (0, i.jsx)("div", {
                className: S.vh,
                children: null != p && f && !T ? (0, i.jsx)(A.A, {
                    className: S.xm,
                    cooldown: p.getTime()
                }) : (0, i.jsx)(b, {
                    guildTier: t,
                    guildBoostSlot: n,
                    showAltText: m,
                    isCanceled: T,
                    premiumSubscription: l,
                    fractionalPremiumInfo: C
                })
            }), (0, i.jsx)(r.YNO, {
                targetElementRef: N,
                renderPopout: function(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(c.A, {
                        onClose: t,
                        guildBoostSlot: n,
                        premiumSubscription: l,
                        hasCancelableGuildBoostSlot: u,
                        fractionalState: C.fractionalState
                    })
                },
                position: "right",
                align: "center",
                children: e => (0, i.jsx)(r.DUT, {
                    ...e,
                    innerRef: N,
                    "aria-label": E.intl.string(E.t.PdRCRg),
                    className: S.oU,
                    children: (0, i.jsx)(r.FHP, {
                        size: "md",
                        color: "currentColor"
                    })
                })
            })]
        }), !_ && (0, i.jsx)("div", {
            className: S.eX
        })]
    })
}

function N(e) {
    let {
        guildId: t,
        guildBoostSlotRecords: n,
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: l,
        showAltText: r
    } = e, o = (0, a.bG)([m.A], () => m.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: S.ag,
        children: [(0, i.jsx)(p.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(C, {
            guildTier: o?.premiumTier,
            guildBoostSlot: e,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: l,
            showAltText: r,
            isLastGuildBoostSlot: t === n.length - 1
        }, e.id))]
    })
}

function v(e) {
    let {
        guildId: t,
        appliedGuildBoosts: n,
        premiumSubscription: s
    } = e, l = (0, a.bG)([m.A], () => m.A.getGuild(t), [t]), r = x.default.fromTimestamp(Date.now());
    if (n.forEach(e => {
            (null == r || 0 > x.default.compare(e.id, r)) && (r = e.id)
        }), null == r) return null;
    let o = u.A.createFromServer({
        id: x.default.fromTimestamp(Date.now()),
        subscription_id: s.id,
        canceled: !1,
        premium_guild_subscription: {
            id: r,
            guild_id: t
        },
        cooldown_ends_at: null
    }, s);
    return (0, i.jsxs)("div", {
        className: S.ag,
        children: [(0, i.jsx)(p.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(C, {
            guildTier: l?.premiumTier,
            guildBoostSlot: o,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: !1,
            showAltText: !1,
            isLastGuildBoostSlot: t === n.length - 1
        }, t))]
    })
}

function I(e) {
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
        className: S.iE,
        children: [(0, i.jsx)("div", {
            className: S.kL,
            children: x.default.keys(l).map(e => (0, i.jsx)(v, {
                guildId: e,
                premiumSubscription: n,
                appliedGuildBoosts: l[e]
            }, e))
        }), (0, i.jsx)("div", {
            className: S.vK
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
            if (!(0, g.I5)(s) && e++, null != s.premiumGuildSubscription) {
                let e = s.premiumGuildSubscription.guildId;
                e in n || (n[e] = []), n[e].push(s)
            }
        }), {
            boostsByGuildId: n,
            numActiveGuildBoostSlots: e
        }
    }, [t]);
    if (null == n || 0 === Object.keys(r).length) return null;
    let d = o > _.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: S.iE,
        children: [(0, i.jsx)("div", {
            className: S.kL,
            children: x.default.keys(r).map(e => (0, i.jsx)(N, {
                guildId: e,
                guildBoostSlotRecords: r[e],
                premiumSubscription: n,
                hasCancelableGuildBoostSlot: d,
                showAltText: l
            }, e))
        }), (0, i.jsx)("div", {
            className: S.vK
        })]
    })
}