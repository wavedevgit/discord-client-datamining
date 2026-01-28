/** Chunk was on 78528 **/
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
    p = n(397927),
    h = n(442433),
    f = n(793574),
    g = n(688810),
    m = n(139286),
    b = n(480890),
    A = n(267102),
    y = n(342296),
    _ = n(961350),
    O = n(696451),
    j = n(562153),
    v = n(105530),
    x = n(806931),
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
            children: [s ? (0, r.jsx)(p.KTN, {
                size: "lg",
                className: E.Q6,
                color: d.A.unsafe_rawColors.RED_400.css
            }) : null, a ? (0, r.jsx)(p.G3N, {
                size: "lg",
                className: E.Q6
            }) : null, (0, r.jsx)(p.Text, {
                className: E.Qq,
                variant: "text-sm/normal",
                color: "text-strong",
                children: j.Ay.getName(t, n, l)
            }), i ? (0, r.jsx)(p._Jp, {
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
        } = n, h = d === v.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, f = d === v.zF.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)("div", {
                className: E.H,
                children: [f && (0, r.jsx)(p.E7M, {
                    size: "md",
                    color: "currentColor",
                    className: s()(E.Kk, {
                        [E.MD]: h
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
        } = t, j = i.getGuildId(), v = _.default.getId(), {
            newestAnalyticsLocation: I
        } = (0, g.Ay)(f.A.AUDIENCE_TILE), T = (0, A.Us)(), P = (0, u.bG)([O.Ay], () => {
            var e;
            return null != j && (null == (e = O.Ay.getMember(j, a.id)) ? void 0 : e.premiumSince) != null
        }, [j, a.id]), w = l.useRef(null);
        o()(null != j, "Channel cannot be guildless");
        let R = l.useCallback(e => {
            (0, m.x)({
                type: c.ImpressionTypes.MENU,
                name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: {
                    location: "AudienceTile",
                    is_tile_owner: a.id === v,
                    tile_type: x.qs.USER
                }
            }), (0, h.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("29534"), n.e("55296"), n.e("84841"), n.e("31885")]).then(n.bind(n, 107632));
                return t => (0, r.jsx)(e, S(C({}, t), {
                    user: a,
                    guildId: j,
                    channel: i,
                    showMediaItems: !0,
                    showStageChannelItems: !0,
                    showChatItems: !1,
                    onInteraction: (0, b.s)("GuildChannelUserContextMenu", I, {
                        targetUserId: a.id,
                        tileType: x.qs.USER
                    })
                }))
            }, {
                context: T
            })
        }, [a, v, T, j, i, I]);
        return (0, r.jsx)(y.A, {
            targetElementRef: w,
            user: a,
            guildId: i.guild_id,
            channelId: i.id,
            clickTrap: !0,
            children: e => (0, r.jsx)(p.DUT, S(C({
                innerRef: w,
                className: s()(E.iA, {
                    [E.wP]: P || d,
                    [E.fP]: P && d
                }),
                onContextMenu: R
            }, e), {
                children: (0, r.jsx)(N, {
                    participant: t,
                    guildId: j,
                    channel: i,
                    isPremium: P
                })
            }))
        })
    })