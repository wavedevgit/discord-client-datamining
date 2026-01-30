/** chunk id: 926262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(827734),
    s = n(582754),
    a = n(397927),
    o = n(58149),
    c = n(544028),
    u = n(954571),
    d = n(652215),
    h = n(985018),
    p = n(887008),
    g = n(206314);

function f(e) {
    let {
        onClose: t,
        onConfirm: f,
        onCancel: m,
        channel: b,
        analyticsType: A,
        popoutText: y,
        animation: O
    } = e;
    l.useEffect(() => {
        u.default.track(d.HAw.OPEN_POPOUT, function(e) {
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
            type: A
        }, (0, o.dI)(b)))
    }, [A, b]);
    let _ = l.useCallback(() => {
            null == f || f(), t()
        }, [f, t]),
        j = l.useCallback(() => {
            null == m || m(), t()
        }, [m, t]),
        x = l.useRef(null);
    return l.useEffect(() => {
        let e, t = c.A.theme,
            r = !1;
        return null != O && (async () => {
            let [{
                default: l
            }, i] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, s.Mw)(t) ? O.dark() : O.light()]);
            r || null == x.current || (e = l.loadAnimation({
                container: x.current,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: i
            }))
        })(), () => {
            r = !0, null != e && (e.destroy(), e = void 0)
        }
    }, [O]), (0, r.jsx)(a.lGe, {
        "aria-labelledby": "content-warning-popout-label",
        children: (0, r.jsxs)("form", {
            className: p.$,
            onSubmit: _,
            children: [(0, r.jsxs)("div", {
                className: p.rf,
                children: [null != O && (0, r.jsx)("div", {
                    className: p.lY,
                    ref: x
                }), (0, r.jsxs)("div", {
                    className: p.Qs,
                    children: [(0, r.jsx)("div", {
                        className: p.wx,
                        children: h.intl.string(h.t.mY3Y38)
                    }), (0, r.jsx)(a.Text, {
                        id: "content-warning-popout-label",
                        className: g.PT,
                        variant: "text-sm/normal",
                        children: y.body
                    }), (0, r.jsxs)("div", {
                        className: p._o,
                        children: [(0, r.jsxs)("div", {
                            className: p.UD,
                            children: [(0, r.jsx)("div", {
                                className: p.x6,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "secondary",
                                    onClick: j,
                                    text: h.intl.string(h.t.fsBWmS)
                                })
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: p.uK,
                                children: h.intl.format(h.t["0LzVPZ"], {})
                            })]
                        }), (0, r.jsxs)("div", {
                            className: p.UD,
                            children: [(0, r.jsx)("div", {
                                className: p.x6,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "primary",
                                    onClick: _,
                                    text: h.intl.string(h.t.KJnHq3),
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: p.uK,
                                children: h.intl.format(h.t.khjqdH, {})
                            })]
                        })]
                    })]
                })]
            }), null != y.footer && "" !== y.footer ? (0, r.jsxs)("div", {
                className: p.qr,
                children: [(0, r.jsx)(a.mir, {
                    size: "xs",
                    color: i.A.unsafe_rawColors.PRIMARY_400.css,
                    className: p.Kk
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: y.footer
                })]
            }) : null]
        })
    })
}