/** chunk id: 628979 params = (module,exports,require) **/
s.d(t, {
    A: () => h
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
    m = s(985018),
    E = s(614840);

function h(e) {
    let {
        handleTransition: t,
        selectedTab: s,
        isNarrow: n,
        hasText: h
    } = e, {
        searchQuery: A,
        onSetSearchQuery: f
    } = (0, b.v)(), [C, g] = l.useState(""), T = (0, d.uM)(), y = (0, o.bG)([c.default], () => c.default.locale), O = l.useRef(null), [L, x] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            f(C)
        }, 250);
        return () => clearTimeout(e)
    }, [C, f]), l.useEffect(() => {
        g(A)
    }, [A]), l.useEffect(() => {
        x(n && h)
    }, [n, h]);
    let _ = l.useCallback(e => {
            "Enter" === e.key && f(C)
        }, [C, f]),
        I = l.useCallback(e => {
            u.default.track(S.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: T?.sessionId,
                page_section: T?.pageSection,
                page_category: T?.pageCategory,
                page_index: T?.pageIndex,
                page_size: T?.pageSize,
                cta_name: e,
                page_type: s
            })
        }, [s, T]),
        R = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), I(p.uY.SEARCH_ICON), x(!0), setTimeout(() => O.current?.focus())
        }, [s, t, I]),
        v = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), I(p.uY.SEARCH_BAR)
        }, [s, t, I]),
        G = l.useCallback(() => {
            g(""), f(""), I(p.uY.SEARCH_BAR_CLEAR), n && x(!1)
        }, [f, I, n]),
        N = l.useCallback(() => {
            n && "" === C && x(!1)
        }, [n, C]),
        j = n && !L,
        F = (0, r.jsx)(i.DUT, {
            className: E.qc,
            onClick: R,
            children: (0, r.jsx)(i.$p$, {
                size: "sm",
                color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        }),
        P = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: _,
            query: C,
            onChange: g,
            onClear: G,
            onBlur: N,
            placeholder: "en-US" === y ? m.intl.string(m.t.arz34K) : m.intl.string(m.t["hIt/Nm"])
        }),
        k = {
            "--custom-search-bar-width": `${p.rr}px`,
            "--custom-search-bar-icon-width": `${p.Dy}px`
        };
    return j ? (0, r.jsx)("div", {
        style: k,
        children: F
    }) : (0, r.jsx)("div", {
        className: a()(E.ON, {
            [E.Nz]: L
        }),
        style: k,
        children: (0, r.jsx)(i.DUT, {
            ignoreKeyPress: !0,
            onClick: v,
            children: P
        })
    })
}