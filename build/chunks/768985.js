/** chunk id: 768985 params = (module,exports,require) **/
n.d(t, {
    j: () => T
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
    g = n(809697),
    m = n(500470),
    A = n(33666),
    h = n(834981),
    p = n(191627),
    x = n(652215),
    E = n(204925);

function T(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, T = (0, A.A)(), S = (0, h.W1)(), {
        familyCenterInitialized: C,
        isLoading: f
    } = (0, l.cf)([_.A], () => ({
        familyCenterInitialized: _.A.getIsInitialized(),
        isLoading: _.A.isLoading()
    })), N = (0, m.k)(), {
        selectedTab: b,
        handleTabChange: I
    } = (0, g.A)(), v = c.default.getCurrentUser(), j = null != T, O = C && null != v && !j;
    (0, a.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let R = {
            isConsideredAdult: "adult" === T,
            numOfAcceptedRequests: S,
            selectedTab: b,
            selectedTeenId: N
        },
        y = i.useRef(R);
    return i.useEffect(() => {
        y.current = R
    }), i.useEffect(() => {
        if (C && j) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: i,
                selectedTeenId: l
            } = y.current;
            u.default.track(x.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: p.zu[i],
                source: p.iN[t]
            }), o.A.increment({
                name: s.K.FAMILY_CENTER_VIEW
            })
        }
    }, [C, j, t]), i.useEffect(() => {
        O && (0, r.yO)(E.w_.FAMILY_CENTER)
    }, [O]), {
        isLoading: f,
        selectedTab: b,
        handleTabChange: I,
        showAgeGateModal: O
    }
}