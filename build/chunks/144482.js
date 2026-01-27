/** Chunk was on 18687 **/
/** chunk id: 144482, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => v
});
var l = n(627968),
    a = n(64700),
    i = n(319060),
    o = n(421380),
    r = n(397927),
    c = n(398866),
    u = n(709066),
    s = n(681827),
    d = n(203736),
    p = n(240248),
    I = n(969508),
    m = n(705751),
    A = n(985018),
    O = n(505712);
let _ = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    y = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    E = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    h = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function v(e) {
    var t, n, i;
    let {
        title: p,
        onClose: v
    } = e, {
        applicationIconURL: f,
        applicationName: b,
        queryParams: g,
        iframeUrl: C
    } = (0, I.aV)(e), {
        width: T,
        height: N
    } = (0, d.A)(), M = a.useMemo(() => {
        let e = Math.min((N - h - 2 * E) * 16 / 9, y);
        return Math.max(_, Math.min(T - 2 * E, e))
    }, [T, N]);
    return (0, l.jsx)(r.EOs, (n = function(e) {
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
    }({}, e), i = i = {
        size: r.rIJ.DYNAMIC,
        className: O.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, l.jsxs)("div", {
            style: {
                width: M
            },
            children: [(0, l.jsxs)(r.rQ0, {
                separator: !1,
                className: O.Hc,
                "data-migration-pending": !0,
                children: [(0, l.jsx)(r.euF, {
                    src: f,
                    size: r._3J.SIZE_32,
                    "aria-label": b,
                    className: O.In
                }), (0, l.jsxs)("div", {
                    className: O.Wh,
                    children: [(0, l.jsxs)("div", {
                        children: [(0, l.jsx)(r.Heading, {
                            variant: "heading-sm/bold",
                            children: b
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-text-default",
                            children: p
                        })]
                    }), (0, l.jsx)(u.A, {
                        type: m.nu.BOT,
                        className: O.AO,
                        verified: null == (t = e.application.bot) ? void 0 : t.verified
                    })]
                }), (0, l.jsx)(o.$n, {
                    onClick: v,
                    innerClassName: O.b,
                    className: O.cG,
                    look: o.$n.Looks.BLANK,
                    size: o.$n.Sizes.NONE,
                    "aria-label": A.intl.string(A.t.WAI6xu),
                    "data-migration-pending": !0,
                    children: (0, l.jsx)(r.PGe, {
                        size: "md",
                        color: "currentColor",
                        className: O.ut
                    })
                })]
            }), (0, l.jsx)(s.A, {
                aspectRatio: 16 / 9,
                children: (0, l.jsx)(c.o, {
                    url: C,
                    shouldRefocus: !0,
                    className: O.pU,
                    queryParams: g
                })
            })]
        })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            n.push.apply(n, l)
        }
        return n
    })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
}