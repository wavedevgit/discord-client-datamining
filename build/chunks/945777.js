/** chunk id: 945777, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    S: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(827734),
    h = n(397927),
    A = n(442433),
    m = n(793574),
    p = n(688810),
    g = n(139286),
    _ = n(480890),
    f = n(267102),
    x = n(342296),
    C = n(961350),
    E = n(696451),
    I = n(562153),
    N = n(105530),
    b = n(806931),
    S = n(750201);
let T = s.memo(function(e) {
        let {
            guildId: t,
            channelId: n,
            user: s,
            isPremium: l,
            isBlocked: a,
            isIgnored: r
        } = e;
        return (0, i.jsxs)("div", {
            className: S.FS,
            children: [a ? (0, i.jsx)(h.KTN, {
                size: "lg",
                className: S.Q6,
                color: u.A.unsafe_rawColors.RED_400.css
            }) : null, r ? (0, i.jsx)(h.G3N, {
                size: "lg",
                className: S.Q6
            }) : null, (0, i.jsx)(h.Text, {
                className: S.Qq,
                variant: "text-sm/normal",
                color: "text-strong",
                children: I.Ay.getName(t, n, s)
            }), l ? (0, i.jsx)(h._Jp, {
                className: S.EH,
                color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK
            }) : null]
        })
    }),
    v = s.memo(function(e) {
        let {
            participant: t,
            guildId: n,
            channel: s,
            isPremium: l
        } = e, {
            user: r,
            blocked: o,
            ignored: c,
            rtsState: d
        } = t, u = d === N.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK, A = d === N.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)("div", {
                className: S.H,
                children: [A && (0, i.jsx)(h.E7M, {
                    size: "md",
                    color: "currentColor",
                    className: a()(S.Kk, {
                        [S.MD]: u
                    })
                }), (0, i.jsx)("img", {
                    src: r.getAvatarURL(s.guild_id, 56, !1) ?? void 0,
                    alt: r.username,
                    "aria-label": r.username,
                    className: a()(S.my, {
                        [S.zj]: o || c
                    })
                })]
            }), (0, i.jsx)(T, {
                guildId: n,
                channelId: s.id,
                user: r,
                isPremium: l,
                isBlocked: o,
                isIgnored: c
            })]
        })
    }),
    y = () => (0, i.jsx)("div", {
        className: S.j8
    }),
    j = s.memo(function(e) {
        let {
            participant: t,
            channel: l
        } = e, {
            user: r,
            blocked: u
        } = t, I = l.getGuildId(), N = C.default.getId(), {
            newestAnalyticsLocation: T
        } = (0, p.Ay)(m.A.AUDIENCE_TILE), y = (0, f.Us)(), j = (0, d.bG)([E.Ay], () => null != I && E.Ay.getMember(I, r.id)?.premiumSince != null, [I, r.id]), R = s.useRef(null);
        o()(null != I, "Channel cannot be guildless");
        let O = s.useCallback(e => {
            (0, g.x)({
                type: c.ImpressionTypes.MENU,
                name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                properties: {
                    location: "AudienceTile",
                    is_tile_owner: r.id === N,
                    tile_type: b.qs.USER
                }
            }), (0, A.L3)(e, async () => {
                let {
                    default: e
                } = await Promise.all([n.e("97262"), n.e("42128"), n.e("84841"), n.e("54266")]).then(n.bind(n, 107632));
                return t => (0, i.jsx)(e, {
                    ...t,
                    user: r,
                    guildId: I,
                    channel: l,
                    showMediaItems: !0,
                    showStageChannelItems: !0,
                    showChatItems: !1,
                    onInteraction: (0, _.s)("GuildChannelUserContextMenu", T, {
                        targetUserId: r.id,
                        tileType: b.qs.USER
                    })
                })
            }, {
                context: y
            })
        }, [r, N, y, I, l, T]);
        return (0, i.jsx)(x.A, {
            targetElementRef: R,
            user: r,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: e => (0, i.jsx)(h.DUT, {
                innerRef: R,
                className: a()(S.iA, {
                    [S.wP]: j || u,
                    [S.fP]: j && u
                }),
                onContextMenu: O,
                ...e,
                children: (0, i.jsx)(v, {
                    participant: t,
                    guildId: I,
                    channel: l,
                    isPremium: j
                })
            })
        })
    })