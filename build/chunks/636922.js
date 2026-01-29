/** Chunk was on 73734 **/
/** chunk id: 636922, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(837381),
    s = n(311907),
    c = n(201275),
    u = n(384231),
    E = n(9842),
    d = n(734057),
    _ = n(661191),
    A = n(141468),
    T = n(763754),
    I = n(491182),
    O = n(860227),
    N = n(538355),
    p = n(522871),
    R = n(699352),
    S = n(715628),
    P = n(752636),
    y = n(675722),
    m = n(268719),
    f = n(234957),
    C = n(652215),
    g = n(119907);

function D(e) {
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

function h(e, t) {
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
let U = i.memo(function(e) {
    var t, n;
    let {
        message: i,
        compact: l = !1,
        className: U,
        onContextMenu: b,
        onClick: M,
        hideSimpleEmbedContent: j = !0,
        channel: v,
        isGroupStart: k,
        animateAvatar: L,
        subscribeToComponentDispatch: x,
        renderThreadAccessory: G,
        trackAnnouncementViews: w = !1
    } = e, B = function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    l = Object.getOwnPropertyNames(e);
                for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
    }(e, ["message", "compact", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory", "trackAnnouncementViews"]), q = i.type === C.lAJ.POLL_RESULT || null != (t = e.disableInteraction) && t, X = i.isFirstMessageInForumPost(v), V = (0, u.S)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()), {
        content: F,
        hasSpoilerEmbeds: H,
        hasBailedAst: W
    } = (0, N.A)(i, {
        hideSimpleEmbedContent: j,
        allowList: X || V,
        allowHeading: X || V,
        allowLinks: !0,
        previewLinkTarget: !0
    }), K = i.type === C.lAJ.REPLY ? i.messageReference : void 0, Y = (0, s.bG)([E.A], () => E.A.getMessageByReference(K)), $ = (0, o.rm)(i.id), z = (0, T.Ay)(i), J = (0, s.bG)([d.A], () => i.hasFlag(C.pr7.HAS_THREAD) && d.A.getChannel(_.default.castMessageIdAsChannelId(i.id))), Z = (0, c.$7)({
        guildId: v.guild_id,
        roleId: z.iconRoleId
    }), Q = (0, p.A)({
        message: i,
        channel: v,
        enabled: w
    }), ee = (0, O.fF)(i), et = (0, O.ZD)(i);
    return (0, r.jsx)(I.A, D({
        compact: l,
        className: a()(U, {
            [g.M1]: (0, A.ec)(i),
            [g.XN]: q
        }),
        disableInteraction: q,
        childrenRepliedMessage: (0, f.A)(i, v, K, Y, l),
        childrenExecutedCommand: (0, m.A)(i, v, l),
        childrenHeader: (0, P.A)(h(D({}, e), {
            guildId: v.guild_id,
            author: z,
            roleIcon: Z
        })),
        childrenAccessories: e.hideAccessories ? void 0 : (0, R.J)(e, H, W),
        childrenMessageContent: (0, S.A)(e, F),
        childrenSystemMessage: (0, y.A)(h(D({}, e), {
            disableInteraction: q
        })),
        onContextMenu: b,
        onClick: M,
        hasThread: G && null != J && i.hasFlag(C.pr7.HAS_THREAD),
        hasReply: i.type === C.lAJ.REPLY,
        "aria-labelledby": ee,
        "aria-describedby": et,
        messageRef: Q,
        author: z
    }, $, B))
})