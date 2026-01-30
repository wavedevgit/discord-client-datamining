/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(155718),
    a = n(168186),
    o = n(9842),
    c = n(994500),
    u = n(301960),
    d = n(112758),
    h = n(162792);
let p = l.memo(function(e) {
    var t, n;
    let {
        message: p,
        channel: g,
        compact: f = !1,
        interactionUsernameProfile: m,
        interactionAvatarProfile: b,
        interactionData: A,
        referencedUsernameProfile: y,
        referencedAvatarProfile: O,
        setPopout: _
    } = e, {
        isInteractionUserBlocked: j,
        isInteractionUserIgnored: x
    } = (0, i.cf)([c.A], () => ({
        isInteractionUserBlocked: c.A.isBlockedForMessage(p),
        isInteractionUserIgnored: c.A.isIgnoredForMessage(p)
    }), [p]), v = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == p ? void 0 : p.messageReference)), E = (0, d.r4)(null == (t = p.interaction) ? void 0 : t.user.id, g.id), C = (0, d.T0)(p.interaction, g, m, _), S = (0, d.Yq)(b, _), I = (0, a.Am)(p), N = (null == I ? void 0 : I.type) === s.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? void 0 : n.id : void 0, T = (0, d.r4)(N, g.id), P = (0, d.I)(N, g, y, _), w = (0, d.Ge)(O, _), R = (0, d.U_)(A, _), D = l.useCallback(() => {
        _({
            interactionUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionData: !1,
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [_]), L = l.useCallback(() => (0, h.A)({
        message: p,
        channel: g,
        compact: f,
        setPopout: _,
        referencedAvatarProfile: O,
        referencedUsernameProfile: y,
        replyReference: p.messageReference,
        replyMessage: v,
        isReplySpineClickable: !1,
        showReplySpine: !1
    }), [g, f, p, O, v, y, _]);
    return (0, r.jsx)(u.A, {
        message: p,
        channel: g,
        compact: f,
        isInteractionUserBlocked: j,
        isInteractionUserIgnored: x,
        showAvatarPopout: b,
        showUsernamePopout: m,
        showDataPopout: A,
        showTargetAvatarPopout: O,
        showTargetUsernamePopout: y,
        onClickAvatar: S,
        onClickUsername: C,
        onClickCommand: R,
        onUserContextMenu: E,
        onClickTargetAvatar: w,
        onClickTargetUsername: P,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: D,
        renderTargetMessage: L
    })
});

function g(e, t, n) {
    let {
        message: l,
        channel: i,
        compact: s
    } = e;
    return null != l.interaction && "" !== l.interaction.displayName ? (0, r.jsx)(p, function(e) {
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
    }({
        message: l,
        channel: i,
        compact: s,
        setPopout: t
    }, n)) : null
}