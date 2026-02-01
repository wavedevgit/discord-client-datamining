/** chunk id: 84, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(938796);
var i = n(665260),
    r = n(833349),
    l = n(652215);

function o(e, t, n, o, s) {
    let a = null == t ? void 0 : t.application_id;
    if (null == e || null == t || !(0, r.A)(t, l.jUm.JOIN) || null == a) return !1;
    let c = o.getApplication(a);
    return !(null == c || (0, i.Lt)(c.flags, l.gfo.EMBEDDED) || e.isPrivate() && s.isBlockedOrIgnored(e.getRecipientId())) && n.shouldShowEducation(a)
}