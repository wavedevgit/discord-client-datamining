/** chunk id: 653008 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(155718),
    r = n(168186),
    o = n(9842),
    c = n(994500),
    d = n(301960),
    u = n(112758),
    h = n(162792);
let m = l.memo(function(e) {
    let {
        message: t,
        channel: n,
        compact: m = !1,
        interactionUsernameProfile: A,
        interactionAvatarProfile: g,
        interactionData: _,
        referencedUsernameProfile: p,
        referencedAvatarProfile: f,
        setPopout: E
    } = e, {
        isInteractionUserBlocked: C,
        isInteractionUserIgnored: x
    } = (0, s.cf)([c.A], () => ({
        isInteractionUserBlocked: c.A.isBlockedForMessage(t),
        isInteractionUserIgnored: c.A.isIgnoredForMessage(t)
    }), [t]), S = (0, s.bG)([o.A], () => o.A.getMessageByReference(t?.messageReference)), I = (0, u.r4)(t.interaction?.user.id, n.id), T = (0, u.T0)(t.interaction, n, A, E), v = (0, u.Yq)(g, E), N = (0, r.Am)(t), y = N?.type === a.G4.APPLICATION_COMMAND ? N.target_user?.id : void 0, b = (0, u.r4)(y, n.id), j = (0, u.I)(y, n, p, E), R = (0, u.Ge)(f, E), M = (0, u.U_)(_, E), L = l.useCallback(() => {
        E({
            interactionUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionData: !1,
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [E]), D = l.useCallback(() => (0, h.A)({
        message: t,
        channel: n,
        compact: m,
        setPopout: E,
        referencedAvatarProfile: f,
        referencedUsernameProfile: p,
        replyReference: t.messageReference,
        replyMessage: S,
        isReplySpineClickable: !1,
        showReplySpine: !1
    }), [n, m, t, f, S, p, E]);
    return (0, i.jsx)(d.A, {
        message: t,
        channel: n,
        compact: m,
        isInteractionUserBlocked: C,
        isInteractionUserIgnored: x,
        showAvatarPopout: g,
        showUsernamePopout: A,
        showDataPopout: _,
        showTargetAvatarPopout: f,
        showTargetUsernamePopout: p,
        onClickAvatar: v,
        onClickUsername: T,
        onClickCommand: M,
        onUserContextMenu: I,
        onClickTargetAvatar: R,
        onClickTargetUsername: j,
        onTargetUserContextMenu: b,
        onPopoutRequestClose: L,
        renderTargetMessage: D
    })
});

function A(e, t, n) {
    let {
        message: l,
        channel: s,
        compact: a
    } = e;
    return null != l.interaction && "" !== l.interaction.displayName ? (0, i.jsx)(m, {
        message: l,
        channel: s,
        compact: a,
        setPopout: t,
        ...n
    }) : null
}