/** Chunk was on web.js **/
/** chunk id: 608214, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => T,
    FX: () => A,
    VZ: () => I
}), n(938796);
var r = n(627968),
    i = n(64700),
    a = n(665260),
    o = n(731068),
    s = n(619517),
    l = n(248643),
    c = n(803316),
    u = n(652176),
    d = n(644447),
    f = n(587481),
    p = n(998218),
    _ = n(454290),
    h = n(504149),
    m = n(112576);

function g(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            g(e, t, n[t])
        })
    }
    return e
}

function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
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

function A(e, t) {
    return b(E({}, e), {
        type: (0, o.FE)(e),
        original: e.url,
        srcIsAnimated: (0, a.Lt)(e.flags, o.e5.IS_ANIMATED),
        sourceMetadata: {
            message: t
        }
    })
}

function I(e) {
    let t = p.A.toURLSafe(e);
    return null == t ? null : (t.searchParams.append("format", "webp"), t.toString())
}

function S(e) {
    let t, {
            media: n,
            obscured: i = !1,
            maxWidth: a,
            maxHeight: o,
            onContextMenu: c
        } = e,
        {
            width: d,
            height: p,
            url: g,
            proxyUrl: y,
            alt: v,
            type: A,
            maxWidth: S,
            maxHeight: T
        } = n,
        N = O(n, ["width", "height", "url", "proxyUrl", "alt", "type", "maxWidth", "maxHeight"]),
        {
            zoomed: w
        } = (0, _.Q)(),
        R = C(w, g, y, n.contentType, n.originalContentType),
        P = null != d && 0 !== d && null != p && 0 !== p;
    if ("VIDEO" === A && P && null != y) {
        var D;
        let e = I(y);
        if (null == e) return null;
        let t = null != (D = n.renderLinkComponent) ? D : u.bU;
        return (0, r.jsx)(l.A, b(E({}, N), {
            src: R,
            width: d,
            height: p,
            maxWidth: a,
            maxHeight: o,
            poster: e,
            naturalWidth: d,
            naturalHeight: p,
            volume: f.v1,
            autoMute: f.uj,
            onVolumeChange: f.ls,
            onMute: f.y5,
            renderLinkComponent: t,
            autoPlay: !i,
            alt: v,
            onContextMenu: c,
            disableArrowKeySeek: !0
        }))
    }
    return "IMAGE" === A && (t = P ? (0, r.jsx)(s.Ay, b(E({}, N), {
        src: R,
        width: d,
        height: p,
        maxWidth: a,
        maxHeight: o,
        useFullWidth: !0,
        shouldLink: !1,
        className: m.$_,
        animated: !i && n.animated,
        autoPlay: !i,
        alt: v,
        onContextMenu: c
    })) : (0, r.jsx)("img", {
        src: R,
        alt: v,
        onContextMenu: c,
        className: m.xx,
        style: {
            maxWidth: a,
            maxHeight: o
        }
    })), null != t ? (0, r.jsx)(h.A, {
        children: t
    }) : null
}
let T = i.memo(S);

function C(e, t, n, r, i) {
    return e && p.A.isDiscordAssetUrl(t, r, i) ? (0, c.XW)(t, r, i) : (0, d.E)({
        proxyURL: n,
        url: t
    })
}