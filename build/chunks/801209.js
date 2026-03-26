/** chunk id: 801209 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(64700),
    i = n(536968);

function s(e) {
    let {
        videoRef: t,
        hlsRef: n,
        enabled: s,
        contentMetadata: a,
        isHls: l,
        debug: o
    } = e, u = r.useRef(null);
    r.useEffect(() => {
        if (!s || null == t.current || l && null == n.current) return;
        let e = {
            debug: o ?? !1,
            videoElement: t.current,
            hlsInstance: l ? n.current ?? void 0 : void 0,
            feature: a.contentType,
            contentMetadata: a
        };
        return u.current = new i.Gb(e), u.current.initialize(), () => {
            null != u.current && (u.current.endSession(), u.current.destroy(), u.current = null)
        }
    }, [s, l, n, t, a, o])
}