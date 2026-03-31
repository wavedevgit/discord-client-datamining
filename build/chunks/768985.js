/** chunk id: 768985 params = (module,exports,require) **/
n.d(t, {
    j: () => f
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
    g = n(809697),
    _ = n(500470),
    A = n(33666),
    x = n(834981),
    h = n(191627),
    p = n(652215),
    T = n(204925);

function f(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, f = (0, A.A)(), E = (0, x.W1)(), {
        familyCenterInitialized: S,
        isLoading: b
    } = (0, l.cf)([m.A], () => ({
        familyCenterInitialized: m.A.getIsInitialized(),
        isLoading: m.A.isLoading()
    })), C = (0, _.k)(), {
        selectedTab: N,
        handleTabChange: v
    } = (0, g.A)(), I = c.default.getCurrentUser(), j = null != f, y = S && null != I && !j;
    (0, a.Ay)(() => {
        (0, d.d)("family-center"), null != n && n()
    });
    let O = {
            isConsideredAdult: "adult" === f,
            numOfAcceptedRequests: E,
            selectedTab: N,
            selectedTeenId: C
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
    }, [S, j, t]), i.useEffect(() => {
        y && (0, r.yO)(T.w_.FAMILY_CENTER)
    }, [y]), {
        isLoading: b,
        selectedTab: N,
        handleTabChange: v,
        showAgeGateModal: y
    }
}