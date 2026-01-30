/** chunk id: 598104, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => u
});
var n = r(627968),
    l = r(64700),
    s = r(397927),
    i = r(571694),
    a = r(954376);
let u = l.memo(function(e) {
    let {
        channel: t,
        size: r,
        facepileSizeOverride: l,
        isTyping: u,
        status: o,
        className: c,
        animated: A = !1
    } = e, f = function(e, t) {
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
    }(e, ["channel", "size", "facepileSizeOverride", "isTyping", "status", "className", "animated"]);
    return t.recipients.length >= 2 && null == t.icon ? (0, n.jsx)(a.A, {
        "aria-label": f["aria-label"],
        "aria-hidden": f["aria-hidden"],
        className: c,
        recipients: t.recipients,
        size: null != l ? l : r,
        isTyping: u,
        status: o
    }) : (0, n.jsx)(s.euF, {
        "aria-hidden": f["aria-hidden"],
        "aria-label": f["aria-label"],
        className: c,
        size: r,
        src: (0, i.Y)(t, 80, A)
    })
})