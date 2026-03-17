/** chunk id: 448894 params = (module,exports,require) **/
n.d(t, {
    A: () => v
});
var i = n(627968),
    r = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    d = n(846293),
    c = n(793574),
    u = n(688810),
    _ = n(529200),
    m = n(95701),
    h = n(616356),
    p = n(967198),
    g = n(860689),
    A = n(427262),
    x = n(168428),
    f = n(652215),
    C = n(172799),
    I = n(985018),
    E = n(563111);

function v(e) {
    let t, {
            invite: n,
            currentUserId: l,
            guild: v,
            message: b,
            onTransitionToInviteChannel: T,
            onAcceptInstantInvite: S
        } = e,
        y = v?.id,
        N = (0, o.bG)([p.A], () => p.A.getGuildId()),
        j = (0, o.bG)([h.A], () => null != n && null != n.target_user ? h.A.getActiveStreamForUser(n.target_user.id, y) : null, [n, y]),
        L = (0, o.bG)([h.A], () => null != n && null != n.target_user ? h.A.getStreamForUser(n.target_user.id, y) : null, [n, y]),
        {
            analyticsLocations: R
        } = (0, u.Ay)(c.A.INVITE_EMBED),
        P = null != n && n.target_type === C.yV.STREAM && null != n.target_user && null != j,
        M = null != n && null != L && null != n.channel && null != n.guild && L.channelId === n.channel.id && L.guildId === n.guild.id;
    a()(null != n, "Invite cannot be null");
    let {
        target_type: D,
        target_user: w
    } = n;
    a()(D === C.yV.STREAM && null != w, "invalid streaming invite");
    let O = l === w.id,
        k = n.state === f.elq.ACCEPTING,
        U = r.useCallback(() => {
            let e = "noop";
            P ? (T(), e = "transition") : (S(), e = "accept"), (0, d.he)({
                invite: n,
                action: e,
                inviter_id: b.author.id,
                invite_message_id: b.id
            }, R)
        }, [n, b, R, P, T, S]),
        G = null != v;
    if (null == v) {
        if (null == n.guild) return (0, i.jsx)(x.A, {});
        v = (0, g.DY)(n.guild)
    }
    let B = null != n.channel ? (0, m.OY)(n.channel) : null,
        F = A.Ay.getName(w),
        H = P || !M && G,
        V = I.intl.string(I.t.I6JG46),
        W = "active";
    G && !M ? (t = O ? I.intl.string(I.t.oBLoZJ) : I.intl.formatToPlainString(I.t["0QJmA+"], {
        name: F
    }), V = I.intl.string(I.t.Wdi5E1)) : (W = "active", P && (V = I.intl.string(I.t.Q1W99y), W = "secondary"), t = O ? I.intl.string(I.t["4hyaHu"]) : I.intl.formatToPlainString(I.t.QmlLEq, {
        name: F
    }));
    let q = N === v.id && null != B ? (0, i.jsx)(_.A.Channel, {
        channel: B
    }) : I.intl.formatToPlainString(I.t.u0vaDE, {
        guildName: v.name
    });
    return (0, i.jsxs)(_.A, {
        children: [(0, i.jsx)(_.A.Header, {
            text: I.intl.string(I.t["wS+5Wb"])
        }), (0, i.jsxs)(_.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: E.iH,
                children: [(0, i.jsx)(_.A.Icon, {
                    guild: v,
                    onClick: G && M ? U : void 0
                }), (0, i.jsx)(_.A.Info, {
                    title: t,
                    onClick: G && M ? U : void 0,
                    children: q
                })]
            }), (0, i.jsx)(s.$nd, {
                onClick: U,
                loading: k,
                disabled: H,
                variant: W,
                text: V
            })]
        })]
    })
}