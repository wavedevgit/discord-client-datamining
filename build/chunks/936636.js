/** Chunk was on 13530 **/
/** chunk id: 936636, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048), n(321073);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(808380),
    o = n(934551),
    c = n(990078),
    u = n(985018),
    d = n(851822);

function m(e) {
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
let f = [s.Y.DESKTOP, s.Y.XBOX, s.Y.PLAYSTATION, s.Y.NINTENDO];

function g(e) {
    let {
        platform: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["platform"]);
    switch (t) {
        case s.Y.DESKTOP:
            return (0, l.jsx)(o.ScreenIcon, m({
                size: "xs"
            }, n));
        case s.Y.XBOX:
            return (0, l.jsx)(o.XboxNeutralIcon, m({
                size: "xs"
            }, n));
        case s.Y.PLAYSTATION:
            return (0, l.jsx)(o.PlaystationNeutralIcon, m({
                size: "xs"
            }, n));
        case s.Y.NINTENDO:
            return (0, l.jsx)(o.NintendoSwitchNeutralIcon, m({
                size: "xs"
            }, n));
        default:
            return null
    }
}

function x(e) {
    let {
        platforms: t
    } = e;
    return (0, l.jsx)("div", {
        className: a()(d.nM, d.Lc),
        style: {
            alignItems: "center"
        },
        children: t.map(e => (0, l.jsx)(c.m, {
            text: function(e) {
                switch (e) {
                    case s.Y.DESKTOP:
                        return u.intl.string(u.t.KT6uCJ);
                    case s.Y.XBOX:
                        return u.intl.string(u.t.DDWUJp);
                    case s.Y.PLAYSTATION:
                        return u.intl.string(u.t.fzMz2s);
                    case s.Y.NINTENDO:
                        return u.intl.string(u.t.AMW8je);
                    default:
                        return null
                }
            }(e),
            children: (0, l.jsx)(g, {
                platform: e
            })
        }, e))
    })
}

function p(e) {
    let {
        detectedGame: t,
        className: n
    } = e, i = r.useMemo(() => {
        let e = new Set(t.platforms),
            n = [...e];
        return !e.has(s.Y.DESKTOP) && (e.has(s.Y.MACOS) || e.has(s.Y.LINUX)) && n.push(s.Y.DESKTOP), n.filter(e => f.includes(e))
    }, [t.platforms]);
    return 0 === i.length ? null : (0, l.jsx)("div", {
        className: a()(d.fi, d.iH, n),
        children: i.length > 0 && (0, l.jsx)(x, {
            platforms: i
        })
    })
}