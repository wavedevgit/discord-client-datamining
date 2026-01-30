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
    f = n(795101),
    _ = n(309829),
    m = n(136643);

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
        } = e, [r, x] = s.useState(!0), [v, y] = s.useState([]), [b, j] = s.useState("selection"), O = (0, l.bG)([p.default], () => p.default.isAuthenticated()), I = (0, l.bG)([u.A], () => u.A.hasLoadedExperiments), S = s.useCallback(() => {
            (0, h.OY)().then(e => {
                let {
                    body: {
                        capabilities: t
                    }
                } = e;
                x(!1), y(t)
            }).catch(() => {
                x(!1), y([])
            })
        }, []);
        s.useEffect(() => {
            O ? (x(!0), c.rQ({
                withAnalyticsToken: !0
            }).then(() => S()).catch(() => x(!1))) : S()
        }, [O, S]), s.useEffect(() => {
            (async () => {
                I || (await o.A.getLocationMetadata(), o.A.getExperiments())
            })()
        }, [I]);
        let N = v.filter(e => e !== d.tY.MEDIA_TAKEDOWN),
            C = v.includes(d.tY.MEDIA_TAKEDOWN),
            T = N.length > 0,
            R = T && C;
        s.useEffect(() => {
            !r && I && !R && (T ? j("dsa") : C && j("tida"))
        }, [r, I, R, T, C]), s.useEffect(() => {
            r || !I || T || C || n()
        }, [r, I, T, C, n]);
        let w = s.useCallback(e => {
                j(e)
            }, []),
            P = s.useCallback(() => {
                j("selection")
            }, []),
            k = s.useCallback(() => {
                (0, a.mMO)(() => Promise.resolve(e => (0, i.jsx)(E, A({}, e))), {
                    dismissable: !1
                })
            }, []),
            L = s.useCallback(e => null != e ? (0, i.jsx)(a.jlY, {
                className: m.q,
                "data-migration-pending": !0,
                children: e
            }) : null, []);
        return (0, i.jsx)(a.EOs, {
            transitionState: t,
            parentComponent: "UnauthenticatedReportForm",
            "data-migration-pending": !0,
            children: (0, i.jsx)(a.$mQ, {
                className: m.k,
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
                    activeSlide: b,
                    centered: !1,
                    children: [(0, i.jsx)(a.q7S, {
                        id: "selection",
                        children: (0, i.jsx)(f.u, {
                            onNavigate: w
                        })
                    }), (0, i.jsx)(a.q7S, {
                        id: "dsa",
                        children: (0, i.jsx)(g.c, {
                            showBackButton: R,
                            onBack: R ? P : void 0,
                            dsaCapabilities: N,
                            renderFooter: L,
                            onClose: n,
                            onReopen: k
                        })
                    }), (0, i.jsx)(a.q7S, {
                        id: "tida",
                        children: (0, i.jsx)(_.K, {
                            showBackButton: R,
                            onBack: R ? P : void 0,
                            renderFooter: L,
                            onClose: n,
                            onReopen: k
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