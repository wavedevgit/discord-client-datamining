/** chunk id: 443486, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => A
});
var s = r(627968),
    n = r(64700),
    l = r(397927),
    a = r(822382),
    i = r(893162),
    o = r(771650),
    u = r(753806),
    c = r(272444),
    d = r(806595),
    h = r(949759),
    _ = r(65600),
    E = r(145331),
    S = r(652215),
    f = r(985018),
    g = r(935606);

function A(e) {
    let {
        setSearchQuery: t,
        searchContext: r,
        mode: A
    } = e, p = (0, i.R)(r);
    return n.useMemo(() => {
        let e = [{
            type: S.LWr.FILTER_FROM,
            isEligible: p.has(S.LWr.FILTER_FROM),
            icon: l.nys,
            label: f.intl.string(f.t.ktr6z5)
        }, {
            type: S.LWr.FILTER_IN,
            isEligible: p.has(S.LWr.FILTER_IN),
            icon: l.N$i,
            label: f.intl.string(f.t.VMjDvS)
        }, {
            type: S.LWr.FILTER_HAS,
            isEligible: p.has(S.LWr.FILTER_HAS),
            icon: l.PtA,
            label: f.intl.string(f.t.IhIpc7)
        }, {
            type: S.LWr.FILTER_MENTIONS,
            isEligible: p.has(S.LWr.FILTER_MENTIONS),
            icon: l.XxR,
            label: f.intl.string(f.t.fpKv9Y)
        }];
        return e.filter(e => e.isEligible).map(n => {
            let {
                icon: l,
                label: i,
                type: S
            } = n;
            return (0, h.wE)(d.$.ROW, {
                icon: (0, s.jsx)(l, {
                    size: "sm",
                    color: "currentColor",
                    className: g.Fx
                }),
                label: (0, s.jsx)(c.bg, {
                    label: i
                }),
                sublabel: (0, s.jsx)(c.bj, {
                    searchTokenType: S
                }),
                onSelect: s => {
                    let {
                        selectedIndex: n,
                        searchAutocompleteSelectAction: l
                    } = s, i = o.Ay[S]?.key ?? "", c = (0, a.bS)(r);
                    (0, E.kc)({
                        searchContext: r,
                        searchQuery: _.A.getSearchResultsQuery(c),
                        searchQueryString: u.A.getSearchInputText(r),
                        searchTokenType: S,
                        searchAutocompleteGroup: S,
                        searchAutocompleteMode: A,
                        searchAutocompleteResultIndex: n - 1,
                        searchAutocompleteTotalResults: e.length,
                        isSearchFilterPrefix: !0,
                        isSearchFilterAnswer: !1,
                        isSearchFilterComplete: !1,
                        isInFilterForSelectedChannel: !1,
                        searchAutocompleteSelectAction: l
                    }), t({
                        query: `${i} `,
                        performSearch: !1,
                        replace: !1
                    })
                }
            })
        })
    }, [p, r, A, t])
}