/** chunk id: 821715, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(487329),
    s = n(161518);
let a = {
    [l.iy.STREAM_SOUNDSHARE_FAILED]: 0,
    [l.iy.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
    [l.iy.STREAM_SEND_LOW_FPS]: 2,
    [l.iy.STREAM_VIEW_LOW_FPS]: 2,
    [l.iy.STREAM_BAD_NETWORK_QUALITY]: 3
};

function r(e) {
    let t = e.id;
    return (0, i.bG)([s.A], () => {
        let e = Array.from(s.A.getActiveErrors().values()).filter(e => "streamKey" in e && e.streamKey === t && null != a[e.type]).sort((e, t) => (a[e.type] ?? 0) - (a[t.type] ?? 0))[0];
        return e?.type
    }, [t])
}