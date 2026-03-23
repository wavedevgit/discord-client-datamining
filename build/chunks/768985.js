/** chunk id: 768985 params = (module,exports,require) **/
n.d(t, {
    j: () => E
});
var i = n(64700),
    s = n(731738),
    l = n(417597),
    a = n(964486),
    r = n(612200),
    o = n(831062),
    d = n(210714),
    c = n(287809),
    u = n(954571),
    m = n(695515),
    _ = n(809697),
    g = n(500470),
    A = n(33666),
    x = n(834981),
    p = n(191627),
    h = n(652215),
    T = n(204925);

function E(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, E = (0, A.A)(), f = (0, x.W1)(), {
        familyCenterInitialized: S,
        isLoading: C
    } = (0, l.cf)([m.A], () => ({
        familyCenterInitialized: m.A.getIsInitialized(),
        isLoading: m.A.isLoading()
    })), b = (0, g.k)(), {
        selectedTab: N,
        handleTabChange: I
    } = (0, _.A)(), v = c.default.getCurrentUser(), j = null != E, y = S && null != v && !j;
    (0, a.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let O = {
            isConsideredAdult: "adult" === E,
            numOfAcceptedRequests: f,
            selectedTab: N,
            selectedTeenId: b
        },
        R = i.useRef(O);
    return i.useEffect(() => {
        R.current = O
    }), i.useEffect(() => {
        if (S && j) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: i,
                selectedTeenId: l
            } = R.current;
            u.default.track(h.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: p.zu[i],
                source: p.iN[t]
            }), o.A.increment({
                name: s.K.FAMILY_CENTER_VIEW
            })
        }
    }, [S, j, t]), i.useEffect(() => {
        y && (0, r.yO)(T.w_.FAMILY_CENTER)
    }, [y]), {
        isLoading: C,
        selectedTab: N,
        handleTabChange: I,
        showAgeGateModal: y
    }
}