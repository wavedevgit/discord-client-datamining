/** Chunk was on web.js **/
/** chunk id: 803316, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    N7: () => c,
    PK: () => g,
    XW: () => y,
    bc: () => E,
    e7: () => m,
    fW: () => h
});
var r = n(376304),
    i = n(202803),
    a = n(378058),
    o = n(403362),
    s = n(998218),
    l = n(837921);
let c = "png",
    u = "https://media.discordapp.net",
    d = "cdn.discordapp.com",
    f = "localhost",
    p = "3000",
    _ = "http://localhost:4000";

function h(e) {
    return !((0, a.NO)(e) || (0, r.XD)(e))
}

function m(e, t, n) {
    let r = l.Ay.canSaveImage(e, null != n ? n : t),
        i = s.A.isDiscordAssetUrl(e, t, n),
        a = h(e);
    return r && i && a
}

function g(e, t, n) {
    let r = l.Ay.canCopyImage(e),
        i = s.A.isDiscordAssetUrl(e, t, n),
        a = h(e);
    return r && i && a
}

function E(e, t) {
    if ((0, o.iT)()) return null != e ? e : t;
    if (null != e) {
        let n = s.A.toURLSafe(t);
        if (null != n && (0, i.BX)(n)) return e
    }
    return t
}

function y(e, t, n, r) {
    let i = s.A.toURLSafe(e);
    if (null == i || i.host === d) return e;
    let a = (0, l.UB)(e, t),
        c = !1;
    if (i.origin === u && (c = !0), (0, o.iT)() && i.origin === _ && (c = !0), i.searchParams.delete("width"), i.searchParams.delete("height"), i.searchParams.delete("quality"), i.searchParams.delete("size"), c)
        if ((0, o.iT)()) {
            if (s.A.isOriginalContentTypeDifferent(t, n)) return i.toString();
            i.host = f, i.port = p, i.pathname.startsWith("/attachments/") && (i.pathname = "/channels/" + i.pathname.substring(13))
        } else i.host = d;
    return i.searchParams.delete("format"), null == a && null != r && i.searchParams.append("format", r), i.toString()
}