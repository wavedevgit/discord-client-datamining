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
    m = n(71393),
    _ = n(473145),
    g = n(927578),
    A = n(661191),
    x = n(101135),
    p = n(708030),
    h = n(358172),
    T = n(652215),
    E = n(788868),
    f = n(985018),
    S = n(325234);

function C(e) {
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
            return d.isPausedForFractionalPremium && (e = c.endsAt.toDate()), f.intl.format(f.t.Z4ULRD, {
                date: e
            })
        }
        let e = null != n.premiumGuildSubscription ? A.default.extractTimestamp(n.premiumGuildSubscription.id) : 0;
        return f.intl.formatToPlainString(f.t.lY2Bur, {
            date: new Date(e)
        })
    }, [n, o, d, c]), m = s.useMemo(() => (function(e) {
        if (null == e || e === T.TVA.NONE) return "";
        let t = [f.intl.formatToPlainString(f.t["dLlKX/"], {
            numEmojiSlots: E.TG[e].limits.emoji
        }), f.intl.formatToPlainString(f.t["+ANIfv"], {
            numStickerSlots: E.TG[e].limits.stickers
        }), f.intl.formatToPlainString(f.t["4gt60b"], {
            numSoundboardSlots: E.TG[e].limits.soundboardSounds
        }), f.intl.formatToPlainString(f.t.XahSjZ, {
            resolution: E.TG[e].limits.screenShareQualityResolution,
            framerate: E.TG[e].limits.screenShareQualityFramerate
        }), f.intl.formatToPlainString(f.t.NbNs7S, {
            bitrate: E.TG[e].limits.bitrate / 1e3
        }), f.intl.formatToPlainString(f.t.VVKcpn, {
            filesize: E.TG[e].limits.fileSize / 1024 / 1024
        }), f.intl.formatToPlainString(f.t.TbpCvv, {
            numVideoStageSeats: E.TG[e].limits.stageVideoUsers
        }), f.intl.string(f.t.LDyX3i), f.intl.string(f.t.YtGlPW)];
        e >= T.TVA.TIER_2 && (t.push(f.intl.string(f.t.SztbtN)), t.push(f.intl.string(f.t["3GK91n"]))), e >= T.TVA.TIER_3 && t.push(f.intl.string(f.t["XUUJd+"]));
        let n = t[Math.floor(Math.random() * t.length)];
        return f.intl.format(f.t["/dOAmQ"], {
            perk: n
        })
    })(t), [t]), _ = (0, r.pnh)(a, {
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
        className: S.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: u
        })
    }) : _((e, t) => (0, i.jsx)(l.animated.div, {
        style: e,
        className: S.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: t ? m : u
        })
    }))
}

function b(e) {
    let {
        guildTier: t,
        guildBoostSlot: n,
        premiumSubscription: l,
        hasCancelableGuildBoostSlot: u,
        showAltText: m,
        isLastGuildBoostSlot: g
    } = e, A = (0, a.bG)([o.A], () => o.A.useReducedMotion), h = s.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), T = s.useMemo(() => null != h && h > new Date, [h]), E = (0, _.I5)(n), b = (0, d.A)(), N = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: S.PW,
        children: [(0, i.jsxs)("div", {
            className: S.$U,
            children: [(0, i.jsx)(p.A, {
                isCanceled: E,
                hasCooldown: T,
                useReducedMotion: A
            }), (0, i.jsx)("div", {
                className: S.vh,
                children: null != h && T && !E ? (0, i.jsx)(x.A, {
                    className: S.xm,
                    cooldown: h.getTime()
                }) : (0, i.jsx)(C, {
                    guildTier: t,
                    guildBoostSlot: n,
                    showAltText: m,
                    isCanceled: E,
                    premiumSubscription: l,
                    fractionalPremiumInfo: b
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
                        fractionalState: b.fractionalState
                    })
                },
                position: "right",
                align: "center",
                children: e => (0, i.jsx)(r.DUT, {
                    ...e,
                    innerRef: N,
                    "aria-label": f.intl.string(f.t.PdRCRg),
                    className: S.oU,
                    children: (0, i.jsx)(r.FHP, {
                        size: "md",
                        color: "currentColor"
                    })
                })
            })]
        }), !g && (0, i.jsx)("div", {
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
        children: [(0, i.jsx)(h.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(b, {
            guildTier: o?.premiumTier,
            guildBoostSlot: e,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: l,
            showAltText: r,
            isLastGuildBoostSlot: t === n.length - 1
        }, e.id))]
    })
}

function I(e) {
    let {
        guildId: t,
        appliedGuildBoosts: n,
        premiumSubscription: s
    } = e, l = (0, a.bG)([m.A], () => m.A.getGuild(t), [t]), r = A.default.fromTimestamp(Date.now());
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
        className: S.ag,
        children: [(0, i.jsx)(h.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(b, {
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
        className: S.iE,
        children: [(0, i.jsx)("div", {
            className: S.kL,
            children: A.default.keys(l).map(e => (0, i.jsx)(I, {
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
            if (!(0, _.I5)(s) && e++, null != s.premiumGuildSubscription) {
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
        className: S.iE,
        children: [(0, i.jsx)("div", {
            className: S.kL,
            children: A.default.keys(r).map(e => (0, i.jsx)(N, {
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