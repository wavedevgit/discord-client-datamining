/** Chunk was on 36054 **/
/** chunk id: 162942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var a = n(627968),
    l = n(64700),
    r = n(687173),
    i = n(183555),
    s = n(289173),
    o = n(624160),
    c = n(229231),
    d = n(49999),
    u = n(985018),
    m = n(210400);

function p(e) {
    var t, n;
    let {
        handleOpenUserProfileModal: p,
        markAsDismissed: h
    } = e, x = function(e, t) {
        if (null == e) return {};
        var n, a, l, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
            return r
        }
        if (r = function(e, t) {
                if (null == e) return {};
                var n, a, l = {},
                    r = Object.getOwnPropertyNames(e);
                for (a = 0; a < r.length; a++) n = r[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) a = n[l], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
        return r
    }(e, ["handleOpenUserProfileModal", "markAsDismissed"]), {
        trackUserProfileEditAction: g
    } = (0, i.NJ)(), f = l.useMemo(() => c.Zc.filter(s.hL).map(e => new s.Yy({
        type: e,
        games: []
    })), []), b = l.useCallback(() => {
        h(d.i.TAKE_ACTION), g({
            action: "PRESS_ADD_WIDGET"
        }), p()
    }, [p, h, g]);
    return (0, a.jsx)(r.A, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
                var a;
                a = n[t], t in e ? Object.defineProperty(e, t, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = a
            })
        }
        return e
    }({
        heading: u.intl.string(u.t["oqalC+"]),
        subheading: u.intl.string(u.t.O9SQ1c),
        markAsDismissed: h
    }, x), n = n = {
        children: (0, a.jsx)("ul", {
            "aria-label": u.intl.string(u.t["+EIBSA"]),
            className: m.f,
            children: f.map(e => (0, a.jsx)(o.A, {
                widget: e,
                size: "medium",
                onAddWidget: b,
                trackUserProfileEditAction: g
            }, e.getUniqueKey()))
        })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
}