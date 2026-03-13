/** chunk id: 954376 params = (module,exports,require) **/
s.d(t, {
    A: () => A
});
var i = s(627968);
s(64700);
var a = s(311907),
    l = s(397927),
    n = s(478063),
    r = s(287809);
let A = function(e) {
    let {
        recipients: t,
        size: s,
        status: A,
        isTyping: u,
        className: d,
        ..._
    } = e, c = l.vCh[s], o = (0, a.yK)([r.default], () => t.slice(0, 2).map(e => {
        let t = r.default.getUser(e);
        if (null != t) return t.getAvatarURL(void 0, c.size, !1)
    }), [t, c.size]);
    return (0, i.jsx)(n.A, {
        "aria-label": _["aria-label"],
        "aria-hidden": _["aria-hidden"],
        backSrc: o[0],
        frontSrc: o[1],
        size: s,
        status: A,
        isTyping: u ?? !1,
        className: d
    })
}