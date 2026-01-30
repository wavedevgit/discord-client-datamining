/** chunk id: 704413, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(736653),
    l = n(253932),
    a = n(862780),
    s = n(21878),
    o = n(951727),
    c = n(708676);

function u(e, t) {
    var n;
    let u = (0, s.M)(e),
        d = (0, a.d$)(u.getChannelId())[u.id],
        p = (0, c.A)(null == (n = u.poll) ? void 0 : n.expiry),
        m = l.Sf.useSetting(),
        f = (0, i.Ay)(),
        g = null != t ? t : f;
    return r.useMemo(() => (0, o.Ay)(u, d, {
        animateEmoji: m,
        theme: g,
        formattedExpirationLabel: p
    }), [m, u, d, p, g])
}