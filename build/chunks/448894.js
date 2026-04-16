/** chunk id: 448894 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    a = n(64700),
    l = n(284009),
    s = n.n(l),
    r = n(110259),
    o = n(158954),
    d = n(311907),
    c = n(846293),
    u = n(793574),
    _ = n(688810),
    m = n(139286),
    h = n(21599),
    p = n(529200),
    g = n(95701),
    A = n(616356),
    x = n(967198),
    f = n(860689),
    C = n(427262),
    E = n(168428),
    I = n(652215),
    v = n(172799),
    b = n(985018),
    T = n(344900);

function y(e) {
    let t, {
            invite: n,
            currentUserId: l,
            guild: y,
            message: S,
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: j
        } = e,
        L = y?.id,
        R = (0, d.bG)([x.A], () => x.A.getGuildId()),
        P = (0, d.bG)([A.A], () => null != n && null != n.target_user ? A.A.getActiveStreamForUser(n.target_user.id, L) : null, [n, L]),
        w = (0, d.bG)([A.A], () => null != n && null != n.target_user ? A.A.getStreamForUser(n.target_user.id, L) : null, [n, L]),
        {
            analyticsLocations: M
        } = (0, _.Ay)(u.A.INVITE_EMBED);
    (0, m.A)({
        name: r.ImpressionNames.INVITE_EMBED,
        type: r.ImpressionTypes.VIEW,
        properties: {
            invite_code: n.code,
            invite_guild_id: n.guild?.id,
            invite_channel_id: n.channel?.id,
            invite_instance_id: (0, h._U)(n.code, S.id),
            invite_channel_type: n.channel?.type,
            embed_type: "streaming_invite",
            location_stack: M
        }
    });
    let D = null != n && n.target_type === v.yV.STREAM && null != n.target_user && null != P,
        O = null != n && null != w && null != n.channel && null != n.guild && w.channelId === n.channel.id && w.guildId === n.guild.id;
    s()(null != n, "Invite cannot be null");
    let {
        target_type: k,
        target_user: U
    } = n;
    s()(k === v.yV.STREAM && null != U, "invalid streaming invite");
    let B = l === U.id,
        G = n.state === I.elq.ACCEPTING,
        F = a.useCallback(() => {
            let e = "noop";
            D ? (N(), e = "transition") : (j(), e = "accept"), (0, c.he)({
                invite: n,
                action: e,
                inviter_id: S.author.id,
                invite_message_id: S.id,
                invite_instance_id: (0, h._U)(n.code, S.id)
            }, M)
        }, [n, S, M, D, N, j]),
        H = null != y;
    if (null == y) {
        if (null == n.guild) return (0, i.jsx)(E.A, {});
        y = (0, f.DY)(n.guild)
    }
    let V = null != n.channel ? (0, g.OY)(n.channel) : null,
        q = C.Ay.getName(U),
        W = D || !O && H,
        z = b.intl.string(b.t.I6JG46),
        Y = "active";
    H && !O ? (t = B ? b.intl.string(b.t.oBLoZJ) : b.intl.formatToPlainString(b.t["0QJmA+"], {
        name: q
    }), z = b.intl.string(b.t.Wdi5E1)) : (Y = "active", D && (z = b.intl.string(b.t.Q1W99y), Y = "secondary"), t = B ? b.intl.string(b.t["4hyaHu"]) : b.intl.formatToPlainString(b.t.QmlLEq, {
        name: q
    }));
    let Q = R === y.id && null != V ? (0, i.jsx)(p.A.Channel, {
        channel: V
    }) : b.intl.formatToPlainString(b.t.u0vaDE, {
        guildName: y.name
    });
    return (0, i.jsxs)(p.A, {
        children: [(0, i.jsx)(p.A.Header, {
            text: b.intl.string(b.t["wS+5Wb"])
        }), (0, i.jsxs)(p.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: T.iH,
                children: [(0, i.jsx)(p.A.Icon, {
                    guild: y,
                    onClick: H && O ? F : void 0
                }), (0, i.jsx)(p.A.Info, {
                    title: t,
                    onClick: H && O ? F : void 0,
                    children: Q
                })]
            }), (0, i.jsx)(o.$nd, {
                onClick: F,
                loading: G,
                disabled: W,
                variant: Y,
                text: z
            })]
        })]
    })
}