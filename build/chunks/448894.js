/** chunk id: 448894 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    a = n(64700),
    r = n(284009),
    l = n.n(r),
    s = n(158954),
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
    I = n(172799),
    E = n(985018),
    v = n(147673);

function b(e) {
    let t, {
            invite: n,
            currentUserId: r,
            guild: b,
            message: T,
            onTransitionToInviteChannel: S,
            onAcceptInstantInvite: y
        } = e,
        N = b?.id,
        j = (0, o.bG)([g.A], () => g.A.getGuildId()),
        L = (0, o.bG)([p.A], () => null != n && null != n.target_user ? p.A.getActiveStreamForUser(n.target_user.id, N) : null, [n, N]),
        R = (0, o.bG)([p.A], () => null != n && null != n.target_user ? p.A.getStreamForUser(n.target_user.id, N) : null, [n, N]),
        {
            analyticsLocations: P
        } = (0, u.Ay)(c.A.INVITE_EMBED),
        w = null != n && n.target_type === I.yV.STREAM && null != n.target_user && null != L,
        D = null != n && null != R && null != n.channel && null != n.guild && R.channelId === n.channel.id && R.guildId === n.guild.id;
    l()(null != n, "Invite cannot be null");
    let {
        target_type: M,
        target_user: k
    } = n;
    l()(M === I.yV.STREAM && null != k, "invalid streaming invite");
    let O = r === k.id,
        U = n.state === C.elq.ACCEPTING,
        B = a.useCallback(() => {
            let e = "noop";
            w ? (S(), e = "transition") : (y(), e = "accept"), (0, d.he)({
                invite: n,
                action: e,
                inviter_id: T.author.id,
                invite_message_id: T.id,
                invite_instance_id: (0, _._U)(n.code, T.id)
            }, P)
        }, [n, T, P, w, S, y]),
        G = null != b;
    if (null == b) {
        if (null == n.guild) return (0, i.jsx)(f.A, {});
        b = (0, A.DY)(n.guild)
    }
    let F = null != n.channel ? (0, h.OY)(n.channel) : null,
        H = x.Ay.getName(k),
        V = w || !D && G,
        q = E.intl.string(E.t.I6JG46),
        W = "active";
    G && !D ? (t = O ? E.intl.string(E.t.oBLoZJ) : E.intl.formatToPlainString(E.t["0QJmA+"], {
        name: H
    }), q = E.intl.string(E.t.Wdi5E1)) : (W = "active", w && (q = E.intl.string(E.t.Q1W99y), W = "secondary"), t = O ? E.intl.string(E.t["4hyaHu"]) : E.intl.formatToPlainString(E.t.QmlLEq, {
        name: H
    }));
    let z = j === b.id && null != F ? (0, i.jsx)(m.A.Channel, {
        channel: F
    }) : E.intl.formatToPlainString(E.t.u0vaDE, {
        guildName: b.name
    });
    return (0, i.jsxs)(m.A, {
        children: [(0, i.jsx)(m.A.Header, {
            text: E.intl.string(E.t["wS+5Wb"])
        }), (0, i.jsxs)(m.A.Body, {
            children: [(0, i.jsxs)("div", {
                className: v.iH,
                children: [(0, i.jsx)(m.A.Icon, {
                    guild: b,
                    onClick: G && D ? B : void 0
                }), (0, i.jsx)(m.A.Info, {
                    title: t,
                    onClick: G && D ? B : void 0,
                    children: z
                })]
            }), (0, i.jsx)(s.$nd, {
                onClick: B,
                loading: U,
                disabled: V,
                variant: W,
                text: q
            })]
        })]
    })
}