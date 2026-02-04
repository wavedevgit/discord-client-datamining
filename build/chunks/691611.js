/** chunk id: 691611, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(311907),
    c = n(201275),
    u = n(384231),
    d = n(141468),
    p = n(763754),
    h = n(491182),
    f = n(860227),
    g = n(538355),
    m = n(699352),
    A = n(715628),
    _ = n(752636),
    b = n(675722),
    E = n(268719),
    O = n(734057),
    y = n(661191),
    I = n(652215),
    v = n(456107),
    S = n(119907);

function C(e) {
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
let N = i.memo(function(e) {
    var t, n, i, l;
    let {
        message: N,
        className: T,
        onContextMenu: j,
        onClick: x,
        hideSimpleEmbedContent: P = !0,
        channel: w,
        isGroupStart: L,
        animateAvatar: R,
        subscribeToComponentDispatch: D,
        renderThreadAccessory: M
    } = e, k = function(e, t) {
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
    }(e, ["message", "className", "onContextMenu", "onClick", "hideSimpleEmbedContent", "channel", "isGroupStart", "animateAvatar", "subscribeToComponentDispatch", "renderThreadAccessory"]), U = N.type === I.lAJ.POLL_RESULT || null != (t = e.disableInteraction) && t, G = N.isFirstMessageInForumPost(w), V = (0, u.S)((null != (n = N.editedTimestamp) ? n : N.timestamp).valueOf()), {
        content: B,
        hasSpoilerEmbeds: H,
        hasBailedAst: F
    } = (0, g.A)(N, {
        hideSimpleEmbedContent: P,
        allowList: G || V,
        allowHeading: G || V,
        allowLinks: !0,
        previewLinkTarget: !0
    }), Y = (0, s.rm)(N.id), K = (0, p.Ay)(N), W = (0, o.bG)([O.A], () => N.hasFlag(I.pr7.HAS_THREAD) && O.A.getChannel(y.default.castMessageIdAsChannelId(N.id))), q = (0, c.$7)({
        guildId: w.guild_id,
        roleId: K.iconRoleId
    }), z = (0, f.fF)(N), Q = (0, f.ZD)(N);
    return (0, r.jsx)(h.A, C({
        compact: !1,
        className: a()(T, v.i, {
            [S.M1]: (0, d.ec)(N),
            [S.XN]: U
        }),
        disableInteraction: U,
        childrenExecutedCommand: (0, E.A)(N, w, !1),
        childrenHeader: (0, _.A)({
            message: N,
            channel: w,
            author: K,
            guildId: w.guild_id,
            compact: !1,
            animateAvatar: R,
            isGroupStart: !0,
            roleIcon: q,
            hideTimestamp: !0,
            hideGuildTag: !1
        }),
        childrenAccessories: e.hideAccessories ? void 0 : (0, m.J)(e, H, F),
        childrenMessageContent: (0, A.A)(e, B),
        childrenSystemMessage: (0, b.A)((i = C({}, e), l = l = {
            disableInteraction: U
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i)),
        onContextMenu: j,
        onClick: x,
        hasThread: M && null != W && N.hasFlag(I.pr7.HAS_THREAD),
        hasReply: !1,
        "aria-labelledby": z,
        "aria-describedby": Q,
        author: K
    }, Y, k))
})