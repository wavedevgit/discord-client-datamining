/** Chunk was on 46875 **/
/** chunk id: 530134, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(942381),
    o = n(375499),
    c = n(151271),
    d = n(698279),
    u = n(111314);
let m = r.memo(r.forwardRef(function(e, t) {
    let {
        disabled: n,
        type: i,
        className: m,
        onClick: h,
        channel: g
    } = e, [x, f, p] = (0, c.RQ)(e => [e.activeView, e.activeViewType, e.activeChannelId], s.x), b = r.useCallback(() => {
        (0, c.ed)(i, g.id), null == h || h()
    }, [i, h, g.id]);
    return n ? null : (0, l.jsx)("div", {
        className: a()(d.VQ, u.UD),
        ref: t,
        children: (0, l.jsx)(o.A, {
            className: a()(u.Z8, m),
            onClick: b,
            active: (x === d.kx.GIF || x === d.kx.EMOJI || x === d.kx.STICKER) && f === i && p === g.id,
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