/** Chunk was on 1113 **/
/** chunk id: 162792, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => C
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(436857),
    a = n(387408),
    o = n(352505),
    c = n(942075),
    u = n(384231),
    d = n(808829),
    h = n(552691),
    p = n(9842),
    g = n(994500),
    f = n(638075),
    m = n(465364),
    b = n(763754),
    A = n(448368),
    y = n(535421),
    O = n(112758),
    _ = n(652215),
    j = n(985018);

function x(e) {
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

function v(e, t) {
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
let E = l.memo(function(e) {
    var t;
    let {
        baseMessage: n,
        referencedMessage: E,
        channel: C,
        compact: S = !1,
        referencedUsernameProfile: I,
        referencedAvatarProfile: N,
        setPopout: T,
        isReplySpineClickable: P,
        showReplySpine: w
    } = e, R = E.state === p.a.LOADED ? E.message : void 0, D = (0, b.X4)(R), L = o.m.useExperiment({
        location: "repliedMessage"
    }).enabled, M = (0, u.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()), G = l.useMemo(() => {
        if (null == R) return null;
        let e = (0, a.A)(R);
        if (e.type === _.lAJ.USER_JOIN) return (0, s.$)(j.intl.formatToParts(f.A.getSystemMessageUserJoin(e.id), {
            username: null != D ? D.nick : e.author.username,
            usernameHook: e => e
        }));
        if (e.type === _.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, s.$)((0, c.WC)({
            username: null != D ? D.nick : e.author.username,
            guildId: null == C ? void 0 : C.guild_id,
            roleSubscriptionData: e.roleSubscriptionData
        }));
        if (e.type === _.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, s.$)((0, d.P)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        if (e.type === _.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, s.$)((0, h.g6)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        if (e.type === _.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, s.$)((0, h.uk)({
            application: null == e ? void 0 : e.application,
            username: null == D ? void 0 : D.nick
        }));
        else if (e.type === _.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : j.intl.string(j.t.wnn1Dc);
        if (null != e.content && "" !== e.content) {
            let t = {
                    formatInline: !0,
                    allowLinks: !0
                },
                n = e.isFirstMessageInForumPost(C) ? v(x({}, t), {
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0,
                    allowGameMentions: L
                }) : v(x({}, t), {
                    formatInline: !0,
                    allowHeading: M,
                    allowList: M,
                    allowGameMentions: L
                });
            return (0, m.Ay)(e, n).content
        }
        return null
    }, [R, D, C, M, L]), {
        isReplyAuthorBlocked: k,
        isReplyAuthorIgnored: U
    } = (0, i.cf)([g.A], () => ({
        isReplyAuthorBlocked: null != R && g.A.isBlockedForMessage(R),
        isReplyAuthorIgnored: null != R && g.A.isIgnoredForMessage(R)
    }), [R]), V = (0, O.r4)(null == R ? void 0 : R.author.id, C.id), B = (0, O.Ck)(n, R), H = (0, O.H9)(R, C, I, T), F = (0, O.Ge)(N, T), K = l.useCallback(() => {
        T({
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [T]), Y = (0, b.X4)(n);
    return (0, r.jsx)(A.A, {
        repliedAuthor: D,
        baseMessage: n,
        channel: C,
        baseAuthor: Y,
        referencedMessage: E,
        content: G,
        compact: S,
        isReplyAuthorBlocked: k,
        isReplyAuthorIgnored: U,
        showAvatarPopout: N,
        showUsernamePopout: I,
        renderPopout: y.A,
        onClickAvatar: F,
        onClickUsername: H,
        onClickReply: B,
        onContextMenu: V,
        onPopoutRequestClose: K,
        isReplySpineClickable: P,
        showReplySpine: w
    })
});

function C(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: a,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: u,
        showReplySpine: d = !0
    } = e;
    return null != o && (0, r.jsx)(E, {
        baseMessage: t,
        replyReference: o,
        referencedMessage: c,
        channel: n,
        compact: l,
        setPopout: i,
        referencedUsernameProfile: s,
        referencedAvatarProfile: a,
        isReplySpineClickable: u,
        showReplySpine: d
    })
}