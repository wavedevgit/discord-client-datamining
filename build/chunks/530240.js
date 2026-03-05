/** chunk id: 530240 params = (module,exports,require) **/
n.d(t, {
    A: () => j,
    N: () => v
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(380278),
    a = n(417597),
    r = n(397927),
    o = n(775602),
    d = n(531260),
    c = n(39672),
    u = n(545934),
    _ = n(71393),
    g = n(473145),
    m = n(927578),
    A = n(661191),
    h = n(101135),
    p = n(708030),
    x = n(358172),
    E = n(652215),
    T = n(788868),
    S = n(985018),
    C = n(904004);

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
        if (null == e || e === E.TVA.NONE) return "";
        let t = [S.intl.formatToPlainString(S.t["dLlKX/"], {
            numEmojiSlots: T.TG[e].limits.emoji
        }), S.intl.formatToPlainString(S.t["+ANIfv"], {
            numStickerSlots: T.TG[e].limits.stickers
        }), S.intl.formatToPlainString(S.t["4gt60b"], {
            numSoundboardSlots: T.TG[e].limits.soundboardSounds
        }), S.intl.formatToPlainString(S.t.XahSjZ, {
            resolution: T.TG[e].limits.screenShareQualityResolution,
            framerate: T.TG[e].limits.screenShareQualityFramerate
        }), S.intl.formatToPlainString(S.t.NbNs7S, {
            bitrate: T.TG[e].limits.bitrate / 1e3
        }), S.intl.formatToPlainString(S.t.VVKcpn, {
            filesize: T.TG[e].limits.fileSize / 1024 / 1024
        }), S.intl.formatToPlainString(S.t.TbpCvv, {
            numVideoStageSeats: T.TG[e].limits.stageVideoUsers
        }), S.intl.string(S.t.LDyX3i), S.intl.string(S.t.YtGlPW)];
        e >= E.TVA.TIER_2 && (t.push(S.intl.string(S.t.SztbtN)), t.push(S.intl.string(S.t["3GK91n"]))), e >= E.TVA.TIER_3 && t.push(S.intl.string(S.t["XUUJd+"]));
        let n = t[Math.floor(Math.random() * t.length)];
        return S.intl.format(S.t["/dOAmQ"], {
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
    return o || t === E.TVA.NONE ? (0, i.jsx)("div", {
        className: C.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: u
        })
    }) : g((e, t) => (0, i.jsx)(l.animated.div, {
        style: e,
        className: C.xm,
        children: (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "text-muted",
            children: t ? _ : u
        })
    }))
}

function I(e) {
    let {
        guildTier: t,
        guildBoostSlot: n,
        premiumSubscription: l,
        hasCancelableGuildBoostSlot: u,
        showAltText: _,
        isLastGuildBoostSlot: m
    } = e, A = (0, a.bG)([o.A], () => o.A.useReducedMotion), x = s.useMemo(() => null != n.cooldownEndsAt ? new Date(n.cooldownEndsAt) : null, [n]), E = s.useMemo(() => null != x && x > new Date, [x]), T = (0, g.I5)(n), I = (0, d.A)(), b = s.useRef(null);
    return (0, i.jsxs)("div", {
        className: C.PW,
        children: [(0, i.jsxs)("div", {
            className: C.$U,
            children: [(0, i.jsx)(p.A, {
                isCanceled: T,
                hasCooldown: E,
                useReducedMotion: A
            }), (0, i.jsx)("div", {
                className: C.vh,
                children: null != x && E && !T ? (0, i.jsx)(h.A, {
                    className: C.xm,
                    cooldown: x.getTime()
                }) : (0, i.jsx)(f, {
                    guildTier: t,
                    guildBoostSlot: n,
                    showAltText: _,
                    isCanceled: T,
                    premiumSubscription: l,
                    fractionalPremiumInfo: I
                })
            }), (0, i.jsx)(r.YNO, {
                targetElementRef: b,
                renderPopout: function(e) {
                    let {
                        closePopout: t
                    } = e;
                    return (0, i.jsx)(c.A, {
                        onClose: t,
                        guildBoostSlot: n,
                        premiumSubscription: l,
                        hasCancelableGuildBoostSlot: u,
                        fractionalState: I.fractionalState
                    })
                },
                position: "right",
                align: "center",
                children: e => (0, i.jsx)(r.DUT, {
                    ...e,
                    innerRef: b,
                    "aria-label": S.intl.string(S.t.PdRCRg),
                    className: C.oU,
                    children: (0, i.jsx)(r.FHP, {
                        size: "md",
                        color: "currentColor"
                    })
                })
            })]
        }), !m && (0, i.jsx)("div", {
            className: C.eX
        })]
    })
}

function b(e) {
    let {
        guildId: t,
        guildBoostSlotRecords: n,
        premiumSubscription: s,
        hasCancelableGuildBoostSlot: l,
        showAltText: r
    } = e, o = (0, a.bG)([_.A], () => _.A.getGuild(t), [t]);
    return (0, i.jsxs)("div", {
        className: C.ag,
        children: [(0, i.jsx)(x.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(I, {
            guildTier: o?.premiumTier,
            guildBoostSlot: e,
            premiumSubscription: s,
            hasCancelableGuildBoostSlot: l,
            showAltText: r,
            isLastGuildBoostSlot: t === n.length - 1
        }, e.id))]
    })
}

function N(e) {
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
        children: [(0, i.jsx)(x.A, {
            guildId: t,
            boostingVariant: !1
        }), n.map((e, t) => (0, i.jsx)(I, {
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
            children: A.default.keys(l).map(e => (0, i.jsx)(N, {
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
    let d = o > m.Ay.getNumIncludedPremiumGuildSubscriptionSlots(n.planId);
    return (0, i.jsxs)("div", {
        className: C.iE,
        children: [(0, i.jsx)("div", {
            className: C.kL,
            children: A.default.keys(r).map(e => (0, i.jsx)(b, {
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