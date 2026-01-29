/** Chunk was on 47995 **/
/** chunk id: 834425, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(729937),
    a = n(307600),
    s = n(998218);

function o(e) {
    let {
        activity: t,
        user: n,
        variant: o = "secondary",
        onAction: c
    } = e, u = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["activity", "user", "variant", "onAction"]);
    if ((null == t ? void 0 : t.buttons) == null || t.buttons.length < 1) return null;
    async function d(e, t, n) {
        try {
            let r = await (0, i.yb)(e, t);
            if (r.button_urls.length <= n) return;
            let l = r.button_urls[n];
            if ("string" != typeof l) return;
            let o = s.A.safeParseWithQuery(l);
            if (null == o || null == o.protocol || null == o.hostname) return;
            (0, a.h)({
                href: s.A.format(o),
                trusted: !1
            })
        } catch (e) {}
    }
    return (0, r.jsx)(r.Fragment, {
        children: t.buttons.map((e, i) => (0, r.jsx)(l.Button, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            text: e,
            variant: o,
            size: "sm",
            fullWidth: !0,
            onClick: () => {
                null == c || c(), d(t, n.id, i)
            }
        }, u), "customButton-".concat(i)))
    })
}