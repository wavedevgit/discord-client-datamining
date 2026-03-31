/** chunk id: 272379 params = (module,exports,require) **/
n.d(t, {
    K: () => c,
    Z: () => s
});
var l = n(311907),
    i = n(498642),
    r = n(576705),
    a = n(818348);

function s(e) {
    return (0, l.bG)([r.A], () => null != e && r.A.can(a.xB.MENTION_EVERYONE, e), [e])
}

function c(e) {
    let t = e?.guild_id,
        n = (0, l.bG)([i.A], () => i.A.getMemberCount(t), [t]);
    return null == e || null != n && !(n > 5e4)
}