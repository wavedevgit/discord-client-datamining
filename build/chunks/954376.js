/** chunk id: 954376 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var n = a(627968);
a(64700);
var i = a(311907),
    s = a(397927),
    r = a(478063),
    l = a(287809);
let d = function(e) {
    let {
        recipients: t,
        size: a,
        status: d,
        isTyping: _,
        className: o,
        ...c
    } = e, h = s.vCh[a], u = (0, i.yK)([l.default], () => t.slice(0, 2).map(e => {
        let t = l.default.getUser(e);
        if (null != t) return t.getAvatarURL(void 0, h.size, !1)
    }), [t, h.size]);
    return (0, n.jsx)(r.A, {
        "aria-label": c["aria-label"],
        "aria-hidden": c["aria-hidden"],
        backSrc: u[0],
        frontSrc: u[1],
        size: a,
        status: d,
        isTyping: _ ?? !1,
        className: o
    })
}