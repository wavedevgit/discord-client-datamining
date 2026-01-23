/** Chunk was on 31748 **/
/** chunk id: 275731, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var l = n(487329),
    i = n(821715),
    a = n(93067),
    o = n(985018);

function s(e) {
    let {
        participant: t,
        className: n
    } = e, s = (0, i.A)(t);
    if (null == s) return null;
    let c = function(e) {
        switch (e) {
            case l.iy.STREAM_SEND_LOW_FPS:
            case l.iy.STREAM_SEND_HIGH_PACKET_LOSS:
                return o.intl.string(o.t["1f1LHp"]);
            case l.iy.STREAM_BAD_NETWORK_QUALITY:
                return o.intl.string(o.t.Ic588B);
            case l.iy.STREAM_SOUNDSHARE_FAILED:
                return o.intl.string(o.t["9lcych"]);
            case l.iy.STREAM_VIEW_HIGH_PACKET_LOSS:
            case l.iy.STREAM_VIEW_LOW_FPS:
                return o.intl.string(o.t.BcOifw);
            default:
                return
        }
    }(s);
    return null != c ? (0, r.jsx)(a.A, {
        className: n,
        errorMessage: c,
        avError: s
    }) : null
}