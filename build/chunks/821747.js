/** Chunk was on 41727 **/
/** chunk id: 821747, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    p = n(723702),
    h = n(447404),
    f = n(35204);

function g(e) {
    let {
        className: t,
        iconClassName: n,
        sliderClassName: l,
        userId: g,
        context: m,
        currentWindow: b = window,
        location: A
    } = e, {
        currentVolume: y,
        muted: _
    } = (0, s.cf)([u.A], () => ({
        currentVolume: u.A.getLocalVolume(g, m),
        muted: u.A.isLocalMute(g, m)
    }));
    return (0, r.jsx)(h.A, {
        children: (0, r.jsx)(c.A, {
            currentWindow: b,
            iconClassName: i()(n, f.pd),
            sliderClassName: l,
            className: t,
            value: (0, d.M)(y),
            muted: _,
            maxValue: p.isPlatformEmbedded ? 200 : 100,
            onValueChange: e => {
                e > 0 && _ && a.A.toggleLocalMute(g, m), a.A.setLocalVolume(g, (0, d.w)(e), m)
            },
            onToggleMute: () => {
                null != A && (0, o.X)(A, o.O.VOLUME, _), a.A.toggleLocalMute(g, m)
            }
        })
    })
}