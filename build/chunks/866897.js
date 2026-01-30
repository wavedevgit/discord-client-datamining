/** Chunk was on 1113 **/
/** chunk id: 866897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var r = n(64700),
    l = n(843472),
    i = n(843626),
    s = n(294454),
    a = n(857071),
    o = n(517997),
    c = n(406704),
    u = n(747926),
    d = n(54570),
    h = n(8880),
    p = n(253932),
    g = n(961350),
    f = n(734057),
    m = n(580745),
    b = n(696451),
    A = n(834942),
    y = n(320501),
    O = n(576705),
    _ = n(957565),
    j = n(203982),
    x = n(723702),
    v = n(661191),
    E = n(697470),
    C = n(492841),
    S = n(707985),
    I = n(519222),
    N = n(652215);
let T = function(e, t, n) {
    let T = r.useRef(n);
    return T.current = n, r.useCallback(n => {
        if (!T.current || n.target !== n.currentTarget) return;
        let r = !n.altKey && !n.ctrlKey && !n.metaKey && !n.shiftKey,
            P = n.altKey && !(n.ctrlKey || n.metaKey || n.shiftKey),
            w = n.ctrlKey && !(n.altKey || n.metaKey || n.shiftKey),
            R = n.metaKey && !(n.altKey || n.ctrlKey || n.shiftKey),
            D = n.shiftKey && !(n.altKey || n.ctrlKey || n.metaKey),
            L = y.A.getMessage(t, e),
            M = f.A.getChannel(t);
        if (null == L || null == M) return;
        let G = g.default.getId();
        switch (n.key.toLowerCase()) {
            case "backspace":
                r && (O.A.can(N.xBc.MANAGE_MESSAGES, M) || L.canDeleteOwnMessage(G)) && (n.preventDefault(), (0, I.RC)(M, L, n));
                break;
            case "c":
                ((0, x.isMac)() ? R : w) && _.p5 && (n.preventDefault(), (0, _.C)(L.content));
                break;
            case "e":
                r && !M.isSystemDM() && (0, E.A)(L, G) && (n.preventDefault(), (0, I.u_)(M, L));
                break;
            case "p":
                (r || D) && (0, C.A)(L, M) && (n.preventDefault(), (0, I.rS)(M, L, n));
                break;
            case "+":
                (r || D) && function(e) {
                    let t = null == e.guild_id || A.A.canChatInGuild(e.guild_id),
                        n = p.jW.getSetting(),
                        {
                            disableReactionCreates: r
                        } = (0, S.A)({
                            channel: e,
                            canChat: t,
                            renderReactions: n,
                            canAddNewReactions: t && O.A.can(N.xBc.ADD_REACTIONS, e),
                            isLurking: null != e.guild_id && a.A.isLurking(e.guild_id),
                            isGuest: null != e.guild_id && b.Ay.isCurrentUserGuest(e.guild_id),
                            isActiveChannelOrUnarchivableThread: (0, c.jr)(e)
                        });
                    return !r && n
                }(M) && (n.preventDefault(), j._.dispatchKeyed(N.zOV.TOGGLE_REACTION_POPOUT, L.id, {
                    emojiPicker: !0
                }));
                break;
            case "r":
                (r || D) && (0, o.r)(M, L) && (n.preventDefault(), (0, I.$b)(M, L, n));
                break;
            case "f":
                (r || D) && (0, i.p)(L) && (n.preventDefault(), (0, s.fO)({
                    message: L,
                    source: "keyboard-shortcut"
                }));
                break;
            case "s":
                r && "" !== L.content && (n.preventDefault(), n.stopPropagation(), h.A.isSpeakingMessage(t, e) ? (0, d.pr)() : (0, d.kP)(M, L));
                break;
            case "t":
                if (r && (0, c.D1)(M, L)) n.preventDefault(), (0, u.Tv)(M, L, "Message Shortcut");
                else if (L.hasFlag(N.pr7.HAS_THREAD)) {
                    let e = f.A.getChannel(v.default.castMessageIdAsChannelId(L.id));
                    null != e && (r || D) && (n.preventDefault(), (0, u.JA)(e, D))
                }
                break;
            case "enter":
                P && (n.preventDefault(), (0, I.cl)(M, L));
                break;
            case "escape":
                m.A.isEditing(M.id, L.id) ? l.A.endEditMessage(M.id) : j._.dispatch(N.jej.TEXTAREA_FOCUS)
        }
    }, [e, t])
}