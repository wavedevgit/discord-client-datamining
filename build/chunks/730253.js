/** Chunk was on 1113 **/
/** chunk id: 730253, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => D
}), n(896048), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(837381),
    o = n(311907),
    c = n(397927),
    u = n(308528),
    d = n(442433),
    h = n(933958),
    p = n(969151),
    g = n(941971),
    f = n(900848),
    m = n(65611),
    b = n(855725),
    A = n(366811),
    y = n(616356),
    O = n(734057),
    _ = n(309010),
    x = n(977997),
    j = n(661191),
    v = n(181079),
    E = n(93055),
    C = n(210082),
    S = n(595567),
    I = n(332396),
    N = n(652215),
    T = n(985018),
    P = n(299446);

function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let R = {
    analyticsSource: {
        page: N.liQ.GUILD_CHANNEL,
        section: N.JJy.CHANNEL_LIST,
        object: N.ZSU.CHANNEL
    }
};

function D() {
    var e, t;
    let i, D, L, M, k, G, U, V, B, H, F, K, Y = (0, a.Vd)("favorites"),
        {
            favoriteAdded: W,
            clearFavoriteAdded: z
        } = (0, E.CJ)(),
        [q, X] = l.useState(!1),
        {
            favoriteServerMuted: J,
            favoriteChannels: Q
        } = (0, o.cf)([v.A], () => ({
            favoriteChannels: v.A.getFavoriteChannels(),
            favoriteServerMuted: v.A.favoriteServerMuted
        })),
        Z = (0, o.bG)([_.A], () => _.A.getChannelId(N.YYv)),
        $ = (0, o.bG)([O.A], () => O.A.getChannel(Z)),
        ee = (0, A.A)(e => e.guildId) === N.YYv,
        {
            badge: et,
            unread: en
        } = (0, C.A)(Q),
        er = (D = null != (i = (0, o.bG)([_.A], () => _.A.getVoiceChannelId())) && null != Q[i], L = (0, o.bG)([y.A], () => {
            if (!D) return !1;
            let e = y.A.getCurrentUserActiveStream();
            return null != e && null != Q[e.channelId]
        }), M = (0, o.bG)([y.A], () => y.A.getAllApplicationStreams().some(e => null != Q[e.channelId])), k = (0, o.bG)([x.A], () => D && null != i && x.A.hasVideo(i), [D, i]), G = (0, o.yK)([h.Ay], () => j.default.keys(Q).reduce((e, t) => (e.push(...h.Ay.getEmbeddedActivitiesForChannel(t)), e), [])), U = (0, o.bG)([h.Ay], () => Array.from(h.Ay.getSelfEmbeddedActivities().values()).some(e => {
            let {
                location: t
            } = e, n = (0, p.H)(t);
            return null != n && null != Q[n]
        })), V = G.length > 0, B = !1, H = !1, F = !1, K = !1, D ? (B = !k, H = k, F = L, K = U) : (F = M, K = V), (0, m.oi)({
            audio: B,
            video: H,
            screenshare: F,
            liveStage: !1,
            isCurrentUserConnected: D,
            activity: K
        })),
        el = et > 0 ? (0, b.w)(et) : null,
        ei = l.useCallback(() => {
            z()
        }, [z]);
    return (0, r.jsxs)(f.c, {
        children: [(0, r.jsx)(g.A, {
            selected: ee,
            hovered: q,
            unread: en && !J,
            className: P.Io
        }), (0, r.jsx)(I.A, {
            onShow: ei,
            children: (0, r.jsx)(S.Q, {
                children: (0, r.jsx)(c.Qk9, {
                    selected: !0,
                    upperBadge: er,
                    lowerBadge: el,
                    children: (0, r.jsx)(c.jlP, (e = w({}, Y), t = t = {
                        ariaLabel: T.intl.formatToPlainString(T.t["/uzRss"], {
                            guildName: T.intl.string(T.t.wMWyci),
                            mentions: et
                        }),
                        "aria-selected": ee,
                        to: {
                            pathname: N.BVt.CHANNEL(N.YYv, Z),
                            state: R
                        },
                        selected: ee || q,
                        onMouseEnter: () => X(!0),
                        onMouseLeave: () => X(!1),
                        onMouseDown: function() {
                            null != $ && u.A.preload($.guild_id, $.id)
                        },
                        onContextMenu: function(e) {
                            (0, d.L3)(e, async () => {
                                let {
                                    default: e
                                } = await n.e("74654").then(n.bind(n, 521709));
                                return t => (0, r.jsx)(e, w({}, t))
                            })
                        },
                        children: (0, r.jsx)("div", {
                            className: s()(P.hN, {
                                [P.b1]: W
                            }),
                            children: (0, r.jsx)(c.Gg5, {
                                size: "custom",
                                color: "currentColor",
                                className: P.wB,
                                width: 20,
                                height: 20
                            })
                        })
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(t)).forEach(function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }), e))
                })
            })
        })]
    })
}