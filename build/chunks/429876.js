/** chunk id: 429876, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => v
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(397927),
    o = s(564322),
    c = s(954571),
    d = s(440938),
    u = s(365491),
    _ = s(549367),
    g = s(976742),
    m = s(177366),
    h = s(212602),
    p = s(662166),
    f = s(919610),
    x = s(685533),
    C = s(773591),
    E = s(758836),
    b = s(652215),
    A = s(985018),
    S = s(941667);

function v(e) {
    let {
        tab: t,
        categories: s,
        initialCategoryId: l,
        showFilterInitially: i = !0,
        onUnmount: c
    } = e;
    (0, u.S)();
    let d = r.useRef(null),
        {
            handleScroll: _
        } = (0, o.X)(d, t),
        {
            setCategoryRef: g,
            handleScrollToCategory: h
        } = (0, m.k0)(d.current),
        [f, x] = r.useState(i),
        [C, E] = r.useState(!1);
    return r.useEffect(() => {
        null != l && h(l)
    }, [l, h]), r.useEffect(() => () => {
        null != c && c()
    }, []), r.useEffect(() => {
        let e = () => {
            E(window.innerWidth < 1400)
        };
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []), (0, n.jsx)("div", {
        className: S.VM,
        children: (0, n.jsxs)("main", {
            className: S.MY,
            children: [(0, n.jsx)(a.GtU, {
                className: S.OW,
                ref: d,
                onScroll: _,
                children: (0, n.jsx)(I, {
                    isSmallScreen: C,
                    filterBarOpen: f,
                    setFilterBarOpen: x,
                    tab: t,
                    scrollerRef: d,
                    categories: s,
                    setCategoryRef: g,
                    initialCategoryId: l
                })
            }), f && !C && (0, n.jsx)("div", {
                className: S.yF
            }), f && !C && (0, n.jsx)(a.HOs, {
                className: S.kT,
                children: (0, n.jsx)(p.A, {})
            })]
        })
    })
}
let I = e => {
    let {
        isSmallScreen: t,
        filterBarOpen: s,
        setFilterBarOpen: l,
        tab: o,
        scrollerRef: m,
        categories: v,
        setCategoryRef: I,
        initialCategoryId: L
    } = e, j = r.useRef(null), k = (0, u.v)(e => e.hasDefaultFilters()), T = (0, d.uM)(), {
        handlePageChange: O,
        currentPage: y
    } = (0, f.Z)(m), N = r.useCallback(e => {
        c.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: T?.sessionId,
            page_section: T?.pageSection,
            page_category: T?.pageCategory,
            page_index: e,
            page_size: T?.pageSize,
            cta_name: `catalog page ${e}`,
            page_type: "catalog"
        }), O(e)
    }, [T, O]), R = r.useRef(null);
    return r.useEffect(() => {
        if (!t || !s) return;
        let e = e => {
            let t = e.target;
            null === j.current || null === R.current || j.current.contains(t) || R.current.contains(t) || (c.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: T?.sessionId,
                page_section: T?.pageSection,
                page_category: T?.pageCategory,
                page_index: T?.pageIndex,
                page_size: T?.pageSize,
                cta_name: "filter bar hide outside click",
                page_type: "catalog"
            }), l(!1))
        };
        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
    }, [t, s, l, T]), (0, n.jsx)("div", {
        className: S.en,
        children: (0, n.jsxs)("div", {
            className: S.pf,
            children: [(0, n.jsxs)("div", {
                className: S.ne,
                children: [(0, n.jsx)("div", {
                    className: S.lQ,
                    children: (0, n.jsx)(_.A, {})
                }), (0, n.jsxs)("div", {
                    className: i()(S.wR, {
                        [S.Im]: t
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: S.Ul,
                        children: [(0, n.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            children: A.intl.string(A.t.uaX705)
                        }), (0, n.jsx)(h.A, {})]
                    }), (0, n.jsx)("div", {
                        ref: R,
                        children: (0, n.jsx)(a.Button, {
                            onClick: () => {
                                let e = !s;
                                c.default.track(b.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: T?.sessionId,
                                    page_section: T?.pageSection,
                                    page_category: T?.pageCategory,
                                    page_index: T?.pageIndex,
                                    page_size: T?.pageSize,
                                    cta_name: `filter bar ${e?"show":"hide"}`,
                                    page_type: "catalog"
                                }), l(e)
                            },
                            variant: "secondary",
                            text: A.intl.string(s ? A.t.fYtm6f : A.t["TeTYE+"]),
                            icon: a.RgP,
                            iconPosition: "end"
                        })
                    })]
                }), s && t && (0, n.jsx)("div", {
                    className: S.Dh,
                    ref: j,
                    children: (0, n.jsx)(a.T7Y, {
                        className: S.Qo,
                        children: (0, n.jsx)(p.A, {})
                    })
                })]
            }), k ? (0, E.dF)(o) ? (0, n.jsx)(C.A, {
                scrollerRef: m,
                tab: o
            }, o) : (0, n.jsx)(d.R9, {
                newValue: {
                    pageIndex: y
                },
                children: (0, n.jsx)(g.A, {
                    categories: v,
                    setCategoryRef: I,
                    currentPage: y,
                    handlePageChange: N,
                    initialCategoryId: L
                })
            }) : (0, n.jsx)(x.A, {
                scrollerRef: m,
                tab: o
            }, o)]
        })
    })
}