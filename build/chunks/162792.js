/** chunk id: 162792, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(436857),
    r = n(387408),
    o = n(352505),
    c = n(942075),
    d = n(384231),
    u = n(808829),
    h = n(552691),
    m = n(9842),
    A = n(994500),
    g = n(638075),
    p = n(465364),
    f = n(763754),
    _ = n(448368),
    E = n(535421),
    x = n(112758),
    C = n(652215),
    S = n(985018);
let I = l.memo(function(e) {
    let {
        baseMessage: t,
        referencedMessage: n,
        channel: I,
        compact: T = !1,
        referencedUsernameProfile: N,
        referencedAvatarProfile: y,
        setPopout: v,
        isReplySpineClickable: b,
        showReplySpine: j
    } = e, R = n.state === m.a.LOADED ? n.message : void 0, M = (0, f.X4)(R), D = o.m.useExperiment({
        location: "repliedMessage"
    }).enabled, O = (0, d.S)((t.editedTimestamp ?? t.timestamp).valueOf()), L = l.useMemo(() => {
        if (null == R) return null;
        let e = (0, r.A)(R);
        if (e.type === C.lAJ.USER_JOIN) return (0, a.$)(S.intl.formatToParts(g.A.getSystemMessageUserJoin(e.id), {
            username: null != M ? M.nick : e.author.username,
            usernameHook: e => e
        }));
        if (e.type === C.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.$)((0, c.WC)({
            username: null != M ? M.nick : e.author.username,
            guildId: I?.guild_id,
            roleSubscriptionData: e.roleSubscriptionData
        }));
        if (e.type === C.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.$)((0, u.P)({
            application: e?.application,
            username: M?.nick
        }));
        if (e.type === C.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.$)((0, h.g6)({
            application: e?.application,
            username: M?.nick
        }));
        if (e.type === C.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.$)((0, h.uk)({
            application: e?.application,
            username: M?.nick
        }));
        else if (e.type === C.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT) return "" !== e.content ? e.content : S.intl.string(S.t.wnn1Dc);
        if (null != e.content && "" !== e.content) {
            let t = {
                    formatInline: !0,
                    allowLinks: !0
                },
                n = e.isFirstMessageInForumPost(I) ? {
                    ...t,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0,
                    allowGameMentions: D
                } : {
                    ...t,
                    formatInline: !0,
                    allowHeading: O,
                    allowList: O,
                    allowGameMentions: D
                };
            return (0, p.Ay)(e, n).content
        }
        return null
    }, [R, M, I, O, D]), {
        isReplyAuthorBlocked: P,
        isReplyAuthorIgnored: k
    } = (0, s.cf)([A.A], () => ({
        isReplyAuthorBlocked: null != R && A.A.isBlockedForMessage(R),
        isReplyAuthorIgnored: null != R && A.A.isIgnoredForMessage(R)
    }), [R]), w = (0, x.r4)(R?.author.id, I.id), U = (0, x.Ck)(t, R), G = (0, x.H9)(R, I, N, v), F = (0, x.Ge)(y, v), H = l.useCallback(() => {
        v({
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [v]), B = (0, f.X4)(t);
    return (0, i.jsx)(_.A, {
        repliedAuthor: M,
        baseMessage: t,
        channel: I,
        baseAuthor: B,
        referencedMessage: n,
        content: L,
        compact: T,
        isReplyAuthorBlocked: P,
        isReplyAuthorIgnored: k,
        showAvatarPopout: y,
        showUsernamePopout: N,
        renderPopout: E.A,
        onClickAvatar: F,
        onClickUsername: G,
        onClickReply: U,
        onContextMenu: w,
        onPopoutRequestClose: H,
        isReplySpineClickable: b,
        showReplySpine: j
    })
});

function T(e) {
    let {
        message: t,
        channel: n,
        compact: l,
        setPopout: s,
        referencedUsernameProfile: a,
        referencedAvatarProfile: r,
        replyReference: o,
        replyMessage: c,
        isReplySpineClickable: d,
        showReplySpine: u = !0
    } = e;
    return null != o && (0, i.jsx)(I, {
        baseMessage: t,
        replyReference: o,
        referencedMessage: c,
        channel: n,
        compact: l,
        setPopout: s,
        referencedUsernameProfile: a,
        referencedAvatarProfile: r,
        isReplySpineClickable: d,
        showReplySpine: u
    })
}