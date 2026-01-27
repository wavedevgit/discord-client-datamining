/** Chunk was on web.js **/
/** chunk id: 277044, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
}), n(896048), n(492834), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(311907),
    s = n(827734),
    l = n(421380),
    c = n(397927),
    u = n(686956),
    d = n(624793),
    f = n(767143),
    p = n(652176),
    _ = n(796774),
    h = n(807348),
    m = n(69217),
    g = n(71393),
    E = n(465794),
    y = n(704591),
    b = n(586652),
    O = n(788868),
    v = n(652215),
    A = n(980504),
    I = n(985018),
    S = n(331129);

function T(e) {
    let {
        discoverableGuildId: t,
        closePopout: n,
        buttonType: a
    } = e, o = i.useCallback(async () => {
        if (n(), null != t) try {
            await u.A.joinGuild(t), u.A.transitionToGuildSync(t)
        } catch (e) {}
    }, [n, t]);
    return a === b.E.GET_NITRO ? (0, r.jsx)(E.A, {
        fullWidth: !0,
        showGradient: !0,
        premiumModalAnalyticsLocation: {
            section: v.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT
        },
        subscriptionTier: O.pe.TIER_2,
        size: l.$n.Sizes.SMALL,
        color: l.$n.Colors.CUSTOM,
        onClick: n,
        textOptions: {
            textOverride: I.intl.string(I.t.pj0XBN)
        }
    }) : a === b.E.JOIN_GUILD ? (0, r.jsx)(c.Button, {
        variant: "primary",
        size: "sm",
        text: I.intl.string(I.t.riu2R5),
        fullWidth: !0,
        onClick: o
    }) : null
}

function C(e) {
    let {
        sound: t,
        channel: n,
        closePopout: l,
        refreshPosition: u
    } = e, E = t.guildId === A.mV, O = (0, o.bG)([g.A], () => g.A.getGuild(t.guildId)), v = !E && null != O, [C, N] = i.useState(), w = (0, y.tj)({
        location: "SoundmojiGuildInfo"
    }), R = E || v || null != C || !w, [P, D] = i.useState(!R);
    i.useEffect(() => {
        R || (D(!0), (0, _.nh)(t.soundId, t.guildId).then(e => {
            N(e)
        }).finally(() => {
            D(!1), u()
        }))
    }, [u, R, t.guildId, t.soundId]);
    let {
        buttonType: L,
        description: x
    } = (0, b.A)(t, n, v, C), M = L === b.E.JOIN_GUILD, j = !E && P, k = i.useMemo(() => v ? d.GO.createFromGuildRecord(O) : null != C ? d.GO.createFromDiscoverableGuild(C) : void 0, [O, v, C]);
    return j ? (0, r.jsx)(p.Y0, {}) : (0, r.jsxs)("div", {
        className: S.op,
        children: [(0, r.jsxs)(p.Uq, {
            children: [(0, r.jsxs)("div", {
                className: S.g4,
                children: [(0, r.jsx)(m.Ay, {
                    buttonOverlay: h.If.NONE,
                    sound: t,
                    channel: void 0,
                    isSoundmoji: !0,
                    onSelectItem: () => {}
                }), (0, r.jsx)(a.EYj, {
                    variant: "text-sm/normal",
                    children: x
                })]
            }), null != k && (0, r.jsxs)("div", {
                className: S.Qe,
                children: [(0, r.jsx)(a.EYj, {
                    variant: "eyebrow",
                    color: "text-muted",
                    className: S.x$,
                    children: v ? I.intl.string(I.t.tGDabk) : I.intl.string(I.t.rnOmOa)
                }), (0, r.jsx)("div", {
                    className: S.Ff,
                    children: (0, r.jsx)(f.G7, {
                        expressionSourceGuild: k,
                        hasJoinedExpressionSourceGuild: v,
                        isDisplayingJoinGuildButtonInPopout: M
                    })
                }), (0, r.jsx)(T, {
                    buttonType: L,
                    discoverableGuildId: null == C ? void 0 : C.id,
                    closePopout: l
                })]
            })]
        }), (0, r.jsx)(c.LpS, {
            text: "BETA",
            color: s.A.colors.BACKGROUND_BRAND.css,
            className: S.aZ
        })]
    })
}