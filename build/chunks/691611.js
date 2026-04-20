/** chunk id: 691611 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(837381),
    o = n(311907),
    d = n(201275),
    c = n(384231),
    u = n(141468),
    A = n(763754),
    h = n(491182),
    _ = n(860227),
    m = n(538355),
    g = n(699352),
    p = n(715628),
    E = n(752636),
    I = n(675722),
    f = n(268719),
    C = n(734057),
    T = n(661191),
    N = n(652215),
    S = n(372912),
    x = n(701628);
let b = l.memo(function(e) {
    let {
        message: t,
        className: n,
        onContextMenu: l,
        onClick: a,
        hideSimpleEmbedContent: b = !0,
        channel: v,
        isGroupStart: y,
        animateAvatar: O,
        subscribeToComponentDispatch: L,
        renderThreadAccessory: R,
        ...P
    } = e, D = t.type === N.lAJ.POLL_RESULT || (e.disableInteraction ?? !1), j = t.isFirstMessageInForumPost(v), M = (0, c.S)((t.editedTimestamp ?? t.timestamp).valueOf()), {
        content: w,
        hasSpoilerEmbeds: U,
        hasBailedAst: G
    } = (0, m.A)(t, {
        hideSimpleEmbedContent: b,
        allowList: j || M,
        allowHeading: j || M,
        allowLinks: !0,
        previewLinkTarget: !0
    }), k = (0, s.rm)(t.id), V = (0, A.Ay)(t), B = (0, o.bG)([C.A], () => t.hasFlag(N.pr7.HAS_THREAD) && C.A.getChannel(T.default.castMessageIdAsChannelId(t.id))), H = (0, d.$7)({
        guildId: v.guild_id,
        roleId: V.iconRoleId
    }), F = (0, _.fF)(t), Y = (0, _.ZD)(t);
    return (0, i.jsx)(h.A, {
        compact: !1,
        className: r()(n, S.i, {
            [x.M1]: (0, u.ec)(t),
            [x.XN]: D
        }),
        disableInteraction: D,
        childrenExecutedCommand: (0, f.A)(t, v, !1),
        childrenHeader: (0, E.A)({
            message: t,
            channel: v,
            author: V,
            guildId: v.guild_id,
            compact: !1,
            animateAvatar: O,
            isGroupStart: !0,
            roleIcon: H,
            hideTimestamp: !0,
            hideGuildTag: !1
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, g.J)(e, U, G),
        childrenMessageContent: (0, p.A)(e, w),
        childrenSystemMessage: (0, I.A)({
            ...e,
            disableInteraction: D
        }),
        onContextMenu: l,
        onClick: a,
        hasThread: R && null != B && t.hasFlag(N.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": F,
        "aria-describedby": Y,
        author: V,
        ...k,
        ...P
    })
})