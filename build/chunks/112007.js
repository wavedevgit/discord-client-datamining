/** chunk id: 112007 params = (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(938796);
var i = n(627968),
    a = n(64700),
    l = n(110259),
    r = n(821418),
    s = n(665260),
    o = n(311907),
    d = n(990078),
    c = n(397927),
    u = n(846293),
    _ = n(793574),
    m = n(688810),
    h = n(139286),
    p = n(290331),
    g = n(517905),
    A = n(986268),
    x = n(21599),
    f = n(529200),
    C = n(95701),
    E = n(696451),
    I = n(860689),
    v = n(505417),
    b = n(168428),
    T = n(652215),
    y = n(985018),
    S = n(344900);

function N(e) {
    let t, N, j, {
            onTransitionToInviteChannel: L,
            onAcceptInstantInvite: R,
            guild: P,
            invite: w,
            message: M,
            currentUserId: D
        } = e,
        k = D === M.author.id,
        {
            channel: O,
            approximate_member_count: U,
            approximate_presence_count: B
        } = w,
        G = w.state === T.elq.ACCEPTING,
        F = null != O ? (0, C.OY)(O) : null,
        H = null != P,
        V = null != F,
        q = null != F && F.isGuildStageVoice(),
        W = (0, s.Lt)(w.flags ?? 0, r.Q.IS_GUEST_INVITE),
        z = F?.isGuildVoiceOrThread() ?? !1,
        Y = P?.features.has(T.GuildFeatures.HUB) ?? !1,
        Q = P?.id,
        {
            analyticsLocations: K
        } = (0, m.Ay)(_.A.INVITE_EMBED);
    (0, h.A)({
        name: l.ImpressionNames.INVITE_EMBED,
        type: l.ImpressionTypes.VIEW,
        properties: {
            invite_code: w.code,
            invite_guild_id: w.guild?.id,
            invite_channel_id: O?.id,
            invite_instance_id: (0, x._U)(w.code, M.id),
            invite_channel_type: O?.type,
            embed_type: "guild_invite",
            location_stack: K
        }
    });
    let [X, J] = a.useState(!1), Z = a.useCallback(() => J(!1), []), $ = a.useRef(null), ee = (0, o.bG)([E.Ay], () => p.A.canAcceptInvite([E.Ay], w)), et = a.useCallback(() => {
        J(!0), (0, u.Pq)(Q, "show profile", K)
    }, [Q, K]), en = a.useCallback(() => {
        let e = "noop";
        H ? (L(), e = "transition") : (R(), e = "accept"), (0, u.he)({
            invite: w,
            action: e,
            inviter_id: M.author.id,
            invite_message_id: M.id,
            invite_instance_id: (0, x._U)(w.code, M.id)
        }, K)
    }, [w, M, K, H, L, R]);
    if (null == P) {
        if (null == w.guild) return (0, i.jsx)(b.A, {});
        (P = I.DY(w.guild)).premiumTier = w.guild.premium_tier ?? T.TVA.NONE
    }
    let ei = (0, v.l)({
        isVoiceChannel: z,
        isOwnInvite: k,
        isGuest: W,
        isHubGuild: Y,
        isStage: q,
        isStream: !1
    });
    return N = (0, i.jsxs)("span", {
        className: S.FA,
        children: [(0, i.jsx)(g.A, {
            guildId: P.id,
            name: P.name,
            shouldShow: X,
            onRequestClose: Z,
            targetElementRef: $,
            children: () => (0, i.jsx)(f.A.GuildName, {
                guild: P,
                ref: $
            })
        }), (0, i.jsx)("span", {
            className: S.E3,
            children: (0, i.jsx)(A.A, {
                guild: P,
                isBannerVisible: !1,
                disableBoostClick: !0
            })
        })]
    }), W && (j = (0, i.jsx)(d.m, {
        asContainer: !0,
        text: y.intl.string(y.t["/FeTK6"]),
        children: (0, i.jsx)(c.mir, {
            size: "md",
            color: "currentColor",
            className: S.G
        })
    })), z ? (N = (0, i.jsx)(f.A.Channel, {
        channel: F
    }), t = (0, i.jsxs)("span", {
        className: S.FA,
        children: [y.intl.format(y.t["2wimj5"], {
            guildName: P.name
        }), (0, i.jsx)("span", {
            className: S.E3,
            children: (0, i.jsx)(A.A, {
                guild: P,
                isBannerVisible: !1
            })
        })]
    })) : null != U && U >= 5 || null != B && B > 0 ? t = (0, i.jsx)(f.A.Data, {
        members: U,
        membersOnline: B
    }) : V && (t = (0, i.jsx)(f.A.Channel, {
        channel: F,
        guild: P
    })), (0, i.jsxs)(f.A, {
        children: [(0, i.jsx)(f.A.GuildSplash, {
            guild: P
        }), (0, i.jsx)(f.A.Header, {
            text: ei,
            extra: j
        }), (0, i.jsxs)(f.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: S.iH,
                children: [(0, i.jsx)(f.A.Icon, {
                    guild: P
                }), (0, i.jsx)(f.A.Info, {
                    title: N,
                    onClick: et,
                    children: t
                })]
            }), (0, i.jsx)("div", {
                className: S.UD,
                children: (0, i.jsx)(c.Button, {
                    onClick: en,
                    loading: G,
                    variant: "active",
                    fullWidth: z,
                    disabled: !ee,
                    text: z ? q ? y.intl.string(y.t["7vb2cc"]) : y.intl.string(y.t.gpqgah) : H ? y.intl.string(y.t.cEnaWx) : y.intl.string(y.t.XpeFYr)
                })
            })]
        }), P.features.has(T.GuildFeatures.HUB) && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
                className: S.me
            }), (0, i.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: y.intl.format(y.t["/o1IfA"], {
                    onClick: () => (0, c.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("98363").then(n.bind(n, 780086));
                        return t => (0, i.jsx)(e, {
                            ...t
                        })
                    })
                })
            })]
        })]
    })
}