/** Chunk was on 63974 **/
/** chunk id: 293071, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => c
}), n(896048);
var l = n(627968);
n(64700);
var i = n(215530),
    r = n(976270),
    s = n(916217),
    o = n(417021),
    a = n(239606);

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function c(e) {
    let {
        hideRestrictedProfile: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, i, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
            return r
        }
        if (r = function(e, t) {
                if (null == e) return {};
                var n, l, i = {},
                    r = Object.getOwnPropertyNames(e);
                for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i
            }(e, t), Object.getOwnPropertySymbols)
            for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r
    }(e, ["hideRestrictedProfile"]), {
        user: c
    } = n, [u, p] = (0, i.A)(c.id);
    return u && !t ? (0, l.jsx)(o.A, d({
        onHide: p
    }, n)) : c.isNonUserBot() ? (0, l.jsx)(s.A, d({}, n)) : c.bot ? (0, l.jsx)(r.A, d({}, n)) : (0, l.jsx)(a.A, d({}, n))
}