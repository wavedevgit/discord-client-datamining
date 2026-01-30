/** chunk id: 954376, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968);
r(64700);
var l = r(311907),
    s = r(397927),
    i = r(478063),
    a = r(287809);
let u = function(e) {
    let {
        recipients: t,
        size: r,
        status: u,
        isTyping: o,
        className: c
    } = e, A = function(e, t) {
        if (null == e) return {};
        var r, n, l, s = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s
        }
        if (s = function(e, t) {
                if (null == e) return {};
                var r, n, l = {},
                    s = Object.getOwnPropertyNames(e);
                for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
        return s
    }(e, ["recipients", "size", "status", "isTyping", "className"]), f = s.vCh[r], h = (0, l.yK)([a.default], () => t.slice(0, 2).map(e => {
        let t = a.default.getUser(e);
        if (null != t) return t.getAvatarURL(void 0, f.size, !1)
    }), [t, f.size]);
    return (0, n.jsx)(i.A, {
        "aria-label": A["aria-label"],
        "aria-hidden": A["aria-hidden"],
        backSrc: h[0],
        frontSrc: h[1],
        size: r,
        status: u,
        isTyping: null != o && o,
        className: c
    })
}