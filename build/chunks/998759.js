/** chunk id: 998759, original params: e,t,r (module,exports,require) **/
r.d(t, {
    z: () => l
}), r(591487), r(727858), r(747238), r(65821);
var n = r(64700),
    o = r(827762),
    c = r(149597);

function l(e) {
    let {
        fingerprintBase64: t,
        chunkSize: r,
        desiredLength: l
    } = e, s = n.useMemo(() => {
        if (null == t || "" === t) return null;
        let e = o.toByteArray(t),
            n = (0, c.DB)(e, l, r);
        if (null == n) return null;
        let s = RegExp(".{1,".concat(r, "}"), "g"),
            a = n.match(s);
        return null == a ? null : Array.from(a)
    }, [r, t, l]);
    if (null != t && "" !== t && null == s) throw Error("[useReadableSecureFramesCode] Failed to parse base 64 code.");
    return s
}