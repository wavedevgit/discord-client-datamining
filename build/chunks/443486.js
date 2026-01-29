/** Chunk was on 52199 **/
/** chunk id: 443486, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => A
});
var n = r(627968),
    l = r(64700),
    s = r(397927),
    a = r(822382),
    i = r(893162),
    o = r(771650),
    c = r(753806),
    u = r(272444),
    d = r(806595),
    h = r(949759),
    p = r(65600),
    f = r(145331),
    g = r(652215),
    _ = r(985018),
    E = r(935606);

function A(e) {
    let {
        setSearchQuery: t,
        searchContext: r,
        mode: A
    } = e, y = (0, i.R)(r);
    return l.useMemo(() => {
        let e = [{
            type: g.LWr.FILTER_FROM,
            isEligible: y.has(g.LWr.FILTER_FROM),
            icon: s.nys,
            label: _.intl.string(_.t.ktr6z5)
        }, {
            type: g.LWr.FILTER_IN,
            isEligible: y.has(g.LWr.FILTER_IN),
            icon: s.N$i,
            label: _.intl.string(_.t.VMjDvS)
        }, {
            type: g.LWr.FILTER_HAS,
            isEligible: y.has(g.LWr.FILTER_HAS),
            icon: s.PtA,
            label: _.intl.string(_.t.IhIpc7)
        }, {
            type: g.LWr.FILTER_MENTIONS,
            isEligible: y.has(g.LWr.FILTER_MENTIONS),
            icon: s.XxR,
            label: _.intl.string(_.t.fpKv9Y)
        }];
        return e.filter(e => e.isEligible).map(l => {
            let {
                icon: s,
                label: i,
                type: g
            } = l;
            return (0, h.wE)(d.$.ROW, {
                icon: (0, n.jsx)(s, {
                    size: "sm",
                    color: "currentColor",
                    className: E.Fx
                }),
                label: (0, n.jsx)(u.bg, {
                    label: i
                }),
                sublabel: (0, n.jsx)(u.bj, {
                    searchTokenType: g
                }),
                onSelect: n => {
                    var l, s;
                    let {
                        selectedIndex: i,
                        searchAutocompleteSelectAction: u
                    } = n, d = null != (l = null == (s = o.Ay[g]) ? void 0 : s.key) ? l : "", h = (0, a.bS)(r);
                    (0, f.kc)({
                        searchContext: r,
                        searchQuery: p.A.getSearchResultsQuery(h),
                        searchQueryString: c.A.getSearchInputText(r),
                        searchTokenType: g,
                        searchAutocompleteGroup: g,
                        searchAutocompleteMode: A,
                        searchAutocompleteResultIndex: i - 1,
                        searchAutocompleteTotalResults: e.length,
                        isSearchFilterPrefix: !0,
                        isSearchFilterAnswer: !1,
                        isSearchFilterComplete: !1,
                        isInFilterForSelectedChannel: !1,
                        searchAutocompleteSelectAction: u
                    }), t({
                        query: "".concat(d, " "),
                        performSearch: !1,
                        replace: !1
                    })
                }
            })
        })
    }, [y, r, A, t])
}