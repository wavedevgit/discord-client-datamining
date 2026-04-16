/** chunk id: 636922 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => M
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(837381),
    o = n(311907),
    c = n(201275),
    u = n(384231),
    d = n(9842),
    _ = n(734057),
    E = n(661191),
    A = n(141468),
    m = n(763754),
    I = n(491182),
    T = n(860227),
    N = n(538355),
    g = n(522871),
    p = n(699352),
    C = n(715628),
    f = n(752636),
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
        onContextMenu: s,
        onClick: M,
        hideSimpleEmbedContent: D = !0,
        channel: U,
        isGroupStart: P,
        animateAvatar: L,
        subscribeToComponentDispatch: v,
        renderThreadAccessory: y,
        trackAnnouncementViews: b = !1,
        ...k
    } = e, j = t.type === x.lAJ.POLL_RESULT || (e.disableInteraction ?? !1), G = t.isFirstMessageInForumPost(U), F = (0, u.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: H,
        hasSpoilerEmbeds: B,
        hasBailedAst: w
    } = (0, N.A)(t, {
        hideSimpleEmbedContent: D,
        allowList: G || F,
        allowHeading: G || F,
        allowLinks: !0,
        previewLinkTarget: !0
    }), V = t.type === x.lAJ.REPLY ? t.messageReference : void 0, X = (0, o.bG)([d.A], () => d.A.getMessageByReference(V)), q = (0, l.rm)(t.id), K = (0, m.Ay)(t), Y = (0, o.bG)([_.A], () => t.hasFlag(x.pr7.HAS_THREAD) && _.A.getChannel(E.default.castMessageIdAsChannelId(t.id))), W = (0, c.$7)({
        guildId: U.guild_id,
        roleId: K.iconRoleId
    }), J = (0, g.A)({
        message: t,
        channel: U,
        enabled: b
    }), z = (0, T.fF)(t), Q = (0, T.ZD)(t);
    return (0, i.jsx)(I.A, {
        compact: n,
        className: a()(r, {
            [O.M1]: (0, A.ec)(t),
            [O.XN]: j
        }),
        disableInteraction: j,
        childrenRepliedMessage: (0, R.A)(t, U, V, X, n),
        childrenExecutedCommand: (0, S.A)(t, U, n),
        childrenHeader: (0, f.A)({
            ...e,
            guildId: U.guild_id,
            author: K,
            roleIcon: W
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, p.J)(e, B, w),
        childrenMessageContent: (0, C.A)(e, H),
        childrenSystemMessage: (0, h.A)({
            ...e,
            disableInteraction: j
        }),
        onContextMenu: s,
        onClick: M,
        hasThread: y && null != Y && t.hasFlag(x.pr7.HAS_THREAD),
        hasReply: t.type === x.lAJ.REPLY,
        "aria-labelledby": z,
        "aria-describedby": Q,
        messageRef: J,
        author: K,
        ...q,
        ...k
    })
})