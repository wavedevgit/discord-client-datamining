/** Chunk was on 60667 **/
/** chunk id: 84373, original params: e,t,n (module,exports,require) **/
n.d(t, {
    o: () => c
});
var r = n(311907),
    i = n(873298),
    l = n(287809),
    s = n(64313),
    a = n(253932),
    o = n(656402);

function c() {
    var e;
    let t = a.he.useSetting(),
        n = a.cj.useSetting(),
        c = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        d = (0, s.j)("use_derived_dm_spam_filter_setting");
    return t !== i.he.DEFAULT_UNSET ? t : (null == c ? void 0 : c.nsfwAllowed) === !1 && d ? i.he.FRIENDS_AND_NON_FRIENDS : null != (e = o.xY.get(n)) ? e : i.he.NON_FRIENDS
}