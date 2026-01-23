/** Chunk was on 97492 **/
/** chunk id: 469707, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    l = n(401843),
    i = n(616356),
    s = n(961350);

function a(e, t) {
    let n = (0, r.bG)([s.default], () => s.default.getId()),
        a = (0, r.bG)([i.A], () => {
            let t = i.A.getCurrentUserActiveStream();
            return null != t && t.channelId === e
        }, [e]);
    return [(null == t || t === n) && a, (0, r.bG)([i.A], () => i.A.isSelfStreamHidden(e), [e]), t => {
        (0, l.Ho)(e, t)
    }]
}