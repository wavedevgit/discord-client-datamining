/** chunk id: 448381 params = (module,exports,require) **/
i.d(t, {
    EF: () => u,
    NI: () => d,
    Xg: () => o,
    wz: () => m
}), i(938796);
var n = i(665260),
    s = i(77350),
    l = i(639169),
    a = i(652215);
let r = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = e => "IMAGE" === e || "VIDEO" === e || "CLIP" === e || "VISUAL_PLACEHOLDER" === e,
    u = e => "IMAGE" === e || "VIDEO" === e || "VISUAL_PLACEHOLDER" === e;

function d(e, t) {
    let {
        filename: i,
        width: o,
        height: u
    } = e;
    if (t && null != o && o > 0 && null != u && u > 0)
        if ((0, s.u)(i)) return "IMAGE";
        else if ((0, s.AE)(i) && null != e.proxy_url) return (0, n.Lt)(e.flags ?? 0, a.sbO.IS_CLIP) ? "CLIP" : "VIDEO";
    else return "INVALID";
    return null != t && r.test(i) && null != e.url ? "AUDIO" : null != e.url && (0, l.C)(i) ? "PLAINTEXT_PREVIEW" : "OTHER"
}

function m(e) {
    let {
        contentType: t,
        width: i,
        height: n
    } = e;
    if (null != i && i > 0 && null != n && n > 0) {
        if ((0, s.tT)(t)) return "IMAGE";
        else if ((0, s.XB)(t)) return "VIDEO"
    }
    return "VISUAL_PLACEHOLDER"
}