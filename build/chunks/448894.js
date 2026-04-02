/** chunk id: 448894 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(21599),
    m = n(529200),
    h = n(95701),
    p = n(616356),
    g = n(967198),
    A = n(860689),
    x = n(427262),
    f = n(168428),
    C = n(652215),
    E = n(172799),
    I = n(985018),
    v = n(366228);

function b(e) {
    let t, {
            invite: n,
            currentUserId: s,
            guild: b,
            message: T,
            onTransitionToInviteChannel: N,
            onAcceptInstantInvite: S
        } = e,
        y = b?.id,
        j = (0, o.bG)([g.A], () => g.A.getGuildId()),
        L = (0, o.bG)([p.A], () => null != n && null != n.target_user ? p.A.getActiveStreamForUser(n.target_user.id, y) : null, [n, y]),
        R = (0, o.bG)([p.A], () => null != n && null != n.target_user ? p.A.getStreamForUser(n.target_user.id, y) : null, [n, y]),
        {
            analyticsLocations: P
        } = (0, u.Ay)(c.A.INVITE_EMBED),
        D = null != n && n.target_type === E.yV.STREAM && null != n.target_user && null != L,
        M = null != n && null != R && null != n.channel && null != n.guild && R.channelId === n.channel.id && R.guildId === n.guild.id;
    r()(null != n, "Invite cannot be null");
    let {
        target_type: w,
        target_user: O
    } = n;
    r()(w === E.yV.STREAM && null != O, "invalid streaming invite");
    let k = s === O.id,
        U = n.state === C.elq.ACCEPTING,
        B = l.useCallback(() => {
            let e = "noop";
            D ? (N(), e = "transition") : (S(), e = "accept"), (0, d.he)({
                invite: n,
                action: e,
                inviter_id: T.author.id,
                invite_message_id: T.id,
                invite_instance_id: (0, _._U)(n.code, T.id)
            }, P)
        }, [n, T, P, D, N, S]),
        G = null != b;
    if (null == b) {
        if (null == n.guild) return (0, i.jsx)(f.A, {});
        b = (0, A.DY)(n.guild)
    }
    let F = null != n.channel ? (0, h.OY)(n.channel) : null,
        H = x.Ay.getName(O),
        V = D || !M && G,
        q = I.intl.string(I.t.I6JG46),
        W = "active";
    G && !M ? (t = k ? I.intl.string(I.t.oBLoZJ) : I.intl.formatToPlainString(I.t["0QJmA+"], {
        name: H
    }), q = I.intl.string(I.t.Wdi5E1)) : (W = "active", D && (q = I.intl.string(I.t.Q1W99y), W = "secondary"), t = k ? I.intl.string(I.t["4hyaHu"]) : I.intl.formatToPlainString(I.t.QmlLEq, {
        name: H
    }));
    let Y = j === b.id && null != F ? (0, i.jsx)(m.A.Channel, {
        channel: F
    }) : I.intl.formatToPlainString(I.t.u0vaDE, {
        guildName: b.name
    });
    return (0, i.jsxs)(m.A, {
        children: [(0, i.jsx)(m.A.Header, {
            text: I.intl.string(I.t["wS+5Wb"])
        }), (0, i.jsxs)(m.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: v.iH,
                children: [(0, i.jsx)(m.A.Icon, {
                    guild: b,
                    onClick: G && M ? B : void 0
                }), (0, i.jsx)(m.A.Info, {
                    title: t,
                    onClick: G && M ? B : void 0,
                    children: Y
                })]
            }), (0, i.jsx)(a.$nd, {
                onClick: B,
                loading: U,
                disabled: V,
                variant: W,
                text: q
            })]
        })]
    })
}