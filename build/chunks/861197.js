/** chunk id: 861197, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => j
});
var i, r, l = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    c = n(397927),
    d = n(235986),
    u = n(657737);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function b(e, t) {
    if (null == e) return {};
    var n, i, r, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }
    if (l = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
                l = Object.getOwnPropertyNames(e);
            for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }(e, t), Object.getOwnPropertySymbols)
        for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
    return l
}
class f extends(i = a.PureComponent) {
    render() {
        let e = this.props,
            {
                scrollable: t
            } = e,
            n = b(e, ["scrollable"]);
        return t ? (0, l.jsx)("aside", {
            className: u.EW,
            children: (0, l.jsx)(c.HOs, {
                fade: !0,
                className: u.XG,
                children: (0, l.jsx)(d.A.Child, g(m({}, n), {
                    wrap: !0
                }))
            })
        }) : (0, l.jsx)(d.A.Child, g(m({}, n), {
            wrap: !0
        }))
    }
}
p(f, "defaultProps", {
    basis: 232,
    grow: 0,
    shrink: 0
});
class h extends a.PureComponent {
    render() {
        let e = this.props,
            {
                className: t
            } = e,
            n = b(e, ["className"]);
        return (0, l.jsx)(d.A.Child, m({
            className: o()(u.Qs, t),
            wrap: !0
        }, n))
    }
}
class x extends(r = a.PureComponent) {
    render() {
        return (0, l.jsx)(d.A, m({}, this.props))
    }
}
p(x, "defaultProps", {
    direction: d.A.Direction.HORIZONTAL,
    justify: d.A.Justify.START,
    align: d.A.Align.START,
    wrap: d.A.Wrap.NO_WRAP,
    shrink: 1,
    grow: 1,
    basis: "auto"
}), p(x, "Direction", d.A.Direction), p(x, "Justify", d.A.Justify), p(x, "Align", d.A.Align), p(x, "Wrap", d.A.Wrap), p(x, "Sidebar", f), p(x, "Content", h);
let j = x