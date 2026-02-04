/** chunk id: 833291, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => es,
    br: () => eu,
    l7: () => ec,
    rL: () => eo,
    st: () => V,
    tl: () => er,
    ts: () => el
}), n(591487), n(727858), n(747238), n(812715), n(866193), n(896048), n(321073);
var r, i, a, o, s, l, c, u, d, f = n(284009),
    p = n.n(f),
    _ = n(492462),
    h = n(791332),
    m = n.n(h),
    g = n(567243),
    E = n(179771),
    y = n(121401);
n(380610), n(100392);
var b = n(21599);
n(346542);
var O = n(123677),
    v = n(299091),
    A = n(257120),
    I = n(998218),
    S = n(167189),
    T = n(652215);
let C = 10,
    N = /^\/([a-zA-Z0-9-]+)$/,
    w = /^\/channels\/([0-9]+|@me)\/([0-9]+)$/,
    R = /^\/(invite|template)\/([a-zA-Z0-9-]+)\/?\.?$/,
    P = RegExp("^/events/(\\d+)(?:/)(\\d+)?((?:/)(\\d+))?"),
    D = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/?((about|images|privacy)\/?)?$/,
    L = /^\/(application-directory|discovery\/applications)\/([0-9-]+)\/store\/?([0-9-]+)?\/?$/,
    x = /^\/activities\/([0-9-]+)\/?$/,
    M = /^\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    j = /^(?:\/game-shop\/([0-9]+)|\/channels\/([0-9]+)\/game-shop\/(?:[0-9]+))\/([0-9]+)(?:\/([^\/]+))?$/,
    k = /^\/channels\/([0-9]+)\/shop$/,
    U = /^\/quests\/([0-9-]+)\/?$/,
    G = /^\/oauth2\/authorize/,
    F = /^#itemSkuId=([0-9]+)$/,
    V = /dev:\/\/[\w-.~:\/?#\[\]@!$&'()*+,;=%]+/i,
    B = X(window.GLOBAL_ENV.INVITE_HOST),
    H = X(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST),
    Y = X(null != (r = window.GLOBAL_ENV.WEBAPP_ENDPOINT) ? r : "//canary.".concat(T.U2_)),
    W = X("//canary.".concat(T.U2_)),
    K = X("//ptb.".concat(T.U2_)),
    z = X("discordapp.com"),
    q = X("discord.com"),
    Z = [A.A.escape(null != (i = B.host) ? i : ""), A.A.escape(null != (a = H.host) ? a : ""), A.A.escape(null != (o = Y.host) ? o : ""), A.A.escape(null != (s = z.host) ? s : ""), A.A.escape(null != (l = q.host) ? l : "")].filter(Boolean),
    Q = RegExp("((https?://[^ ]*)|^|[^/][^/.])(".concat(Z.join("|"), ")"), "g");

function X(e) {
    if (null == e) return {
        host: null,
        pathPrefix: null
    };
    if (e.indexOf("/") >= 0) {
        let t = (0, g.parse)(e, void 0, !0);
        return {
            host: t.host,
            pathPrefix: t.pathname
        }
    }
    return {
        host: e,
        pathPrefix: null
    }
}
let J = e => e.replaceAll(ee, " $2 "),
    $ = null == (d = m().defaultRules.link) || null == (u = d.match) || null == (c = u.regex) ? void 0 : c.source;
p()($, "SimpleMarkdown link regex is not set."), "^" === $[0] && ($ = $.substring(1));
let ee = RegExp($, "g");

function et(e, t) {
    var n;
    return (null == (n = t.host) ? void 0 : n.replace(/^www[.]/i, "")) === e.host
}

function en(e, t) {
    var n, r;
    if (!et(e, t)) return null;
    let i = null != (n = t.pathname) ? n : "",
        a = null != (r = e.pathPrefix) ? r : "";
    if (!i.startsWith(a)) return null;
    let o = i.substring(a.length);
    return "" === o ? null : o
}

function er(e) {
    var t, n, r, i;
    return null != (t = null != (n = null != (r = null != (i = en(Y, e)) ? i : en(W, e)) ? r : en(K, e)) ? n : en(z, e)) ? t : en(q, e)
}

function ei(e) {
    if (null == e) return null;
    let t = e.match(P);
    return null != t && t.length >= 4 ? {
        guildId: t[1],
        guildEventId: t[2],
        recurrenceId: t[4]
    } : null
}

function ea(e) {
    var t, n, r, i;
    let a = ec(e);
    if (null == a || null == a.pathname) return {
        url: null,
        inviteHostRemainingPath: null,
        templateHostRemainingPath: null,
        primaryHostRemainingPath: null
    };
    let o = en(B, a),
        s = en(H, a),
        l = null != (t = null != (n = null != (r = null != (i = en(Y, a)) ? i : en(W, a)) ? r : en(K, a)) ? n : en(z, a)) ? t : en(q, a);
    return {
        url: a,
        inviteHostRemainingPath: o,
        templateHostRemainingPath: s,
        primaryHostRemainingPath: l
    }
}

function eo(e) {
    if (e.includes("\\")) {
        let r = ec(e);
        if (null == r) return !1;
        if (et(B, r)) return !0;
        if ([Y, W, K, z, q].some(e => et(e, r))) {
            var t, n;
            return null != (t = null == (n = r.pathname) ? void 0 : n.toUpperCase().includes(S.I.INVITE)) && t
        }
    }
    return !1
}

function es(e) {
    if (null == e) return [];
    let t = new Set,
        n = [],
        r = J(e = e.replace(Q, (e, t, n, r) => null == n ? "".concat(t, "http://").concat(r) : e)).match(I.A.URL_REGEX),
        i = e.match(V);
    if (null == (r = (null != r ? r : []).concat(null != i ? i : [])) || 0 === r.length) return [];
    for (let e of r) {
        var a, o, s, l;
        if (n.length >= C) break;
        let {
            url: r,
            inviteHostRemainingPath: i,
            templateHostRemainingPath: c,
            primaryHostRemainingPath: u
        } = ea(e);
        if (null == r || null == r.pathname) continue;
        let d = (r, i) => {
            t.has(i) || (t.add(i), n.push({
                type: r,
                code: i,
                url: e
            }))
        };
        if ((null == i ? void 0 : i.match(N)) != null && ("https:" === r.protocol || "http:" === r.protocol)) {
            let t = (0, b.fB)(i.substring(1), r.search);
            if (v.A.getInvite(t), e.includes("\\")) continue;
            d(S.I.INVITE, t)
        }(null == c ? void 0 : c.match(N)) != null && d(S.I.TEMPLATE, c.substring(1));
        let f = null == u ? void 0 : u.match(R);
        if (null != f) {
            let t = f[1].toUpperCase();
            if (t === S.I.INVITE) {
                if (e.includes("\\")) continue;
                let t = (0, b.fB)(f[2], r.search);
                d(S.I.INVITE, t)
            } else d(t, f[2])
        }(null == u ? void 0 : u.match(w)) != null && d(S.I.CHANNEL_LINK, u.replace("/channels/", ""));
        let p = ei(r.pathname);
        if (null != p && d(S.I.EVENT, "".concat(p.guildId, "-").concat(p.guildEventId) + (null != p.recurrenceId ? "-".concat(p.recurrenceId) : "")), null != (null == u ? void 0 : u.match(G)) && null != r.query) {
            let e = (0, O._)(r.query),
                t = e.clientId;
            null == t || "" === t || (null == (a = e.scopes) ? void 0 : a.some(e => e !== E.F.APPLICATIONS_COMMANDS)) || d(S.I.APP_OAUTH2_LINK, t)
        }
        let h = null == u ? void 0 : u.match(D);
        if (null != h) {
            let e = h[2];
            d(S.I.APP_DIRECTORY_PROFILE, e)
        }
        let m = null == u ? void 0 : u.match(L);
        if (null != m) {
            let e = m[2],
                t = m[3];
            if (null != t) {
                let n = (0, y.L)(e, t);
                d(S.I.APP_DIRECTORY_STOREFRONT_SKU, n)
            } else d(S.I.APP_DIRECTORY_STOREFRONT, e)
        }
        let g = null == u ? void 0 : u.match(x);
        if (null != g) {
            let e = g[1];
            d(S.I.ACTIVITY_BOOKMARK, e)
        }
        let A = null == u ? void 0 : u.match(M);
        null != A && d(S.I.GUILD_PRODUCT, "".concat(A[1], "-").concat(A[2]));
        let I = null == u ? void 0 : u.match(k);
        null != I && d(S.I.SERVER_SHOP, I[1]);
        let T = null == u ? void 0 : u.match(j);
        null != T && d(S.I.SOCIAL_LAYER_STOREFRONT, "".concat(T[3], "-").concat(null != (o = T[1]) ? o : T[2]));
        let P = el(e);
        if (null != P && d(S.I.QUESTS_EMBED, P), "/shop" === u) {
            let e = null != r.query ? (0, _.parse)(r.query).tab : null,
                t = null == (l = r.hash) ? void 0 : l.match(F);
            d(S.I.COLLECTIBLES_SHOP, "".concat(null != e ? e : "", "-").concat(null != (s = null == t ? void 0 : t[1]) ? s : ""))
        }
    }
    return n
}

function el(e) {
    var t, n;
    let r = ea(e),
        i = null == r || null == (n = r.primaryHostRemainingPath) ? void 0 : n.match(U);
    return null != (t = null == i ? void 0 : i[1]) ? t : null
}

function ec(e) {
    try {
        return (0, g.parse)(e)
    } catch (e) {
        return null
    }
}

function eu(e) {
    return es(e)[0]
}