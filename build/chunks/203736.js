/** chunk id: 203736, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
}), n(896048);
var r = n(64700);

function l() {
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let [e, t] = r.useState(function() {
        var e, t;
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], {
            width: null != (e = window.innerWidth) ? e : 1080,
            height: null != (t = window.innerHeight) ? t : 1080
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