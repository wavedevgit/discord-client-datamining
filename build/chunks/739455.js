/** chunk id: 739455 params = (module,exports,require) **/
n.d(t, {
    Fx: () => T,
    JH: () => L,
    SY: () => m,
    aV: () => y,
    fE: () => C,
    pF: () => I,
    zu: () => g
}), n(938796), n(321073);
var r = n(64700),
    i = n(975975),
    l = n.n(i),
    a = n(665260),
    s = n(417597),
    o = n(73153),
    d = n(755584),
    u = n(734057),
    c = n(567305),
    E = n(636194),
    h = n(846922),
    p = n(555325),
    _ = n(74399),
    S = n(652215),
    A = n(746080);
l().shim();
let f = {};

function C(e) {
    let t = (0, s.bG)([u.A], () => u.A.getChannel(e)),
        n = (0, s.bG)([_.A], () => _.A.getChannel(e)),
        i = (0, s.bG)([E.A], () => E.A.getBenefitChannel(e)),
        l = (0, r.useMemo)(() => null != t && t.isObfuscated() && null != i ? t.merge({
            name: i.name,
            flags: a.VL(t.flags, A.lx.OBFUSCATED)
        }) : null, [t, i]);
    return null == t ? n : t.isObfuscated() ? l ?? t : t
}

function g(e, t, n) {
    let r = (0, s.bG)([E.A], () => E.A.getSubscriptionListingsForGuild(e)),
        i = (0, h.y)(t => t.editStateIdsForGroup[e]),
        l = (0, h.y)(e => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let a = r.filter(e => !e.soft_deleted && !e.archived).map(e => e.subscription_plans[0].price),
        o = [];
    void 0 !== i && i.forEach(e => {
        let t = l[e],
            n = t?.priceTier;
        null != n && o.push(n)
    });
    let d = new Set(o.concat(a));
    if (!d.has(n)) return null;
    let u = t.indexOf(n);
    if (-1 === u) return null;
    let c = [];
    for (let e = u + 1; e < t.length && (d.has(t[e]) || c.push(t[e]), 3 !== c.length); e++);
    return c
}

function N(e) {
    let t = h.y.getState().editStateIdsForGroup[e],
        n = h.y.getState().listings,
        r = new Set;
    null != t && t.forEach(e => {
        let t = n[e]?.channelBenefits;
        t?.forEach(e => {
            null != _.A.getChannel(e.ref_id) && r.add(e.ref_id)
        })
    });
    let i = [];
    for (let t of r) {
        let n = _.A.getChannel(t);
        if (null != n) {
            let t = n.set("guild_id", e);
            i.push(t)
        }
    }
    return i
}

function m(e) {
    let t = N(e);
    f[e] = t, t.forEach(e => {
        let t = e.set("flags", A.lx.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
        o.h.dispatch({
            type: "CHANNEL_CREATE",
            channel: t
        })
    })
}

function T(e) {
    (f[e] ?? N(e)).forEach(e => {
        o.h.dispatch({
            type: "CHANNEL_DELETE",
            channel: e
        })
    })
}
async function I(e, t) {
    let n = [],
        r = [];
    t.forEach(t => {
        let i = _.A.getChannel(t.ref_id);
        null != i && (n.push(d.A.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i))
    }), 0 === n.length || (await Promise.allSettled(n)).forEach((n, i) => {
        let l = r[i].id;
        if ("fulfilled" === n.status) {
            let t = n.value.body,
                r = h.y.getState().editStateIdsForGroup[e],
                i = h.y.getState().listings;
            null != r && r.forEach(e => {
                let n = i[e]?.channelBenefits;
                n?.forEach(e => {
                    e.ref_id === l && (e.ref_id = t.id)
                })
            })
        } else if (null != t) {
            let e = t.findIndex(e => e.ref_id === l); - 1 !== e && t?.splice(e, 1)
        }
    })
}

function L(e, t) {
    let n = h.y.getState().listings[e],
        r = n?.usedTemplate;
    if (null == r) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let i = _.A.getTemplateWithCategory(t, r);
    if (null == i) return {
        templateCategory: null,
        hasChangeFromTemplate: null
    };
    let l = i.listings[0];
    if (n?.name !== l.name || n?.description !== l.description || n?.priceTier !== l.price_tier || n?.image !== l.image || n?.roleColor !== l.role_color || n?.channelBenefits?.length !== l.channels.length || n?.intangibleBenefits?.length !== l.additional_perks.length) return {
        templateCategory: i.category,
        hasChangeFromTemplate: !0
    };
    for (let e = 0; e < l.channels.length; e++) {
        let t = n.channelBenefits[e],
            r = l.channels[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name) return {
            templateCategory: i.category,
            hasChangeFromTemplate: !0
        }
    }
    for (let e = 0; e < l.additional_perks.length; e++) {
        let t = n.intangibleBenefits[e],
            r = l.additional_perks[e];
        if (t.name !== r.name || t.description !== r.description || t.emoji_name !== r.emoji_name) return {
            templateCategory: i.category,
            hasChangeFromTemplate: !0
        }
    }
    return {
        templateCategory: i.category,
        hasChangeFromTemplate: !1
    }
}

function y(e) {
    return (0, p.X9)(e) && e.features.has(S.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED) && (0, c.TG)(e.id)
}