/** chunk id: 84 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var a = n(20015),
    i = n(833349),
    r = n(652215);

function l(e, t, n, l, s) {
    let o = t?.application_id;
    if (null == e || null == t || !(0, i.A)(t, r.jUm.JOIN) || null == o) return !1;
    let c = l.getApplication(o);
    return !(null == c || (0, a.n)(c, r.gfo.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(o)
}