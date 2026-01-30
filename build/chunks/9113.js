/** chunk id: 9113, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var r = n(64700),
    i = n(256311);

function l(e) {
    r.useEffect(() => {
        if (null != e) return i.A.lockChangeLog(e), () => {
            i.A.unlockChangeLog(e)
        }
    }, [e])
}