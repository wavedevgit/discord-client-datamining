/** Chunk was on 28636 **/
/** chunk id: 573, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
}), n(896048), n(747238);
var r = n(627968),
    l = n(64700),
    i = n(935573),
    a = n(417597),
    s = n(397927),
    o = n(919796),
    c = n(354138),
    d = n(111042),
    u = n(651753),
    p = n(412461),
    h = n(867333),
    m = n(487953),
    g = n(111737),
    _ = n(310419),
    b = n(435220),
    f = n(652215),
    x = n(689917);
let v = {
        results: [],
        totalPages: 0,
        loadId: ""
    },
    j = function(e) {
        var t;
        let {
            categoryId: n,
            onSelectApplication: j,
            resetScroll: A
        } = e, [y, C] = l.useState(1), O = l.useCallback(e => {
            C(e)
        }, []);
        l.useEffect(() => {
            C(1)
        }, [n]);
        let S = l.useMemo(() => ({
                query: b.EMPTY_QUERY,
                page: y,
                pageSize: b.PAGE_SIZE,
                categoryId: n
            }), [y, n]),
            I = (0, a.bG)([u.A], () => u.A.getFetchState({
                query: b.EMPTY_QUERY,
                page: y,
                pageSize: b.PAGE_SIZE,
                categoryId: n
            })),
            E = (0, a.cf)([u.A], () => {
                var e;
                return null != (e = u.A.getSearchResults(S)) ? e : v
            }),
            P = null != (t = (0, o.A)(E)) ? t : v,
            {
                results: N,
                totalPages: T,
                loadId: R
            } = l.useMemo(() => I === d.e.FETCHING ? P : E, [I, P, E]),
            L = l.useMemo(() => null == N ? void 0 : N.filter(e => e.type === i.j.APPLICATION), [N]),
            D = l.useCallback(e => {
                let {
                    page: t,
                    activeCategoryId: n,
                    onSuccessCallback: r,
                    guildId: l,
                    fetchCounts: i
                } = e;
                i && c.$P({
                    query: b.EMPTY_QUERY,
                    guildId: l
                }), c.$P({
                    query: b.EMPTY_QUERY,
                    guildId: l,
                    options: {
                        page: t,
                        pageSize: b.PAGE_SIZE,
                        categoryId: n
                    },
                    onSuccessCallback: r
                })
            }, []);
        l.useEffect(() => {
            A(), D({
                page: y,
                activeCategoryId: n,
                onSuccessCallback: () => {}
            })
        }, [n, A, D, y]);
        let w = l.useCallback((e, t) => {
            (0, p.TR)(f.HAw.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: _.ev.SEARCH,
                application_id: e,
                load_id: R,
                position: t
            }), j(e)
        }, [R, j]);
        return I === d.e.ERROR ? (0, r.jsx)("div", {
            className: x.Un,
            children: (0, r.jsx)(g.A, {
                className: x.z3
            })
        }) : (0, r.jsxs)(h.A, {
            loading: I === d.e.FETCHING,
            children: [(0, r.jsx)("div", {
                className: x.Qs,
                children: null == L ? void 0 : L.map((e, t) => {
                    if (e.type === i.j.APPLICATION) {
                        let n = e.data;
                        return (0, r.jsx)(m.A, {
                            application: n,
                            onSelectApplication: e => w(e, t)
                        }, n.id)
                    }
                    return null
                })
            }), (0, r.jsx)(s.mgR, {
                className: x.JV,
                totalCount: Math.min(T * b.PAGE_SIZE, b.MAX_PAGES * b.PAGE_SIZE),
                pageSize: b.PAGE_SIZE,
                disablePaginationGap: !0,
                hideMaxPage: !0,
                currentPage: y,
                onPageChange: O
            })]
        })
    }