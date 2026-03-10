/** chunk id: 443486 params = (module,exports,require) **/
r.d(t, {
    A: () => p
});
var n = r(627968),
    s = r(64700),
    l = r(397927),
    a = r(822382),
    i = r(771650),
    o = r(415822),
    c = r(753806),
    u = r(272444),
    d = r(806595),
    h = r(949759),
    _ = r(65600),
    f = r(145331),
    S = r(652215),
    E = r(985018),
    g = r(935606);

function p(e) {
    let {
        setSearchQuery: t,
        searchContext: r,
        mode: p
    } = e, A = (0, o.u)(r);
    return s.useMemo(() => {
        let e = [{
            type: S.LWr.FILTER_FROM,
            isEligible: A.has(S.LWr.FILTER_FROM),
            icon: l.nys,
            label: E.intl.string(E.t.ktr6z5)
        }, {
            type: S.LWr.FILTER_IN,
            isEligible: A.has(S.LWr.FILTER_IN),
            icon: l.N$i,
            label: E.intl.string(E.t.VMjDvS)
        }, {
            type: S.LWr.FILTER_HAS,
            isEligible: A.has(S.LWr.FILTER_HAS),
            icon: l.PtA,
            label: E.intl.string(E.t.IhIpc7)
        }, {
            type: S.LWr.FILTER_MENTIONS,
            isEligible: A.has(S.LWr.FILTER_MENTIONS),
            icon: l.XxR,
            label: E.intl.string(E.t.fpKv9Y)
        }];
        return e.filter(e => e.isEligible).map(s => {
            let {
                icon: l,
                label: o,
                type: S
            } = s;
            return (0, h.wE)(d.$.ROW, {
                icon: (0, n.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: g.Fx
                }),
                label: (0, n.jsx)(u.bg, {
                    label: o
                }),
                sublabel: (0, n.jsx)(u.bj, {
                    searchTokenType: S
                }),
                onSelect: n => {
                    let {
                        selectedIndex: s,
                        searchAutocompleteSelectAction: l
                    } = n, o = i.Ay[S]?.key ?? "", u = (0, a.bS)(r);
                    (0, f.kc)({
                        searchContext: r,
                        searchQuery: _.A.getSearchResultsQuery(u),
                        searchQueryString: c.A.getSearchInputText(r),
                        searchTokenType: S,
                        searchAutocompleteGroup: S,
                        searchAutocompleteMode: p,
                        searchAutocompleteResultIndex: s - 1,
                        searchAutocompleteTotalResults: e.length,
                        isSearchFilterPrefix: !0,
                        isSearchFilterAnswer: !1,
                        isSearchFilterComplete: !1,
                        isInFilterForSelectedChannel: !1,
                        searchAutocompleteSelectAction: l
                    }), t({
                        query: `${o} `,
                        performSearch: !1,
                        replace: !1
                    })
                }
            })
        })
    }, [A, r, p, t])
}