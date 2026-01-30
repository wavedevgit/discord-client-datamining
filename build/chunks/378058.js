/** chunk id: 378058, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    FD: () => L,
    Id: () => A,
    NO: () => N,
    Qn: () => R,
    T5: () => w,
    Xw: () => D,
    Y4: () => M,
    YS: () => P,
    l3: () => S,
    o1: () => U,
    o6: () => x,
    sL: () => T,
    zg: () => C
}), n(591487), n(727858), n(747238), n(65821), n(733351);
var r = n(776231),
    i = n(617617),
    a = n(71393),
    o = n(522602),
    s = n(486020),
    l = n(723702),
    c = n(931664),
    u = n(930958),
    d = n(842086),
    f = n(823894),
    p = n(652215);
let {
    API_ENDPOINT: _,
    MEDIA_PROXY_ENDPOINT: h,
    PROJECT_ENV: m,
    ASSET_ENDPOINT: g,
    CDN_HOST: E
} = window.GLOBAL_ENV, y = Object.values(d.y3), b = decodeURIComponent(p.Rsh.STICKER_ASSET("[\\d]+", "(".concat(y.join("|"), ")"))), O = RegExp("(".concat(location.protocol).concat(g, "|").concat(location.protocol).concat(h, ")(").concat(b, ")"), "ig"), v = RegExp("".concat(location.protocol).concat(_, "(").concat(b, ")"), "ig"), A = e => {
    if (null != e.cover_sticker_id) {
        let t = e.stickers.find(t => t.id === e.cover_sticker_id);
        if (null != t) return t
    }
    return e.stickers[0]
}, I = e => {
    switch (e) {
        case d.TG.PNG:
            return s.QB ? d.y3.WEBP : d.y3.PNG;
        case d.TG.APNG:
            return d.y3.APNG;
        case d.TG.LOTTIE:
            return d.y3.LOTTIE;
        case d.TG.GIF:
            return d.y3.GIF;
        default:
            throw Error("Unexpected format type: ".concat(e))
    }
}, S = e => {
    switch (e) {
        case "application/json":
            return d.TG.LOTTIE;
        case "image/apng":
            return d.TG.APNG;
        case "image/png":
        case "image/webp":
            return d.TG.PNG;
        case "image/gif":
            return d.TG.GIF;
        default:
            throw Error("Unexpected file type: ".concat(e))
    }
}, T = e => null == e ? null : "".concat(e.name, ".").concat(I(e.format_type)), C = function(e) {
    let {
        isPreview: t = !1,
        size: i = 160
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e.format_type) return null;
    let a = e.format_type;
    e.format_type === d.TG.GIF && t && (a = d.TG.PNG);
    let o = I(a),
        s = p.Rsh.STICKER_ASSET(e.id, o),
        c = !1;
    try {
        let {
            getForceSdrEmojisStickersConfig: e
        } = n(796272);
        c = e({
            location: "sticker_url"
        }).enabled
    } catch (e) {}
    let u = c ? "&force_sdr=true" : "",
        f = o === d.y3.WEBP ? "&quality=lossless" : "";
    if ("development" !== m) {
        if (e.format_type === d.TG.LOTTIE) return "".concat(location.protocol).concat(g).concat(s);
        let n = e.format_type === d.TG.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
            a = Math.min(2, (0, r.mZ)());
        return "".concat(location.protocol).concat(h).concat(s, "?size=").concat((0, r.kr)(i * a)).concat(n).concat(f).concat(u)
    }
    let _ = "".concat(location.protocol).concat(h).concat(s);
    return c ? "".concat(_, "?force_sdr=true") : _
}, N = e => null != e.match("development" !== m ? O : v), w = e => ({
    type: d.Z2.PACK,
    id: e.id,
    name: e.name,
    stickers: e.stickers,
    previewSticker: A(e)
}), R = (e, t) => e === f.BJ.ANIMATE_ON_INTERACTION ? t : e !== f.BJ.NEVER_ANIMATE, P = (e, t, n, r) => {
    if (o.A.getUploadCount(n, r) > 0) return !0;
    let i = c.A.getStickerPreview(n, r);
    if (null != i && i.length > 0) return !0;
    switch (e) {
        case d.D6.STICKER_PICKER:
            return "" !== t.trim();
        case d.D6.AUTOCOMPLETE:
            return (0, u.k)(t).length > 1;
        case d.D6.BUILT_IN_INTEGRATION:
        default:
            return !1
    }
}, D = e => e.type === d.NL.GUILD, L = e => e.type === d.NL.STANDARD, x = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], M = e => {
    if (null === e) return !1;
    let t = e.guild_id;
    return void 0 !== a.A.getGuild(t)
}, j = [];

function k() {
    var e, t;
    return null != (e = null == (t = i.A.frecencyWithoutFetchingLatest.favoriteStickers) ? void 0 : t.stickerIds) ? e : j
}

function U(e) {
    return k().includes(e)
}