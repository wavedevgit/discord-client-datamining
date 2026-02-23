/** chunk id: 981355, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(64700);

function i() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = r.useState(function() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {
            width: window.innerWidth ?? 1080,
            height: window.innerHeight ?? 1080
        }
    }());
    return r.useLayoutEffect(() => {
        function e() {
            t({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []), e
}