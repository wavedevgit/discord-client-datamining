/** Chunk was on 5606 **/
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
    p = n(695515),
    _ = n(809697),
    m = n(500470),
    g = n(33666),
    f = n(834981),
    b = n(191627),
    h = n(652215),
    A = n(204925);

function E(e) {
    let {
        location: t,
        onMountEffect: n
    } = e, E = (0, g.A)(), x = (0, f.W1)(), {
        familyCenterInitialized: O,
        isLoading: C
    } = (0, l.cf)([p.A], () => ({
        familyCenterInitialized: p.A.getIsInitialized(),
        isLoading: p.A.isLoading()
    })), y = (0, m.k)(), {
        selectedTab: j,
        handleTabChange: T
    } = (0, _.A)(), v = d.default.getCurrentUser(), S = null != E, I = O && null != v && !S;
    (0, s.Ay)(() => {
        (0, c.d)("family-center"), null != n && n()
    });
    let N = {
            isConsideredAdult: "adult" === E,
            numOfAcceptedRequests: x,
            selectedTab: j,
            selectedTeenId: y
        },
        P = r.useRef(N);
    return r.useEffect(() => {
        P.current = N
    }), r.useEffect(() => {
        if (O && S) {
            let {
                isConsideredAdult: e,
                numOfAcceptedRequests: n,
                selectedTab: r,
                selectedTeenId: l
            } = P.current;
            u.default.track(h.HAw.FAMILY_CENTER_VIEWED, {
                is_considered_adult: e,
                num_of_accepted_links: n,
                selected_teen_id: l,
                initial_page: b.zu[r],
                source: b.iN[t]
            }), o.A.increment({
                name: i.K.FAMILY_CENTER_VIEW
            })
        }
    }, [O, S, t]), r.useEffect(() => {
        I && (0, a.yO)(A.w_.FAMILY_CENTER)
    }, [I]), {
        isLoading: C,
        selectedTab: j,
        handleTabChange: T,
        showAgeGateModal: I
    }
}