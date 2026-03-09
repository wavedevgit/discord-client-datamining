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
        interactionData: p,
        referencedUsernameProfile: f,
        referencedAvatarProfile: _,
        setPopout: E
    } = e, {
        isInteractionUserBlocked: x,
        isInteractionUserIgnored: C
    } = (0, s.cf)([c.A], () => ({
        isInteractionUserBlocked: c.A.isBlockedForMessage(t),
        isInteractionUserIgnored: c.A.isIgnoredForMessage(t)
    }), [t]), S = (0, s.bG)([o.A], () => o.A.getMessageByReference(t?.messageReference)), T = (0, u.r4)(t.interaction?.user.id, n.id), I = (0, u.T0)(t.interaction, n, A, E), N = (0, u.Yq)(g, E), y = (0, r.Am)(t), b = y?.type === a.G4.APPLICATION_COMMAND ? y.target_user?.id : void 0, v = (0, u.r4)(b, n.id), j = (0, u.I)(b, n, f, E), R = (0, u.Ge)(_, E), M = (0, u.U_)(p, E), D = l.useCallback(() => {
        E({
            interactionUsernameProfile: !1,
            interactionAvatarProfile: !1,
            interactionData: !1,
            referencedUsernameProfile: !1,
            referencedAvatarProfile: !1
        })
    }, [E]), O = l.useCallback(() => (0, h.A)({
        message: t,
        channel: n,
        compact: m,
        setPopout: E,
        referencedAvatarProfile: _,
        referencedUsernameProfile: f,
        replyReference: t.messageReference,
        replyMessage: S,
        isReplySpineClickable: !1,
        showReplySpine: !1
    }), [n, m, t, _, S, f, E]);
    return (0, i.jsx)(d.A, {
        message: t,
        channel: n,
        compact: m,
        isInteractionUserBlocked: x,
        isInteractionUserIgnored: C,
        showAvatarPopout: g,
        showUsernamePopout: A,
        showDataPopout: p,
        showTargetAvatarPopout: _,
        showTargetUsernamePopout: f,
        onClickAvatar: N,
        onClickUsername: I,
        onClickCommand: M,
        onUserContextMenu: T,
        onClickTargetAvatar: R,
        onClickTargetUsername: j,
        onTargetUserContextMenu: v,
        onPopoutRequestClose: D,
        renderTargetMessage: O
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