/** chunk id: 998759, original params: e,t,n (module,exports,require) **/
n.d(t, {
    z: () => a
});
var i = n(64700),
    l = n(827762),
    s = n(149597);

function a(e) {
    let {
        fingerprintBase64: t,
        chunkSize: n,
        desiredLength: a
    } = e, r = i.useMemo(() => {
        if (null == t || "" === t) return null;
        let e = l.toByteArray(t),
            i = (0, s.DB)(e, a, n);
        if (null == i) return null;
        let r = RegExp(`.{1,${n}}`, "g"),
            o = i.match(r);
        return null == o ? null : Array.from(o)
    }, [n, t, a]);
    if (null != t && "" !== t && null == r) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return r
}