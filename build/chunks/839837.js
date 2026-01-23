/** Chunk was on 47841 **/
/** chunk id: 839837, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(64700),
    i = n(262828),
    l = n(105917),
    s = n(969379),
    a = n(705751),
    o = n(311750);

function c(e) {
    var t;
    let {
        application: n,
        loading: c
    } = (0, i.A)(e, a.S7.GUILD_ROLE_SUBSCRIPTIONS), {
        payoutsByPeriod: d,
        loading: u
    } = (0, s.A)(null == n ? void 0 : n.id, {
        groupType: o.x1.GUILD_PRODUCT,
        teamId: null == n || null == (t = n.team) ? void 0 : t.id
    }), {
        currentPeriod: g,
        previousPeriods: m,
        metrics: p
    } = r.useMemo(() => {
        let {
            currentPeriod: e,
            previousPeriods: t
        } = (0, l.dc)(d), n = (0, l.El)(e, t[0]);
        return {
            currentPeriod: e,
            previousPeriods: t,
            metrics: n
        }
    }, [d]);
    return {
        loading: c || u,
        payoutsByPeriod: d,
        currentPeriod: g,
        previousPeriods: m,
        metrics: p,
        application: n
    }
}