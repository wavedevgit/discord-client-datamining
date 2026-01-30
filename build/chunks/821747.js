/** chunk id: 821747, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(311907),
    a = n(827343),
    o = n(384059),
    c = n(20504),
    u = n(430452),
    d = n(824744),
    h = n(723702),
    p = n(447404),
    g = n(35204);

function f(e) {
    let {
        className: t,
        iconClassName: n,
        sliderClassName: l,
        userId: f,
        context: m,
        currentWindow: b = window,
        location: A
    } = e, {
        currentVolume: y,
        muted: O
    } = (0, s.cf)([u.A], () => ({
        currentVolume: u.A.getLocalVolume(f, m),
        muted: u.A.isLocalMute(f, m)
    }));
    return (0, r.jsx)(p.A, {
        children: (0, r.jsx)(c.A, {
            currentWindow: b,
            iconClassName: i()(n, g.pd),
            sliderClassName: l,
            className: t,
            value: (0, d.M)(y),
            muted: O,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: e => {
                e > 0 && O && a.A.toggleLocalMute(f, m), a.A.setLocalVolume(f, (0, d.w)(e), m)
            },
            onToggleMute: () => {
                null != A && (0, o.X)(A, o.O.VOLUME, O), a.A.toggleLocalMute(f, m)
            }
        })
    })
}