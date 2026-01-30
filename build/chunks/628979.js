/** chunk id: 628979, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(311907),
    o = n(397927),
    c = n(773669),
    u = n(954571),
    d = n(440938),
    g = n(365491),
    f = n(758836),
    m = n(652215),
    p = n(985018),
    _ = n(450331);

function b(e) {
    let {
        handleTransition: t,
        selectedTab: n,
        isNarrow: s,
        hasText: b
    } = e, {
        searchQuery: h,
        onSetSearchQuery: E
    } = (0, g.v)(), [v, C] = l.useState(""), A = (0, d.uM)(), S = (0, i.bG)([c.default], () => c.default.locale), x = l.useRef(null), [O, y] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => {
            E(v)
        }, 250);
        return () => clearTimeout(e)
    }, [v, E]), l.useEffect(() => {
        C(h)
    }, [h]), l.useEffect(() => {
        y(s && b)
    }, [s, b]);
    let j = l.useCallback(e => {
            "Enter" === e.key && E(v)
        }, [v, E]),
        T = l.useCallback(e => {
            u.default.track(m.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == A ? void 0 : A.sessionId,
                page_section: null == A ? void 0 : A.pageSection,
                page_category: null == A ? void 0 : A.pageCategory,
                page_index: null == A ? void 0 : A.pageIndex,
                page_size: null == A ? void 0 : A.pageSize,
                cta_name: e,
                page_type: n
            })
        }, [n, A]),
        L = l.useCallback(() => {
            n !== f.G2.CATALOG && t(f.G2.CATALOG), T(f.uY.SEARCH_ICON), y(!0), setTimeout(() => {
                var e;
                return null == (e = x.current) ? void 0 : e.focus()
            })
        }, [n, t, T]),
        I = l.useCallback(() => {
            n !== f.G2.CATALOG && t(f.G2.CATALOG), T(f.uY.SEARCH_BAR)
        }, [n, t, T]),
        k = l.useCallback(() => {
            C(""), E(""), T(f.uY.SEARCH_BAR_CLEAR), s && y(!1)
        }, [E, T, s]),
        N = l.useCallback(() => {
            s && "" === v && y(!1)
        }, [s, v]),
        R = s && !O,
        P = (0, r.jsx)(o.DUT, {
            className: _.qc,
            onClick: L,
            children: (0, r.jsx)(o.$p$, {
                size: "sm",
                color: o.LU0.colors.INTERACTIVE_ICON_DEFAULT
            })
        }),
        B = (0, r.jsx)(o.IWV, {
            size: "sm",
            ref: x,
            onKeyDown: j,
            query: v,
            onChange: C,
            onClear: k,
            onBlur: N,
            placeholder: "en-US" === S ? p.intl.string(p.t.arz34K) : p.intl.string(p.t["hIt/Nm"])
        }),
        w = {
            "--custom-search-bar-width": "".concat(f.rr, "px"),
            "--custom-search-bar-icon-width": "".concat(f.Dy, "px")
        };
    if (R) return (0, r.jsx)("div", {
        style: w,
        children: P
    });
    let D = a()(_.ON, {
        [_.Nz]: O
    });
    return O ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: _.j8,
            style: w,
            children: P
        }), (0, r.jsx)(o.DUT, {
            className: D,
            style: w,
            onClick: I,
            ignoreKeyPress: !0,
            children: B
        })]
    }) : (0, r.jsx)("div", {
        className: D,
        style: w,
        children: (0, r.jsx)(o.DUT, {
            ignoreKeyPress: !0,
            onClick: I,
            children: B
        })
    })
}