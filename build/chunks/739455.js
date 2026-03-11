/** chunk id: 739455 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Fx: () => S,
    JH: () => v,
    SY: () => E,
    aV: () => I,
    fE: () => b,
    pF: () => x,
    zu: () => y
}), r(938796), r(321073);
var n = r(64700),
    i = r(975975),
    a = r.n(i),
    o = r(665260),
    s = r(417597),
    l = r(73153),
    _ = r(755584),
    c = r(734057),
    d = r(567305),
    u = r(636194),
    f = r(846922),
    p = r(555325),
    h = r(74399),
    m = r(652215),
    C = r(746080);
a().shim();
let g = {};

function b(e) {
    let t = (0, s.bG)([c.A], () => c.A.getChannel(e)),
        r = (0, s.bG)([h.A], () => h.A.getChannel(e)),
        i = (0, s.bG)([u.A], () => u.A.getBenefitChannel(e)),
        a = (0, n.useMemo)(() => null != t && t.isObfuscated() && null != i ? t.merge({
            name: i.name,
            flags: o.VL(t.flags, C.lx.OBFUSCATED)
        }) : null, [t, i]);
    return null == t ? r : t.isObfuscated() ? a ?? t : t
}

function y(e, t, r) {
    let n = (0, s.bG)([u.A], () => u.A.getSubscriptionListingsForGuild(e)),
        i = (0, f.y)(t => t.editStateIdsForGroup[e]),
        a = (0, f.y)(e => e.listings);
    if (void 0 === r || void 0 === t) return null;
    let o = n.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
        l = [];
    void 0 !== i && i.forEach(e => {
        let t = a[e],
            r = t?.priceTier;
        null != r && l.push(r)
    });
    let _ = new Set(l.concat(o));
    if (!_.has(r)) return null;
    let c = t.indexOf(r);
    if (-1 === c) return null;
    let d = [];
    for (let e = c + 1; e < t.length && (_.has(t[e]) || d.push(t[e]), 3 !== d.length); e++);
    return d
}

function A(e) {
    let t = f.y.getState().editStateIdsForGroup[e],
        r = f.y.getState().listings,
        n = new Set;
    null != t && t.forEach(e => {
        let t = r[e]?.channelBenefits;
        t?.forEach(e => {
            null != h.A.getChannel(e.ref_id) && n.add(e.ref_id)
        })
    });
    let i = [];
    for (let t of n) {
        let r = h.A.getChannel(t);
        if (null != r) {
            let t = r.set("guild_id", e);
            i.push(t)
        }
    }
    return i
}

function E(e) {
    let t = A(e);
    g[e] = t, t.forEach(e => {
        let t = e.set("flags", C.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
        l.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: t
        })
    })
}

function S(e) {
    (g[e] ?? A(e)).forEach(e => {
        l.h.dispatch({
            type: "CHANNEL_DELETE",
            channel: e
        })
    })
}
async function x(e, t) {
    let r = [],
        n = [];
    t.forEach(t => {
        let i = h.A.getChannel(t.ref_id);
        null != i && (r.push(_.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), n.push(i))
    }), 0 === r.length || (await Promise.allSettled(r)).forEach((r, i) => {
        let a = n[i].id;
        if ("fulfilled" === r.status) {
            let t = r.value.body,
                n = f.y.getState().editStateIdsForGroup[e],
                i = f.y.getState().listings;
            null != n && n.forEach(e => {
                let r = i[e]?.channelBenefits;
                r?.forEach(e => {
                    e.ref_id === a && (e.ref_id = t.id)
                })
            })
        } else if (null != t) {
            let e = t.findIndex(e => e.ref_id === a); - 1 !== e && t?.splice(e, 1)
        }
    })
}

function v(e, t) {
    let r = f.y.getState().listings[e],
        n = r?.usedTemplate;
    if (null == n) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let i = h.A.getTemplateWithCategory(t, n);
    if (null == i) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let a = i.listings[0];
    if (r?.name !== a.name || r?.description !== a.description || r?.priceTier !== a.price_tier || r?.image !== a.image || r?.roleColor !== a.role_color || r?.channelBenefits?.length !== a.channels.length || r?.intangibleBenefits?.length !== a.additional_perks.length) return {
        templateCategory: i.category,
        hasChangeFromTemplate: !0
    };
    for (let e = 0; e < a.channels.length; e++) {
        let t = r.channelBenefits[e],
            n = a.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
            templateCategory: i.category,
            hasChangeFromTemplate: !0
        }
    }
    for (let e = 0; e < a.additional_perks.length; e++) {
        let t = r.intangibleBenefits[e],
            n = a.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name) return {
            templateCategory: i.category,
            hasChangeFromTemplate: !0
        }
    }
    return {
        templateCategory: i.category,
        hasChangeFromTemplate: !1
    }
}

function I(e) {
    return (0, p.X9)(e) && e.features.has(m.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, d.D3)() && (0, d.TG)(e.id)
}