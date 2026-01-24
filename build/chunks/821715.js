/** Chunk was on 31748 **/
/** chunk id: 821715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
}), n(896048), n(638769);
var r = n(311907),
    l = n(487329),
    i = n(161518);
let a = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3
};

function o(e) {
    let t = e.id;
    return (0, r.bG)([i.A], () => {
        let e = Array.from(i.A.getActiveErrors().values()).filter(e => "streamKey" in e && e.streamKey === t && null != a[e.type]).sort((e, t) => {
            var n, r;
            return (null != (n = a[e.type]) ? n : 0) - (null != (r = a[t.type]) ? r : 0)
        })[0];
        return null == e ? void 0 : e.type
    }, [t])
}