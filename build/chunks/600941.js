/** chunk id: 600941 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(998418),
    i = n(568065),
    l = n(333354),
    s = n(985018);

function o(e) {
    let t, {
            guildId: n,
            powerups: o
        } = e,
        a = (0, r.jJ)(n, o),
        d = a.some(e => e.type !== i.b_.INACTIVE);
    if (o.length <= 0) return null;
    let u = a.reduce((e, t) => {
        let {
            sourceEntitlement: n
        } = t, r = n?.ends_at;
        return null == r ? e : null == e || r < e ? r : e
    }, void 0);
    null != u ? t = {
        type: "expiring",
        expiringAt: u
    } : d && (t = {
        type: "active",
        statusText: s.intl.string(l.default.FFLkmx)
    });
    let c = a.reduce((e, t) => {
            let {
                type: n,
                powerup: r
            } = t;
            return n === i.b_.POWERUP_ACTIVATED ? e + r.cost : e
        }, 0),
        p = a.reduce((e, t) => {
            let {
                powerup: n
            } = t;
            return e < (n?.cost ?? 0) ? e : n?.cost ?? 0
        }, a[0]?.powerup?.cost ?? 0),
        _ = a.reduce((e, t) => {
            let {
                powerup: n
            } = t;
            return e + (n?.cost ?? 0)
        }, 0),
        m = d ? c : p;
    return {
        isActive: d,
        status: t,
        cost: m,
        costDecorator: !d && _ > m ? "+" : void 0,
        expiringAt: u,
        activeCost: c,
        minCost: p,
        totalCost: _
    }
}