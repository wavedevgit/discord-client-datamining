/** Chunk was on 38663 **/
/** chunk id: 795755, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(540185),
    i = n(311907),
    a = n(961350),
    o = n(735321),
    s = n(483558),
    c = n(34442),
    u = n(253798),
    d = n(25530),
    f = n(155400),
    p = n(844206),
    g = n(557964),
    m = n(987140),
    b = n(281743);

function y(e) {
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

function O(e, t) {
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
}

function j(e) {
    let {
        widget: t
    } = e, n = O(e, ["widget"]);
    switch (t.type) {
        case l.x.FAVORITE_GAMES:
            return (0, r.jsx)(f.A, y({
                widget: t
            }, n));
        case l.x.CURRENT_GAMES:
            return (0, r.jsx)(d.A, y({
                widget: t
            }, n));
        case l.x.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(g.A, y({
                widget: t
            }, n));
        case l.x.PLAYED_GAMES:
            return (0, r.jsx)(p.A, y({
                widget: t
            }, n));
        default:
            return null
    }
}

function x(e) {
    let {
        widget: t,
        user: n,
        disableInteraction: l
    } = e, d = O(e, ["widget", "user", "disableInteraction"]), {
        setExpanded: f
    } = (0, u.B)(), {
        shouldShowSuggestions: p,
        handleDismissSuggestions: g
    } = (0, s.q)(t), x = (0, i.bG)([a.default], () => a.default.getId() === n.id), h = x && !l && p, v = (0, o.L)(t), _ = (0, o.FM)(t, {
        isCurrentUser: x
    }), A = (0, o.uA)(t), I = 1 === (0, o.cv)(t.type);
    return (0, r.jsx)(j, y({
        widget: t,
        user: n,
        disableInteraction: l,
        headerTitle: v,
        headerSubtitle: _,
        headerActionButtons: x && !I ? [(0, r.jsx)(c.IU, {
            disabled: A,
            widgetType: t.type,
            widget: t,
            onAddGame: () => f(!0)
        }, "".concat(t.type, "-browse-games-popout"))] : void 0,
        trailingContent: h && (0, r.jsx)(m.A, {
            userId: n.id,
            widgetType: t.type,
            onDismiss: g,
            className: b.r
        })
    }, d))
}

function h(e) {
    let {
        widget: t
    } = e, n = O(e, ["widget"]);
    return (0, r.jsx)(u.M, {
        widgetType: t.type,
        children: (0, r.jsx)(x, y({
            widget: t
        }, n))
    })
}