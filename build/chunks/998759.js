/** chunk id: 998759 params = (module,exports,require) **/
s.d(t, {
    z: () => a
});
var r = s(64700),
    l = s(827762),
    n = s(149597);

function a(e) {
    let {
        fingerprintBase64: t,
        chunkSize: s,
        desiredLength: a
    } = e, c = r.useMemo(() => {
        if (null == t || "" === t) return null;
        let e = l.toByteArray(t),
            r = (0, n.DB)(e, a, s);
        if (null == r) return null;
        let c = RegExp(`.{1,${s}}`, "g"),
            i = r.match(c);
        return null == i ? null : Array.from(i)
    }, [s, t, a]);
    if (null != t && "" !== t && null == c) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return c
}