/** Chunk was on 52139 **/
/** chunk id: 448381, original params: e,t,n (module,exports,require) **/
n.d(t, {
    EF: () => s,
    NI: () => u,
    Xg: () => c,
    wz: () => _
}), n(938796), n(747238);
var i = n(665260),
    a = n(77350),
    r = n(639169),
    l = n(652215);
let o = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    c = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    s = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function u(e, t) {
    let {
        filename: n,
        width: c,
        height: s
    } = e;
    if (t && null != c && c > 0 && null != s && s > 0)
        if ((0, a.u)(n)) return "IMAGE";
        else {
            var u;
            if (!(0, a.AE)(n) || null == e.proxy_url) return "INVALID";
            return (0, i.Lt)(null != (u = e.flags) ? u : 0, l.sbO.IS_CLIP) ? "CLIP" : "VIDEO"
        } return null != t && o.test(n) && null != e.url ? "AUDIO" : null != e.url && (0, r.C)(n) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function _(e) {
    let {
        contentType: t,
        width: n,
        height: i
    } = e;
    if (null != n && n > 0 && null != i && i > 0) {
        if ((0, a.tT)(t)) return "IMAGE";
        else if ((0, a.XB)(t)) return "VIDEO"
    }
    return "VISUAL_PLACEHOLDER"
}