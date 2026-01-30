/** chunk id: 500897, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(896048);
var r = n(64700),
    a = n(857250),
    i = n(397927),
    l = n(957565),
    s = n(927813),
    o = n(397400),
    c = n(985018);

function d(e, t, n, d) {
    let u = r.useRef(null),
        [m, f] = r.useState(!1);
    return {
        handleCopyServerIp: r.useCallback(() => (null != u.current && clearTimeout(u.current), (0, o.ed)(e, t, n), (0, l.C)(null != d ? d : ""), (0, i.showToast)((0, a.o)(c.intl.string(c.t["+5kSoW"]), i.ToastType.SUCCESS)), f(!0), u.current = setTimeout(() => {
            f(!1)
        }, 2 * s.A.Millis.SECOND), () => {
            null != u.current && clearTimeout(u.current)
        }), [e, t, n, d]),
        animateCopyIcon: m
    }
}