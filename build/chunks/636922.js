/** chunk id: 636922 params = (module,exports,require) **/
n.d(t, {
    A: () => M
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(837381),
    o = n(311907),
    c = n(201275),
    d = n(384231),
    u = n(9842),
    _ = n(734057),
    m = n(661191),
    A = n(141468),
    E = n(763754),
    I = n(491182),
    T = n(860227),
    f = n(538355),
    N = n(522871),
    g = n(699352),
    C = n(715628),
    h = n(752636),
    p = n(675722),
    x = n(268719),
    R = n(234957),
    S = n(652215),
    O = n(480972);
let M = l.memo(function(e) {
    let {
        message: t,
        compact: n = !1,
        className: l,
        onContextMenu: a,
        onClick: M,
        hideSimpleEmbedContent: D = !0,
        channel: P,
        isGroupStart: U,
        animateAvatar: v,
        subscribeToComponentDispatch: L,
        renderThreadAccessory: j,
        trackAnnouncementViews: b = !1,
        ...y
    } = e, k = t.type === S.lAJ.POLL_RESULT || (e.disableInteraction ?? !1), G = t.isFirstMessageInForumPost(P), F = (0, d.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: B,
        hasSpoilerEmbeds: H,
        hasBailedAst: V
    } = (0, f.A)(t, {
        hideSimpleEmbedContent: D,
        allowList: G || F,
        allowHeading: G || F,
        allowLinks: !0,
        previewLinkTarget: !0
    }), w = t.type === S.lAJ.REPLY ? t.messageReference : void 0, X = (0, o.bG)([u.A], () => u.A.getMessageByReference(w)), q = (0, s.rm)(t.id), K = (0, E.Ay)(t), z = (0, o.bG)([_.A], () => t.hasFlag(S.pr7.HAS_THREAD) && _.A.getChannel(m.default.castMessageIdAsChannelId(t.id))), Y = (0, c.$7)({
        guildId: P.guild_id,
        roleId: K.iconRoleId
    }), J = (0, N.A)({
        message: t,
        channel: P,
        enabled: b
    }), W = (0, T.fF)(t), Q = (0, T.ZD)(t);
    return (0, i.jsx)(I.A, {
        compact: n,
        className: r()(l, {
            [O.M1]: (0, A.ec)(t),
            [O.XN]: k
        }),
        disableInteraction: k,
        childrenRepliedMessage: (0, R.A)(t, P, w, X, n),
        childrenExecutedCommand: (0, x.A)(t, P, n),
        childrenHeader: (0, h.A)({
            ...e,
            guildId: P.guild_id,
            author: K,
            roleIcon: Y
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, g.J)(e, H, V),
        childrenMessageContent: (0, C.A)(e, B),
        childrenSystemMessage: (0, p.A)({
            ...e,
            disableInteraction: k
        }),
        onContextMenu: a,
        onClick: M,
        hasThread: j && null != z && t.hasFlag(S.pr7.HAS_THREAD),
        hasReply: t.type === S.lAJ.REPLY,
        "aria-labelledby": W,
        "aria-describedby": Q,
        messageRef: J,
        author: K,
        ...q,
        ...y
    })
})