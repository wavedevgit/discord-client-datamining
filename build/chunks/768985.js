/** chunk id: 768985 params = (module,exports,require) **/
n.d(t, {
    j: () => f
});
var i = n(64700),
    s = n(731738),
    l = n(417597),
    r = n(964486),
    a = n(612200),
    o = n(831062),
    d = n(210714),
    c = n(287809),
    u = n(954571),
    m = n(695515),
    g = n(809697),
    _ = n(500470),
    x = n(33666),
    h = n(834981),
    A = n(191627),
    p = n(652215),
    T = n(204925);

function f(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, f = (0, x.A)(), S = (0, h.W1)(), {
        familyCenterInitialized: E,
        isLoading: b
    } = (0, l.cf)([m.A], () => ({
        familyCenterInitialized: m.A.getIsInitialized(),
        isLoading: m.A.isLoading()
    })), C = (0, _.k)(), {
        selectedTab: v,
        handleTabChange: N
    } = (0, g.A)(), I = c.default.getCurrentUser(), j = null != f, y = E && null != I && !j;
    (0, r.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let O = {
            isConsideredAdult: "adult" === f,
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
                initial_page: A.zu[i],
                source: A.iN[t]
            }), o.A.increment({
                name: s.K.FAMILY_CENTER_VIEW
            })
        }
    }, [E, j, t]), i.useEffect(() => {
        y && (0, a.yO)(T.w_.FAMILY_CENTER)
    }, [y]), {
        isLoading: b,
        selectedTab: v,
        handleTabChange: N,
        showAgeGateModal: y
    }
}