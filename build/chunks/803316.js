/** chunk id: 803316 params = (module,exports,require) **/
n.d(e, {
    N7: () => c,
    PK: () => h,
    XW: () => g,
    bc: () => m,
    e7: () => u,
    fW: () => p
});
var a = n(376304),
    i = n(202803),
    r = n(378058),
    l = n(403362),
    o = n(998218),
    s = n(837921);
let c = "png",
    d = "cdn.discordapp.com";

function p(t) {
    return !((0, r.NO)(t) || (0, a.XD)(t))
}

function u(t, e, n) {
    let a = s.Ay.canSaveImage(t, n ?? e),
        i = o.A.isDiscordAssetUrl(t, e, n),
        r = p(t);
    return a && i && r
}

function h(t, e, n) {
    let a = s.Ay.canCopyImage(t),
        i = o.A.isDiscordAssetUrl(t, e, n),
        r = p(t);
    return a && i && r
}

function m(t, e) {
    if ((0, l.iT)()) return t ?? e;
    if (null != t) {
        let n = o.A.toURLSafe(e);
        if (null != n && (0, i.BX)(n)) return t
    }
    return e
}

function g(t, e, n, a) {
    let i = o.A.toURLSafe(t);
    if (null == i || i.host === d) return t;
    let r = (0, s.UB)(t, e),
        c = !1;
    if ("https://media.discordapp.net" === i.origin && (c = !0), (0, l.iT)() && "http://localhost:4000" === i.origin && (c = !0), i.searchParams.delete("width"), i.searchParams.delete("height"), i.searchParams.delete("quality"), i.searchParams.delete("size"), c)
        if ((0, l.iT)()) {
            if (o.A.isOriginalContentTypeDifferent(e, n)) return i.toString();
            i.host = "localhost", i.port = "3000", i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13))
        } else i.host = d;
    return i.searchParams.delete("format"), null == r && null != a && i.searchParams.append("format", a), i.toString()
}