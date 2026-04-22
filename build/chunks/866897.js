/** chunk id: 866897 params = (module,exports,require) **/
n.d(t, {
    A: () => j
});
var i = n(64700),
    l = n(843472),
    s = n(843626),
    a = n(294454),
    r = n(857071),
    o = n(517997),
    c = n(406704),
    d = n(747926),
    u = n(54570),
    h = n(8880),
    m = n(253932),
    A = n(961350),
    g = n(734057),
    p = n(580745),
    _ = n(834942),
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
            D = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
            O = f.A.getMessage(t, e),
            P = g.A.getChannel(t);
        if (null == O || null == P) return;
        let k = A.default.getId();
        switch (n.key.toLowerCase()) {
            case "backspace":
                i && (E.A.can(b.xBc.MANAGE_MESSAGES, P) || O.canDeleteOwnMessage(k)) && (n.preventDefault(), (0, y.RC)(P, O, n));
                break;
            case "c":
                ((0, S.isMac)() ? L : M) && C.p5 && (n.preventDefault(), (0, C.C)(O.content));
                break;
            case "e":
                i && !P.isSystemDM() && (0, T.A)(O, k) && (n.preventDefault(), (0, y.u_)(P, O));
                break;
            case "p":
                (i || D) && (0, v.A)(O, P) && (n.preventDefault(), (0, y.rS)(P, O, n));
                break;
            case "+":
                (i || D) && function(e) {
                    let t = null == e.guild_id || _.A.canChatInGuild(e.guild_id),
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
                }(P) && (n.preventDefault(), x._.dispatchKeyed(b.zOV.TOGGLE_REACTION_POPOUT, O.id, {
                    emojiPicker: !0
                }));
                break;
            case "r":
                (i || D) && (0, o.r)(P, O) && (n.preventDefault(), (0, y.$b)(P, O, n));
                break;
            case "f":
                (i || D) && (0, s.p)(O) && (n.preventDefault(), (0, a.fO)({
                    message: O,
                    source: "keyboard-shortcut"
                }));
                break;
            case "s":
                i && "" !== O.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, u.pr)() : (0, u.kP)(P, O));
                break;
            case "t":
                if (i && (0, c.D1)(P, O)) n.preventDefault(), (0, d.Tv)(P, O, "Message Shortcut");
                else if (O.hasFlag(b.pr7.HAS_THREAD)) {
                    let e = g.A.getChannel(I.default.castMessageIdAsChannelId(O.id));
                    null != e && (i || D) && (n.preventDefault(), (0, d.JA)(e, D))
                }
                break;
            case "enter":
                R && (n.preventDefault(), (0, y.cl)(P, O));
                break;
            case "escape":
                p.A.isEditing(P.id, O.id) ? l.A.endEditMessage(P.id) : x._.dispatch(b.jej.TEXTAREA_FOCUS)
        }
    }, [e, t])
}