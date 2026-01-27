/** Chunk was on web.js **/
/** chunk id: 486020, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    Ay: () => et,
    Bo: () => z,
    F_: () => M,
    QB: () => O,
    V0: () => en,
    VI: () => Q,
    _O: () => C,
    aq: () => E,
    ku: () => R,
    ns: () => j,
    o4: () => $,
    q6: () => X,
    s7: () => P,
    vI: () => y,
    xT: () => D,
    z: () => x
}), n(747238), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var i = n(824120),
    a = n.n(i),
    o = n(488428),
    s = n(507698),
    l = n(776231),
    c = n(252424),
    u = n(723702),
    d = n(661191),
    f = n(652215),
    p = n(532406);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let E = /^data:/,
    y = (r = n(820883).A).DEFAULT_AVATARS,
    b = r.DEFAULT_PROVISIONAL_AVATARS;
r.DEFAULT_GROUP_DM_AVATARS;
let O = r.canUseWebp(),
    v = 5,
    A = 360,
    I = 1096,
    S = (0, u.isAndroid)();

function T(e) {
    let t, {
        endpoint: n,
        path: r,
        id: i,
        hash: a,
        size: s,
        lossless: c = !1,
        canAnimate: u = !1,
        keepAspectRatio: d,
        format: f = null,
        canWebP: p = O
    } = e;
    if (null == i || null == a) return;
    let _ = null != f ? f : u && Q(a) ? er(p) : "jpg";
    u && X(a) && (_ = "mp4");
    let h = window.GLOBAL_ENV.CDN_HOST;
    if (null != h ? ("jpg" === _ && (_ = p ? "webp" : "png"), t = "https://".concat(h, "/").concat(r, "/").concat(i, "/").concat(a, ".").concat(_)) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + n(i, a, _), "mp4" === _) return t;
    let m = {};
    return null != s && (m.size = (0, l.kr)(s * (0, l.mZ)())), null != d && (m.keep_aspect_ratio = d), c && (m.quality = "lossless"), "webp" === _ && u && Q(a) && (m.animated = !0), t + "?".concat(o.stringify(m))
}

function C(e) {
    let {
        id: t,
        animated: r,
        size: i,
        forcePNG: a = !1
    } = e, o = O ? "webp" : "png", s = O ? "webp" : "gif", c = a ? "png" : r ? s : o, u = O && r ? "&animated=true" : "", d = "size=".concat((0, l.kr)(i * (0, l.mZ)(), S)), p = !1;
    try {
        let {
            getForceSdrEmojisStickersConfig: e
        } = n(796272);
        p = e({
            location: "getEmojiURL"
        }).enabled
    } catch (e) {}
    let _ = p ? "&force_sdr=true" : "";
    if (null != window.GLOBAL_ENV.CDN_HOST) return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/emojis/").concat(t, ".").concat(c) + "?".concat(d).concat(u).concat(_);
    {
        let e = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.EMOJI(t, c);
        return p ? "".concat(e, "?force_sdr=true") : e
    }
}

function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = n ? b : y;
    if (null == e && null == t) return r[0];
    let i = (0, c.cG)(t, 0);
    return i > 0 ? r[i % v] : null != e ? r[a()(e).shiftRight(22).mod(r.length).toJSNumber()] : r[0]
}

function w(e) {
    let {
        id: t,
        avatar: n,
        discriminator: i,
        bot: a
    } = e, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.eQT, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    if (a) {
        let e = r.BOT_AVATARS[n];
        if (e) return e;
        if (null == n && "0000" === i) return y[0]
    }
    return T({
        endpoint: f.Rsh.AVATAR,
        path: "avatars",
        id: t,
        hash: n,
        size: s,
        canAnimate: o,
        format: l,
        canWebP: c
    })
}

function R(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f.eQT,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O;
    return null != (t = w(e, n, r, i, a)) ? t : N(e.id, e.discriminator, e.isProvisional)
}

function P(e) {
    let t, {
            guildId: n,
            userId: r,
            avatar: i,
            canAnimate: a = !1,
            size: s = f.eQT,
            canWebP: c = O
        } = e,
        u = a && Q(i) ? er(c) : "jpg",
        {
            CDN_HOST: d
        } = window.GLOBAL_ENV;
    null != d ? ("jpg" === u && (u = c ? "webp" : "png"), t = "https://".concat(d).concat(f.Rsh.GUILD_MEMBER_AVATAR(n, r, i, u))) : t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.GUILD_MEMBER_AVATAR(n, r, i, u);
    let p = {
        size: (0, l.kr)(s * (0, l.mZ)())
    };
    return "webp" === u && a && Q(i) && (p.animated = !0), t += "?".concat(o.stringify(p))
}

function D(e) {
    let {
        userId: t,
        avatar: n,
        guildId: r
    } = e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null == n ? null : P({
        userId: t,
        avatar: n,
        guildId: r,
        canAnimate: i
    })
}

function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = D(e, n);
    return null != r ? ee(r) : t.getAvatarSource(e.guildId, n)
}

function x(e) {
    let t, {
        id: n,
        banner: r,
        canAnimate: i,
        size: a
    } = e;
    if (null == r) return;
    let s = window.GLOBAL_ENV.CDN_HOST,
        c = i && Q(r) ? er(O) : "png";
    t = null != s ? "https://".concat(s, "/banners/").concat(n, "/").concat(r, ".").concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.USER_BANNER(n, r, c);
    let u = {
        size: (0, l.kr)(a * (0, l.mZ)())
    };
    return "webp" === c && i && Q(r) && (u.animated = !0), t += "?".concat(o.stringify(u))
}

function M(e) {
    let {
        avatarDecoration: t,
        size: n,
        canAnimate: r = !1
    } = e;
    if (null == t || (0, s.bS)(t)) return;
    let i = t.asset;
    if (null == i) return;
    if (/^data:/.test(i)) return i;
    let {
        CDN_HOST: a,
        API_ENDPOINT: o
    } = window.GLOBAL_ENV, c = f.Rsh.AVATAR_DECORATION_PRESETS(i);
    if (/^blob:https?:\/\/[^\/]+\//i.test(i)) return i;
    let u = new URL(null != a ? "https://".concat(a).concat(c) : "".concat(location.protocol).concat(o).concat(c));
    return u.searchParams.set("size", "".concat((0, l.kr)(n * (0, l.mZ)()))), u.searchParams.set("passthrough", "".concat(r)), u.toString()
}

function j(e) {
    let t, {
        id: n,
        guildId: r,
        banner: i,
        canAnimate: a,
        size: s
    } = e;
    if (null == i || null == r) return;
    let c = window.GLOBAL_ENV.CDN_HOST,
        u = a && Q(i) ? er(O) : "png",
        d = f.Rsh.GUILD_MEMBER_BANNER(r, n, i, u);
    t = null != c ? "https://".concat(c).concat(d) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + d;
    let p = {
        size: (0, l.kr)(s * (0, l.mZ)())
    };
    return "webp" === u && a && Q(i) && (p.animated = !0), t += "?".concat(o.stringify(p))
}

function k(e) {
    let t, {
        id: n,
        splash: r,
        size: i
    } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), i = (0, l.kr)(i);
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? "https://".concat(a, "/splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.GUILD_SPLASH(n, r)) + "?size=".concat(i)
}

function U(e) {
    return ee(k(e))
}

function G(e) {
    let t, {
            id: n,
            banner: r
        } = e,
        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null == r) return null;
    let a = (0, l.kr)(A * (0, l.mZ)()),
        s = O ? "webp" : "jpg",
        c = i && Q(r) ? er(O) : s,
        u = window.GLOBAL_ENV.CDN_HOST;
    t = null != u ? "https://".concat(u, "/banners/").concat(n, "/").concat(r, ".").concat(c) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.GUILD_BANNER(n, r, c);
    let d = {
        size: a
    };
    return "jpg" === c && (d.quality = "lossless"), "webp" === c && i && Q(r) && (d.animated = !0), t += "?".concat(o.stringify(d))
}

function F(e) {
    let t, {
        id: n,
        homeHeader: r
    } = e;
    if (null == r) return null;
    let i = (0, l.kr)(I * (0, l.mZ)()),
        a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? "https://".concat(a, "/home-headers/").concat(n, "/").concat(r, ".png") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.GUILD_HOME_HEADER(n, r)) + "?size=".concat(i)
}

function V(e) {
    let t, {
        id: n,
        splash: r,
        size: i
    } = e;
    if (null == r) return null;
    null == i && (i = window.screen.width * (0, l.mZ)()), i = (0, l.kr)(i);
    let a = window.GLOBAL_ENV.CDN_HOST;
    return (null != a ? "https://".concat(a, "/discovery-splashes/").concat(n, "/").concat(r, ".jpg") : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + f.Rsh.GUILD_DISCOVERY_SPLASH(n, r)) + "?size=".concat(i)
}

function B(e) {
    return ee(V(e))
}

function H(e) {
    let {
        id: t,
        icon: n,
        size: r,
        canAnimate: i = !1,
        lossless: a = !1
    } = e;
    return T({
        endpoint: f.Rsh.GUILD_ICON,
        path: "icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        lossless: a,
        canWebP: O
    })
}

function Y(e) {
    let {
        id: t,
        icon: n,
        size: r = f.eQT,
        canAnimate: i = !1
    } = e;
    return T({
        endpoint: f.Rsh.GUILD_TEMPLATE_ICON,
        path: "guild-templates",
        id: t,
        hash: n,
        size: r,
        canAnimate: i,
        canWebP: !1
    })
}

function W(e) {
    let {
        id: t,
        icon: n,
        size: r = f.eQT,
        bot: i,
        botIconFirst: a,
        fallbackAvatar: o = !0,
        keepAspectRatio: s,
        guildMember: l
    } = e;
    if ((null == i ? void 0 : i.id) != null && null != l && null != l.avatar) {
        let e = P({
            userId: i.id,
            guildId: l.guildId,
            avatar: l.avatar,
            canAnimate: !1,
            size: r
        });
        if (null != e) return e
    }
    if (null != i && a) {
        let e = w(i, !1, r);
        if (null != e) return e
    }
    if (null != n) return en(n) ? n : T({
        endpoint: f.Rsh.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        canWebP: !1,
        keepAspectRatio: s
    });
    if (null != i) {
        let e = w(i, !1, r);
        if (null != e) return e
    }
    if (o) return p
}

function K(e) {
    let {
        id: t,
        hash: n,
        size: r = f.eQT,
        keepAspectRatio: i = !1,
        format: a
    } = e;
    return T({
        endpoint: f.Rsh.APPLICATION_ICON,
        path: "app-icons",
        id: t,
        hash: n,
        size: r,
        canAnimate: !1,
        keepAspectRatio: i,
        format: a,
        canWebP: !1
    })
}

function z(e) {
    let {
        userId: t,
        assetId: n,
        assetHash: r,
        size: i,
        canAnimate: a = !0
    } = e;
    return T({
        endpoint: (e, i, a) => f.Rsh.VIDEO_FILTER_ASSET_STORAGE(t, n, r, a),
        path: "video-filter-assets/".concat(t),
        id: n,
        hash: r,
        size: i,
        canAnimate: a,
        canWebP: !1
    })
}

function q(e) {
    return r.DEFAULT_GROUP_DM_AVATARS[d.default.extractTimestamp(e) % r.DEFAULT_GROUP_DM_AVATARS.length]
}

function Z(e) {
    var t, n;
    let {
        id: i,
        icon: a,
        applicationId: o,
        size: s
    } = e;
    return null != o ? null != (n = W({
        id: o,
        icon: a,
        size: s
    })) ? n : r.DEFAULT_CHANNEL_ICON : null != (t = T({
        endpoint: f.Rsh.CHANNEL_ICON,
        path: "channel-icons",
        id: i,
        hash: a,
        canAnimate: !1,
        size: s,
        canWebP: !1
    })) ? t : q(i)
}

function Q(e) {
    return null != e && e.startsWith("a_")
}

function X(e) {
    return null != e && e.startsWith("v_")
}

function J(e) {
    let t;
    try {
        return (t = new URL(e).pathname).split("/").pop()
    } catch (e) {
        return null
    }
}

function $(e) {
    return null != e && Q(J(e))
}

function ee(e) {
    return "number" == typeof e ? e : {
        uri: null != e ? e : void 0
    }
}
let et = {
    getUserAvatarURL: R,
    getDefaultAvatarURL: N,
    getGuildMemberAvatarURL: D,
    getGuildMemberAvatarURLSimple: P,
    getGuildMemberAvatarSource: L,
    getGuildMemberBannerURL: j,
    getUserBannerURL: x,
    getAvatarDecorationURL: M,
    hasAnimatedGuildIcon: function e(e) {
        return Q(null == e ? void 0 : e.icon)
    },
    isAnimatedIconHash: Q,
    getUserAvatarSource: (e, t, n) => ee(R(e, t, n)),
    getGuildIconURL: H,
    getGuildSplashURL: k,
    getGuildSplashSource: U,
    getGuildDiscoverySplashURL: V,
    getGuildDiscoverySplashSource: B,
    getGuildBannerURL: G,
    getGuildHomeHeaderURL: F,
    getResourceChannelIconURL: function e(e) {
        let {
            channelId: t,
            icon: n
        } = e;
        return null == n ? null : T({
            endpoint: f.Rsh.GUILD_RESOURCE_CHANNELS_ICON,
            path: "resource-channels",
            id: t,
            hash: n,
            size: f.eQT,
            canAnimate: !0,
            canWebP: !1
        })
    },
    getNewMemberActionIconURL: function e(e) {
        let {
            channelId: t,
            icon: n
        } = e;
        return null == n ? null : T({
            endpoint: f.Rsh.GUILD_NEW_MEMBER_ACTIONS_ICON,
            path: "new-member-actions",
            id: t,
            hash: n,
            size: f.eQT,
            canAnimate: !0,
            canWebP: !1
        })
    },
    getGuildTemplateIconURL: Y,
    getChannelIconURL: Z,
    getEmojiURL: C,
    getApplicationIconURL: W,
    getGameAssetURL: K,
    getVideoFilterAssetURL: z,
    getGameAssetSource: e => ee(K(e)),
    getGuildIconSource: e => ee(H(e)),
    getGuildTemplateIconSource: e => ee(Y(e)),
    getGuildBannerSource(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return ee(G(e, t))
    },
    getGuildHomeHeaderSource: e => ee(F(e)),
    getChannelIconSource: e => ee(Z(e)),
    getApplicationIconSource: e => ee(W(e)),
    makeSource: ee,
    getAnimatableSourceWithFallback(e, t) {
        let n = t(e);
        if (!(0, u.isAndroid)() || !e || "number" == typeof n) return n;
        {
            let e = t(!1);
            return "number" != typeof e && e.uri === n.uri ? e : [n, g(h({}, e), {
                isForceCached: !0
            })]
        }
    }
};

function en(e) {
    return null != e && E.test(e)
}

function er(e) {
    return e ? "webp" : "gif"
}