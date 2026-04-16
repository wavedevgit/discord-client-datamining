/** chunk id: 429876 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => L
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(397927),
    o = s(564322),
    c = s(287344),
    d = s(785330),
    u = s(954571),
    _ = s(440938),
    g = s(365491),
    m = s(549367),
    h = s(976742),
    p = s(177366),
    f = s(212602),
    x = s(662166),
    E = s(919610),
    b = s(685533),
    C = s(773591),
    A = s(758836),
    S = s(652215),
    v = s(985018),
    I = s(832179);

function L(e) {
    let {
        tab: t,
        categories: s,
        initialCategoryId: r,
        showFilterInitially: a = !0,
        onUnmount: u
    } = e;
    (0, g.S)();
    let _ = l.useRef(null),
        {
            handleScroll: m
        } = (0, o.X)(_, t),
        h = (0, c.f)("Shop Browse"),
        {
            setCategoryRef: f,
            handleScrollToCategory: E
        } = (0, p.k0)(_.current),
        [b, C] = l.useState(a),
        [A, v] = l.useState(!1);
    return l.useEffect(() => {
        null != r && E(r)
    }, [r, E]), l.useEffect(() => () => {
        null != u && u()
    }, []), l.useEffect(() => {
        let e = () => {
            v(window.innerWidth < 1400)
        };
        return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }, []), (0, n.jsx)("div", {
        className: I.VM,
        children: (0, n.jsxs)("main", {
            className: I.MY,
            children: [(0, n.jsx)(i.GtU, {
                className: I.OW,
                ref: _,
                onScroll: m,
                children: h ? (0, n.jsx)("div", {
                    className: I.en,
                    children: (0, n.jsx)("div", {
                        className: I.pf,
                        children: (0, n.jsx)(d.Z_, {
                            tenantId: S.FYj,
                            templateId: "back-catalog"
                        })
                    })
                }) : (0, n.jsx)(j, {
                    isSmallScreen: A,
                    filterBarOpen: b,
                    setFilterBarOpen: C,
                    tab: t,
                    scrollerRef: _,
                    categories: s,
                    setCategoryRef: f,
                    initialCategoryId: r
                })
            }), b && !A && (0, n.jsx)("div", {
                className: I.yF
            }), b && !A && (0, n.jsx)(i.HOs, {
                className: I.kT,
                children: (0, n.jsx)(x.A, {})
            })]
        })
    })
}
let j = e => {
    let {
        isSmallScreen: t,
        filterBarOpen: s,
        setFilterBarOpen: r,
        tab: o,
        scrollerRef: c,
        categories: d,
        setCategoryRef: p,
        initialCategoryId: L
    } = e, j = l.useRef(null), O = (0, g.v)(e => e.hasDefaultFilters()), k = (0, _.uM)(), {
        handlePageChange: T,
        currentPage: y
    } = (0, E.Z)(c), N = l.useCallback(e => {
        u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: k?.sessionId,
            page_section: k?.pageSection,
            page_category: k?.pageCategory,
            page_index: e,
            page_size: k?.pageSize,
            cta_name: `catalog page ${e}`,
            page_type: "catalog"
        }), T(e)
    }, [k, T]), R = l.useRef(null);
    return l.useEffect(() => {
        if (!t || !s) return;
        let e = e => {
            let t = e.target;
            null === j.current || null === R.current || j.current.contains(t) || R.current.contains(t) || (u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: k?.sessionId,
                page_section: k?.pageSection,
                page_category: k?.pageCategory,
                page_index: k?.pageIndex,
                page_size: k?.pageSize,
                cta_name: "filter bar hide outside click",
                page_type: "catalog"
            }), r(!1))
        };
        return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
    }, [t, s, r, k]), (0, n.jsx)("div", {
        className: I.en,
        children: (0, n.jsxs)("div", {
            className: I.pf,
            children: [(0, n.jsxs)("div", {
                className: I.ne,
                children: [(0, n.jsx)("div", {
                    className: I.lQ,
                    children: (0, n.jsx)(m.A, {})
                }), (0, n.jsxs)("div", {
                    className: a()(I.wR, {
                        [I.Im]: t
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: I.Ul,
                        children: [(0, n.jsx)(i.Text, {
                            variant: "text-md/semibold",
                            children: v.intl.string(v.t.uaX705)
                        }), (0, n.jsx)(f.A, {})]
                    }), (0, n.jsx)("div", {
                        ref: R,
                        children: (0, n.jsx)(i.Button, {
                            onClick: () => {
                                let e = !s;
                                u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                                    collectibles_shop_session_id: k?.sessionId,
                                    page_section: k?.pageSection,
                                    page_category: k?.pageCategory,
                                    page_index: k?.pageIndex,
                                    page_size: k?.pageSize,
                                    cta_name: `filter bar ${e?"show":"hide"}`,
                                    page_type: "catalog"
                                }), r(e)
                            },
                            variant: "secondary",
                            text: v.intl.string(s ? v.t.fYtm6f : v.t["TeTYE+"]),
                            icon: i.RgP,
                            iconPosition: "end"
                        })
                    })]
                }), s && t && (0, n.jsx)("div", {
                    className: I.Dh,
                    ref: j,
                    children: (0, n.jsx)(i.T7Y, {
                        className: I.Qo,
                        children: (0, n.jsx)(x.A, {})
                    })
                })]
            }), O ? (0, A.dF)(o) ? (0, n.jsx)(C.A, {
                scrollerRef: c,
                tab: o
            }, o) : (0, n.jsx)(_.R9, {
                newValue: {
                    pageIndex: y
                },
                children: (0, n.jsx)(h.A, {
                    categories: d,
                    setCategoryRef: p,
                    currentPage: y,
                    handlePageChange: N,
                    initialCategoryId: L
                })
            }) : (0, n.jsx)(b.A, {
                scrollerRef: c,
                tab: o
            }, o)]
        })
    })
}