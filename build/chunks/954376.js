/** chunk id: 954376 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(627968);
n(64700);
var a = n(311907),
    s = n(397927),
    i = n(478063),
    r = n(287809);
let u = function(e) {
    let {
        recipients: t,
        size: n,
        status: u,
        isTyping: o,
        className: c,
        ...A
    } = e, d = s.vCh[n], h = (0, a.yK)([r.default], () => t.slice(0, 2).map(e => {
        let t = r.default.getUser(e);
        if (null != t) return t.getAvatarURL(void 0, d.size, !1)
    }), [t, d.size]);
    return (0, l.jsx)(i.A, {
        "aria-label": A["aria-label"],
        "aria-hidden": A["aria-hidden"],
        backSrc: h[0],
        frontSrc: h[1],
        size: n,
        status: u,
        isTyping: o ?? !1,
        className: c
    })
}