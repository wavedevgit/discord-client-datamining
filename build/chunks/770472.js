/** chunk id: 770472, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => o
});
var r = n(64700),
    l = n(488995),
    i = n(982339);
let a = 20 + l.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX - l.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX,
    s = 20 + l.GLOBAL_DISCOVERY_SEARCH_BAR_WIDTH_PX + l.GLOBAL_DISCOVERY_SEARCH_BAR_ICON_WIDTH_PX;

function o(e) {
    let {
        isSearchBarVisible: t,
        isSearchBarEmpty: n,
        searchBarState: o,
        setSearchBarState: c
    } = e, d = r.useCallback(e => {
        if (!t) return;
        let r = Math.round(e);
        switch (o) {
            case l.GlobalDiscoverySearchBarState.DEFAULT:
                r < 20 && c(n ? l.GlobalDiscoverySearchBarState.COLLAPSED : l.GlobalDiscoverySearchBarState.FLOATING);
                break;
            case l.GlobalDiscoverySearchBarState.COLLAPSED:
                r > a && c(l.GlobalDiscoverySearchBarState.DEFAULT);
                break;
            case l.GlobalDiscoverySearchBarState.FLOATING:
                r > s && c(l.GlobalDiscoverySearchBarState.DEFAULT)
        }
    }, [n, t, o, c]), u = r.useCallback(() => {
        c(l.GlobalDiscoverySearchBarState.FLOATING)
    }, [c]), p = r.useCallback(() => {
        o === l.GlobalDiscoverySearchBarState.FLOATING && n && c(l.GlobalDiscoverySearchBarState.COLLAPSED)
    }, [n, o, c]);
    return {
        onTabsAvailableWidthChange: d,
        tabsClassName: o === l.GlobalDiscoverySearchBarState.FLOATING ? i.b6 : void 0,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: p
    }
}