/** Chunk was on 1113 **/
/** chunk id: 945777, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => P,
    S: () => T
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    u = n(311907),
    d = n(827734),
    h = n(397927),
    p = n(442433),
    g = n(793574),
    f = n(688810),
    m = n(139286),
    b = n(480890),
    A = n(267102),
    y = n(342296),
    O = n(961350),
    _ = n(696451),
    x = n(562153),
    j = n(105530),
    v = n(806931),
    E = n(750201);

function C(e) {
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

function S(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let I = l.memo(function(e) {
        let {
            guildId: t,
            channelId: n,
            user: l,
            isPremium: i,
            isBlocked: s,
            isIgnored: a
        } = e;
        return (0, r.jsxs)("div", {
            className: E.FS,
            children: [s ? (0, r.jsx)(h.KTN, {
                size: "lg",
                className: E.Q6,
                color: d.A.unsafe_rawColors.RED_400.css
            }) : null, a ? (0, r.jsx)(h.G3N, {
                size: "lg",
                className: E.Q6
            }) : null, (0, r.jsx)(h.Text, {
                className: E.Qq,
                variant: "text-sm/normal",
                color: "text-strong",
                children: x.Ay.getName(t, n, l)
            }), i ? (0, r.jsx)(h._Jp, {
                className: E.EH,
                color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK
            }) : null]
        })
    }),
    N = l.memo(function(e) {
        var t;
        let {
            participant: n,
            guildId: l,
            channel: i,
            isPremium: a
        } = e, {
            user: o,
            blocked: c,
            ignored: u,
            rtsState: d
        } = n, p = d === j.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, g = d === j.zF.REQUESTED_TO_SPEAK || p;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: E.H,
                children: [g && (0, r.jsx)(h.E7M, {
                    size: "md",
                    color: "currentColor",
                    className: s()(E.Kk, {
                        [E.MD]: p
                    })
                }), (0, r.jsx)("img", {
                    src: null != (t = o.getAvatarURL(i.guild_id, 56, !1)) ? t : void 0,
                    alt: o.username,
                    "aria-label": o.username,
                    className: s()(E.my, {
                        [E.zj]: c || u
                    })
                })]
            }), (0, r.jsx)(I, {
                guildId: l,
                channelId: i.id,
                user: o,
                isPremium: a,
                isBlocked: c,
                isIgnored: u
            })]
        })
    }),
    T = () => (0, r.jsx)("div", {
        className: E.j8
    }),
    P = l.memo(function(e) {
        let {
            participant: t,
            channel: i
        } = e, {
            user: a,
            blocked: d
        } = t, x = i.getGuildId(), j = O.default.getId(), {
            newestAnalyticsLocation: I
        } = (0, f.Ay)(g.A.AUDIENCE_TILE), T = (0, A.Us)(), P = (0, u.bG)([_.Ay], () => {
            var e;
            return null != x && (null == (e = _.Ay.getMember(x, a.id)) ? void 0 : e.premiumSince) != null
        }, [x, a.id]), w = l.useRef(null);
        o()(null != x, "Channel cannot be guildless");
        let R = l.useCallback(e => {
            (0, m.x)({
                type: c.ImpressionTypes.MENU,
                name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: {
                    location: "AudienceTile",
                    is_tile_owner: a.id === j,
                    tile_type: v.qs.USER
                }
            }), (0, p.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
                return t => (0, r.jsx)(e, S(C({}, t), {
                    user: a,
                    guildId: x,
                    channel: i,
                    showMediaItems: !0,
                    showStageChannelItems: !0,
                    showChatItems: !1,
                    onInteraction: (0, b.s)("GuildChannelUserContextMenu", I, {
                        targetUserId: a.id,
                        tileType: v.qs.USER
                    })
                }))
            }, {
                context: T
            })
        }, [a, j, T, x, i, I]);
        return (0, r.jsx)(y.A, {
            targetElementRef: w,
            user: a,
            guildId: i.guild_id,
            channelId: i.id,
            clickTrap: !0,
            children: e => (0, r.jsx)(h.DUT, S(C({
                innerRef: w,
                className: s()(E.iA, {
                    [E.wP]: P || d,
                    [E.fP]: P && d
                }),
                onContextMenu: R
            }, e), {
                children: (0, r.jsx)(N, {
                    participant: t,
                    guildId: x,
                    channel: i,
                    isPremium: P
                })
            }))
        })
    })