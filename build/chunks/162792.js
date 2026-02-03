/** chunk id: 162792, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(436857),
    s = n(387408),
    o = n(352505),
    c = n(942075),
    u = n(384231),
    d = n(808829),
    h = n(552691),
    p = n(9842),
    f = n(994500),
    m = n(638075),
    g = n(465364),
    A = n(763754),
    b = n(448368),
    _ = n(535421),
    y = n(112758),
    v = n(652215),
    E = n(985018);

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function C(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let S = r.memo(function(e) {
    var t;
    let {
        baseMessage: n,
        referencedMessage: S,
        channel: x,
        compact: j = !1,
        referencedUsernameProfile: I,
        referencedAvatarProfile: T,
        setPopout: N,
        isReplySpineClickable: P,
        showReplySpine: w
    } = e, R = S.state === p.a.LOADED ? S.message : void 0, D = (0, A.X4)(R), M = o.m.useExperiment({
        location: "repliedMessage"
    }).enabled, L = (0, u.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), k = r.useMemo(() => {
        if (null == R) return null;
        let e = (0, s.A)(R);
        if (e.type === v.lAJ.USER_JOIN) return (0, a.$)(E.intl.formatToParts(m.A.getSystemMessageUserJoin(e.id), {
            username: null != D ? D.nick : e.author.username,
            usernameHook: e => e
        }));
        if (e.type === v.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.$)((0, c.WC)({
            username: null != D ? D.nick : e.author.username,
            guildId: null == x ? void 0 : x.guild_id,
            roleSubscriptionData: e.roleSubscriptionData
        }));
        if (e.type === v.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.$)((0, d.P)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        if (e.type === v.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.$)((0, h.g6)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        if (e.type === v.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.$)((0, h.uk)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        else if (e.type === v.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : E.intl.string(E.t.wnn1Dc);
        if (null != e.content && "" !== e.content) {
            let t = {
                    formatInline: !0,
                    allowLinks: !0
                },
                n = e.isFirstMessageInForumPost(x) ? C(O({}, t), {
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0,
                    allowGameMentions: M
                }) : C(O({}, t), {
                    formatInline: !0,
                    allowHeading: L,
                    allowList: L,
                    allowGameMentions: M
                });
            return (0, g.Ay)(e, n).content
        }
        return null
    }, [R, D, x, L, M]), {
        isReplyAuthorBlocked: U,
        isReplyAuthorIgnored: G
    } = (0, i.cf)([f.A], () => ({
        isReplyAuthorBlocked: null != R && f.A.isBlockedForMessage(R),
        isReplyAuthorIgnored: null != R && f.A.isIgnoredForMessage(R)
    }), [R]), F = (0, y.r4)(null == R ? void 0 : R.author.id, x.id), H = (0, y.Ck)(n, R), B = (0, y.H9)(R, x, I, N), V = (0, y.Ge)(T, N), K = r.useCallback(() => {
        N({
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [N]), W = (0, A.X4)(n);
    return (0, l.jsx)(b.A, {
        repliedAuthor: D,
        baseMessage: n,
        channel: x,
        baseAuthor: W,
        referencedMessage: S,
        content: k,
        compact: j,
        isReplyAuthorBlocked: U,
        isReplyAuthorIgnored: G,
        showAvatarPopout: T,
        showUsernamePopout: I,
        renderPopout: _.A,
        onClickAvatar: V,
        onClickUsername: B,
        onClickReply: H,
        onContextMenu: F,
        onPopoutRequestClose: K,
        isReplySpineClickable: P,
        showReplySpine: w
    })
});

function x(e) {
    let {
        message: t,
        channel: n,
        compact: r,
        setPopout: i,
        referencedUsernameProfile: a,
        referencedAvatarProfile: s,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: u,
        showReplySpine: d = !0
    } = e;
    return null != o && (0, l.jsx)(S, {
        baseMessage: t,
        replyReference: o,
        referencedMessage: c,
        channel: n,
        compact: r,
        setPopout: i,
        referencedUsernameProfile: a,
        referencedAvatarProfile: s,
        isReplySpineClickable: u,
        showReplySpine: d
    })
}