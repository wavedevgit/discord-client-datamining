/** chunk id: 887324 params = (module,exports,require) **/
"use strict";
n.d(t, {
    IK: () => v,
    Kz: () => j
});
var i, s = n(627968),
    r = n(64700),
    l = n(189213),
    a = n(311907),
    o = n(397927),
    c = n(830215),
    d = n(803306),
    u = n(49463),
    _ = n(17372),
    h = n(369053),
    g = n(961350),
    p = n(975571),
    m = n(204173),
    A = n(19992),
    f = n(501334),
    E = n(759788),
    x = n(652215),
    I = n(985018),
    N = n(725925);
a.Ay.initialize();
var v = ((i = {}).SELECTION = "selection", i.DSA = "dsa", i.TIDA = "tida", i);
let T = e => {
        let {
            transitionState: t,
            onClose: n
        } = e, [i, v] = r.useState(!0), [j, C] = r.useState([]), [S, y] = r.useState(null), b = (0, a.bG)([g.default], () => g.default.isAuthenticated()), R = (0, a.bG)([u.A], () => u.A.hasLoadedExperiments), O = r.useCallback(() => {
            (0, h.OY)().then(e => {
                let {
                    body: {
                        capabilities: t
                    }
                } = e;
                v(!1), C(t)
            }).catch(() => {
                v(!1), C([])
            })
        }, []);
        r.useEffect(() => {
            b ? (v(!0), d.rQ({
                withAnalyticsToken: !0
            }).then(() => O()).catch(() => v(!1))) : O()
        }, [b, O]), r.useEffect(() => {
            (async () => {
                R || (await c.A.getLocationMetadata(), c.A.getExperiments())
            })()
        }, [R]);
        let L = j.filter(e => e !== _.tY.MEDIA_TAKEDOWN),
            w = j.includes(_.tY.MEDIA_TAKEDOWN),
            k = L.length > 0,
            D = k && w,
            U = i || !R;
        r.useEffect(() => {
            U || k || w || n()
        }, [U, k, w, n]);
        let P = r.useCallback(() => {
                (0, o.mMO)(() => Promise.resolve(e => (0, s.jsx)(T, {
                    ...e
                })), {
                    dismissable: !1
                })
            }, []),
            B = r.useCallback((e, t) => {
                "selection" !== t && "selection" !== e ? y("selection") : y(e)
            }, []),
            G = r.useMemo(() => (0, m.i)(_.tY.MEDIA_TAKEDOWN, P), [P]),
            M = S ?? (D ? "selection" : k ? "dsa" : "tida");
        if (U || !k && !w) return (0, s.jsx)(l.Modal, {
            title: "",
            actions: [],
            transitionState: t,
            onClose: n,
            dismissable: !1,
            children: (0, s.jsx)(o.BJc, {
                gap: 16,
                align: "center",
                justify: "center",
                style: {
                    minHeight: "200px"
                },
                children: (0, s.jsx)(o.y$y, {})
            })
        });
        if (!D) {
            if (k) return (0, s.jsx)(l.Modal, {
                title: I.intl.string(I.t.Z11w18),
                subtitle: I.intl.format(I.t["532l+q"], {
                    supportURL: p.A.getArticleURL(x.MVz.COPYRIGHT_AND_IP_POLICY)
                }),
                actions: [],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, s.jsx)(A.c, {
                    dsaCapabilities: L,
                    onReopen: P
                })
            });
            if (w) return (0, s.jsx)(l.Modal, {
                title: I.intl.string(I.t.YignUm),
                actions: [{
                    text: I.intl.string(I.t.D5Czbu),
                    variant: "primary",
                    onClick: G
                }],
                transitionState: t,
                onClose: n,
                dismissable: !1,
                children: (0, s.jsx)(E.K, {})
            })
        }
        let F = [{
            stepKey: "selection",
            modalProps: {
                title: I.intl.string(I.t.Z11w18)
            },
            body: (0, s.jsx)(f.u, {})
        }, {
            stepKey: "dsa",
            modalProps: {
                title: I.intl.string(I.t.Z11w18),
                subtitle: I.intl.format(I.t["532l+q"], {
                    supportURL: p.A.getArticleURL(x.MVz.COPYRIGHT_AND_IP_POLICY)
                })
            },
            body: (0, s.jsx)(A.c, {
                dsaCapabilities: L,
                onReopen: P
            })
        }, {
            stepKey: "tida",
            modalProps: {
                title: I.intl.string(I.t.YignUm)
            },
            body: (0, s.jsx)(E.K, {}),
            nextButtonProps: {
                text: I.intl.string(I.t.D5Czbu)
            },
            onNext: () => (G(), !1)
        }];
        return (0, s.jsx)("div", {
            className: {
                selection: N.a,
                dsa: N.q,
                tida: void 0
            } [M],
            children: (0, s.jsx)(o.t04, {
                steps: F,
                currentStepKey: M,
                onStepChange: B,
                onClose: n,
                transitionState: t,
                dismissable: !1
            })
        })
    },
    j = () => (r.useEffect(() => {
        (0, o.mMO)(() => Promise.resolve(e => (0, s.jsx)(T, {
            ...e
        })), {
            dismissable: !1
        })
    }, []), null)