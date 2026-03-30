/** chunk id: 821747 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(827343),
    o = n(384059),
    c = n(20504),
    d = n(430452),
    u = n(824744),
    h = n(723702),
    A = n(447404),
    m = n(715109);

function _(e) {
    let {
        className: t,
        iconClassName: n,
        sliderClassName: s,
        userId: _,
        context: g,
        currentWindow: p = window,
        location: f
    } = e, {
        currentVolume: x,
        muted: E
    } = (0, a.cf)([d.Ay], () => ({
        currentVolume: d.Ay.getLocalVolume(_, g),
        muted: d.Ay.isLocalMute(_, g)
    }));
    return (0, i.jsx)(A.A, {
        children: (0, i.jsx)(c.A, {
            currentWindow: p,
            iconClassName: l()(n, m.pd),
            sliderClassName: s,
            className: t,
            value: (0, u.M)(x),
            muted: E,
            maxValue: h.isPlatformEmbedded ? 200 : 100,
            onValueChange: e => {
                e > 0 && E && r.A.toggleLocalMute(_, g), r.A.setLocalVolume(_, (0, u.w)(e), g)
            },
            onToggleMute: () => {
                null != f && (0, o.X)(f, o.O.VOLUME, E), r.A.toggleLocalMute(_, g)
            }
        })
    })
}