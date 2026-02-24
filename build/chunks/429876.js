/** chunk id: 429876, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(397927),
    o = n(564322),
    c = n(954571),
    d = n(440938),
    u = n(365491),
    g = n(549367),
    _ = n(976742),
    m = n(177366),
    h = n(212602),
    p = n(662166),
    f = n(919610),
    x = n(685533),
    E = n(773591),
    C = n(758836),
    A = n(652215),
    b = n(985018),
    S = n(941667);

function v(e) {
    let {
        tab: t,
        categories: n,
        initialCategoryId: r,
        showFilterInitially: a = !0,
        onUnmount: c
    } = e;
    (0, u.S)();
    let d = l.useRef(null),
        {
            handleScroll: g
        } = (0, o.X)(d, t),
        {
            setCategoryRef: _,
            handleScrollToCategory: h
        } = (0, m.k0)(d.current),
        [f, x] = l.useState(a),
        [E, C] = l.useState(!1);
    return l.useEffect(() => {
        null != r && h(r)
    }, [r, h]), l.useEffect(() => () => {
        null != c && c()
    }, []), l.useEffect(() => {
        let e = () => {
            C(window.innerWidth < 1400)
        };
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []), (0, s.jsx)("div", {
        className: S.VM,
        children: (0, s.jsxs)("main", {
            className: S.MY,
            children: [(0, s.jsx)(i.GtU, {
                className: S.OW,
                ref: d,
                onScroll: g,
                children: (0, s.jsx)(L, {
                    isSmallScreen: E,
                    filterBarOpen: f,
                    setFilterBarOpen: x,
                    tab: t,
                    scrollerRef: d,
                    categories: n,
                    setCategoryRef: _,
                    initialCategoryId: r
                })
            }), f && !E && (0, s.jsx)("div", {
                className: S.yF
            }), f && !E && (0, s.jsx)(i.HOs, {
                className: S.kT,
                children: (0, s.jsx)(p.A, {})
            })]
        })
    })
}
let L = e => {
    let {
        isSmallScreen: t,
        filterBarOpen: n,
        setFilterBarOpen: r,
        tab: o,
        scrollerRef: m,
        categories: v,
        setCategoryRef: L,
        initialCategoryId: I
    } = e, j = l.useRef(null), k = (0, u.v)(e => e.hasDefaultFilters()), T = (0, d.uM)(), {
        handlePageChange: O,
        currentPage: N
    } = (0, f.Z)(m), y = l.useCallback(e => {
        c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: T?.sessionId,
            page_section: T?.pageSection,
            page_category: T?.pageCategory,
            page_index: e,
            page_size: T?.pageSize,
            cta_name: `catalog page ${e}`,
            page_type: "catalog"
        }), O(e)
    }, [T, O]), R = l.useRef(null);
    return l.useEffect(() => {
        if (!t || !n) return;
        let e = e => {
            let t = e.target;
            null === j.current || null === R.current || j.current.contains(t) || R.current.contains(t) || (c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: T?.sessionId,
                page_section: T?.pageSection,
                page_category: T?.pageCategory,
                page_index: T?.pageIndex,
                page_size: T?.pageSize,
                cta_name: "filter bar hide outside click",
                page_type: "catalog"
            }), r(!1))
        };
        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
    }, [t, n, r, T]), (0, s.jsx)("div", {
        className: S.en,
        children: (0, s.jsxs)("div", {
            className: S.pf,
            children: [(0, s.jsxs)("div", {
                className: S.ne,
                children: [(0, s.jsx)("div", {
                    className: S.lQ,
                    children: (0, s.jsx)(g.A, {})
                }), (0, s.jsxs)("div", {
                    className: a()(S.wR, {
                        [S.Im]: t
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: S.Ul,
                        children: [(0, s.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: b.intl.string(b.t.uaX705)
                        }), (0, s.jsx)(h.A, {})]
                    }), (0, s.jsx)("div", {
                        ref: R,
                        children: (0, s.jsx)(i.Button, {
                            onClick: () => {
                                let e = !n;
                                c.default.track(A.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: T?.sessionId,
                                    page_section: T?.pageSection,
                                    page_category: T?.pageCategory,
                                    page_index: T?.pageIndex,
                                    page_size: T?.pageSize,
                                    cta_name: `filter bar ${e?"show":"hide"}`,
                                    page_type: "catalog"
                                }), r(e)
                            },
                            variant: "secondary",
                            text: b.intl.string(n ? b.t.fYtm6f : b.t["TeTYE+"]),
                            icon: i.RgP,
                            iconPosition: "end"
                        })
                    })]
                }), n && t && (0, s.jsx)("div", {
                    className: S.Dh,
                    ref: j,
                    children: (0, s.jsx)(i.T7Y, {
                        className: S.Qo,
                        children: (0, s.jsx)(p.A, {})
                    })
                })]
            }), k ? (0, C.dF)(o) ? (0, s.jsx)(E.A, {
                scrollerRef: m,
                tab: o
            }, o) : (0, s.jsx)(d.R9, {
                newValue: {
                    pageIndex: N
                },
                children: (0, s.jsx)(_.A, {
                    categories: v,
                    setCategoryRef: L,
                    currentPage: N,
                    handlePageChange: y,
                    initialCategoryId: I
                })
            }) : (0, s.jsx)(x.A, {
                scrollerRef: m,
                tab: o
            }, o)]
        })
    })
}