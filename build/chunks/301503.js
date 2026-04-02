/** chunk id: 301503 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(178629),
    s = n(770472),
    o = n(737823),
    d = (n(153527), n(876622)),
    c = n(521974),
    u = n(282026),
    A = n(881973),
    h = n(965660),
    _ = n(601193),
    m = n(424956),
    p = n(19925),
    g = n(689817),
    E = n(38894),
    I = n(299579),
    f = n(324580),
    C = n(488995),
    T = n(985018),
    N = n(691553);

function S() {
    let e = a.useRef((0, h.YP)()),
        {
            onScroll: t,
            scrollPosition: n,
            resetScrollPosition: S
        } = (0, r.G)(),
        {
            tabs: x,
            selectedTab: v,
            setSelectedTab: b
        } = (0, g.f)(),
        y = (0, h.Ub)(v),
        O = !f.R0.has(v),
        {
            searchQuery: L,
            onSearchTextChange: R,
            onClearSearch: P,
            onSearchSubmit: D,
            isSearchVisible: M
        } = (0, p.X)({
            loadId: e.current
        }),
        j = _.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: w,
            onCollapsedSearchBarClick: U,
            onSearchBarBlur: G,
            tabsClassName: k
        } = (0, s.p)({
            isSearchBarVisible: O,
            isSearchBarEmpty: "" === L.trim(),
            searchBarState: j,
            setSearchBarState: e => _.A.setState({
                searchBarState: e
            })
        }),
        V = u.A.useField("fetchedQuery"),
        B = a.useCallback(e => {
            b(e), M && P()
        }, [M, P, b]),
        H = a.useMemo(() => M ? x.filter(e => {
            let {
                id: t
            } = e;
            return !f.R0.has(t)
        }) : x, [x, M]),
        F = a.useRef(new A.A(y)),
        {
            onGuildCardSeen: Y,
            onGuildCardClick: W
        } = (0, m.p)({
            guildDiscoveryCardSeenManager: F.current,
            loadId: e.current
        });
    return a.useEffect(() => {
        F.current.flushSeenGuilds(e.current)
    }, [y]), a.useEffect(() => {
        S()
    }, [v, S]), a.useEffect(() => {
        M || u.A.setState({
            scrollPosition: null
        })
    }, [M]), (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsxs)(o.Ay, {
            variant: M ? o.Z5.RELATIVE : o.Z5.OVERLAY,
            children: [!M && (0, i.jsx)(o.ns, {
                scrollPosition: n
            }), M ? (0, i.jsx)(o.XQ, {
                icon: l.Zge,
                onClick: P
            }) : (0, i.jsx)(o.T4, {
                icon: l.RR9
            }), !M && (0, i.jsx)(d.A, {
                className: k,
                tabs: H,
                selectedTab: v,
                onTabSelect: B,
                onAvailableWidthChange: w
            }), M && (0, i.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: N.ov,
                children: T.intl.format(T.t.zHdzqW, {
                    query: V
                })
            }), O && (0, i.jsx)(c.A, {
                query: L,
                placeholder: T.intl.string(T.t["5h0QOP"]),
                onTextChange: R,
                onClear: P,
                onSubmit: D,
                onCollapsedClick: U,
                state: M ? C.GlobalDiscoverySearchBarState.DEFAULT : j,
                onBlur: G
            })]
        }), M ? (0, i.jsx)(I.A, {
            loadId: e.current,
            onGuildCardClick: W,
            onGuildCardSeen: Y
        }) : (0, i.jsx)(E.A, {
            selectedTab: v,
            onScroll: t,
            onGuildCardClick: W,
            onGuildCardSeen: Y
        })]
    })
}