/** Chunk was on 84018 **/
/** chunk id: 855790, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => E,
    q0: () => y
}), n(65821);
var i, r = n(627968),
    s = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(133977),
    c = n.n(a),
    d = n(990078),
    u = n(397927),
    p = n(652215),
    h = n(484932);

function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let g = p.UVF.DEFAULT,
    y = 1,
    m = s.createContext({
        type: g,
        opacity: y
    }),
    _ = s.createContext(void 0),
    b = e => {
        let {
            children: t,
            className: n
        } = e, i = function(e, t) {
            if (null == e) return {};
            var n, i, r, s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
                return s
            }
            if (s = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        s = Object.getOwnPropertyNames(e);
                    for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r
                }(e, t), Object.getOwnPropertySymbols)
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
            return s
        }(e, ["children", "className"]);
        return (0, r.jsx)(m.Consumer, {
            children: e => {
                let {
                    type: s
                } = e;
                return (0, r.jsx)(_.Consumer, {
                    children: e => {
                        var l, a;
                        return (0, r.jsx)("div", (l = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), i.forEach(function(t) {
                                    f(e, t, n[t])
                                })
                            }
                            return e
                        }({
                            className: o()(h.bar, h[c()(s)], n),
                            style: e
                        }, i), a = a = {
                            children: t
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, i)
                            }
                            return n
                        })(Object(a)).forEach(function(e) {
                            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                        }), l))
                    }
                })
            }
        })
    };
class A extends(i = s.PureComponent) {
    render() {
        let {
            disableScroll: e,
            children: t,
            className: n
        } = this.props;
        return (0, r.jsx)(_.Consumer, {
            children: i => (0, r.jsx)(m.Consumer, {
                children: s => {
                    let l = o()(h.body, h[c()(s.type)], n);
                    return e ? (0, r.jsx)("div", {
                        className: l,
                        style: i,
                        children: t
                    }) : (0, r.jsx)(u.HOs, {
                        fade: !0,
                        className: l,
                        children: t
                    })
                }
            })
        })
    }
}
f(A, "defaultProps", {
    disableScroll: !1
});
let O = e => {
        let {
            type: t = g,
            width: n,
            height: i,
            children: s,
            className: l,
            opacity: a = y,
            onClick: d
        } = e;
        return (0, r.jsx)(m.Provider, {
            value: {
                type: t,
                opacity: a
            },
            children: (0, r.jsx)("div", {
                className: o()(h.widget, h[c()(t)], l),
                style: {
                    width: n,
                    height: i
                },
                onClick: d,
                children: s
            })
        })
    },
    v = e => {
        let {
            children: t,
            className: n,
            dynamicSize: i = !1
        } = e;
        return (0, r.jsx)(_.Consumer, {
            children: e => (0, r.jsx)("div", {
                className: o()(h.content, {
                    [h.staticSize]: !i
                }, n),
                style: e,
                children: t
            })
        })
    };
O.Background = e => {
    let {
        children: t,
        opacityOverride: n
    } = e;
    if (null == t) return null;
    let i = [b, A, v];
    return (0, r.jsx)(m.Consumer, {
        children: e => {
            let {
                opacity: l
            } = e, o = {
                backgroundColor: "rgba(54, 57, 63, ".concat("" + (null != n ? n : l), ")")
            };
            if ("string" == typeof t.type) return s.cloneElement(t, {
                style: o
            });
            {
                if (i.includes(t.type)) return (0, r.jsx)(_.Provider, {
                    value: o,
                    children: t
                });
                let e = t.type.displayName;
                throw Error("Widget.Background cannot be wrapped around ".concat(e, ". Pass a DOM node or one of ").concat(i.map(e => "Widget." + e.name).join(",")))
            }
        }
    })
}, O.Body = A, O.Content = v, O.Icon = e => {
    let {
        ref: t,
        icon: n,
        label: i,
        onClick: s,
        tooltipPosition: l = "top",
        isTutorial: a = !1,
        isActive: c,
        size: p = 20
    } = e;
    return (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: a ? (0, r.jsx)("div", {
            className: h.tutorialTip,
            children: i
        }) : i,
        "aria-label": i,
        position: l,
        forceOpen: a,
        children: (0, r.jsx)(u.DUT, {
            onClick: s,
            className: o()(h.icon, {
                [h.toggledIconOn]: c
            }),
            innerRef: t,
            "aria-label": i,
            children: (0, r.jsx)(n, {
                color: "currentColor",
                size: "custom",
                width: p,
                height: p,
                role: "img"
            })
        })
    })
}, O.Bar = b;
let E = O