/** Chunk was on 86142 **/
/** chunk id: 598047, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700);

function i() {
    return "u" < typeof document || "visible" === document.visibilityState
}

function s() {
    let [e, t] = (0, r.useState)(i());
    return (0, r.useEffect)(() => {
        function e() {
            t(i())
        }
        return window.addEventListener("visibilitychange", e), () => {
            window.removeEventListener("visibilitychange", e)
        }
    }, [t]), e
}