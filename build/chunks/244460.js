/** Chunk was on 28636 **/
/** chunk id: 244460, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => I
}), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(123791),
    s = n(979590),
    o = n(45758),
    c = n(783531),
    d = n(354138),
    u = n(212534),
    p = n(82293),
    h = n(412461),
    m = n(867333),
    g = n(111737),
    _ = n(310419),
    b = n(656106),
    f = n(241837),
    x = n(116219),
    v = n(475356),
    j = n(489253),
    A = n(247165),
    y = n(435220),
    C = n(652215),
    O = n(985018),
    S = n(312222);
let I = function(e) {
    let {
        applicationId: t,
        onSelectApplication: n,
        onScroll: I,
        initialTab: E,
        onButtonsVisibilityChange: P
    } = e, N = l.useRef(null), T = (0, i.bG)([u.A], () => u.A.getApplication(t)), R = (0, i.bG)([u.A], () => u.A.getApplicationFetchState(t));
    l.useEffect(() => {
        if (null != t && null == T) {
            let e = "true" === new URLSearchParams(location.search).get("preview") || void 0;
            d.Di(t, {
                noCache: e
            })
        }
    }, [t, T]), l.useEffect(() => {
        d.xZ({
            applicationId: t
        })
    }, [t]), l.useEffect(() => () => P(!0), [P]);
    let L = null == T ? void 0 : T.storefront_available,
        [D, w] = l.useState(null != E ? E : y.GlobalDiscoveryAppsSections.ABOUT),
        k = l.useCallback(e => {
            var t;
            null == (t = N.current) || t.scrollTo({
                to: 0
            }), w(y.GlobalDiscoveryAppsSections.ABOUT), n(e)
        }, [n]);
    l.useEffect(() => {
        (null == T ? void 0 : T.storefront_available) && null != t && (0, a.F)(t)
    }, [null == T ? void 0 : T.storefront_available, t]);
    let M = (0, _.Bn)(),
        G = (0, i.bG)([p.A], () => p.A.getFetchState({
            applicationId: null == T ? void 0 : T.id
        })),
        U = (0, i.bG)([p.A], () => p.A.getSimilarApplications({
            applicationId: null == T ? void 0 : T.id
        })),
        H = l.useMemo(() => null == U ? void 0 : U.applications.slice(0, 3), [U]),
        V = {
            displayedSimilarApplications: H,
            previousView: M
        },
        B = l.useRef(V);
    l.useEffect(() => {
        B.current = V
    }), l.useEffect(() => {
        let {
            displayedSimilarApplications: e,
            previousView: t
        } = B.current;
        (null == T ? void 0 : T.id) != null && G !== p.e.FETCHING && (0, h.TR)(C.HAw.APP_DIRECTORY_PAGE_VIEWED, {
            current_page: _.ev.APPLICATION,
            previous_page: null == t ? void 0 : t.type,
            application_id: T.id,
            referrer: document.referrer,
            suggested_application_ids: null == e ? void 0 : e.map(e => e.id)
        })
    }, [null == T ? void 0 : T.id, G]);
    let F = l.useMemo(() => [{
            id: y.GlobalDiscoveryAppsSections.ABOUT,
            label: O.intl.string(O.t.DkyHMK)
        }, {
            id: y.GlobalDiscoveryAppsSections.STORE,
            label: O.intl.string(O.t.jgEXGB)
        }], []),
        Y = l.useMemo(() => {
            if (null == T) return null;
            switch (D) {
                case y.GlobalDiscoveryAppsSections.ABOUT:
                    return (0, r.jsx)(f.A, {
                        application: T
                    });
                case y.GlobalDiscoveryAppsSections.STORE:
                    return (0, r.jsx)(A.A, {
                        application: T
                    })
            }
        }, [D, T]),
        z = l.useCallback(e => {
            (0, h.TR)(C.HAw.APP_DIRECTORY_PROFILE_TAB_CLICKED, {
                application_id: t,
                tab_name: e
            }), w(e), e === y.GlobalDiscoveryAppsSections.ABOUT ? (0, b.Fr)(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE(t)) : (0, b.Fr)(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(t, e))
        }, [t]),
        X = D === y.GlobalDiscoveryAppsSections.ABOUT;
    return (0, r.jsx)(c.A, {
        onScroll: I,
        ref: N,
        children: (0, r.jsx)(s.A, {
            children: null == T ? null == R || R === u.e.FETCHING ? (0, r.jsx)("div", {
                className: S.Dg,
                children: (0, r.jsx)(m.A, {
                    loading: !0
                })
            }) : (0, r.jsx)("div", {
                className: S.Dg,
                children: (0, r.jsx)(g.A, {
                    className: S.z3
                })
            }) : (0, r.jsxs)("div", {
                className: S.nM,
                children: [(0, r.jsx)(x.A, {
                    application: T,
                    onButtonsVisibilityChange: P
                }), (0, r.jsxs)("div", {
                    className: S.hQ,
                    children: [(0, r.jsxs)("div", {
                        className: S.Ne,
                        children: [L && (0, r.jsx)("div", {
                            className: S.OF,
                            children: (0, r.jsx)(o.A, {
                                tabs: F,
                                onTabSelect: z,
                                selectedTab: D
                            })
                        }), Y, (0, r.jsx)(j.A, {
                            applicationId: t,
                            fetchState: G,
                            similarApplications: H,
                            onSelectApplication: k,
                            similarLoadId: null == U ? void 0 : U.loadId
                        })]
                    }), X && (0, r.jsx)(v.A, {
                        className: S.pz,
                        application: T,
                        view: "side"
                    })]
                })]
            })
        })
    })
}