/** Chunk was on web.js **/
/** chunk id: 448894, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(158954),
    l = n(311907),
    c = n(846293),
    u = n(793574),
    d = n(688810),
    f = n(529200),
    p = n(95701),
    _ = n(616356),
    h = n(967198),
    m = n(860689),
    g = n(427262),
    E = n(168428),
    y = n(652215),
    b = n(172799),
    O = n(985018),
    v = n(563111);

function A(e) {
    let t, n, {
            invite: a,
            currentUserId: A,
            guild: I,
            message: S,
            onTransitionToInviteChannel: T,
            onAcceptInstantInvite: C
        } = e,
        N = null == I ? void 0 : I.id,
        w = (0, l.bG)([h.A], () => h.A.getGuildId()),
        R = (0, l.bG)([_.A], () => null != a && null != a.target_user ? _.A.getActiveStreamForUser(a.target_user.id, N) : null, [a, N]),
        P = (0, l.bG)([_.A], () => null != a && null != a.target_user ? _.A.getStreamForUser(a.target_user.id, N) : null, [a, N]),
        {
            analyticsLocations: D
        } = (0, d.Ay)(u.A.INVITE_EMBED),
        x = null != a && a.target_type === b.yV.STREAM && null != a.target_user && null != R,
        L = null != a && null != P && null != a.channel && null != a.guild && P.channelId === a.channel.id && P.guildId === a.guild.id;
    s()(null != a, "Invite cannot be null");
    let {
        target_type: j,
        target_user: M
    } = a;
    s()(j === b.yV.STREAM && null != M, "invalid streaming invite");
    let k = A === M.id,
        U = a.state === y.elq.ACCEPTING,
        G = i.useCallback(() => {
            let e = "noop";
            x ? (T(), e = "transition") : (C(), e = "accept"), (0, c.he)({
                invite: a,
                action: e,
                inviter_id: S.author.id,
                invite_message_id: S.id
            }, D)
        }, [a, S, D, x, T, C]),
        V = null != I;
    if (null == I) {
        if (null == a.guild) return (0, r.jsx)(E.A, {});
        I = (0, m.DY)(a.guild)
    }
    let F = null != a.channel ? (0, p.OY)(a.channel) : null,
        B = g.Ay.getName(M),
        H = "active";
    V && !L ? n = k ? O.intl.string(O.t.oBLoZJ) : O.intl.formatToPlainString(O.t["0QJmA+"], {
        name: B
    }) : (t = O.intl.string(O.t.I6JG46), H = "active", x && (t = O.intl.string(O.t.Q1W99y), H = "secondary"), n = k ? O.intl.string(O.t["4hyaHu"]) : O.intl.formatToPlainString(O.t.QmlLEq, {
        name: B
    }));
    let Y = w === I.id && null != F ? (0, r.jsx)(f.A.Channel, {
        channel: F
    }) : O.intl.formatToPlainString(O.t.u0vaDE, {
        guildName: I.name
    });
    return (0, r.jsxs)(f.A, {
        children: [(0, r.jsx)(f.A.Header, {
            text: O.intl.string(O.t["wS+5Wb"])
        }), (0, r.jsxs)(f.A.Body, {
            children: [(0, r.jsxs)("div", {
                className: v.iH,
                children: [(0, r.jsx)(f.A.Icon, {
                    guild: I,
                    onClick: V && L ? G : void 0
                }), (0, r.jsx)(f.A.Info, {
                    title: n,
                    onClick: V && L ? G : void 0,
                    children: Y
                })]
            }), L ? (0, r.jsx)(o.$nd, {
                onClick: G,
                loading: U,
                disabled: x,
                variant: H,
                text: t
            }) : null]
        })]
    })
}