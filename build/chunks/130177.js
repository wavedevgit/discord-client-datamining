/** Chunk was on 51901 **/
/** chunk id: 130177, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    o = n(64700),
    a = n(43105),
    l = n(964486),
    i = n(49999);

function c(e) {
    let {
        dismissibleContentType: t,
        targetElementRef: n,
        visibleContent: c,
        markAsDismissed: s,
        props: u
    } = e, [d, b] = o.useState(!1), f = o.useRef(null);
    (0, l.Ay)(() => (f.current = setTimeout(() => b(!0), 250), () => {
        clearTimeout(f.current), s(i.i.AUTO_DISMISS)
    }));
    let p = o.useCallback(e => {
        s("user:explicit" === e ? i.i.USER_DISMISS : i.i.AUTO_DISMISS)
    }, [s]);
    return (0, r.jsx)(a.h, function(e) {
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