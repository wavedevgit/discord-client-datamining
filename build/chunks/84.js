/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(20015),
    i = n(833349),
    l = n(652215);

function r(e, t, n, r, s) {
    let o = t?.application_id;
    if (null == e || null == t || !(0, i.A)(t, l.jUm.JOIN) || null == o) return !1;
    let c = r.getApplication(o);
    return !(null == c || (0, a.n)(c, l.gfo.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}