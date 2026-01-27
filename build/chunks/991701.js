/** Chunk was on web.js **/
/** chunk id: 991701, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(827734),
    l = n(397927),
    c = n(654107),
    u = n(831209),
    d = n(543699),
    f = n(950191),
    p = n(195898),
    _ = n(576622),
    h = n(155886),
    m = n(652215),
    g = n(996988),
    E = n(346170);

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
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function v(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function A(e, t) {
    if (null == e) return {};
    var n, r, i, a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }
    if (a = I(e, t), Object.getOwnPropertySymbols)
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
}

function I(e, t) {
    if (null == e) return {};
    var n, r, i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
}
let S = function(e) {
    var t, n, a, y, O, I;
    let {
        style: S,
        src: T,
        backgroundSrc: C,
        userId: N,
        guildId: w,
        pulseSpeakingIndicator: R = !1,
        speaking: P = !1
    } = e, D = A(e, ["style", "src", "backgroundSrc", "userId", "guildId", "pulseSpeakingIndicator", "speaking"]), L = null != C ? C : T, x = (0, c.Ay)(L, s.A.unsafe_rawColors.PRIMARY_800.css), M = (0, f.Ay)(null != N ? N : m.dJq, w), j = null != (t = (0, d.tM)(null == M || null == (y = M.themeColors) ? void 0 : y[0])) ? t : m.NJ8.DARK, {
        profileThemeStyle: k,
        profileThemeClassName: U
    } = (0, p.A)({
        theme: j,
        themeType: g.d.VIDEO_TILE_BACKGROUND,
        primaryColor: null != (n = null == M || null == (O = M.themeColors) ? void 0 : O[0]) ? n : null,
        secondaryColor: null != (a = null == M || null == (I = M.themeColors) ? void 0 : I[1]) ? a : null
    }), {
        useProfileColors: G
    } = (0, h.a5)("VideoBackground-web");
    if (i.useEffect(() => {
            null != N && G && (0, _.A)(N, void 0, {
                guildId: w,
                dispatchWait: !0
            })
        }, [G, N, w]), null == T) return null;
    let F = (0, r.jsx)(l.euF, b({
            className: E.R,
            src: T
        }, D)),
        V = v(b({}, S), {
            backgroundColor: x
        });
    return (0, r.jsx)("div", {
        style: G ? b({}, S, k) : b({}, V),
        className: o()(E.T, {
            [U]: G
        }),
        children: R ? (0, r.jsx)(u.A, {
            shouldAnimate: P,
            children: F
        }) : F
    })
}