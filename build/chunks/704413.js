/** chunk id: 704413 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(64700),
    a = n(736653),
    r = n(253932),
    l = n(862780),
    s = n(21878),
    o = n(951727),
    d = n(708676);

function c(e, t) {
    let n = (0, s.M)(e),
        c = (0, l.d$)(n.getChannelId())[n.id],
        u = (0, d.A)(n.poll?.expiry),
        _ = r.Sf.useSetting(),
        m = (0, a.Ay)(),
        h = t ?? m;
    return i.useMemo(() => (0, o.Ay)(n, c, {
        animateEmoji: _,
        theme: h,
        formattedExpirationLabel: u
    }), [_, n, c, u, h])
}