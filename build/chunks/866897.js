/** chunk id: 866897 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(64700),
    l = n(843472),
    a = n(843626),
    s = n(294454),
    r = n(857071),
    o = n(517997),
    c = n(406704),
    d = n(747926),
    u = n(54570),
    h = n(8880),
    m = n(253932),
    A = n(961350),
    g = n(734057),
    _ = n(580745),
    p = n(834942),
    f = n(320501),
    E = n(576705),
    C = n(957565),
    x = n(203982),
    S = n(723702),
    I = n(661191),
    T = n(697470),
    v = n(492841),
    N = n(707985),
    y = n(519222),
    b = n(652215);
let j = function(e, t, n) {
    let j = i.useRef(n);
    return j.current = n, i.useCallback(n => {
        if (!j.current || n.target !== n.currentTarget) return;
        let i = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
            R = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
            M = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
            L = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
            O = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
            D = f.A.getMessage(t, e),
            P = g.A.getChannel(t);
        if (null == D || null == P) return;
        let w = A.default.getId();
        switch (n.key.toLowerCase()) {
            case "backspace":
                i && (E.A.can(b.xBc.MANAGE_MESSAGES, P) || D.canDeleteOwnMessage(w)) && (n.preventDefault(), (0, y.RC)(P, D, n));
                break;
            case "c":
                ((0, S.isMac)() ? L : M) && C.p5 && (n.preventDefault(), (0, C.C)(D.content));
                break;
            case "e":
                i && !P.isSystemDM() && (0, T.A)(D, w) && (n.preventDefault(), (0, y.u_)(P, D));
                break;
            case "p":
                (i || O) && (0, v.A)(D, P) && (n.preventDefault(), (0, y.rS)(P, D, n));
                break;
            case "+":
                (i || O) && function(e) {
                    let t = null == e.guild_id || p.A.canChatInGuild(e.guild_id),
                        n = m.jW.getSetting(),
                        {
                            disableReactionCreates: i
                        } = (0, N.A)({
                            channel: e,
                            canChat: t,
                            renderReactions: n,
                            canAddNewReactions: t && E.A.can(b.xBc.ADD_REACTIONS, e),
                            isLurking: null != e.guild_id && r.A.isLurking(e.guild_id),
                            isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
                        });
                    return !i && n
                }(P) && (n.preventDefault(), x._.dispatchKeyed(b.zOV.TOGGLE_REACTION_POPOUT, D.id, {
                    emojiPicker: !0
                }));
                break;
            case "r":
                (i || O) && (0, o.r)(P, D) && (n.preventDefault(), (0, y.$b)(P, D, n));
                break;
            case "f":
                (i || O) && (0, a.p)(D) && (n.preventDefault(), (0, s.fO)({
                    message: D,
                    source: "keyboard-shortcut"
                }));
                break;
            case "s":
                i && "" !== D.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, u.pr)() : (0, u.kP)(P, D));
                break;
            case "t":
                if (i && (0, c.D1)(P, D)) n.preventDefault(), (0, d.Tv)(P, D, "Message Shortcut");
                else if (D.hasFlag(b.pr7.HAS_THREAD)) {
                    let e = g.A.getChannel(I.default.castMessageIdAsChannelId(D.id));
                    null != e && (i || O) && (n.preventDefault(), (0, d.JA)(e, O))
                }
                break;
            case "enter":
                R && (n.preventDefault(), (0, y.cl)(P, D));
                break;
            case "escape":
                _.A.isEditing(P.id, D.id) ? l.A.endEditMessage(P.id) : x._.dispatch(b.jej.TEXTAREA_FOCUS)
        }
    }, [e, t])
}