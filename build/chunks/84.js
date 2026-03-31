/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(20015),
    i = n(833349),
    r = n(652215);

function s(e) {
    let {
        channel: t,
        activity: n,
        ActivityInviteEducationStore: s,
        ApplicationStore: o,
        RelationshipStore: l,
        GamePartyStore: c
    } = e, d = n?.application_id;
    if (null == t || null == n || !(0, i.A)(n, r.jUm.JOIN) || null == d) return !1;
    let u = o.getApplication(d);
    return !(null == u || (0, a.n)(u, r.gfo.EMBEDDED) || t.isPrivate() && l.isBlockedOrIgnored(t.getRecipientId()) || t.isDM() && c.getParty(n.party?.id)?.has(t.getRecipientId()) === !0) && s.shouldShowEducation(d)
}