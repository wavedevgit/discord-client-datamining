/** chunk id: 608391, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => u
}), n(896048), n(492834);
var r = n(627968),
    o = n(64700),
    a = n(285899),
    c = n(665171),
    b = n(225180),
    i = n(294726),
    l = n(985018),
    s = n(669979);

function u(e) {
    let {
        guildId: t,
        gameInstance: n
    } = e, u = function(e, t) {
        if (null == e) return {};
        var n, r, o, a = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a
        }
        if (a = function(e, t) {
                if (null == e) return {};
                var n, r, o = {},
                    a = Object.getOwnPropertyNames(e);
                for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                return o
            }(e, t), Object.getOwnPropertySymbols)
            for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a
    }(e, ["guildId", "gameInstance"]), [f, d] = o.useState(!1), [p, _] = o.useState(void 0), g = (0, b.A)(n.gameId, "cover");
    return (0, r.jsx)(a.O, function(e) {
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
        size: "sm",
        title: n.name,
        body: (0, r.jsx)("div", {
            className: s.Z,
            children: (0, r.jsx)("img", {
                alt: "",
                src: null != g ? g : "",
                className: s.S
            })
        }),
        warningText: l.intl.string(i.default.ukbS3E),
        acknowledgementText: l.intl.string(i.default.xjRtF9),
        isLoading: f,
        error: p,
        onDeactivate: () => {
            _(void 0), d(!0), (0, c.e_)(t, n.planId, n.entitlementId).then(() => {
                u.onClose()
            }).catch(e => {
                var t;
                _(null != (t = e.body.message) ? t : e.message)
            }).finally(() => {
                d(!1)
            })
        }
    }, u))
}