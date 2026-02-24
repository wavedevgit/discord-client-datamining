/** chunk id: 739455, original params: e,t,a (module,exports,require) **/
"use strict";
a.d(t, {
    Fx: () => A,
    JH: () => E,
    SY: () => y,
    aV: () => S,
    fE: () => C,
    pF: () => x,
    zu: () => g
}), a(321073);
var r = a(975975),
    n = a.n(r),
    i = a(417597),
    o = a(73153),
    s = a(755584),
    l = a(734057),
    c = a(567305),
    _ = a(636194),
    d = a(846922),
    u = a(555325),
    p = a(74399),
    f = a(652215),
    m = a(746080);
n().shim();
let h = {};

function C(e) {
    let t = (0, i.bG)([l.A], () => l.A.getChannel(e)),
        a = (0, i.bG)([p.A], () => p.A.getChannel(e));
    return t ?? a
}

function g(e, t, a) {
    let r = (0, i.bG)([_.A], () => _.A.getSubscriptionListingsForGuild(e)),
        n = (0, d.y)(t => t.editStateIdsForGroup[e]),
        o = (0, d.y)(e => e.listings);
    if (void 0 === a || void 0 === t) return null;
    let s = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
        l = [];
    void 0 !== n && n.forEach(e => {
        let t = o[e],
            a = t?.priceTier;
        null != a && l.push(a)
    });
    let c = new Set(l.concat(s));
    if (!c.has(a)) return null;
    let u = t.indexOf(a);
    if (-1 === u) return null;
    let p = [];
    for (let e = u + 1; e < t.length && (c.has(t[e]) || p.push(t[e]), 3 !== p.length); e++);
    return p
}

function b(e) {
    let t = d.y.getState().editStateIdsForGroup[e],
        a = d.y.getState().listings,
        r = new Set;
    null != t && t.forEach(e => {
        let t = a[e]?.channelBenefits;
        t?.forEach(e => {
            null != p.A.getChannel(e.ref_id) && r.add(e.ref_id)
        })
    });
    let n = [];
    for (let t of r) {
        let a = p.A.getChannel(t);
        if (null != a) {
            let t = a.set("guild_id", e);
            n.push(t)
        }
    }
    return n
}

function y(e) {
    let t = b(e);
    h[e] = t, t.forEach(e => {
        let t = e.set("flags", m.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
        o.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: t
        })
    })
}

function A(e) {
    (h[e] ?? b(e)).forEach(e => {
        o.h.dispatch({
            type: "CHANNEL_DELETE",
            channel: e
        })
    })
}
async function x(e, t) {
    let a = [],
        r = [];
    t.forEach(t => {
        let n = p.A.getChannel(t.ref_id);
        null != n && (a.push(s.A.createRoleSubscriptionTemplateChannel(e, n.name, n.type, n.topic)), r.push(n))
    }), 0 === a.length || (await Promise.allSettled(a)).forEach((a, n) => {
        let i = r[n].id;
        if ("fulfilled" === a.status) {
            let t = a.value.body,
                r = d.y.getState().editStateIdsForGroup[e],
                n = d.y.getState().listings;
            null != r && r.forEach(e => {
                let a = n[e]?.channelBenefits;
                a?.forEach(e => {
                    e.ref_id === i && (e.ref_id = t.id)
                })
            })
        } else if (null != t) {
            let e = t.findIndex(e => e.ref_id === i); - 1 !== e && t?.splice(e, 1)
        }
    })
}

function E(e, t) {
    let a = d.y.getState().listings[e],
        r = a?.usedTemplate;
    if (null == r) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let n = p.A.getTemplateWithCategory(t, r);
    if (null == n) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let i = n.listings[0];
    if (a?.name !== i.name || a?.description !== i.description || a?.priceTier !== i.price_tier || a?.image !== i.image || a?.roleColor !== i.role_color || a?.channelBenefits?.length !== i.channels.length || a?.intangibleBenefits?.length !== i.additional_perks.length) return {
        templateCategory: n.category,
        hasChangeFromTemplate: !0
    };
    for (let e = 0; e < i.channels.length; e++) {
        let t = a.channelBenefits[e],
            r = i.channels[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name) return {
            templateCategory: n.category,
            hasChangeFromTemplate: !0
        }
    }
    for (let e = 0; e < i.additional_perks.length; e++) {
        let t = a.intangibleBenefits[e],
            r = i.additional_perks[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name) return {
            templateCategory: n.category,
            hasChangeFromTemplate: !0
        }
    }
    return {
        templateCategory: n.category,
        hasChangeFromTemplate: !1
    }
}

function S(e) {
    return (0, u.X9)(e) && e.features.has(f.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.D3)() && (0, c.TG)(e.id)
}