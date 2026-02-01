/** chunk id: 806621, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => u
});
var l = n(311907),
    r = n(380335),
    i = n(74114),
    a = n(320501),
    s = n(994500),
    o = n(287809),
    c = n(652215);

function u(e) {
    let t = e.isDM() && !e.isSystemDM() && !e.rawRecipients.some(e => e.bot),
        n = t ? e.getRecipientId() : null,
        u = (0, i.l)(e.id);
    return (0, l.bG)([a.A, r.A, s.A, o.default], () => {
        if (null != u || !t || r.A.isMessageRequest(e.id) || null != n && s.A.getRelationshipType(n) === c.eA$.BLOCKED) return !1;
        if (null != n) {
            let e = o.default.getUser(n);
            if (null != e && e.hasFlag(c.nhx.PROVISIONAL_ACCOUNT)) return !1
        }
        let l = a.A.getMessages(e.id);
        return l.ready && !l.hasMoreBefore && !l.hasMoreAfter && l.length < 25 && !a.A.hasCurrentUserSentMessage(e.id)
    }, [u, t, e.id, n])
}