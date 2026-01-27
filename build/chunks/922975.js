/** Chunk was on web.js **/
/** chunk id: 922975, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $7: () => G,
    $O: () => K,
    A_: () => ee,
    I8: () => k,
    It: () => F,
    Ts: () => en,
    UN: () => Z,
    V_: () => Q,
    W5: () => B,
    Zw: () => $,
    bL: () => j,
    d0: () => el,
    hh: () => X,
    j1: () => es,
    lK: () => U,
    lZ: () => Y,
    rf: () => J,
    tx: () => M,
    xR: () => V
}), n(228524), n(896048);
var r = n(64700),
    i = n(284009),
    a = n.n(i),
    o = n(735438),
    s = n(835245),
    l = n(317097),
    c = n(121894),
    u = n(311907),
    d = n(554375),
    f = n(686956),
    p = n(444927),
    _ = n(508675),
    h = n(371794),
    m = n(500345),
    g = n(579908),
    E = n(599941),
    y = n(636194),
    b = n(855918),
    O = n(739455),
    v = n(881288),
    A = n(244912),
    I = n(516917),
    S = n(846922),
    T = n(2242),
    C = n(652215),
    N = n(788868);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            w(e, t, n[t])
        })
    }
    return e
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function L(e, t, n) {
    let i = (0, S.y)(e => e.setListing),
        a = r.useCallback(r => {
            i(e, e => {
                var i;
                let a = null != (i = null == e ? void 0 : e[t]) ? i : n;
                return Object.assign({}, e, {
                    [t]: "function" == typeof r ? r(a) : r
                })
            })
        }, [i, e, t, n]),
        o = (0, S.y)(n => {
            var r;
            return null == (r = n.listings[e]) ? void 0 : r[t]
        });
    return [void 0 !== o ? o : n, a]
}

function x(e, t) {
    let n = (0, u.bG)([y.A], () => y.A.getSubscriptionListing(e)),
        i = (0, p.A)(() => t);
    return r.useMemo(() => i(n), [n, i])
}

function M(e) {
    let t = x(e, e => {
        var t;
        return null != (t = null == e ? void 0 : e.name) ? t : ""
    });
    return L(e, "name", t)
}

function j(e) {
    let t = x(e, e => {
        var t;
        return null == e || null == (t = e.subscription_plans[0]) ? void 0 : t.price
    });
    return L(e, "priceTier", t)
}

function k(e) {
    let t = x(e, e => {
        var t;
        return null != (t = null == e ? void 0 : e.description) ? t : ""
    });
    return L(e, "description", t)
}

function U(e, t) {
    let n = x(e, e => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, h.YE)(e.application_id, e.image_asset, t)
    });
    return L(e, "image", n)
}

function G(e, t) {
    let n = (0, v.A)(t, e);
    return L(e, "roleIcon", r.useMemo(() => {
        var e, t;
        return {
            icon: null != (e = null == n ? void 0 : n.icon) ? e : void 0,
            unicodeEmoji: null != (t = null == n ? void 0 : n.unicodeEmoji) ? t : void 0
        }
    }, [n]))
}

function F(e, t) {
    let n = (0, v.A)(t, e),
        i = (0, S.y)(t => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleColor
        }),
        a = (0, S.y)(t => {
            var n;
            return null == (n = t.listings[e]) ? void 0 : n.roleIcon
        });
    return r.useMemo(() => {
        let e = R({}, null != n ? n : I.K);
        if (void 0 !== a) {
            var t, r;
            e.icon = null != (t = a.icon) ? t : "", e.unicodeEmoji = null != (r = a.unicodeEmoji) ? r : ""
        }
        return void 0 !== i && (e.color = i, e.colorString = (0, l.Hl)(i)), e
    }, [n, a, i])
}

function V(e, t) {
    let n = (0, v.A)(t, e);
    return L(e, "roleColor", r.useMemo(() => {
        var e;
        return null != (e = null == n ? void 0 : n.color) ? e : C.TGz
    }, [n]))
}

function B(e, t) {
    let n = (0, v.A)(t, e);
    return L(e, "channelAccessFormat", r.useMemo(() => null == n ? S.h.SOME_CHANNELS_ACCESS : (0, b.iR)(n) ? S.h.ALL_CHANNELS_ACCESS : S.h.SOME_CHANNELS_ACCESS, [n]))
}
let H = [];

function Y(e) {
    let t = x(e, e => null == e ? H : e.role_benefits.benefits.filter(m.B1));
    return L(e, "channelBenefits", t)
}
let W = [];

function K(e) {
    let t = x(e, e => null == e ? W : e.role_benefits.benefits.filter(m.b1));
    return L(e, "intangibleBenefits", t)
}
let z = new Set;

function q(e, t) {
    return 0 === e.length ? z : new Set(e.filter(e => e.roles.includes(t)).map(e => {
        let {
            id: t
        } = e;
        return t
    }))
}

function Z(e, t) {
    let n = (0, v.A)(t, e),
        i = (0, u.yK)([_.Ay], () => _.Ay.getGuildEmoji(t), [t]);
    return L(e, "tierEmojiIds", r.useMemo(() => null == n ? z : q(i, n.id), [i, n]))
}

function Q(e) {
    var t;
    let n = (0, E.dL)(e),
        {
            selectedOption: r
        } = (0, A.A)(null != (t = null == n ? void 0 : n.active_trial) ? t : null);
    return L(e, "trialInterval", null != r ? r : null)
}

function X(e) {
    var t;
    let n = (0, E.dL)(e);
    return L(e, "trialLimit", null != (t = null == n ? void 0 : n.max_num_active_trial_users) ? t : null)
}

function J(e) {
    return (0, S.y)(t => void 0 !== t.listings[e])
}

function $(e) {
    return (0, S.y)(t => {
        for (let n of e)
            if (void 0 !== t.listings[n]) return !0;
        return !1
    })
}

function ee(e) {
    let t = x(e, e => null == e ? void 0 : e.subscription_plans[0]),
        [n] = L(e, "priceTier", void 0);
    return [r.useMemo(() => {
        var e, r, i, a, o;
        return {
            price: null != (e = null != n ? n : null == t ? void 0 : t.price) ? e : 0,
            currency: null != (r = null == t ? void 0 : t.currency) ? r : C.Yri.USD,
            interval: null != (i = null == t ? void 0 : t.interval) ? i : N.WT.MONTH,
            interval_count: null != (a = null == t ? void 0 : t.interval_count) ? a : 1,
            id: null != (o = null == t ? void 0 : t.id) ? o : ""
        }
    }, [t, n])]
}

function et(e, t) {
    (0, c.r)(() => {
        S.y.setState(n => ({
            listings: D(R({}, n.listings), {
                [t]: n.listings[e]
            })
        }))
    })
}

function en(e) {
    et("nonexistantEditStateId", e)
}

function er(e, t) {
    (0, c.r)(() => {
        S.y.setState(n => ({
            listings: D(R({}, n.listings), {
                [t]: n.listings[e],
                [e]: void 0
            })
        }))
    })
}
async function ei(e) {
    let {
        guildId: t,
        editStateId: n
    } = e, r = y.A.getSubscriptionListing(n);
    a()(null != r, "listing doesnt exist");
    let i = r.role_id,
        s = r.id,
        l = S.y.getState().listings[n];
    a()(null != l, "edit state does not exist");
    let {
        roleColor: c,
        roleIcon: u,
        trialLimit: p,
        trialInterval: h,
        tierEmojiIds: m
    } = l;
    (void 0 !== c || void 0 !== u) && await f.A.updateRole(t, i, {
        color: c,
        icon: null == u ? void 0 : u.icon,
        unicodeEmoji: null == u ? void 0 : u.unicodeEmoji
    });
    let E = y.A.getSubscriptionTrial(s);
    if ((null != p || null != h || null != E && null == h) && await g.J1(t, s, {
            trial: h,
            max_num_active_trial_users: p
        }), void 0 !== m) {
        let e = q(_.Ay.getGuildEmoji(t), i),
            n = (0, o.difference)([...m], [...e]),
            r = (0, o.difference)([...e], [...m]),
            a = n.map(e => {
                let n = _.Ay.getCustomEmojiById(e);
                if (null != n) return (0, d.Cp)({
                    guildId: t,
                    emojiId: n.id,
                    roles: [...n.roles, i]
                })
            }),
            s = r.map(e => {
                let n = _.Ay.getCustomEmojiById(e);
                if (null == n) return;
                let r = n.roles.filter(e => e !== i);
                return r.length > 0 ? (0, d.Cp)({
                    guildId: t,
                    emojiId: n.id,
                    roles: r
                }) : (0, d.ak)(t, n.id)
            });
        await Promise.all([...a, ...s])
    }
}

function ea(e) {
    var t;
    let {
        guildId: n,
        editStateId: r,
        groupListingId: i
    } = e, s = y.A.getSubscriptionListing(r);
    a()(null != s, "listing doesnt exist");
    let l = r,
        c = S.y.getState().listings[l];
    a()(null != c, "edit state does not exist");
    let {
        name: u,
        description: d,
        channelBenefits: f,
        intangibleBenefits: p,
        priceTier: _,
        image: h,
        channelAccessFormat: E
    } = c, b = {};
    if (u !== s.name && (b.name = u), d !== s.description && (b.description = d), _ !== (null == (t = s.subscription_plans[0]) ? void 0 : t.price) && (b.priceTier = _), null != h && (b.image = h), null != E && (b.can_access_all_channels = E === S.h.ALL_CHANNELS_ACCESS), null != f || null != p) {
        let e = s.role_benefits.benefits.filter(m.B1),
            t = s.role_benefits.benefits.filter(m.b1);
        b.benefits = [...null != f ? f : e, ...null != p ? p : t]
    }
    return (0, o.isEmpty)(b) ? s : g.vW({
        guildId: n,
        groupListingId: i,
        listingId: l,
        data: b
    })
}
async function eo(e) {
    let {
        guildId: t,
        editStateId: n,
        groupListingId: r,
        onBeforeDispatchNewListing: i
    } = e, o = S.y.getState().listings[n];
    a()(null != o, "edit state does not exist");
    let {
        name: s,
        description: l,
        channelBenefits: c,
        intangibleBenefits: u,
        priceTier: d,
        image: f,
        channelAccessFormat: p
    } = o;
    a()(null != s, "no name provided"), a()(null != l, "no description provided"), a()(null != d, "no priceTier provided"), a()(null != f, "no image provided");
    let _ = p === S.h.ALL_CHANNELS_ACCESS,
        h = r;
    null == h && (h = (await g.J4(t, {})).id), null != c && c.length > 0 && await (0, O.pF)(t, c);
    let m = [...null != c ? c : [], ...null != u ? u : []],
        E = (0, O.JH)(n, t);
    return g.K0({
        guildId: t,
        groupListingId: h,
        data: {
            can_access_all_channels: _,
            image: f,
            name: s,
            description: l,
            benefits: m,
            priceTier: d
        },
        analyticsContext: E,
        onBeforeDispatchNewListing: i
    })
}

function es() {
    let [e, t] = r.useState(!1), [n, i] = r.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: r.useCallback(async e => {
            let {
                guildId: n,
                editStateId: r,
                groupListingId: o,
                onBeforeDispatchNewListing: s,
                onAfterDispatchNewListing: l
            } = e, c = r, u = null != y.A.getSubscriptionListing(c);
            try {
                if (t(!0), i(void 0), u) a()(null != o, "groupListingId is null"), await ea({
                    guildId: n,
                    editStateId: c,
                    groupListingId: o
                });
                else {
                    let e = await eo({
                        guildId: n,
                        editStateId: c,
                        groupListingId: o,
                        onBeforeDispatchNewListing: s
                    });
                    c = e.id, er(r, c), null == l || l(e)
                }
                return await ei({
                    guildId: n,
                    editStateId: c
                }), en(c), !0
            } catch (e) {
                if (!("getAnyErrorMessage" in e)) throw e;
                i(e)
            } finally {
                t(!1)
            }
        }, [])
    }
}

function el(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            includeSoftDeleted: !1
        },
        i = (0, E.cY)(e, n),
        a = (0, S.y)(e => e.editStateIdsForGroup[t]),
        o = (0, S.y)(e => e.setEditStateIdsForGroup),
        l = (0, S.y)(e => e.setListing),
        c = r.useMemo(() => [...i.map(e => {
            let {
                id: t
            } = e;
            return t
        }), ...null != a ? a : []], [a, i]),
        u = r.useCallback(() => {
            let e = (0, s.A)();
            o(t, t => [...null != t ? t : [], e])
        }, [t, o]);
    return {
        editStateIds: c,
        addNewEditStateId: u,
        addNewEditStateFromTemplate: r.useCallback(e => {
            let n = (0, s.A)();
            return o(t, e => [...null != e ? e : [], n]), e.listings.forEach(t => {
                l(n, () => ({
                    name: t.name,
                    description: t.description,
                    priceTier: t.price_tier,
                    image: t.image,
                    intangibleBenefits: t.additional_perks,
                    channelBenefits: t.channels.map(e => ({
                        ref_id: e.id,
                        ref_type: T.bN.CHANNEL,
                        description: e.description,
                        name: e.name,
                        emoji_name: e.emoji_name
                    })),
                    roleIcon: {
                        unicodeEmoji: void 0,
                        icon: t.image
                    },
                    roleColor: t.role_color,
                    usedTemplate: e.category
                }))
            }), n
        }, [t, o, l]),
        removeEditStateId: r.useCallback(e => {
            o(t, t => (null != t ? t : []).filter(t => t !== e))
        }, [t, o])
    }
}