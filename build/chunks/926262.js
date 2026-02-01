/** chunk id: 926262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(827734),
    a = n(582754),
    s = n(397927),
    o = n(58149),
    c = n(544028),
    u = n(954571),
    d = n(652215),
    h = n(985018),
    p = n(887008),
    f = n(206314);

function m(e) {
    let {
        onClose: t,
        onConfirm: m,
        onCancel: g,
        channel: A,
        analyticsType: b,
        popoutText: _,
        animation: y
    } = e;
    r.useEffect(() => {
        u.default.track(d.HAw.OPEN_POPOUT, function(e) {
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
            type: b
        }, (0, o.dI)(A)))
    }, [b, A]);
    let v = r.useCallback(() => {
            null == m || m(), t()
        }, [m, t]),
        E = r.useCallback(() => {
            null == g || g(), t()
        }, [g, t]),
        O = r.useRef(null);
    return r.useEffect(() => {
        let e, t = c.A.theme,
            l = !1;
        return null != y && (async () => {
            let [{
                default: r
            }, i] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, a.Mw)(t) ? y.dark() : y.light()]);
            l || null == O.current || (e = r.loadAnimation({
                container: O.current,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: i
            }))
        })(), () => {
            l = !0, null != e && (e.destroy(), e = void 0)
        }
    }, [y]), (0, l.jsx)(s.lGe, {
        "aria-labelledby": "content-warning-popout-label",
        children: (0, l.jsxs)("form", {
            className: p.$,
            onSubmit: v,
            children: [(0, l.jsxs)("div", {
                className: p.rf,
                children: [null != y && (0, l.jsx)("div", {
                    className: p.lY,
                    ref: O
                }), (0, l.jsxs)("div", {
                    className: p.Qs,
                    children: [(0, l.jsx)("div", {
                        className: p.wx,
                        children: h.intl.string(h.t.mY3Y38)
                    }), (0, l.jsx)(s.Text, {
                        id: "content-warning-popout-label",
                        className: f.PT,
                        variant: "text-sm/normal",
                        children: _.body
                    }), (0, l.jsxs)("div", {
                        className: p._o,
                        children: [(0, l.jsxs)("div", {
                            className: p.UD,
                            children: [(0, l.jsx)("div", {
                                className: p.x6,
                                children: (0, l.jsx)(s.Button, {
                                    variant: "secondary",
                                    onClick: E,
                                    text: h.intl.string(h.t.fsBWmS)
                                })
                            }), (0, l.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                className: p.uK,
                                children: h.intl.format(h.t["0LzVPZ"], {})
                            })]
                        }), (0, l.jsxs)("div", {
                            className: p.UD,
                            children: [(0, l.jsx)("div", {
                                className: p.x6,
                                children: (0, l.jsx)(s.Button, {
                                    variant: "primary",
                                    onClick: v,
                                    text: h.intl.string(h.t.KJnHq3),
                                    autoFocus: !0
                                })
                            }), (0, l.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                className: p.uK,
                                children: h.intl.format(h.t.khjqdH, {})
                            })]
                        })]
                    })]
                })]
            }), null != _.footer && "" !== _.footer ? (0, l.jsxs)("div", {
                className: p.qr,
                children: [(0, l.jsx)(s.mir, {
                    size: "xs",
                    color: i.A.unsafe_rawColors.PRIMARY_400.css,
                    className: p.Kk
                }), (0, l.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    children: _.footer
                })]
            }) : null]
        })
    })
}