/** Chunk was on web.js **/
/** chunk id: 997351, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(544028),
    l = n(967198),
    c = n(287809),
    u = n(255438),
    d = n(453771),
    f = n(975571),
    p = n(927578),
    _ = n(244975),
    h = n(788868),
    m = n(652215),
    g = n(985018),
    E = n(950503);

function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            y(e, t, n[t])
        })
    }
    return e
}

function O(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = v(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function v(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}

function A(e) {
    let {
        onClose: t,
        handleLearnMore: n
    } = e, y = O(e, ["onClose", "handleLearnMore"]), v = (0, a.bG)([c.default], () => c.default.getCurrentUser()), A = (0, a.bG)([s.A], () => s.A.theme), I = (0, a.bG)([l.A], () => l.A.getGuildId()), S = A === m.NJ8.LIGHT ? "light" : "dark", T = (0, r.jsx)("img", {
        className: E.Qw,
        alt: "File Upload Nitro Perk",
        src: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_".concat(S, "_v2.png")
    }), C = i.useMemo(() => {
        let e = p.Ay.getUserMaxFileSize(v);
        return (0, u.Xq)(e / 1024, {
            useKibibytes: !0
        })
    }, [v]), N = (0, d.Iu)({
        guildId: I,
        onClick: () => {
            window.open(f.A.getArticleURL(m.MVz.NITRO_FAQ), "_blank")
        }
    }), w = (0, r.jsx)("div", {
        className: E.rf,
        children: (0, r.jsx)(o.Text, {
            variant: "text-sm/medium",
            children: N
        })
    });
    return (0, r.jsx)(_.A, b({
        artElement: T,
        artContainerClassName: E.JS,
        enableArtBoxShadow: !1,
        type: h.e.UPLOAD_ERROR_UPSELL,
        title: g.intl.string(g.t["9C+41g"]),
        body: w,
        context: g.intl.formatToPlainString(g.t.q5fTZp, {
            maxSize: C
        }),
        glowUp: N,
        analyticsLocation: {
            section: m.JJy.FILE_UPLOAD_POPOUT
        },
        onClose: t,
        subscriptionTier: h.pe.TIER_2,
        secondaryCTA: g.intl.string(g.t.ZnqyZ2),
        onSecondaryClick: n,
        showEnhancedUpsell: !0
    }, y))
}