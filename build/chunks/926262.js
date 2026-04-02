/** chunk id: 926262 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(827734),
    a = n(582754),
    r = n(397927),
    o = n(58149),
    c = n(544028),
    d = n(954571),
    u = n(652215),
    h = n(985018),
    m = n(976369),
    A = n(782691);

function g(e) {
    let {
        onClose: t,
        onConfirm: g,
        onCancel: p,
        channel: f,
        analyticsType: _,
        popoutText: E,
        animation: C
    } = e;
    l.useEffect(() => {
        d.default.track(u.HAw.OPEN_POPOUT, {
            type: _,
            ...(0, o.dI)(f)
        })
    }, [_, f]);
    let x = l.useCallback(() => {
            g?.(), t()
        }, [g, t]),
        S = l.useCallback(() => {
            p?.(), t()
        }, [p, t]),
        I = l.useRef(null);
    return l.useEffect(() => {
        let e, t = c.A.theme,
            i = !1;
        return null != C && (async () => {
            let [{
                default: l
            }, s] = await Promise.all([Promise.resolve().then(n.t.bind(n, 883885, 23)), (0, a.Mw)(t) ? C.dark() : C.light()]);
            i || null == I.current || (e = l.loadAnimation({
                container: I.current,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                animationData: s
            }))
        })(), () => {
            i = !0, null != e && (e.destroy(), e = void 0)
        }
    }, [C]), (0, i.jsx)(r.lGe, {
        "aria-labelledby": "content-warning-popout-label",
        children: (0, i.jsxs)("form", {
            className: m.$,
            onSubmit: x,
            children: [(0, i.jsxs)("div", {
                className: m.rf,
                children: [null != C && (0, i.jsx)("div", {
                    className: m.lY,
                    ref: I
                }), (0, i.jsxs)("div", {
                    className: m.Qs,
                    children: [(0, i.jsx)("div", {
                        className: m.wx,
                        children: h.intl.string(h.t.mY3Y38)
                    }), (0, i.jsx)(r.Text, {
                        id: "content-warning-popout-label",
                        className: A.PT,
                        variant: "text-sm/normal",
                        children: E.body
                    }), (0, i.jsxs)("div", {
                        className: m._o,
                        children: [(0, i.jsxs)("div", {
                            className: m.UD,
                            children: [(0, i.jsx)("div", {
                                className: m.x6,
                                children: (0, i.jsx)(r.Button, {
                                    variant: "secondary",
                                    onClick: S,
                                    text: h.intl.string(h.t.fsBWmS)
                                })
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                className: m.uK,
                                children: h.intl.format(h.t["0LzVPZ"], {})
                            })]
                        }), (0, i.jsxs)("div", {
                            className: m.UD,
                            children: [(0, i.jsx)("div", {
                                className: m.x6,
                                children: (0, i.jsx)(r.Button, {
                                    variant: "primary",
                                    onClick: x,
                                    text: h.intl.string(h.t.KJnHq3),
                                    autoFocus: !0
                                })
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-xs/normal",
                                className: m.uK,
                                children: h.intl.format(h.t.khjqdH, {})
                            })]
                        })]
                    })]
                })]
            }), null != E.footer && "" !== E.footer ? (0, i.jsxs)("div", {
                className: m.qr,
                children: [(0, i.jsx)(r.mir, {
                    size: "xs",
                    color: s.A.unsafe_rawColors.PRIMARY_400.css,
                    className: m.Kk
                }), (0, i.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    children: E.footer
                })]
            }) : null]
        })
    })
}