/** chunk id: 768985, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => E
});
var r = n(64700),
    i = n(731738),
    l = n(417597),
    s = n(964486),
    a = n(612200),
    o = n(831062),
    c = n(210714),
    d = n(287809),
    u = n(954571),
    _ = n(695515),
    p = n(809697),
    m = n(500470),
    g = n(33666),
    A = n(834981),
    f = n(191627),
    b = n(652215),
    h = n(204925);

function E(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, E = (0, g.A)(), O = (0, A.W1)(), {
        familyCenterInitialized: C,
        isLoading: x
    } = (0, l.cf)([_.A], () => ({
        familyCenterInitialized: _.A.getIsInitialized(),
        isLoading: _.A.isLoading()
    })), S = (0, m.k)(), {
        selectedTab: T,
        handleTabChange: I
    } = (0, p.A)(), y = d.default.getCurrentUser(), N = null != E, j = C && null != y && !N;
    (0, s.Ay)(() => {
        (0, c.d)("family-center"), null != n && n()
    });
    let v = {
            isConsideredAdult: "adult" === E,
            numOfAcceptedRequests: O,
            selectedTab: T,
            selectedTeenId: S
        },
        P = r.useRef(v);
    return r.useEffect(() => {
        P.current = v
    }), r.useEffect(() => {
        if (C && N) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: r,
                selectedTeenId: l
            } = P.current;
            u.default.track(b.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: f.zu[r],
                source: f.iN[t]
            }), o.A.increment({
                name: i.K.FAMILY_CENTER_VIEW
            })
        }
    }, [C, N, t]), r.useEffect(() => {
        j && (0, a.yO)(h.w_.FAMILY_CENTER)
    }, [j]), {
        isLoading: x,
        selectedTab: T,
        handleTabChange: I,
        showAgeGateModal: j
    }
}