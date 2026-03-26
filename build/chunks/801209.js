/** chunk id: 801209 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(64700),
    l = n(536968);

function a(e) {
    let {
        videoRef: t,
        hlsRef: n,
        enabled: a,
        contentMetadata: i,
        isHls: s,
        debug: o
    } = e, u = r.useRef(null);
    r.useEffect(() => {
        if (!a || null == t.current || s && null == n.current) return;
        let e = {
            debug: o ?? !1,
            videoElement: t.current,
            hlsInstance: s ? n.current ?? void 0 : void 0,
            feature: i.contentType,
            contentMetadata: i
        };
        return u.current = new l.Gb(e), u.current.initialize(), () => {
            null != u.current && (u.current.endSession(), u.current.destroy(), u.current = null)
        }
    }, [a, s, n, t, i, o])
}