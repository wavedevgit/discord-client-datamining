/** chunk id: 138767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Q5: () => d,
    RQ: () => c,
    ZF: () => l
}), n(321073);
var r = n(178636),
    i = n.n(r),
    a = n(731854);
let o = [{
    name: "H264",
    encode: !0,
    decode: !0
}, {
    name: "VP8",
    encode: !0,
    decode: !0
}];

function s(e, t) {
    let n = t.concat(o),
        r = [];
    return n.forEach(t => {
        let n = e.find(e => t.name === e.name);
        null != n && r.push({
            name: n.name,
            encode: n.encode && t.encode,
            decode: n.decode && t.decode
        })
    }), r
}

function l(e) {
    var t, n, r, o, s, l;
    let c = [];
    return e.has(a.fd.SIGNAL_AV1_DECODE) ? c.push({
        name: "AV1",
        encode: !1,
        decode: !0
    }) : e.has(a.fd.SIGNAL_AV1) && c.push({
        name: "AV1",
        encode: !0,
        decode: !0
    }), c.push({
        name: "H265",
        encode: "u" < typeof window || (null == (n = window) || null == (t = n.DiscordNative) ? void 0 : t.process.platform) !== "darwin" || (null == (o = window) || null == (r = o.DiscordNative) ? void 0 : r.os.arch) === "arm64" && i().satisfies(null == (l = window) || null == (s = l.DiscordNative) ? void 0 : s.os.release, a.Dk),
        decode: !(null == e ? void 0 : e.has(a.fd.H265_HARDWARE_ONLY)) || (null == e ? void 0 : e.has(a.fd.H265_HARDWARE_DECODE_AVAILABLE))
    }), c
}

function c(e, t) {
    return s(JSON.parse(e).map(e => ({
        name: u(e.codec),
        encode: e.encode,
        decode: e.decode
    })), t)
}

function u(e) {
    return "AV1X" === e ? "AV1" : e
}

function d(e) {
    return "AV1" === e ? "AV1X" : e
}