/** chunk id: 530134, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(942381),
    o = n(375499),
    c = n(151271),
    d = n(698279),
    u = n(111314);
let m = l.memo(l.forwardRef(function(e, t) {
    let {
        disabled: n,
        type: i,
        className: m,
        onClick: h,
        channel: g
    } = e, [f, x, p] = (0, c.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.x), b = l.useCallback(() => {
        (0, c.ed)(i, g.id), null == h || h()
    }, [i, h, g.id]);
    return n ? null : (0, r.jsx)("div", {
        className: a()(d.VQ, u.UD),
        ref: t,
        children: (0, r.jsx)(o.A, {
            className: a()(u.Z8, m),
            onClick: b,
            active: (f === d.kx.GIF || f === d.kx.EMOJI || f === d.kx.STICKER) && x === i && p === g.id,
            tabIndex: 0,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4,
                    left: -4,
                    right: -4
                }
            }
        })
    })
}))