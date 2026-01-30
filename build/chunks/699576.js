/** chunk id: 699576, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => f
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    o = n.n(i),
    l = n(311907),
    s = n(287809),
    c = n(927578),
    u = n(202639),
    d = n(688796),
    _ = n(652215),
    h = n(339984),
    m = n(985018),
    g = n(719154);

function f(t) {
    let {
        uploadType: e,
        analyticsSource: n,
        className: i
    } = t, f = function(t, e) {
        if (null == t) return {};
        var n, r, a, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (a = 0, n = Reflect.ownKeys(t); a < n.length; a++) r = n[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
            return i
        }
        if (i = function(t, e) {
                if (null == t) return {};
                var n, r, a = {},
                    i = Object.getOwnPropertyNames(t);
                for (r = 0; r < i.length; r++) n = i[r], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
                return a
            }(t, e), Object.getOwnPropertySymbols)
            for (a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++) r = n[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]);
        return i
    }(t, ["uploadType", "analyticsSource", "className"]), p = a.useCallback(() => {
        (0, d.G)({
            uploadType: e,
            analyticsSource: n
        })
    }, [e, n]), A = (0, l.bG)([s.default], () => s.default.getCurrentUser()), b = c.Ay.canUseAnimatedAvatar(A), x = a.useMemo(() => {
        switch (e) {
            case h.HL.AVATAR:
                return m.intl.format(m.t["pvw/HH"], {
                    onClick: p
                });
            case h.HL.BANNER:
                return m.intl.format(m.t.aCrz1e, {
                    onClick: p
                });
            default:
                return ""
        }
    }, [e, p]);
    return e !== h.HL.AVATAR && e !== h.HL.BANNER || e === h.HL.AVATAR && b ? null : (0, r.jsx)(u.d, function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))), r.forEach(function(e) {
                var r;
                r = n[e], e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r
            })
        }
        return t
    }({
        text: x,
        button: m.intl.string(m.t.BmJkbd),
        buttonAnalyticsObject: {
            section: _.JJy.USER_PROFILE
        },
        className: o()(g.k, i)
    }, f))
}