/** chunk id: 636922 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(837381),
    o = n(311907),
    c = n(201275),
    u = n(384231),
    d = n(9842),
    _ = n(734057),
    A = n(661191),
    E = n(141468),
    m = n(763754),
    I = n(491182),
    T = n(860227),
    g = n(538355),
    N = n(522871),
    f = n(699352),
    C = n(715628),
    p = n(752636),
    h = n(675722),
    S = n(268719),
    R = n(234957),
    x = n(652215),
    O = n(701628);
let M = r.memo(function(e) {
    let {
        message: t,
        compact: n = !1,
        className: r,
        onContextMenu: l,
        onClick: M,
        hideSimpleEmbedContent: D = !0,
        channel: U,
        isGroupStart: P,
        animateAvatar: L,
        subscribeToComponentDispatch: v,
        renderThreadAccessory: b,
        trackAnnouncementViews: y = !1,
        ...k
    } = e, j = t.type === x.lAJ.POLL_RESULT || (e.disableInteraction ?? !1), G = t.isFirstMessageInForumPost(U), F = (0, u.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: H,
        hasSpoilerEmbeds: w,
        hasBailedAst: B
    } = (0, g.A)(t, {
        hideSimpleEmbedContent: D,
        allowList: G || F,
        allowHeading: G || F,
        allowLinks: !0,
        previewLinkTarget: !0
    }), X = t.type === x.lAJ.REPLY ? t.messageReference : void 0, V = (0, o.bG)([d.A], () => d.A.getMessageByReference(X)), q = (0, a.rm)(t.id), K = (0, m.Ay)(t), Y = (0, o.bG)([_.A], () => t.hasFlag(x.pr7.HAS_THREAD) && _.A.getChannel(A.default.castMessageIdAsChannelId(t.id))), W = (0, c.$7)({
        guildId: U.guild_id,
        roleId: K.iconRoleId
    }), J = (0, N.A)({
        message: t,
        channel: U,
        enabled: y
    }), z = (0, T.fF)(t), Q = (0, T.ZD)(t);
    return (0, i.jsx)(I.A, {
        compact: n,
        className: s()(r, {
            [O.M1]: (0, E.ec)(t),
            [O.XN]: j
        }),
        disableInteraction: j,
        childrenRepliedMessage: (0, R.A)(t, U, X, V, n),
        childrenExecutedCommand: (0, S.A)(t, U, n),
        childrenHeader: (0, p.A)({
            ...e,
            guildId: U.guild_id,
            author: K,
            roleIcon: W
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, f.J)(e, w, B),
        childrenMessageContent: (0, C.A)(e, H),
        childrenSystemMessage: (0, h.A)({
            ...e,
            disableInteraction: j
        }),
        onContextMenu: l,
        onClick: M,
        hasThread: b && null != Y && t.hasFlag(x.pr7.HAS_THREAD),
        hasReply: t.type === x.lAJ.REPLY,
        "aria-labelledby": z,
        "aria-describedby": Q,
        messageRef: J,
        author: K,
        ...q,
        ...k
    })
})