/** chunk id: 573 params = (module,exports,require) **/
a.d(t, {
    A: () => C
});
var n = a(627968),
    i = a(64700),
    l = a(935573),
    s = a(417597),
    r = a(397927),
    o = a(919796),
    c = a(354138),
    d = a(111042),
    u = a(651753),
    m = a(412461),
    h = a(867333),
    p = a(487953),
    _ = a(111737),
    g = a(310419),
    x = a(435220),
    A = a(652215),
    f = a(689917);
let b = {
        results: [],
        totalPages: 0,
        loadId: ""
    },
    C = function(e) {
        let {
            categoryId: t,
            onSelectApplication: a,
            resetScroll: C
        } = e, [v, j] = i.useState(1), I = i.useCallback(e => {
            j(e)
        }, []);
        i.useEffect(() => {
            j(1)
        }, [t]);
        let S = i.useMemo(() => ({
                query: x.EMPTY_QUERY,
                page: v,
                pageSize: x.PAGE_SIZE,
                categoryId: t
            }), [v, t]),
            E = (0, s.bG)([u.A], () => u.A.getFetchState({
                query: x.EMPTY_QUERY,
                page: v,
                pageSize: x.PAGE_SIZE,
                categoryId: t
            })),
            N = (0, s.cf)([u.A], () => u.A.getSearchResults(S) ?? b),
            y = (0, o.A)(N) ?? b,
            {
                results: T,
                totalPages: R,
                loadId: P
            } = i.useMemo(() => E === d.e.FETCHING ? y : N, [E, y, N]),
            L = i.useMemo(() => T?.filter(e => e.type === l.j.APPLICATION), [T]),
            D = i.useCallback(e => {
                let {
                    page: t,
                    activeCategoryId: a,
                    onSuccessCallback: n,
                    guildId: i,
                    fetchCounts: l
                } = e;
                l && c.$P({
                    query: x.EMPTY_QUERY,
                    guildId: i
                }), c.$P({
                    query: x.EMPTY_QUERY,
                    guildId: i,
                    options: {
                        page: t,
                        pageSize: x.PAGE_SIZE,
                        categoryId: a
                    },
                    onSuccessCallback: n
                })
            }, []);
        i.useEffect(() => {
            C(), D({
                page: v,
                activeCategoryId: t,
                onSuccessCallback: () => {}
            })
        }, [t, C, D, v]);
        let O = i.useCallback((e, t) => {
            (0, m.TR)(A.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: g.ev.SEARCH,
                application_id: e,
                load_id: P,
                position: t
            }), a(e)
        }, [P, a]);
        return E === d.e.ERROR ? (0, n.jsx)("div", {
            className: f.Un,
            children: (0, n.jsx)(_.A, {
                className: f.z3
            })
        }) : (0, n.jsxs)(h.A, {
            loading: E === d.e.FETCHING,
            children: [(0, n.jsx)("div", {
                className: f.Qs,
                children: L?.map((e, t) => {
                    if (e.type === l.j.APPLICATION) {
                        let a = e.data;
                        return (0, n.jsx)(p.A, {
                            application: a,
                            onSelectApplication: e => O(e, t)
                        }, a.id)
                    }
                    return null
                })
            }), (0, n.jsx)(r.mgR, {
                className: f.JV,
                totalCount: Math.min(R * x.PAGE_SIZE, x.MAX_PAGES * x.PAGE_SIZE),
                pageSize: x.PAGE_SIZE,
                disablePaginationGap: !0,
                hideMaxPage: !0,
                currentPage: v,
                onPageChange: I
            })]
        })
    }