/** chunk id: 628979, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => m
});
var r = s(627968),
    l = s(64700),
    n = s(503698),
    a = s.n(n),
    o = s(311907),
    i = s(397927),
    c = s(773669),
    u = s(954571),
    d = s(440938),
    b = s(365491),
    p = s(758836),
    E = s(652215),
    S = s(985018),
    f = s(186413);

function m(e) {
    let {
        handleTransition: t,
        selectedTab: s,
        isNarrow: n,
        hasText: m
    } = e, {
        searchQuery: h,
        onSetSearchQuery: A
    } = (0, b.v)(), [C, T] = l.useState(""), g = (0, d.uM)(), y = (0, o.bG)([c.default], () => c.default.locale), O = l.useRef(null), [x, L] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            A(C)
        }, 250);
        return () => clearTimeout(e)
    }, [C, A]), l.useEffect(() => {
        T(h)
    }, [h]), l.useEffect(() => {
        L(n && m)
    }, [n, m]);
    let N = l.useCallback(e => {
            "Enter" === e.key && A(C)
        }, [C, A]),
        v = l.useCallback(e => {
            u.default.track(E.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                page_index: g?.pageIndex,
                page_size: g?.pageSize,
                cta_name: e,
                page_type: s
            })
        }, [s, g]),
        R = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), v(p.uY.SEARCH_ICON), L(!0), setTimeout(() => O.current?.focus())
        }, [s, t, v]),
        j = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), v(p.uY.SEARCH_BAR)
        }, [s, t, v]),
        G = l.useCallback(() => {
            T(""), A(""), v(p.uY.SEARCH_BAR_CLEAR), n && L(!1)
        }, [A, v, n]),
        I = l.useCallback(() => {
            n && "" === C && L(!1)
        }, [n, C]),
        _ = n && !x,
        P = (0, r.jsx)(i.DUT, {
            className: f.qc,
            onClick: R,
            children: (0, r.jsx)(i.$p$, {
                size: "sm",
                color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        }),
        F = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: N,
            query: C,
            onChange: T,
            onClear: G,
            onBlur: I,
            placeholder: "en-US" === y ? S.intl.string(S.t.arz34K) : S.intl.string(S.t["hIt/Nm"])
        }),
        k = {
            "--custom-search-bar-width": `${p.rr}px`,
            "--custom-search-bar-icon-width": `${p.Dy}px`
        };
    if (_) return (0, r.jsx)("div", {
        style: k,
        children: P
    });
    let $ = a()(f.ON, {
        [f.Nz]: x
    });
    return x ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: f.j8,
            style: k,
            children: P
        }), (0, r.jsx)(i.DUT, {
            className: $,
            style: k,
            onClick: j,
            ignoreKeyPress: !0,
            children: F
        })]
    }) : (0, r.jsx)("div", {
        className: $,
        style: k,
        children: (0, r.jsx)(i.DUT, {
            ignoreKeyPress: !0,
            onClick: j,
            children: F
        })
    })
}