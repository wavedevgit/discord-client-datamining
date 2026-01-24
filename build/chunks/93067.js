/** Chunk was on 31748 **/
/** chunk id: 93067, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(451988),
    s = n(397927),
    c = n(487329),
    u = n(540999),
    d = n(975571),
    f = n(447404),
    p = n(652215),
    g = n(985018),
    m = n(156255);

function _(e) {
    let {
        errorMessage: t,
        className: n,
        avError: i
    } = e, _ = l.useRef(null), h = "", {
        text: y,
        node: A
    } = function(e) {
        var t;
        if (null == e) return {
            text: null,
            node: null
        };
        let n = null == (t = (0, c.B1)(e)) ? void 0 : t.errorCode,
            l = g.intl.formatToPlainString(g.t.ejOT95, {
                errorCode: n
            }),
            i = g.intl.format(g.t.If5Q0h, {
                errorCode: n,
                helpDeskURL: d.A.getArticleURL(p.MVz.AV_ERROR_CODES)
            }),
            a = u.A.isDeveloper;
        return {
            text: a ? "".concat(l, " (").concat(e, ")") : l,
            node: a ? (0, r.jsxs)(r.Fragment, {
                children: [i, " (", e, ")"]
            }) : i
        }
    }(i);
    h = null != y ? "".concat(t, " ").concat(y) : t;
    let [b] = l.useState(new o.Ep), [E, v] = l.useState(!1), [O, x] = l.useState(!1), S = l.useCallback(() => {
        b.start(250, () => {
            v(!1)
        }, !1)
    }, [b, v]), C = l.useCallback(() => {
        b.stop(), v(!0)
    }, [b, v]), N = l.useCallback(() => {
        x(!0)
    }, []), I = l.useCallback(() => {
        x(!1)
    }, []);
    return (0, r.jsx)(s.YNO, {
        renderPopout: () => (0, r.jsx)(f.A, {
            children: (0, r.jsxs)("div", {
                className: m.SW,
                onMouseEnter: C,
                onMouseLeave: S,
                children: [t, null != A && (0, r.jsx)(s.Text, {
                    variant: "text-sm/semibold",
                    color: "text-muted",
                    className: m.F1,
                    children: A
                })]
            })
        }),
        targetElementRef: _,
        shouldShow: O || E,
        position: "bottom",
        children: e => {
            var t, l;
            return (0, r.jsx)(f.A, {
                children: (0, r.jsx)(s.vN3, {
                    children: (0, r.jsx)("div", (t = function(e) {
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
                    }({
                        ref: _,
                        tabIndex: 0,
                        onMouseEnter: C,
                        onMouseLeave: S,
                        onFocus: N,
                        onBlur: I,
                        className: a()(n, m.zr),
                        "aria-label": h
                    }, e), l = l = {
                        children: (0, r.jsx)(s.EpV, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                            className: m.QW
                        })
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(l)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                    }), t))
                })
            })
        }
    })
}