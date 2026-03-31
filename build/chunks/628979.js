/** chunk id: 628979 params = (module,exports,require) **/
s.d(t, {
    A: () => f
});
var r = s(627968),
    l = s(64700),
    a = s(503698),
    n = s.n(a),
    o = s(311907),
    i = s(397927),
    c = s(773669),
    u = s(954571),
    d = s(440938),
    b = s(365491),
    p = s(758836),
    S = s(652215),
    E = s(985018),
    A = s(459645);

function f(e) {
    let {
        handleTransition: t,
        selectedTab: s,
        isNarrow: a,
        hasText: f
    } = e, {
        searchQuery: h,
        onSetSearchQuery: m
    } = (0, b.v)(), [C, g] = l.useState(""), T = (0, d.uM)(), y = (0, o.bG)([c.default], () => c.default.locale), O = l.useRef(null), [L, _] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            m(C)
        }, 250);
        return () => clearTimeout(e)
    }, [C, m]), l.useEffect(() => {
        g(h)
    }, [h]), l.useEffect(() => {
        _(a && f)
    }, [a, f]);
    let x = l.useCallback(e => {
            "Enter" === e.key && m(C)
        }, [C, m]),
        R = l.useCallback(e => {
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
        I = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), R(p.uY.SEARCH_ICON), _(!0), setTimeout(() => O.current?.focus())
        }, [s, t, R]),
        N = l.useCallback(() => {
            s !== p.G2.CATALOG && t(p.G2.CATALOG), R(p.uY.SEARCH_BAR)
        }, [s, t, R]),
        v = l.useCallback(() => {
            g(""), m(""), R(p.uY.SEARCH_BAR_CLEAR), a && _(!1)
        }, [m, R, a]),
        G = l.useCallback(() => {
            a && "" === C && _(!1)
        }, [a, C]),
        j = a && !L,
        F = (0, r.jsx)(i.DUT, {
            className: A.qc,
            onClick: I,
            children: (0, r.jsx)(i.$p$, {
                size: "sm",
                color: i.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        }),
        P = (0, r.jsx)(i.IWV, {
            size: "sm",
            ref: O,
            onKeyDown: x,
            query: C,
            onChange: g,
            onClear: v,
            onBlur: G,
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
        className: n()(A.ON, {
            [A.Nz]: L
        }),
        style: k,
        children: (0, r.jsx)(i.DUT, {
            ignoreKeyPress: !0,
            onClick: N,
            children: P
        })
    })
}