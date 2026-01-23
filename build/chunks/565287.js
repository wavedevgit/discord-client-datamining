/** Chunk was on 86142 **/
/** chunk id: 565287, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Kz: () => v,
    rP: () => x
}), n(896048);
var r, i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    o = n(830215),
    c = n(803306),
    u = n(49463),
    d = n(17372),
    h = n(369053),
    p = n(961350),
    g = n(974783),
    m = n(795101),
    f = n(309829),
    _ = n(136643);

function A(e) {
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
l.Ay.initialize();
var x = ((r = {}).SELECTION = "selection", r.DSA = "dsa", r.TIDA = "tida", r);
let E = e => {
        let {
            transitionState: t,
            onClose: n
        } = e, [r, x] = s.useState(!0), [v, j] = s.useState([]), [y, b] = s.useState("selection"), S = (0, l.bG)([p.default], () => p.default.isAuthenticated()), I = (0, l.bG)([u.A], () => u.A.hasLoadedExperiments), N = s.useCallback(() => {
            (0, h.OY)().then(e => {
                let {
                    body: {
                        capabilities: t
                    }
                } = e;
                x(!1), j(t)
            }).catch(() => {
                x(!1), j([])
            })
        }, []);
        s.useEffect(() => {
            S ? (x(!0), c.rQ({
                withAnalyticsToken: !0
            }).then(() => N()).catch(() => x(!1))) : N()
        }, [S, N]), s.useEffect(() => {
            (async () => {
                I || (await o.A.getLocationMetadata(), o.A.getExperiments())
            })()
        }, [I]);
        let O = v.filter(e => e !== d.tY.MEDIA_TAKEDOWN),
            C = v.includes(d.tY.MEDIA_TAKEDOWN),
            T = O.length > 0,
            R = T && C;
        s.useEffect(() => {
            !r && I && !R && (T ? b("dsa") : C && b("tida"))
        }, [r, I, R, T, C]), s.useEffect(() => {
            r || !I || T || C || n()
        }, [r, I, T, C, n]);
        let w = s.useCallback(e => {
                b(e)
            }, []),
            P = s.useCallback(() => {
                b("selection")
            }, []),
            L = s.useCallback(() => {
                (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, A({}, e))), {
                    dismissable: !1
                })
            }, []),
            k = s.useCallback(e => null != e ? (0, i.jsx)(a.jlY, {
                className: _.q,
                "data-migration-pending": !0,
                children: e
            }) : null, []);
        return (0, i.jsx)(a.EOs, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, i.jsx)(a.$mQ, {
                className: _.k,
                "data-migration-pending": !0,
                children: r || !I ? (0, i.jsx)(a.BJc, {
                    gap: 16,
                    align: "center",
                    justify: "center",
                    style: {
                        minHeight: "200px"
                    },
                    children: (0, i.jsx)(a.y$y, {})
                }) : (0, i.jsxs)(a.tN_, {
                    width: "100%",
                    activeSlide: y,
                    centered: !1,
                    children: [(0, i.jsx)(a.q7S, {
                        id: "selection",
                        children: (0, i.jsx)(m.u, {
                            onNavigate: w
                        })
                    }), (0, i.jsx)(a.q7S, {
                        id: "dsa",
                        children: (0, i.jsx)(g.c, {
                            showBackButton: R,
                            onBack: R ? P : void 0,
                            dsaCapabilities: O,
                            renderFooter: k,
                            onClose: n,
                            onReopen: L
                        })
                    }), (0, i.jsx)(a.q7S, {
                        id: "tida",
                        children: (0, i.jsx)(f.K, {
                            showBackButton: R,
                            onBack: R ? P : void 0,
                            renderFooter: k,
                            onClose: n,
                            onReopen: L
                        })
                    })]
                })
            })
        })
    },
    v = () => (s.useEffect(() => {
        (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, A({}, e))), {
            dismissable: !1
        })
    }, []), null)