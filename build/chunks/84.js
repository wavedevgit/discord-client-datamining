/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(20015),
    i = n(833349),
    l = n(652215);

function r(e) {
    let {
        channel: t,
        activity: n,
        ActivityInviteEducationStore: r,
        ApplicationStore: s,
        RelationshipStore: o,
        GamePartyStore: c
    } = e, d = n?.application_id;
    if (null == t || null == n || !(0, i.A)(n, l.jUm.JOIN) || null == d) return !1;
    let u = s.getApplication(d);
    return !(null == u || (0, a.n)(u, l.gfo.EMBEDDED) || t.isPrivate() && o.isBlockedOrIgnored(t.getRecipientId()) || t.isDM() && c.getParty(n.party?.id)?.has(t.getRecipientId()) === !0) && r.shouldShowEducation(d)
}