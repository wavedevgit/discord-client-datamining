/** chunk id: 652793, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => g
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    s = n(837381),
    a = n(672117),
    o = n(397927),
    c = n(69813),
    u = n(728444),
    d = n(811094);

function p(e) {
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

function h(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function g(e) {
    var t;
    let {
        id: n,
        className: l,
        innerClassName: g,
        renderIcon: f,
        text: m,
        selected: b,
        trailing: A,
        background: y,
        showUnread: O = !1,
        ref: j
    } = e, x = function(e, t) {
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
    }(e, ["id", "className", "innerClassName", "renderIcon", "text", "selected", "trailing", "background", "showUnread", "ref"]), _ = (0, s.rm)(n), v = null != (t = (0, a.O)(m)) ? t : "";
    return (0, r.jsx)("li", {
        ref: j,
        children: (0, r.jsxs)(o.sqX, h(p({}, x), {
            buttonProps: h(p({}, _), {
                id: n,
                role: "button"
            }),
            tag: "div",
            "aria-label": v,
            focusProps: {
                offset: {
                    top: 1,
                    bottom: 1,
                    right: 4
                }
            },
            onContextMenu: null != x.onContextMenu ? x.onContextMenu : e => {
                e.stopPropagation()
            },
            className: i()(u.fx, d.iE, {
                [d.J1]: b
            }, l),
            children: [y, O ? (0, r.jsx)("div", {
                className: i()(d.gy, d.WS)
            }) : null, (0, r.jsx)("div", {
                className: i()([d.nf, d.ae, g]),
                children: (0, r.jsxs)("div", {
                    className: c.Q,
                    children: [(0, r.jsx)("div", {
                        className: d.zc,
                        children: f(d.Kk)
                    }), (0, r.jsx)("div", {
                        className: d.UU,
                        "aria-hidden": !0,
                        children: m
                    }), A]
                })
            })]
        }))
    })
}