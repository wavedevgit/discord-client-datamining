/** chunk id: 632130, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048), n(321073);
var r = n(339048),
    i = n(830382),
    l = n(800342),
    a = n(10716),
    s = n(143582),
    o = n(147964),
    c = n(636401),
    u = n(994717),
    d = n(613057),
    p = n(652215);
async function h(e, t) {
    let n = t.filter(e => e.type === p.Puh.SUBSCRIPTION_GROUP),
        r = await Promise.all(n.map(async t => await (0, s.vz)(e, t.id))),
        i = [];
    return r.forEach(e => {
        if (null == e) return null;
        let n = e.subscription_listings;
        if (null == n) return null;
        let r = [];
        n.forEach(e => {
            e.subscription_plans.forEach(n => {
                var i;
                let l = null == n ? void 0 : n.price,
                    a = t.find(e => e.id === n.sku_id);
                if (null == a) return;
                let s = {
                    id: n.sku_id,
                    name: a.name,
                    type: a.type,
                    price: {
                        amount: l,
                        currency: p.Yri.USD
                    },
                    application_id: e.application_id,
                    flags: e.sku_flags,
                    release_date: null != (i = a.release_date) ? i : null
                };
                r.push(s)
            })
        }), r.filter(e => (null == e ? void 0 : e.price) != null).forEach(e => i.push(e))
    }), i
}
async function g(e) {
    let {
        socket: t
    } = e;
    (0, u.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.A({
        errorCode: p.Lw6.INVALID_COMMAND
    }, "No application.");
    if (o.A.inTestModeForApplication(n) || a.A.inDevModeForApplication(n)) {
        let e = await i.O1(n, !1),
            t = await h(n, e);
        return [...e.filter(e => null != e.price), ...t]
    }
    let r = await l.JI(n);
    return [...r.filter(e => e.sku.type !== p.Puh.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price), ...await h(n, r.map(e => e.sku))]
}

function f(e) {
    let {
        socket: t
    } = e;
    (0, u.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new c.A({
        errorCode: p.Lw6.INVALID_COMMAND
    }, "No application.");
    return r.LM(n)
}
let m = {
    [p.e$_.GET_SKUS]: {
        [d.sm.ANY]: [d.VH, d.hj],
        handler: g
    },
    [p.e$_.GET_ENTITLEMENTS]: {
        [d.sm.ANY]: [d.VH, d.hj],
        handler: f
    },
    [p.e$_.GET_SKUS_EMBEDDED]: {
        [d.sm.ANY]: [d.VH, d.hj],
        handler: async e => ({
            skus: await g(e)
        })
    },
    [p.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [d.sm.ANY]: [d.VH, d.hj],
        handler: async e => ({
            entitlements: await f(e)
        })
    }
}