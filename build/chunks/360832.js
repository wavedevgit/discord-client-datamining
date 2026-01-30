/** chunk id: 360832, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
}), n(896048), n(680155), n(323874), n(14289), n(35956), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(960488),
    a = n(935573),
    s = n(994369),
    o = n(311907),
    c = n(397927),
    d = n(475743),
    u = n(979590),
    p = n(783531),
    h = n(961350),
    m = n(354138),
    g = n(620140),
    _ = n(212534),
    b = n(38181),
    f = n(651753),
    x = n(767599),
    v = n(412461),
    j = n(867333),
    A = n(487953),
    y = n(310419),
    C = n(656106),
    O = n(847525),
    S = n(734786),
    I = n(435220),
    E = n(652215),
    P = n(563962);

function N(e) {
    var t;
    let {
        onSelectApplication: n,
        onScroll: N
    } = e, T = (0, o.bG)([h.default], () => h.default.isAuthenticated()), R = l.useRef(null), L = (0, i.zy)(), D = l.useRef(null), {
        query: w,
        page: k,
        categoryId: M
    } = l.useMemo(() => {
        var e, t;
        let n = new URLSearchParams(L.search),
            r = n.get("page"),
            l = null != r ? Number(r) : 1;
        return {
            query: null != (e = n.get("q")) ? e : "",
            page: l,
            categoryId: null != (t = Number(n.get("category_id"))) ? t : I.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
        }
    }, [L.search]), G = (0, o.bG)([b.A], () => b.A.getCategories()), U = l.useMemo(() => null == G ? void 0 : G.find(e => e.id === M), [G, M]), V = l.useCallback(e => {
        (0, v.TR)(E.HAw.APP_DIRECTORY_SEARCHED, {
            search_term: w,
            num_results: e,
            current_page: y.ev.SEARCH,
            result_page: k,
            category: null == U ? void 0 : U.name,
            category_id: null == U ? void 0 : U.id
        })
    }, [w, k, null == U ? void 0 : U.name, null == U ? void 0 : U.id]);
    l.useEffect(() => {
        var e;
        null == (e = R.current) || e.scrollTo({
            to: 0
        }), w !== D.current && (D.current = w, m.$P({
            query: w,
            options: {
                source: s.V.APP_DIRECTORY
            }
        })), m.$P({
            query: w,
            options: {
                categoryId: M,
                page: k,
                pageSize: I.PAGE_SIZE,
                source: s.V.APP_DIRECTORY
            },
            onSuccessCallback: V
        })
    }, [M, k, w, V]);
    let {
        fetchState: H,
        searchResults: B
    } = (0, o.cf)([f.A], () => ({
        fetchState: f.A.getFetchState({
            query: w,
            categoryId: M,
            page: k,
            pageSize: I.PAGE_SIZE,
            source: s.V.APP_DIRECTORY
        }),
        searchResults: f.A.getSearchResults({
            query: w,
            categoryId: M,
            page: k,
            pageSize: I.PAGE_SIZE,
            source: s.V.APP_DIRECTORY
        })
    })), F = (0, o.cf)([f.A], () => {
        let e = f.A.getSearchResults({
            query: w,
            source: s.V.APP_DIRECTORY
        });
        return null != e ? function(e) {
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
            [x.lj]: e.totalCount
        }, e.countsByCategory) : {}
    }), Y = (0, d.A)(B), z = l.useMemo(() => H === _.e.FETCHING ? Y : B, [H, Y, B]), X = l.useCallback(e => {
        (0, C.JX)({
            query: w,
            categoryId: M,
            page: e
        })
    }, [M, w]), W = l.useCallback(e => {
        (0, v.TR)(E.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
            category: e.name,
            category_id: e.id,
            current_page: y.ev.SEARCH
        }), (0, C.JX)({
            query: w,
            categoryId: e.id
        })
    }, [w]), K = l.useCallback((e, t) => {
        (0, v.TR)(E.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
            current_page: y.ev.SEARCH,
            application_id: e,
            load_id: null == z ? void 0 : z.loadId,
            search_term: w,
            position: t
        }), n(e)
    }, [null == z ? void 0 : z.loadId, n, w]), Z = (0, g.A)();
    return (0, r.jsxs)("div", {
        className: P.kL,
        children: [(0, r.jsx)(p.A, {
            ref: R,
            onScroll: N,
            children: (0, r.jsxs)("div", {
                className: P.WH,
                children: [T ? null : (0, r.jsx)("div", {
                    className: P.AW
                }), (0, r.jsx)(u.A, {
                    children: (0, r.jsxs)("div", {
                        className: P.hQ,
                        children: [(0, r.jsx)("div", {
                            className: P.$B,
                            children: (0, r.jsx)(O.e, {
                                countsByCategory: F,
                                selectedCategoryId: M,
                                onSelectCategory: W
                            })
                        }), (0, r.jsx)(j.A, {
                            loading: H === _.e.FETCHING,
                            children: H === _.e.FETCHED && (null == z || (null == z ? void 0 : z.results.length) === 0) ? (0, r.jsx)(S.A, {
                                selectedCategoryId: null != M ? M : Z.id,
                                searchAllCategories: () => W(Z)
                            }) : (0, r.jsx)("div", {
                                className: P.Qs,
                                children: null == z ? void 0 : z.results.map((e, t) => {
                                    if (e.type === a.j.APPLICATION) {
                                        let n = e.data;
                                        return (0, r.jsx)(A.A, {
                                            application: n,
                                            onSelectApplication: e => K(e, t),
                                            showCategory: !0
                                        }, n.id)
                                    }
                                    return null
                                })
                            })
                        }), (0, r.jsx)(c.mgR, {
                            className: P.JV,
                            totalCount: Math.min((null != (t = null == z ? void 0 : z.totalPages) ? t : 0) * I.PAGE_SIZE, I.MAX_PAGES * I.PAGE_SIZE),
                            pageSize: I.PAGE_SIZE,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: k,
                            onPageChange: X
                        })]
                    })
                })]
            })
        }), (0, r.jsx)("div", {
            className: P.pn,
            children: (0, r.jsx)("div", {
                className: P.jv,
                children: (0, r.jsx)(O.A, {
                    countsByCategory: F,
                    selectedCategoryId: M,
                    onSelectCategory: W
                })
            })
        })]
    })
}