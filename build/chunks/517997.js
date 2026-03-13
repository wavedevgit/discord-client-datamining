/** chunk id: 517997 params = (module,exports,require) **/
n.d(t, {
    r: () => m,
    u: () => A
});
var i = n(448761),
    l = n(311907),
    r = n(870136),
    a = n(406704),
    s = n(576705),
    o = n(287809),
    d = n(652215),
    c = n(818348);

function u(e, t, n) {
    return (e.isPrivate() ? !e.isSystemDM() : n.can(c.xB.SEND_MESSAGES, e) && n.can(c.xB.READ_MESSAGE_HISTORY, e)) && i.M.REPLYABLE.has(t.type)
}

function g(e, t, n, i, l) {
    let r = t.hasFlag(d.pr7.EPHEMERAL),
        a = t.state === d.cmJ.SENT,
        s = !e.isArchivedThread() || l;
    return n && a && !r && !i && s
}

function A(e, t) {
    let n = (0, a.lK)(e),
        [, i] = (0, r.c)(e?.getGuildId() ?? void 0),
        o = (0, l.bG)([s.A], () => null != e && null != t && u(e, t, s.A));
    return null != e && null != t && g(e, t, o, i, n)
}

function m(e, t) {
    let n = (0, a.Et)(e),
        i = u(e, t, s.A),
        l = o.default.getCurrentUser(),
        [, d] = (0, r.U0)(l?.id, e.getGuildId() ?? void 0);
    return g(e, t, i, d, n)
}