/** Chunk was on 94073 **/
/** chunk id: 699576, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    a = n(64700),
    o = n(503698),
    i = n.n(o),
    l = n(311907),
    s = n(287809),
    c = n(927578),
    u = n(202639),
    _ = n(688796),
    d = n(652215),
    f = n(339984),
    A = n(985018),
    b = n(719154);

function m(e) {
    let {
        uploadType: t,
        analyticsSource: n,
        className: o
    } = e, m = function(e, t) {
        if (null == e) return {};
        var n, r, a, o = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (a = 0, n = Reflect.ownKeys(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            return o
        }
        if (o = function(e, t) {
                if (null == e) return {};
                var n, r, a = {},
                    o = Object.getOwnPropertyNames(e);
                for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a
            }(e, t), Object.getOwnPropertySymbols)
            for (a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) r = n[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
    }(e, ["uploadType", "analyticsSource", "className"]), p = a.useCallback(() => {
        (0, _.G)({
            uploadType: t,
            analyticsSource: n
        })
    }, [t, n]), y = (0, l.bG)([s.default], () => s.default.getCurrentUser()), g = c.Ay.canUseAnimatedAvatar(y), x = a.useMemo(() => {
        switch (t) {
            case f.HL.AVATAR:
                return A.intl.format(A.t["pvw/HH"], {
                    onClick: p
                });
            case f.HL.BANNER:
                return A.intl.format(A.t.aCrz1e, {
                    onClick: p
                });
            default:
                return ""
        }
    }, [t, p]);
    return t !== f.HL.AVATAR && t !== f.HL.BANNER || t === f.HL.AVATAR && g ? null : (0, r.jsx)(u.d, function(e) {
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
        text: x,
        button: A.intl.string(A.t.BmJkbd),
        buttonAnalyticsObject: {
            section: d.JJy.USER_PROFILE
        },
        className: i()(b.k, o)
    }, m))
}