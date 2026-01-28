/** Chunk was on 78528 **/
/** chunk id: 926262, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    p = n(985018),
    h = n(887008),
    f = n(206314);

function g(e) {
    let {
        onClose: t,
        onConfirm: g,
        onCancel: m,
        channel: b,
        analyticsType: A,
        popoutText: y,
        animation: _
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
    let O = l.useCallback(() => {
            null == g || g(), t()
        }, [g, t]),
        j = l.useCallback(() => {
            null == m || m(), t()
        }, [m, t]),
        v = l.useRef(null);
    return l.useEffect(() => {
        let e, t = c.A.theme,
            r = !1;
        return null != _ && (async () => {
            let [{
                default: l
            }, i] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, s.Mw)(t) ? _.dark() : _.light()]);
            r || null == v.current || (e = l.loadAnimation({
                container: v.current,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: i
            }))
        })(), () => {
            r = !0, null != e && (e.destroy(), e = void 0)
        }
    }, [_]), (0, r.jsx)(a.lGe, {
        "aria-labelledby": "content-warning-popout-label",
        children: (0, r.jsxs)("form", {
            className: h.$,
            onSubmit: O,
            children: [(0, r.jsxs)("div", {
                className: h.rf,
                children: [null != _ && (0, r.jsx)("div", {
                    className: h.lY,
                    ref: v
                }), (0, r.jsxs)("div", {
                    className: h.Qs,
                    children: [(0, r.jsx)("div", {
                        className: h.wx,
                        children: p.intl.string(p.t.mY3Y38)
                    }), (0, r.jsx)(a.Text, {
                        id: "content-warning-popout-label",
                        className: f.PT,
                        variant: "text-sm/normal",
                        children: y.body
                    }), (0, r.jsxs)("div", {
                        className: h._o,
                        children: [(0, r.jsxs)("div", {
                            className: h.UD,
                            children: [(0, r.jsx)("div", {
                                className: h.x6,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "secondary",
                                    onClick: j,
                                    text: p.intl.string(p.t.fsBWmS)
                                })
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: h.uK,
                                children: p.intl.format(p.t["0LzVPZ"], {})
                            })]
                        }), (0, r.jsxs)("div", {
                            className: h.UD,
                            children: [(0, r.jsx)("div", {
                                className: h.x6,
                                children: (0, r.jsx)(a.Button, {
                                    variant: "primary",
                                    onClick: O,
                                    text: p.intl.string(p.t.KJnHq3),
                                    autoFocus: !0
                                })
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: h.uK,
                                children: p.intl.format(p.t.khjqdH, {})
                            })]
                        })]
                    })]
                })]
            }), null != y.footer && "" !== y.footer ? (0, r.jsxs)("div", {
                className: h.qr,
                children: [(0, r.jsx)(a.mir, {
                    size: "xs",
                    color: i.A.unsafe_rawColors.PRIMARY_400.css,
                    className: h.Kk
                }), (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    children: y.footer
                })]
            }) : null]
        })
    })
}