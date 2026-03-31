/** chunk id: 168015 params = (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(64700);

function l() {
    let [e, t] = (0, i.useState)(window.innerWidth >= 1132);
    return (0, i.useEffect)(() => {
        let e = () => {
            t(window.innerWidth >= 1132)
        };
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []), e
}