/** Chunk was on 92414 **/
/** chunk id: 448381, original params: e,t,n (module,exports,require) **/
n.d(t, {
    EF: () => u,
    NI: () => c,
    Xg: () => o,
    wz: () => d
}), n(938796), n(747238);
var r = n(665260),
    l = n(77350),
    i = n(639169),
    s = n(652215);
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function c(e, t) {
    let {
        filename: n,
        width: o,
        height: u
    } = e;
    if (t && null != o && o > 0 && null != u && u > 0)
        if ((0, l.u)(n)) return "IMAGE";
        else {
            var c;
            if (!(0, l.AE)(n) || null == e.proxy_url) return "INVALID";
            return (0, r.Lt)(null != (c = e.flags) ? c : 0, s.sbO.IS_CLIP) ? "CLIP" : "VIDEO"
        } return null != t && a.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, i.C)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function d(e) {
    let {
        contentType: t,
        width: n,
        height: r
    } = e;
    if (null != n && n > 0 && null != r && r > 0) {
        if ((0, l.tT)(t)) return "IMAGE";
        else if ((0, l.XB)(t)) return "VIDEO"
    }
    return "VISUAL_PLACEHOLDER"
}