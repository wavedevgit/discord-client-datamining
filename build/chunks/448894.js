/** chunk id: 448894, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(158954),
    o = n(311907),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    p = n(529200),
    m = n(95701),
    f = n(616356),
    g = n(967198),
    _ = n(860689),
    h = n(427262),
    b = n(168428),
    y = n(652215),
    A = n(172799),
    v = n(985018),
    O = n(563111);

function x(e) {
    let t, n, {
            invite: l,
            currentUserId: x,
            guild: E,
            message: j,
            onTransitionToInviteChannel: C,
            onAcceptInstantInvite: I
        } = e,
        S = null == E ? void 0 : E.id,
        T = (0, o.bG)([g.A], () => g.A.getGuildId()),
        N = (0, o.bG)([f.A], () => null != l && null != l.target_user ? f.A.getActiveStreamForUser(l.target_user.id, S) : null, [l, S]),
        P = (0, o.bG)([f.A], () => null != l && null != l.target_user ? f.A.getStreamForUser(l.target_user.id, S) : null, [l, S]),
        {
            analyticsLocations: w
        } = (0, d.Ay)(u.A.INVITE_EMBED),
        R = null != l && l.target_type === A.yV.STREAM && null != l.target_user && null != N,
        D = null != l && null != P && null != l.channel && null != l.guild && P.channelId === l.channel.id && P.guildId === l.guild.id;
    a()(null != l, "Invite cannot be null");
    let {
        target_type: L,
        target_user: M
    } = l;
    a()(L === A.yV.STREAM && null != M, "invalid streaming invite");
    let k = x === M.id,
        U = l.state === y.elq.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            R ? (C(), e = "transition") : (I(), e = "accept"), (0, c.he)({
                invite: l,
                action: e,
                inviter_id: j.author.id,
                invite_message_id: j.id
            }, w)
        }, [l, j, w, R, C, I]),
        B = null != E;
    if (null == E) {
        if (null == l.guild) return (0, r.jsx)(b.A, {});
        E = (0, _.DY)(l.guild)
    }
    let F = null != l.channel ? (0, m.OY)(l.channel) : null,
        H = h.Ay.getName(M),
        V = "active";
    B && !D ? n = k ? v.intl.string(v.t.oBLoZJ) : v.intl.formatToPlainString(v.t["0QJmA+"], {
        name: H
    }) : (t = v.intl.string(v.t.I6JG46), V = "active", R && (t = v.intl.string(v.t.Q1W99y), V = "secondary"), n = k ? v.intl.string(v.t["4hyaHu"]) : v.intl.formatToPlainString(v.t.QmlLEq, {
        name: H
    }));
    let z = T === E.id && null != F ? (0, r.jsx)(p.A.Channel, {
        channel: F
    }) : v.intl.formatToPlainString(v.t.u0vaDE, {
        guildName: E.name
    });
    return (0, r.jsxs)(p.A, {
        children: [(0, r.jsx)(p.A.Header, {
            text: v.intl.string(v.t["wS+5Wb"])
        }), (0, r.jsxs)(p.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: O.iH,
                children: [(0, r.jsx)(p.A.Icon, {
                    guild: E,
                    onClick: B && D ? G : void 0
                }), (0, r.jsx)(p.A.Info, {
                    title: n,
                    onClick: B && D ? G : void 0,
                    children: z
                })]
            }), D ? (0, r.jsx)(s.$nd, {
                onClick: G,
                loading: U,
                disabled: R,
                variant: V,
                text: t
            }) : null]
        })]
    })
}