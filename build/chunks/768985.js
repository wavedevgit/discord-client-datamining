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
    _ = n(695515),
    m = n(809697),
    g = n(500470),
    A = n(33666),
    h = n(834981),
    x = n(191627),
    p = n(652215),
    T = n(204925);

function E(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, E = (0, A.A)(), S = (0, h.W1)(), {
        familyCenterInitialized: C,
        isLoading: f
    } = (0, l.cf)([_.A], () => ({
        familyCenterInitialized: _.A.getIsInitialized(),
        isLoading: _.A.isLoading()
    })), b = (0, g.k)(), {
        selectedTab: N,
        handleTabChange: I
    } = (0, m.A)(), v = c.default.getCurrentUser(), j = null != E, y = C && null != v && !j;
    (0, a.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let R = {
            isConsideredAdult: "adult" === E,
            numOfAcceptedRequests: S,
            selectedTab: N,
            selectedTeenId: b
        },
        O = i.useRef(R);
    return i.useEffect(() => {
        O.current = R
    }), i.useEffect(() => {
        if (C && j) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: i,
                selectedTeenId: l
            } = O.current;
            u.default.track(p.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: x.zu[i],
                source: x.iN[t]
            }), o.A.increment({
                name: s.K.FAMILY_CENTER_VIEW
            })
        }
    }, [C, j, t]), i.useEffect(() => {
        y && (0, r.yO)(T.w_.FAMILY_CENTER)
    }, [y]), {
        isLoading: f,
        selectedTab: N,
        handleTabChange: I,
        showAgeGateModal: y
    }
}