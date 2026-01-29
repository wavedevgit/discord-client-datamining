/** Chunk was on 1113 **/
/** chunk id: 722523, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    GU: () => A
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(732955),
    a = n(438874),
    o = n(363487),
    c = n(439156),
    u = n(689906),
    d = n(224331),
    h = n(568065),
    p = n(333354),
    g = n(985018),
    f = n(993747);

function m() {
    return (m = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function b(e) {
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
}

function A(e) {
    let {
        className: t,
        guildId: n,
        powerup: l,
        onClick: a
    } = e, o = (0, u.A)(n, l), c = (0, d.A)(n, l), m = h.HO.has(l.skuId);
    return (0, r.jsx)("div", {
        className: i()(f.FS, t),
        children: (0, r.jsx)(s.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: m ? g.intl.string(p.default.g5Ds69) : g.intl.string(g.t["0Q61kF"]),
            onClick: e => {
                null == a || a(e), m ? null == o || o(e) : null == c || c()
            }
        })
    })
}

function y(e) {
    let {
        className: t,
        guildId: n,
        powerup: l
    } = e, a = (0, d.A)(n, l);
    return (0, r.jsx)("div", {
        className: i()(f.kL, t),
        children: (0, r.jsx)("div", {
            className: f.FS,
            children: (0, r.jsx)(s.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: l.type === h.o9.LEVEL ? g.intl.string(g.t["0Q61kF"]) : g.intl.string(g.t.Xa11Ep),
                onClick: a
            })
        })
    })
}

function O(e) {
    let {
        className: t,
        guildId: n,
        powerup: l,
        onError: s
    } = e, {
        showToggleButton: o,
        isPowerupActive: u
    } = (0, a.A)(n, l), d = !u;
    return (0, r.jsxs)("div", {
        className: i()(f.kL, t),
        children: [o && (0, r.jsx)(c.A, {
            guildId: n,
            powerup: l,
            onError: s,
            grow: d,
            compact: !d
        }), u && (0, r.jsx)(A, {
            guildId: n,
            powerup: l
        })]
    })
}

function _(e) {
    let {} = e, t = m({}, e);
    return (0, o.A)(t.guildId) ? (0, r.jsx)(O, b({}, t)) : (0, r.jsx)(y, b({}, t))
}