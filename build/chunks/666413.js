/** chunk id: 666413, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    S: () => _
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(442215),
    o = n(607399),
    c = n(946015),
    d = n(397927),
    u = n(854818),
    g = n(263571);
let _ = l.memo(function(e) {
    let {
        countdownTimerBlock: t,
        isVisible: n
    } = e, l = (0, d.zhh)({
        transform: `translateX(-50%) ${n?"translateY(-75%)":"translateY(0%)"}`,
        opacity: +!!n,
        config: {
            tension: 120,
            friction: 12
        }
    });
    return (0, s.jsxs)(i.animated.div, {
        className: a()([g.lP, o.Fr && g.yJ]),
        role: "status",
        style: {
            ...l,
            ...null != t.bannerUrl && "" !== t.bannerUrl && {
                backgroundImage: `url(${t.bannerUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "top"
            }
        },
        children: [(0, s.jsxs)(c.s, {
            direction: c.s.Direction.VERTICAL,
            children: [(0, s.jsx)(d.Text, {
                variant: "text-md/medium",
                className: g.Wx,
                style: null != t.textColor && "" !== t.textColor ? {
                    color: t.textColor
                } : void 0,
                children: t.title
            }), null != t.body && "" !== t.body && (0, s.jsx)(d.Text, {
                variant: "text-sm/medium",
                className: g.w9,
                style: null != t.textColor && "" !== t.textColor ? {
                    color: t.textColor
                } : void 0,
                children: t.body
            })]
        }), (0, s.jsx)(u.e, {
            endDate: t.endTime
        })]
    })
})