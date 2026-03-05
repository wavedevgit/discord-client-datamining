/** chunk id: 9113, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => l
});
var i = n(64700),
    s = n(256311);

function l(e) {
    i.useEffect(() => {
        if (null != e) return s.A.lockChangeLog(e), () => {
            s.A.unlockChangeLog(e)
        }
    }, [e])
}