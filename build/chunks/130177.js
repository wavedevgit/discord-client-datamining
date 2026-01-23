/** Chunk was on 65076 **/
/** chunk id: 130177, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(43105),
    a = r(964486),
    i = r(49999);

function c(e) {
    let {
        dismissibleContentType: t,
        targetElementRef: r,
        visibleContent: c,
        markAsDismissed: s,
        props: u
    } = e, [y, f] = l.useState(!1), b = l.useRef(null);
    (0, a.Ay)(() => (b.current = setTimeout(() => f(!0), 250), () => {
        clearTimeout(b.current), s(i.i.AUTO_DISMISS)
    }));
    let d = l.useCallback(e => {
        s("user:explicit" === e ? i.i.USER_DISMISS : i.i.AUTO_DISMISS)
    }, [s]);
    return (0, n.jsx)(o.h, function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({
        targetElementRef: r,
        shouldShow: y && c === t,
        onRequestClose: d
    }, u))
}