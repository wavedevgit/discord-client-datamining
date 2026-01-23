/** Chunk was on 18687 **/
/** chunk id: 144482, original params: e,t,r (module,exports,require) **/
r.d(t, {
    default: () => _
});
var n = r(627968),
    a = r(64700),
    i = r(319060),
    o = r(421380),
    c = r(397927),
    s = r(398866),
    l = r(709066),
    d = r(681827),
    u = r(203736),
    p = r(240248),
    O = r(969508),
    h = r(705751),
    b = r(985018),
    f = r(505712);
let m = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
    A = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
    j = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
    v = (0, p.xI)(i.A.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

function _(e) {
    var t, r, i;
    let {
        title: p,
        onClose: _
    } = e, {
        applicationIconURL: g,
        applicationName: w,
        queryParams: y,
        iframeUrl: I
    } = (0, O.aV)(e), {
        width: x,
        height: N
    } = (0, u.A)(), M = a.useMemo(() => {
        let e = Math.min((N - v - 2 * j) * 16 / 9, A);
        return Math.max(m, Math.min(x - 2 * j, e))
    }, [x, N]);
    return (0, n.jsx)(c.EOs, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            })
        }
        return e
    }({}, e), i = i = {
        size: c.rIJ.DYNAMIC,
        className: f.zr,
        parentComponent: "InteractionIframeModal",
        "data-migration-pending": !0,
        children: (0, n.jsxs)("div", {
            style: {
                width: M
            },
            children: [(0, n.jsxs)(c.rQ0, {
                separator: !1,
                className: f.Hc,
                "data-migration-pending": !0,
                children: [(0, n.jsx)(c.euF, {
                    src: g,
                    size: c._3J.SIZE_32,
                    "aria-label": w,
                    className: f.In
                }), (0, n.jsxs)("div", {
                    className: f.Wh,
                    children: [(0, n.jsxs)("div", {
                        children: [(0, n.jsx)(c.Heading, {
                            variant: "heading-sm/bold",
                            children: w
                        }), (0, n.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "interactive-text-default",
                            children: p
                        })]
                    }), (0, n.jsx)(l.A, {
                        type: h.nu.BOT,
                        className: f.AO,
                        verified: null == (t = e.application.bot) ? void 0 : t.verified
                    })]
                }), (0, n.jsx)(o.$n, {
                    onClick: _,
                    innerClassName: f.b,
                    className: f.cG,
                    look: o.$n.Looks.BLANK,
                    size: o.$n.Sizes.NONE,
                    "aria-label": b.intl.string(b.t.WAI6xu),
                    "data-migration-pending": !0,
                    children: (0, n.jsx)(c.PGe, {
                        size: "md",
                        color: "currentColor",
                        className: f.ut
                    })
                })]
            }), (0, n.jsx)(d.A, {
                aspectRatio: 16 / 9,
                children: (0, n.jsx)(s.o, {
                    url: I,
                    shouldRefocus: !0,
                    className: f.pU,
                    queryParams: y
                })
            })]
        })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
        }
        return r
    })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
    }), r))
}