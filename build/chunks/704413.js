/** chunk id: 704413 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    l = n(736653),
    r = n(253932),
    s = n(862780),
    a = n(21878),
    o = n(951727),
    d = n(708676);

function c(e, t) {
    let n = (0, a.M)(e),
        c = (0, s.d$)(n.getChannelId())[n.id],
        u = (0, d.A)(n.poll?.expiry),
        m = r.Sf.useSetting(),
        _ = (0, l.Ay)(),
        h = t ?? _;
    return i.useMemo(() => (0, o.Ay)(n, c, {
        animateEmoji: m,
        theme: h,
        formattedExpirationLabel: u
    }), [m, n, c, u, h])
}