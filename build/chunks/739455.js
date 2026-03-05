/** chunk id: 739455 params = (module,exports,require) **/
"use strict";
a.d(t, {
    Fx: () => E,
    JH: () => I,
    SY: () => x,
    aV: () => v,
    fE: () => b,
    pF: () => S,
    zu: () => y
}), a(938796), a(321073);
var n = a(64700),
    r = a(975975),
    i = a.n(r),
    o = a(665260),
    s = a(417597),
    l = a(73153),
    c = a(755584),
    _ = a(734057),
    d = a(567305),
    u = a(636194),
    p = a(846922),
    f = a(555325),
    m = a(74399),
    h = a(652215),
    g = a(746080);
i().shim();
let C = {};

function b(e) {
    let t = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        a = (0, s.bG)([m.A], () => m.A.getChannel(e)),
        r = (0, s.bG)([u.A], () => u.A.getBenefitChannel(e)),
        i = (0, n.useMemo)(() => null != t && t.isObfuscated() && null != r ? t.merge({
            name: r.name,
            flags: o.VL(t.flags, g.lx.OBFUSCATED)
        }) : null, [t, r]);
    return null == t ? a : t.isObfuscated() ? i ?? t : t
}

function y(e, t, a) {
    let n = (0, s.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        r = (0, p.y)(t => t.editStateIdsForGroup[e]),
        i = (0, p.y)(e => e.listings);
    if (void 0 === a || void 0 === t) return null;
    let o = n.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
        l = [];
    void 0 !== r && r.forEach(e => {
        let t = i[e],
            a = t?.priceTier;
        null != a && l.push(a)
    });
    let c = new Set(l.concat(o));
    if (!c.has(a)) return null;
    let _ = t.indexOf(a);
    if (-1 === _) return null;
    let d = [];
    for (let e = _ + 1; e < t.length && (c.has(t[e]) || d.push(t[e]), 3 !== d.length); e++);
    return d
}

function A(e) {
    let t = p.y.getState().editStateIdsForGroup[e],
        a = p.y.getState().listings,
        n = new Set;
    null != t && t.forEach(e => {
        let t = a[e]?.channelBenefits;
        t?.forEach(e => {
            null != m.A.getChannel(e.ref_id) && n.add(e.ref_id)
        })
    });
    let r = [];
    for (let t of n) {
        let a = m.A.getChannel(t);
        if (null != a) {
            let t = a.set("guild_id", e);
            r.push(t)
        }
    }
    return r
}

function x(e) {
    let t = A(e);
    C[e] = t, t.forEach(e => {
        let t = e.set("flags", g.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
        l.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: t
        })
    })
}

function E(e) {
    (C[e] ?? A(e)).forEach(e => {
        l.h.dispatch({
            type: "CHANNEL_DELETE",
            channel: e
        })
    })
}
async function S(e, t) {
    let a = [],
        n = [];
    t.forEach(t => {
        let r = m.A.getChannel(t.ref_id);
        null != r && (a.push(c.A.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), n.push(r))
    }), 0 === a.length || (await Promise.allSettled(a)).forEach((a, r) => {
        let i = n[r].id;
        if ("fulfilled" === a.status) {
            let t = a.value.body,
                n = p.y.getState().editStateIdsForGroup[e],
                r = p.y.getState().listings;
            null != n && n.forEach(e => {
                let a = r[e]?.channelBenefits;
                a?.forEach(e => {
                    e.ref_id === i && (e.ref_id = t.id)
                })
            })
        } else if (null != t) {
            let e = t.findIndex(e => e.ref_id === i); - 1 !== e && t?.splice(e, 1)
        }
    })
}

function I(e, t) {
    let a = p.y.getState().listings[e],
        n = a?.usedTemplate;
    if (null == n) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let r = m.A.getTemplateWithCategory(t, n);
    if (null == r) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let i = r.listings[0];
    if (a?.name !== i.name || a?.description !== i.description || a?.priceTier !== i.price_tier || a?.image !== i.image || a?.roleColor !== i.role_color || a?.channelBenefits?.length !== i.channels.length || a?.intangibleBenefits?.length !== i.additional_perks.length) return {
        templateCategory: r.category,
        hasChangeFromTemplate: !0
    };
    for (let e = 0; e < i.channels.length; e++) {
        let t = a.channelBenefits[e],
            n = i.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
            templateCategory: r.category,
            hasChangeFromTemplate: !0
        }
    }
    for (let e = 0; e < i.additional_perks.length; e++) {
        let t = a.intangibleBenefits[e],
            n = i.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
            templateCategory: r.category,
            hasChangeFromTemplate: !0
        }
    }
    return {
        templateCategory: r.category,
        hasChangeFromTemplate: !1
    }
}

function v(e) {
    return (0, f.X9)(e) && e.features.has(h.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, d.D3)() && (0, d.TG)(e.id)
}