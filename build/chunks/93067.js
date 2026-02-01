/** chunk id: 93067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(451988),
    o = n(397927),
    c = n(709710),
    u = n(540999),
    d = n(975571),
    h = n(447404),
    p = n(652215),
    f = n(985018),
    m = n(156255);

function g(e) {
    let {
        errorMessage: t,
        className: n,
        avError: i
    } = e, g = r.useRef(null), A = "", {
        text: b,
        node: _
    } = function(e) {
        var t;
        if (null == e) return {
            text: null,
            node: null
        };
        let n = null == (t = (0, c.B1)(e)) ? void 0 : t.errorCode,
            r = f.intl.formatToPlainString(f.t.ejOT95, {
                errorCode: n
            }),
            i = f.intl.format(f.t.If5Q0h, {
                errorCode: n,
                helpDeskURL: d.A.getArticleURL(p.MVz.AV_ERROR_CODES)
            }),
            a = u.A.isDeveloper;
        return {
            text: a ? "".concat(r, " (").concat(e, ")") : r,
            node: a ? (0, l.jsxs)(l.Fragment, {
                children: [i, " (", e, ")"]
            }) : i
        }
    }(i);
    A = null != b ? "".concat(t, " ").concat(b) : t;
    let [y] = r.useState(new s.Ep), [v, E] = r.useState(!1), [O, C] = r.useState(!1), x = r.useCallback(() => {
        y.start(250, () => {
            E(!1)
        }, !1)
    }, [y, E]), S = r.useCallback(() => {
        y.stop(), E(!0)
    }, [y, E]), j = r.useCallback(() => {
        C(!0)
    }, []), I = r.useCallback(() => {
        C(!1)
    }, []);
    return (0, l.jsx)(o.YNO, {
        renderPopout: () => (0, l.jsx)(h.A, {
            children: (0, l.jsxs)("div", {
                className: m.SW,
                onMouseEnter: S,
                onMouseLeave: x,
                children: [t, null != _ && (0, l.jsx)(o.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    className: m.F1,
                    children: _
                })]
            })
        }),
        targetElementRef: g,
        shouldShow: O || v,
        position: "bottom",
        children: e => {
            var t, r;
            return (0, l.jsx)(h.A, {
                children: (0, l.jsx)(o.vN3, {
                    children: (0, l.jsx)("div", (t = function(e) {
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
                    }({
                        ref: g,
                        tabIndex: 0,
                        onMouseEnter: S,
                        onMouseLeave: x,
                        onFocus: j,
                        onBlur: I,
                        className: a()(n, m.zr),
                        "aria-label": A
                    }, e), r = r = {
                        children: (0, l.jsx)(o.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: m.QW
                        })
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, l)
                        }
                        return n
                    })(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }), t))
                })
            })
        }
    })
}