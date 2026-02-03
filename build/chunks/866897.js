/** chunk id: 866897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var l = n(64700),
    r = n(843472),
    i = n(843626),
    a = n(294454),
    s = n(857071),
    o = n(517997),
    c = n(406704),
    u = n(747926),
    d = n(54570),
    h = n(8880),
    p = n(253932),
    f = n(961350),
    m = n(734057),
    g = n(580745),
    A = n(834942),
    b = n(320501),
    _ = n(576705),
    y = n(957565),
    v = n(203982),
    E = n(723702),
    O = n(661191),
    C = n(697470),
    S = n(492841),
    x = n(707985),
    j = n(519222),
    I = n(652215);
let T = function(e, t, n) {
    let T = l.useRef(n);
    return T.current = n, l.useCallback(n => {
        if (!T.current || n.target !== n.currentTarget) return;
        let l = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
            N = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
            P = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
            w = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
            R = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
            D = b.A.getMessage(t, e),
            M = m.A.getChannel(t);
        if (null == D || null == M) return;
        let L = f.default.getId();
        switch (n.key.toLowerCase()) {
            case "backspace":
                l && (_.A.can(I.xBc.MANAGE_MESSAGES, M) || D.canDeleteOwnMessage(L)) && (n.preventDefault(), (0, j.RC)(M, D, n));
                break;
            case "c":
                ((0, E.isMac)() ? w : P) && y.p5 && (n.preventDefault(), (0, y.C)(D.content));
                break;
            case "e":
                l && !M.isSystemDM() && (0, C.A)(D, L) && (n.preventDefault(), (0, j.u_)(M, D));
                break;
            case "p":
                (l || R) && (0, S.A)(D, M) && (n.preventDefault(), (0, j.rS)(M, D, n));
                break;
            case "+":
                (l || R) && function(e) {
                    let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
                        n = p.jW.getSetting(),
                        {
                            disableReactionCreates: l
                        } = (0, x.A)({
                            channel: e,
                            canChat: t,
                            renderReactions: n,
                            canAddNewReactions: t && _.A.can(I.xBc.ADD_REACTIONS, e),
                            isLurking: null != e.guild_id && s.A.isLurking(e.guild_id),
                            isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
                        });
                    return !l && n
                }(M) && (n.preventDefault(), v._.dispatchKeyed(I.zOV.TOGGLE_REACTION_POPOUT, D.id, {
                    emojiPicker: !0
                }));
                break;
            case "r":
                (l || R) && (0, o.r)(M, D) && (n.preventDefault(), (0, j.$b)(M, D, n));
                break;
            case "f":
                (l || R) && (0, i.p)(D) && (n.preventDefault(), (0, a.fO)({
                    message: D,
                    source: "keyboard-shortcut"
                }));
                break;
            case "s":
                l && "" !== D.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(M, D));
                break;
            case "t":
                if (l && (0, c.D1)(M, D)) n.preventDefault(), (0, u.Tv)(M, D, "Message Shortcut");
                else if (D.hasFlag(I.pr7.HAS_THREAD)) {
                    let e = m.A.getChannel(O.default.castMessageIdAsChannelId(D.id));
                    null != e && (l || R) && (n.preventDefault(), (0, u.JA)(e, R))
                }
                break;
            case "enter":
                N && (n.preventDefault(), (0, j.cl)(M, D));
                break;
            case "escape":
                g.A.isEditing(M.id, D.id) ? r.A.endEditMessage(M.id) : v._.dispatch(I.jej.TEXTAREA_FOCUS)
        }
    }, [e, t])
}