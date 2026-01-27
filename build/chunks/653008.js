/** Chunk was on 41727 **/
/** chunk id: 653008, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    p = n(162792);
let h = l.memo(function(e) {
    var t, n;
    let {
        message: h,
        channel: f,
        compact: g = !1,
        interactionUsernameProfile: m,
        interactionAvatarProfile: b,
        interactionData: A,
        referencedUsernameProfile: y,
        referencedAvatarProfile: _,
        setPopout: O
    } = e, {
        isInteractionUserBlocked: j,
        isInteractionUserIgnored: v
    } = (0, i.cf)([c.A], () => ({
        isInteractionUserBlocked: c.A.isBlockedForMessage(h),
        isInteractionUserIgnored: c.A.isIgnoredForMessage(h)
    }), [h]), x = (0, i.bG)([o.A], () => o.A.getMessageByReference(null == h ? void 0 : h.messageReference)), E = (0, d.r4)(null == (t = h.interaction) ? void 0 : t.user.id, f.id), C = (0, d.T0)(h.interaction, f, m, O), S = (0, d.Yq)(b, O), I = (0, a.Am)(h), N = (null == I ? void 0 : I.type) === s.G4.APPLICATION_COMMAND ? null == (n = I.target_user) ? void 0 : n.id : void 0, T = (0, d.r4)(N, f.id), P = (0, d.I)(N, f, y, O), w = (0, d.Ge)(_, O), R = (0, d.U_)(A, O), D = l.useCallback(() => {
        O({
            interactionUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionData: !1,
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [O]), M = l.useCallback(() => (0, p.A)({
        message: h,
        channel: f,
        compact: g,
        setPopout: O,
        referencedAvatarProfile: _,
        referencedUsernameProfile: y,
        replyReference: h.messageReference,
        replyMessage: x,
        isReplySpineClickable: !1,
        showReplySpine: !1
    }), [f, g, h, _, x, y, O]);
    return (0, r.jsx)(u.A, {
        message: h,
        channel: f,
        compact: g,
        isInteractionUserBlocked: j,
        isInteractionUserIgnored: v,
        showAvatarPopout: b,
        showUsernamePopout: m,
        showDataPopout: A,
        showTargetAvatarPopout: _,
        showTargetUsernamePopout: y,
        onClickAvatar: S,
        onClickUsername: C,
        onClickCommand: R,
        onUserContextMenu: E,
        onClickTargetAvatar: w,
        onClickTargetUsername: P,
        onTargetUserContextMenu: T,
        onPopoutRequestClose: D,
        renderTargetMessage: M
    })
});

function f(e, t, n) {
    let {
        message: l,
        channel: i,
        compact: s
    } = e;
    return null != l.interaction && "" !== l.interaction.displayName ? (0, r.jsx)(h, function(e) {
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