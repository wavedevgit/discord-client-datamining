/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var l = n(627968),
    r = n(64700),
    i = n(311907),
    a = n(155718),
    s = n(168186),
    o = n(9842),
    c = n(994500),
    u = n(301960),
    d = n(112758),
    h = n(162792);
let p = r.memo(function(e) {
    var t, n;
    let {
        message: p,
        channel: f,
        compact: m = !1,
        interactionUsernameProfile: g,
        interactionAvatarProfile: A,
        interactionData: b,
        referencedUsernameProfile: _,
        referencedAvatarProfile: y,
        setPopout: v
    } = e, {
        isInteractionUserBlocked: E,
        isInteractionUserIgnored: O
    } = (0, i.cf)([c.A], () => ({
        isInteractionUserBlocked: c.A.isBlockedForMessage(p),
        isInteractionUserIgnored: c.A.isIgnoredForMessage(p)
    }), [p]), C = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? void 0 : p.messageReference)), x = (0, d.r4)(null == (t = p.interaction) ? void 0 : t.user.id, f.id), S = (0, d.T0)(p.interaction, f, g, v), j = (0, d.Yq)(A, v), I = (0, s.Am)(p), T = (null == I ? void 0 : I.type) === a.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? void 0 : n.id : void 0, N = (0, d.r4)(T, f.id), P = (0, d.I)(T, f, _, v), w = (0, d.Ge)(y, v), R = (0, d.U_)(b, v), D = r.useCallback(() => {
        v({
            interactionUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionData: !1,
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [v]), M = r.useCallback(() => (0, h.A)({
        message: p,
        channel: f,
        compact: m,
        setPopout: v,
        referencedAvatarProfile: y,
        referencedUsernameProfile: _,
        replyReference: p.messageReference,
        replyMessage: C,
        isReplySpineClickable: !1,
        showReplySpine: !1
    }), [f, m, p, y, C, _, v]);
    return (0, l.jsx)(u.A, {
        message: p,
        channel: f,
        compact: m,
        isInteractionUserBlocked: E,
        isInteractionUserIgnored: O,
        showAvatarPopout: A,
        showUsernamePopout: g,
        showDataPopout: b,
        showTargetAvatarPopout: y,
        showTargetUsernamePopout: _,
        onClickAvatar: j,
        onClickUsername: S,
        onClickCommand: R,
        onUserContextMenu: x,
        onClickTargetAvatar: w,
        onClickTargetUsername: P,
        onTargetUserContextMenu: N,
        onPopoutRequestClose: D,
        renderTargetMessage: M
    })
});

function f(e, t, n) {
    let {
        message: r,
        channel: i,
        compact: a
    } = e;
    return null != r.interaction && "" !== r.interaction.displayName ? (0, l.jsx)(p, function(e) {
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
    }({
        message: r,
        channel: i,
        compact: a,
        setPopout: t
    }, n)) : null
}