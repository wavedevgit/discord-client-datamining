/** chunk id: 954376 params = (module,exports,require) **/
a.d(t, {
    A: () => c
});
var s = a(627968);
a(64700);
var n = a(311907),
    i = a(397927),
    l = a(478063),
    r = a(287809);
let c = function(e) {
    let {
        recipients: t,
        size: a,
        status: c,
        isTyping: o,
        className: d,
        ..._
    } = e, h = i.vCh[a], u = (0, n.yK)([r.default], () => t.slice(0, 2).map(e => {
        let t = r.default.getUser(e);
        if (null != t) return t.getAvatarURL(void 0, h.size, !1)
    }), [t, h.size]);
    return (0, s.jsx)(l.A, {
        "aria-label": _["aria-label"],
        "aria-hidden": _["aria-hidden"],
        backSrc: u[0],
        frontSrc: u[1],
        size: a,
        status: c,
        isTyping: o ?? !1,
        className: d
    })
}