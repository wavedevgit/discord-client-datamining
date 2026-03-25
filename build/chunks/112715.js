/** chunk id: 112715 params = (module,exports,require) **/
n.d(t, {
    Z: () => s
});
var i = n(64700);

function s(e) {
    i.useEffect(() => {
        let t = e?.();
        return () => {
            t?.()
        }
    }, [e])
}