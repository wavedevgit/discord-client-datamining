/** chunk id: 801209 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    l = n(536968);

function s(e) {
    let {
        videoRef: t,
        hlsRef: n,
        enabled: s,
        contentMetadata: i,
        isHls: a,
        debug: o
    } = e, u = r.useRef(null);
    r.useEffect(() => {
        if (!s || null == t.current || a && null == n.current) return;
        let e = {
            debug: o ?? !1,
            videoElement: t.current,
            hlsInstance: a ? n.current ?? void 0 : void 0,
            feature: i.contentType,
            contentMetadata: i
        };
        return u.current = new l.Gb(e), u.current.initialize(), () => {
            null != u.current && (u.current.endSession(), u.current.destroy(), u.current = null)
        }
    }, [s, a, n, t, i, o])
}