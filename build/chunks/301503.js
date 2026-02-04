/** chunk id: 301503, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
}), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(178629),
    s = n(770472),
    o = n(737823),
    c = (n(153527), n(876622)),
    u = n(521974),
    d = n(282026),
    p = n(881973),
    h = n(965660),
    f = n(601193),
    g = n(424956),
    m = n(19925),
    A = n(689817),
    _ = n(38894),
    b = n(299579),
    E = n(324580),
    O = n(488995),
    y = n(985018),
    I = n(734539);

function v() {
    let e = i.useRef((0, h.YP)()),
        {
            onScroll: t,
            scrollPosition: n,
            resetScrollPosition: v
        } = (0, a.G)(),
        {
            tabs: S,
            selectedTab: C,
            setSelectedTab: N
        } = (0, A.f)(),
        T = (0, h.Ub)(C),
        j = !E.R0.has(C),
        {
            searchQuery: x,
            onSearchTextChange: P,
            onClearSearch: w,
            onSearchSubmit: L,
            isSearchVisible: R
        } = (0, m.X)({
            loadId: e.current
        }),
        D = f.A.useField("searchBarState"),
        {
            onTabsAvailableWidthChange: M,
            onCollapsedSearchBarClick: k,
            onSearchBarBlur: U,
            tabsClassName: G
        } = (0, s.p)({
            isSearchBarVisible: j,
            isSearchBarEmpty: "" === x.trim(),
            searchBarState: D,
            setSearchBarState: e => f.A.setState({
                searchBarState: e
            })
        }),
        V = d.A.useField("fetchedQuery"),
        B = i.useCallback(e => {
            N(e), R && w()
        }, [R, w, N]),
        H = i.useMemo(() => R ? S.filter(e => {
            let {
                id: t
            } = e;
            return !E.R0.has(t)
        }) : S, [S, R]),
        F = i.useRef(new p.A(T)),
        {
            onGuildCardSeen: Y,
            onGuildCardClick: K
        } = (0, g.p)({
            guildDiscoveryCardSeenManager: F.current,
            loadId: e.current
        });
    return i.useEffect(() => {
        F.current.flushSeenGuilds(e.current)
    }, [T]), i.useEffect(() => {
        v()
    }, [C, v]), i.useEffect(() => {
        R || d.A.setState({
            scrollPosition: null
        })
    }, [R]), (0, r.jsxs)("div", {
        className: I.kL,
        children: [(0, r.jsxs)(o.Ay, {
            variant: R ? o.Z5.RELATIVE : o.Z5.OVERLAY,
            children: [!R && (0, r.jsx)(o.ns, {
                scrollPosition: n
            }), R ? (0, r.jsx)(o.XQ, {
                icon: l.Zge,
                onClick: w
            }) : (0, r.jsx)(o.T4, {
                icon: l.RR9
            }), !R && (0, r.jsx)(c.A, {
                className: G,
                tabs: H,
                selectedTab: R ? null : C,
                onTabSelect: B,
                onAvailableWidthChange: M
            }), R && (0, r.jsx)(l.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: I.ov,
                children: y.intl.format(y.t.zHdzqW, {
                    query: V
                })
            }), j && (0, r.jsx)(u.A, {
                query: x,
                placeholder: y.intl.string(y.t["5h0QOP"]),
                onTextChange: P,
                onClear: w,
                onSubmit: L,
                onCollapsedClick: k,
                state: R ? O.GlobalDiscoverySearchBarState.DEFAULT : D,
                onBlur: U
            })]
        }), R ? (0, r.jsx)(b.A, {
            loadId: e.current,
            onGuildCardClick: K,
            onGuildCardSeen: Y
        }) : (0, r.jsx)(_.A, {
            selectedTab: C,
            onScroll: t,
            onGuildCardClick: K,
            onGuildCardSeen: Y
        })]
    })
}