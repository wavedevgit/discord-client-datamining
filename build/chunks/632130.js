/** chunk id: 632130 params = (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(321073);
var i = n(339048),
    a = n(830382),
    r = n(800342),
    l = n(10716),
    s = n(143582),
    o = n(147964),
    d = n(636401),
    c = n(994717),
    u = n(613057),
    A = n(652215);
async function h(e, t) {
    let n = t.filter(e => e.type === A.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async t => await (0, s.vz)(e, t.id))),
        a = [];
    return i.forEach(e => {
        if (null == e) return null;
        let n = e.subscription_listings;
        if (null == n) return null;
        let i = [];
        n.forEach(e => {
            e.subscription_plans.forEach(n => {
                let a = n?.price,
                    r = t.find(e => e.id === n.sku_id);
                if (null == r) return;
                let l = {
                    id: n.sku_id,
                    name: r.name,
                    type: r.type,
                    price: {
                        amount: a,
                        currency: A.Yri.USD
                    },
                    application_id: e.application_id,
                    flags: e.sku_flags,
                    release_date: r.release_date ?? null
                };
                i.push(l)
            })
        }), i.filter(e => e?.price != null).forEach(e => a.push(e))
    }), a
}
async function _(e) {
    let {
        socket: t
    } = e;
    (0, c.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new d.A({
        errorCode: A.Lw6.INVALID_COMMAND
    }, "No application.");
    if (o.A.inTestModeForApplication(n) || l.A.inDevModeForApplication(n)) {
        let e = await a.O1(n, !1),
            t = await h(n, e);
        return [...e.filter(e => null != e.price), ...t]
    }
    let i = await r.JI(n);
    return [...i.filter(e => e.sku.type !== A.Puh.SUBSCRIPTION_GROUP).map(e => e.sku).filter(e => null != e.price), ...await h(n, i.map(e => e.sku))]
}

function m(e) {
    let {
        socket: t
    } = e;
    (0, c.C)(t.transport);
    let n = t.application.id;
    if (null == n) throw new d.A({
        errorCode: A.Lw6.INVALID_COMMAND
    }, "No application.");
    return i.LM(n)
}
let g = {
    [A.e$_.GET_SKUS]: {
        [u.sm.ANY]: [u.VH, u.hj],
        handler: _
    },
    [A.e$_.GET_ENTITLEMENTS]: {
        [u.sm.ANY]: [u.VH, u.hj],
        handler: m
    },
    [A.e$_.GET_SKUS_EMBEDDED]: {
        [u.sm.ANY]: [u.VH, u.hj],
        handler: async e => ({
            skus: await _(e)
        })
    },
    [A.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [u.sm.ANY]: [u.VH, u.hj],
        handler: async e => ({
            entitlements: await m(e)
        })
    }
}