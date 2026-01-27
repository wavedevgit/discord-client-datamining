/** Chunk was on web.js **/
/** chunk id: 380610, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    DI: () => m,
    bD: () => p,
    h4: () => b,
    hl: () => d,
    i_: () => f,
    k9: () => _,
    kK: () => h,
    qU: () => S,
    vS: () => E
}), n(747238), n(801460), n(508300), n(650828), n(591487), n(727858), n(896048);
var r = n(664294),
    i = n(567243),
    a = n(562465),
    o = n(723702),
    s = n(998218),
    l = n(986238);
n(652215);
let c, u = "/__development/build_overrides",
    d = (0, o.isAndroid)() ? c.Version.split(" - ")[0] : (0, o.isIOS)() ? c.Version : void 0;

function f(e) {
    return "".concat(location.protocol, "//").concat(location.host).concat(e)
}

function p() {
    let e = s.A.safeParseWithQuery(f(u));
    return null == e ? Promise.resolve(null) : (e.search = null, d && (e.query.version = d), a.Bo.get({
        url: i.format(e),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => e.body || null, () => null))
}

function _(e) {
    if (b(e)) return Promise.resolve(O(e));
    let t = s.A.safeParseWithQuery(e);
    return null == t ? Promise.resolve(null) : (t.search = null, t.query.meta = "true", d && (t.query.version = d), t.host = window.location.host, a.Bo.get({
        url: i.format(t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => e.body || null, () => null))
}

function h() {
    return -1 !== window.document.cookie.indexOf("".concat(l.ZR, "="))
}

function m() {
    try {
        var e;
        let t = r.parse(window.document.cookie)[l.ZR];
        if (null == t) return {};
        return null != (e = JSON.parse(atob(t.substring(t.indexOf(".") + 1))).$meta.experiments) ? e : {}
    } catch (e) {
        return {}
    }
}
let g = RegExp("^https://(?:ptb\\.|canary\\.)?(discordapp|discord)\\.com/__development/link?[\\S]+$", "i");

function E(e) {
    return null != e && g.test(e)
}
let y = RegExp("^dev://branch/([\\w-./]+)$", "i");

function b(e) {
    return null != e && y.test(e)
}

function O(e) {
    let t = e.match(y);
    if (null == t || 2 !== t.length) return null;
    let n = (0, o.getNativePlatform)(),
        r = t[1];
    return {
        targetBuildOverride: {
            ["discord_".concat(n)]: {
                type: "branch",
                id: r
            }
        },
        validForUserIds: [],
        expiresAt: "Mon, 1 Jan 2038 00:00:00 GMT"
    }
}
let v = "s",
    A = new Set(["canary.discord.com", "ptb.discord.com", "discord.com", "canary.discordapp.com", "ptb.discordapp.com", "discordapp.com"]),
    I = new Set(["/__development/link", "/__development/link/"]);

function S(e) {
    if (b(e)) return {
        payload: null,
        url: e
    };
    let t = s.A.safeParseWithQuery(e);
    if (null == t || !A.has(t.hostname) || !(v in t.query) || !I.has(t.pathname)) return null;
    for (let e in t.query) e !== v && delete t.query[e];
    return {
        payload: t.query[v],
        url: i.format(t)
    }
}