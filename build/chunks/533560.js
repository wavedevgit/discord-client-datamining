/** chunk id: 533560 params = (module,exports,require) **/
n.d(t, {
    L: () => r
});
var i = n(64700),
    a = n(73153);

function r() {
    let e = i.useCallback(() => {
            if (null == window || !("navigation" in window)) return {
                canGoBack: !1,
                canGoForward: !1
            };
            let e = window.navigation;
            return {
                canGoBack: e.canGoBack ?? !1,
                canGoForward: e.canGoForward ?? !1
            }
        }, []),
        [t, n] = i.useState(e);
    return i.useEffect(() => {
        let t = () => {
            n(e())
        };
        return a.h.subscribe("ROUTE_CHANGED", t), a.h.subscribe("LOGOUT", t), () => {
            a.h.unsubscribe("ROUTE_CHANGED", t), a.h.unsubscribe("LOGOUT", t)
        }
    }, [e]), t
}