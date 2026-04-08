/** chunk id: 162792 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(436857),
    r = n(387408),
    o = n(942075),
    c = n(384231),
    d = n(808829),
    u = n(552691),
    h = n(9842),
    m = n(994500),
    A = n(638075),
    p = n(465364),
    g = n(763754),
    f = n(448368),
    _ = n(535421),
    E = n(112758),
    x = n(652215),
    C = n(985018);
let S = l.memo(function(e) {
    let {
        baseMessage: t,
        referencedMessage: n,
        channel: S,
        compact: T = !1,
        referencedUsernameProfile: N,
        referencedAvatarProfile: I,
        setPopout: v,
        isReplySpineClickable: y,
        showReplySpine: b
    } = e, j = n.state === h.a.LOADED ? n.message : void 0, R = (0, g.X4)(j), M = (0, c.S)((t.editedTimestamp ?? t.timestamp).valueOf()), D = l.useMemo(() => {
        if (null == j) return null;
        let e = (0, r.A)(j);
        if (e.type === x.lAJ.USER_JOIN) return (0, a.$)(C.intl.formatToParts(A.A.getSystemMessageUserJoin(e.id), {
            username: null != R ? R.nick : e.author.username,
            usernameHook: e => e
        }));
        if (e.type === x.lAJ.ROLE_SUBSCRIPTION_PURCHASE) return (0, a.$)((0, o.WC)({
            username: null != R ? R.nick : e.author.username,
            guildId: S?.guild_id,
            roleSubscriptionData: e.roleSubscriptionData
        }));
        if (e.type === x.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION) return (0, a.$)((0, d.P)({
            application: e?.application,
            username: R?.nick
        }));
        if (e.type === x.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED) return (0, a.$)((0, u.g6)({
            application: e?.application,
            username: R?.nick
        }));
        if (e.type === x.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED) return (0, a.$)((0, u.uk)({
            application: e?.application,
            username: R?.nick
        }));
        if (null != e.content && "" !== e.content) {
            let t = {
                    formatInline: !0,
                    allowLinks: !0
                },
                n = e.isFirstMessageInForumPost(S) ? {
                    ...t,
                    noStyleAndInteraction: !0,
                    allowHeading: !0,
                    allowList: !0
                } : {
                    ...t,
                    formatInline: !0,
                    allowHeading: M,
                    allowList: M
                };
            return (0, p.Ay)(e, n).content
        }
        return null
    }, [j, R, S, M]), {
        isReplyAuthorBlocked: O,
        isReplyAuthorIgnored: L
    } = (0, s.cf)([m.A], () => ({
        isReplyAuthorBlocked: null != j && m.A.isBlockedForMessage(j),
        isReplyAuthorIgnored: null != j && m.A.isIgnoredForMessage(j)
    }), [j]), P = (0, E.r4)(j?.author.id, S.id), k = (0, E.Ck)(t, j), w = (0, E.H9)(j, S, N, v), U = (0, E.Ge)(I, v), G = l.useCallback(() => {
        v({
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [v]), F = (0, g.X4)(t);
    return (0, i.jsx)(f.A, {
        repliedAuthor: R,
        baseMessage: t,
        channel: S,
        baseAuthor: F,
        referencedMessage: n,
        content: D,
        compact: T,
        isReplyAuthorBlocked: O,
        isReplyAuthorIgnored: L,
        showAvatarPopout: I,
        showUsernamePopout: N,
        renderPopout: _.A,
        onClickAvatar: U,
        onClickUsername: w,
        onClickReply: k,
        onContextMenu: P,
        onPopoutRequestClose: G,
        isReplySpineClickable: y,
        showReplySpine: b
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
    return null != o && (0, i.jsx)(S, {
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