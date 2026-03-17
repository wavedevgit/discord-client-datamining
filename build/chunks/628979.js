/** chunk id: 628979 params = (module,exports,require) **/
s.d(t, {
    A: () => A
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
    S = s(652215),
    E = s(985018),
    h = s(450331);

function A(e) {
    let {
        handleTransition: t,
        selectedTab: s,
        isNarrow: n,
        hasText: A
    } = e, {
        searchQuery: f,
        onSetSearchQuery: m
    } = (0, b.v)(), [C, T] = l.useState(""), g = (0, d.uM)(), y = (0, o.bG)([c.default], () => c.default.locale), O = l.useRef(null), [L, x] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            m(C)
        }, 250);
        return () => clearTimeout(e)
    }, [C, m]), l.useEffect(() => {
        T(f)
    }, [f]), l.useEffect(() => {
        x(n && A)
    }, [n, A]);
    let R = l.useCallback(e => {
            "Enter" === e.key && m(C)
        }, [C, m]),
        I = l.useCallback(e => {
            u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: g?.sessionId,
                page_section: g?.pageSection,
                page_category: g?.pageCategory,
                page_index: g?.pageIndex,
                page_size: g?.pageSize,
                cta_name: e,
                page_type: s
            })
        }, [s, g]),
        N = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), I(p.uY.SEARCH_ICON), x(!0), setTimeout(() => O.current?.focus())
        }, [s, t, I]),
        v = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), I(p.uY.SEARCH_BAR)
        }, [s, t, I]),
        G = l.useCallback(() => {
            T(""), m(""), I(p.uY.SEARCH_BAR_CLEAR), n && x(!1)
        }, [m, I, n]),
        _ = l.useCallback(() => {
            n && "" === C && x(!1)
        }, [n, C]),
        j = n && !L,
        F = (0, r.jsx)(i.DUT, {
            className: h.qc,
            onClick: N,
            children: (0, r.jsx)(i.$p$, {
                size: "sm",
                color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        }),
        P = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: R,
            query: C,
            onChange: T,
            onClear: G,
            onBlur: _,
            placeholder: "en-US" === y ? E.intl.string(E.t.arz34K) : E.intl.string(E.t["hIt/Nm"])
        }),
        k = {
            "--custom-search-bar-width": `${p.rr}px`,
            "--custom-search-bar-icon-width": `${p.Dy}px`
        };
    return j ? (0, r.jsx)("div", {
        style: k,
        children: F
    }) : (0, r.jsx)("div", {
        className: a()(h.ON, {
            [h.Nz]: L
        }),
        style: k,
        children: (0, r.jsx)(i.DUT, {
            ignoreKeyPress: !0,
            onClick: v,
            children: P
        })
    })
}