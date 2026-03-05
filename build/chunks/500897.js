/** chunk id: 500897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    s = n(857250),
    i = n(397927),
    l = n(957565),
    r = n(927813),
    d = n(397400),
    c = n(985018);

function o(e, t, n, o) {
    let u = a.useRef(null),
        [m, _] = a.useState(!1);
    return {
        handleCopyServerIp: a.useCallback(() => (null != u.current && clearTimeout(u.current), (0, d.ed)(e, t, n), (0, l.C)(o ?? ""), (0, i.showToast)((0, s.o)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)), _(!0), u.current = setTimeout(() => {
            _(!1)
        }, 2 * r.A.Millis.SECOND), () => {
            null != u.current && clearTimeout(u.current)
        }), [e, t, n, o]),
        animateCopyIcon: m
    }
}