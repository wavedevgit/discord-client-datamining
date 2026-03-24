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
    m = n(695515),
    _ = n(809697),
    g = n(500470),
    x = n(33666),
    A = n(834981),
    h = n(191627),
    p = n(652215),
    f = n(204925);

function T(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, T = (0, x.A)(), S = (0, A.W1)(), {
        familyCenterInitialized: E,
        isLoading: b
    } = (0, l.cf)([m.A], () => ({
        familyCenterInitialized: m.A.getIsInitialized(),
        isLoading: m.A.isLoading()
    })), C = (0, g.k)(), {
        selectedTab: v,
        handleTabChange: N
    } = (0, _.A)(), I = c.default.getCurrentUser(), j = null != T, y = E && null != I && !j;
    (0, a.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let O = {
            isConsideredAdult: "adult" === T,
            numOfAcceptedRequests: S,
            selectedTab: v,
            selectedTeenId: C
        },
        R = i.useRef(O);
    return i.useEffect(() => {
        R.current = O
    }), i.useEffect(() => {
        if (E && j) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: i,
                selectedTeenId: l
            } = R.current;
            u.default.track(p.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: h.zu[i],
                source: h.iN[t]
            }), o.A.increment({
                name: s.K.FAMILY_CENTER_VIEW
            })
        }
    }, [E, j, t]), i.useEffect(() => {
        y && (0, r.yO)(f.w_.FAMILY_CENTER)
    }, [y]), {
        isLoading: b,
        selectedTab: v,
        handleTabChange: N,
        showAgeGateModal: y
    }
}