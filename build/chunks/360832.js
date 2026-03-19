/** chunk id: 360832 params = (module,exports,require) **/
a.d(t, {
    A: () => R
}), a(323874), a(14289), a(35956);
var n = a(627968),
    i = a(64700),
    l = a(873263),
    s = a(935573),
    r = a(994369),
    o = a(311907),
    c = a(397927),
    d = a(475743),
    u = a(979590),
    m = a(783531),
    h = a(961350),
    p = a(354138),
    _ = a(620140),
    g = a(212534),
    x = a(38181),
    A = a(651753),
    f = a(767599),
    b = a(412461),
    C = a(867333),
    v = a(487953),
    j = a(310419),
    I = a(656106),
    S = a(847525),
    E = a(734786),
    N = a(435220),
    y = a(652215),
    T = a(808388);

function R(e) {
    let {
        onSelectApplication: t,
        onScroll: a
    } = e, R = (0, o.bG)([h.default], () => h.default.isAuthenticated()), P = i.useRef(null), L = (0, l.zy)(), D = i.useRef(null), {
        query: O,
        page: k,
        categoryId: G
    } = i.useMemo(() => {
        let e = new URLSearchParams(L.search),
            t = e.get("page"),
            a = null != t ? Number(t) : 1;
        return {
            query: e.get("q") ?? "",
            page: a,
            categoryId: Number(e.get("category_id")) ?? N.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY_ID
        }
    }, [L.search]), M = (0, o.bG)([x.A], () => x.A.getCategories()), U = i.useMemo(() => M?.find(e => e.id === G), [M, G]), w = i.useCallback(e => {
        (0, b.TR)(y.HAw.APP_DIRECTORY_SEARCHED, {
            search_term: O,
            num_results: e,
            current_page: j.ev.SEARCH,
            result_page: k,
            category: U?.name,
            category_id: U?.id
        })
    }, [O, k, U?.name, U?.id]);
    i.useEffect(() => {
        P.current?.scrollTo({
            to: 0
        }), O !== D.current && (D.current = O, p.$P({
            query: O,
            options: {
                source: r.V.APP_DIRECTORY
            }
        })), p.$P({
            query: O,
            options: {
                categoryId: G,
                page: k,
                pageSize: N.PAGE_SIZE,
                source: r.V.APP_DIRECTORY
            },
            onSuccessCallback: w
        })
    }, [G, k, O, w]);
    let {
        fetchState: H,
        searchResults: V
    } = (0, o.cf)([A.A], () => ({
        fetchState: A.A.getFetchState({
            query: O,
            categoryId: G,
            page: k,
            pageSize: N.PAGE_SIZE,
            source: r.V.APP_DIRECTORY
        }),
        searchResults: A.A.getSearchResults({
            query: O,
            categoryId: G,
            page: k,
            pageSize: N.PAGE_SIZE,
            source: r.V.APP_DIRECTORY
        })
    })), B = (0, o.cf)([A.A], () => {
        let e = A.A.getSearchResults({
            query: O,
            source: r.V.APP_DIRECTORY
        });
        return null != e ? {
            [f.lj]: e.totalCount,
            ...e.countsByCategory
        } : {}
    }), F = (0, d.A)(V), Y = i.useMemo(() => H === g.e.FETCHING ? F : V, [H, F, V]), z = i.useCallback(e => {
        (0, I.JX)({
            query: O,
            categoryId: G,
            page: e
        })
    }, [G, O]), X = i.useCallback(e => {
        (0, b.TR)(y.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
            category: e.name,
            category_id: e.id,
            current_page: j.ev.SEARCH
        }), (0, I.JX)({
            query: O,
            categoryId: e.id
        })
    }, [O]), W = i.useCallback((e, a) => {
        (0, b.TR)(y.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
            current_page: j.ev.SEARCH,
            application_id: e,
            load_id: Y?.loadId,
            search_term: O,
            position: a
        }), t(e)
    }, [Y?.loadId, t, O]), K = (0, _.A)();
    return (0, n.jsxs)("div", {
        className: T.kL,
        children: [(0, n.jsx)(m.A, {
            ref: P,
            onScroll: a,
            children: (0, n.jsxs)("div", {
                className: T.WH,
                children: [R ? null : (0, n.jsx)("div", {
                    className: T.AW
                }), (0, n.jsx)(u.A, {
                    children: (0, n.jsxs)("div", {
                        className: T.hQ,
                        children: [(0, n.jsx)("div", {
                            className: T.$B,
                            children: (0, n.jsx)(S.e, {
                                countsByCategory: B,
                                selectedCategoryId: G,
                                onSelectCategory: X
                            })
                        }), (0, n.jsx)(C.A, {
                            loading: H === g.e.FETCHING,
                            children: H === g.e.FETCHED && (null == Y || Y?.results.length === 0) ? (0, n.jsx)(E.A, {
                                selectedCategoryId: G ?? K.id,
                                searchAllCategories: () => X(K)
                            }) : (0, n.jsx)("div", {
                                className: T.Qs,
                                children: Y?.results.map((e, t) => {
                                    if (e.type === s.j.APPLICATION) {
                                        let a = e.data;
                                        return (0, n.jsx)(v.A, {
                                            application: a,
                                            onSelectApplication: e => W(e, t),
                                            showCategory: !0
                                        }, a.id)
                                    }
                                    return null
                                })
                            })
                        }), (0, n.jsx)(c.mgR, {
                            className: T.JV,
                            totalCount: Math.min((Y?.totalPages ?? 0) * N.PAGE_SIZE, N.MAX_PAGES * N.PAGE_SIZE),
                            pageSize: N.PAGE_SIZE,
                            disablePaginationGap: !0,
                            hideMaxPage: !0,
                            currentPage: k,
                            onPageChange: z
                        })]
                    })
                })]
            })
        }), (0, n.jsx)("div", {
            className: T.pn,
            children: (0, n.jsx)("div", {
                className: T.jv,
                children: (0, n.jsx)(S.A, {
                    countsByCategory: B,
                    selectedCategoryId: G,
                    onSelectCategory: X
                })
            })
        })]
    })
}