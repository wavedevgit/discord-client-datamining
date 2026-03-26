/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(20015),
    i = n(833349),
    r = n(652215);

function s(e, t, n, s, l) {
    let o = t?.application_id;
    if (null == e || null == t || !(0, i.A)(t, r.jUm.JOIN) || null == o) return !1;
    let c = s.getApplication(o);
    return !(null == c || (0, a.n)(c, r.gfo.EMBEDDED) || e.isPrivate() && l.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}