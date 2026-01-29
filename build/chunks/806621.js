/** Chunk was on 1113 **/
/** chunk id: 806621, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => u
});
var r = n(311907),
    l = n(380335),
    i = n(74114),
    s = n(320501),
    a = n(994500),
    o = n(287809),
    c = n(652215);

function u(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
        n = t ? e.getRecipientId() : null,
        u = (0, i.l)(e.id);
    return (0, r.bG)([s.A, l.A, a.A, o.default], () => {
        if (null != u || !t || l.A.isMessageRequest(e.id) || null != n && a.A.getRelationshipType(n) === c.eA$.BLOCKED) return !1;
        if (null != n) {
            let e = o.default.getUser(n);
            if (null != e && e.hasFlag(c.nhx.PROVISIONAL_ACCOUNT)) return !1
        }
        let r = s.A.getMessages(e.id);
        return r.ready && !r.hasMoreBefore && !r.hasMoreAfter && r.length < 25 && !s.A.hasCurrentUserSentMessage(e.id)
    }, [u, t, e.id, n])
}