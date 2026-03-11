/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(20015),
    l = n(833349),
    s = n(652215);

function a(e, t, n, a, r) {
    let o = t?.application_id;
    if (null == e || null == t || !(0, l.A)(t, s.jUm.JOIN) || null == o) return !1;
    let c = a.getApplication(o);
    return !(null == c || (0, i.n)(c, s.gfo.EMBEDDED) || e.isPrivate() && r.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}