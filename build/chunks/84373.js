/** chunk id: 84373, original params: e,t,n (module,exports,require) **/
n.d(t, {
    o: () => c
});
var i = n(311907),
    s = n(873298),
    a = n(287809),
    r = n(64313),
    l = n(253932),
    o = n(656402);

function c() {
    let e = l.he.useSetting(),
        t = l.cj.useSetting(),
        n = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        c = (0, r.j)("use_derived_dm_spam_filter_setting");
    return e !== s.he.DEFAULT_UNSET ? e : n?.nsfwAllowed === !1 && c ? s.he.FRIENDS_AND_NON_FRIENDS : o.xY.get(t) ?? s.he.NON_FRIENDS
}