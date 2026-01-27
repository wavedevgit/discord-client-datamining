/** Chunk was on 1636 **/
/** chunk id: 517997, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => f,
    u: () => p
}), n(896048);
var r = n(448761),
    i = n(311907),
    l = n(870136),
    a = n(406704),
    o = n(576705),
    c = n(287809),
    s = n(652215),
    d = n(818348);

function u(e, t, n) {
    return (e.isPrivate() ? !e.isSystemDM() : n.can(d.xB.SEND_MESSAGES, e) && n.can(d.xB.READ_MESSAGE_HISTORY, e)) && r.M.REPLYABLE.has(t.type)
}

function g(e, t, n, r, i) {
    let l = t.hasFlag(s.pr7.EPHEMERAL),
        a = t.state === s.cmJ.SENT,
        o = !e.isArchivedThread() || i;
    return n && a && !l && !r && o
}

function p(e, t) {
    var n;
    let r = (0, a.lK)(e),
        [, c] = (0, l.c)(null != (n = null == e ? void 0 : e.getGuildId()) ? n : void 0),
        s = (0, i.bG)([o.A], () => null != e && null != t && u(e, t, o.A));
    return null != e && null != t && g(e, t, s, c, r)
}

function f(e, t) {
    var n;
    let r = (0, a.Et)(e),
        i = u(e, t, o.A),
        s = c.default.getCurrentUser(),
        [, d] = (0, l.U0)(null == s ? void 0 : s.id, null != (n = e.getGuildId()) ? n : void 0);
    return g(e, t, i, d, r)
}