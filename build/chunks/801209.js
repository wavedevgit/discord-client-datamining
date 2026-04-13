/** chunk id: 801209 params = (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(64700),
    s = n(536968);

function i(e) {
    let {
        videoRef: t,
        hlsRef: n,
        enabled: i,
        contentMetadata: a,
        isHls: l,
        debug: u
    } = e, o = r.useRef(null);
    r.useEffect(() => {
        if (!i || null == t.current || l && null == n.current) return;
        let e = {
            debug: u ?? !1,
            videoElement: t.current,
            hlsInstance: l ? n.current ?? void 0 : void 0,
            feature: a.contentType,
            contentMetadata: a
        };
        return o.current = new s.Gb(e), o.current.initialize(), () => {
            null != o.current && (o.current.endSession(), o.current.destroy(), o.current = null)
        }
    }, [i, l, n, t, a, u])
}