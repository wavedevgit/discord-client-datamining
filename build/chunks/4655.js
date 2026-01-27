/** Chunk was on web.js **/
/** chunk id: 4655, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => s,
    y: () => a
}), n(927092), n(212978), n(201528), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var r = n(837921);
let i = null;

function a() {
    return null == i && (i = o()), i
}

function o() {
    if (null == window.DiscordNative || void 0 === window.Uint8Array || void 0 === window.TextDecoder) return !1;
    try {
        let e = r.Ay.requireModule("discord_zstd");
        if (null == e) return !1;
        return !0
    } catch (e) {
        if (e.message.includes("Cannot find")) return r.Ay.ensureModule("discord_zstd").catch(e => {}), !1;
        throw e
    }
}

function s() {
    if (!a()) return;
    let {
        createContext: e
    } = r.Ay.requireModule("discord_zstd");
    return e()
}