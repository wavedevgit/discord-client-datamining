/** chunk id: 130177, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(43105),
    a = n(964486),
    i = n(49999);

function c(e) {
    let {
        dismissibleContentType: t,
        targetElementRef: n,
        visibleContent: c,
        markAsDismissed: s,
        props: u
    } = e, [d, b] = l.useState(!1), y = l.useRef(null);
    (0, a.Ay)(() => (y.current = setTimeout(() => b(!0), 250), () => {
        clearTimeout(y.current), s(i.i.AUTO_DISMISS)
    }));
    let p = l.useCallback(e => {
        s("user:explicit" === e ? i.i.USER_DISMISS : i.i.AUTO_DISMISS)
    }, [s]);
    return (0, r.jsx)(o.h, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r
            })
        }
        return e
    }({
        targetElementRef: n,
        shouldShow: d && c === t,
        onRequestClose: p
    }, u))
}