/** chunk id: 730253 params = (module,exports,require) **/
n.d(t, {
    A: () => F
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(342494),
    o = n(397927),
    d = n(308528),
    c = n(933958),
    u = n(969151),
    h = n(793574),
    A = n(688810),
    _ = n(941971),
    m = n(900848),
    p = n(65611),
    g = n(855725),
    f = n(532794),
    E = n(366811),
    x = n(345942),
    I = n(616356),
    C = n(734057),
    N = n(309010),
    T = n(977997),
    S = n(661191),
    b = n(181079),
    y = n(422258),
    v = n(668267),
    R = n(93055),
    j = n(5180),
    O = n(210082),
    L = n(780645),
    M = n(332396),
    D = n(652215),
    U = n(97483),
    G = n(49999),
    P = n(788868),
    k = n(335993),
    w = n(985018),
    B = n(959495),
    V = n(988572);
let H = {
    analyticsSource: {
        page: D.liQ.GUILD_CHANNEL,
        section: D.JJy.CHANNEL_LIST,
        object: D.ZSU.CHANNEL
    }
};

function F(e) {
    let t, F, W, K, Y, z, q, X, J, $, Q, Z, {
            shouldShowIntroPopover: ee,
            markIntroPopoverAsDismissed: et
        } = e,
        en = (0, s.Vd)("favorites"),
        {
            favoriteAdded: ei,
            clearFavoriteAdded: el
        } = (0, R.CJ)(),
        es = l.useRef(null),
        {
            analyticsLocations: ea
        } = (0, A.Ay)(h.A.FAVORITES_GUILD_BUTTON),
        [er, eo] = l.useState(!1),
        ed = (0, L.$)("favorite-server-context"),
        {
            favoriteGuildEnabled: ec,
            favoriteGuildMuted: eu,
            favoriteChannels: eh
        } = (0, a.cf)([b.A], () => ({
            favoriteGuildEnabled: b.A.favoriteGuildEnabled,
            favoriteChannels: b.A.getFavoriteChannels(),
            favoriteGuildMuted: b.A.favoriteGuildMuted
        })),
        eA = (0, a.bG)([N.A], () => N.A.getChannelId(D.YYv)),
        e_ = (0, a.bG)([C.A], () => C.A.getChannel(eA)),
        em = (0, E.A)(e => e.guildId),
        ep = (0, j.ai)(em),
        {
            badge: eg,
            unread: ef
        } = (0, O.A)(eh),
        eE = (F = null != (t = (0, a.bG)([N.A], () => N.A.getVoiceChannelId())) && null != eh[t], W = (0, a.bG)([I.A], () => {
            if (!F) return !1;
            let e = I.A.getCurrentUserActiveStream();
            return null != e && null != eh[e.channelId]
        }), K = (0, a.bG)([I.A], () => I.A.getAllApplicationStreams().some(e => null != eh[e.channelId])), Y = (0, a.bG)([T.A], () => F && null != t && T.A.hasVideo(t), [F, t]), z = (0, a.yK)([c.Ay], () => S.default.keys(eh).reduce((e, t) => (e.push(...c.Ay.getEmbeddedActivitiesForChannel(t)), e), [])), q = (0, a.bG)([c.Ay], () => Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(e => {
            let {
                location: t
            } = e, n = (0, u.H)(t);
            return null != n && null != eh[n]
        })), X = z.length > 0, J = !1, $ = !1, Q = !1, Z = !1, F ? (J = !Y, $ = Y, Q = W, Z = q) : (Q = K, Z = X), (0, p.oi)({
            audio: J,
            video: $,
            screenshare: Q,
            liveStage: !1,
            isCurrentUserConnected: F,
            activity: Z
        })),
        ex = eg > 0 ? (0, g.w)(eg) : null,
        eI = l.useRef(!1),
        {
            hasAccess: eC
        } = (0, R.TW)("FavoritesButton"),
        eN = l.useCallback((e, t) => {
            eI.current = !0, et(e, t)
        }, [et]),
        eT = l.useCallback(e => {
            e && ((0, v.mv)("intro_dc"), (0, x.u)(D.YYv)), eC ? (ec || (0, y.tV)(!0, "favorites_button_onboarding"), e && (0, o.mMO)(async () => {
                let {
                    default: e
                } = await n.e("59839").then(n.bind(n, 889186));
                return t => (0, i.jsx)(e, {
                    ...t,
                    parentId: null,
                    source: "favorites_button_onboarding"
                })
            })) : e && (0, f.A)({
                subscriptionTier: P.pe.TIER_2,
                analyticsLocations: ea
            }), eN(G.i.TAKE_ACTION)
        }, [eN, ec, eC, ea]);
    return l.useEffect(() => {
        ee && (eI.current = !1)
    }, [ee]), l.useEffect(() => () => {
        ee && !eI.current && eN(G.i.AUTO_DISMISS, !0)
    }, [eN, ee]), l.useEffect(() => {
        if (ei) {
            let e = (0, o.createToast)(w.intl.string(w.t["4tSWQg"]), U.Ck.FAVORITE);
            (0, o.showToast)(e);
            let t = setTimeout(el, e.options?.duration ?? U.jg.duration);
            return () => {
                el(), clearTimeout(t)
            }
        }
    }, [ei, el]), (0, i.jsxs)(m.c, {
        children: [(0, i.jsx)(_.A, {
            selected: ep,
            hovered: er,
            unread: ef && !eu,
            className: B.I
        }), (0, i.jsx)(M.A, {
            children: (0, i.jsx)(o.Qk9, {
                selected: !0,
                upperBadge: eE,
                lowerBadge: ex,
                children: (0, i.jsx)("div", {
                    ref: es,
                    children: (0, i.jsx)(o.jlP, {
                        ...en,
                        ariaLabel: w.intl.formatToPlainString(w.t["/uzRss"], {
                            guildName: w.intl.string(w.t.wMWyci),
                            mentions: eg
                        }),
                        "aria-selected": ep,
                        to: {
                            pathname: D.BVt.CHANNEL(D.YYv, eA),
                            state: H
                        },
                        selected: ep || er,
                        onClick: () => {
                            ee && eT(!1)
                        },
                        onMouseEnter: () => eo(!0),
                        onMouseLeave: () => eo(!1),
                        onMouseDown: function() {
                            null != e_ && d.A.preload(e_.guild_id, e_.id)
                        },
                        onContextMenu: ed,
                        children: (0, i.jsx)(o.Gg5, {
                            size: "custom",
                            color: "currentColor",
                            className: B.w,
                            width: 20,
                            height: 20
                        })
                    })
                })
            })
        }), ee && (0, i.jsx)(r.AM, {
            targetElementRef: es,
            gradientColor: "nitro-pink",
            position: "right",
            alignmentStrategy: "edge",
            align: "top",
            caretConfig: {
                align: "start"
            },
            badge: {
                type: "beta",
                variant: "expressive"
            },
            graphic: {
                src: V.A,
                type: "image",
                aspectRatio: "16/9"
            },
            title: w.intl.string(k.default["bu/mLv"]),
            body: w.intl.string(k.default["/x2jT7"]),
            onRequestClose: () => eN(G.i.USER_DISMISS),
            actions: [{
                icon: o.tvc,
                text: eC ? w.intl.string(k.default["0lHa0Z"]) : w.intl.string(k.default["0nZZEk"]),
                onClick: () => eT(!0),
                variant: eC ? void 0 : "expressive"
            }]
        })]
    })
}