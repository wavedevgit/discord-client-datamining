/** Chunk was on 49559 **/
/** chunk id: 30008, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Q: () => g
}), n(938796);
var r = n(627968),
    l = n(64700),
    a = n(311907),
    i = n(562465),
    o = n(397927),
    s = n(73153),
    c = n(163437),
    u = n(97352),
    d = n(67480),
    p = n(328968),
    m = n(927578),
    f = n(580630),
    O = n(963179),
    b = n(168393),
    y = n(652215),
    h = n(985018);
let j = (0, a.UT)([d.A, u.A, p.A], {
    getQueryId: y.fic.APP_PREMIUM_BUTTON,
    get: e => {
        var t;
        if (null == e) return;
        let n = d.A.get(e),
            r = null != (t = u.A.getForSKU(e)) ? t : [],
            l = p.A.getForSKU(e),
            a = d.A.getParentSKU(e);
        return null == n || null == l || null != n && n.type === y.Puh.SUBSCRIPTION && null == a ? null : {
            parentSku: a,
            sku: n,
            storeListing: l,
            subscriptionPlans: r
        }
    },
    load: async e => {
        if (null == e) return;
        let t = {
                url: y.Rsh.STOREFRONT_PREMIUM_BUTTON(e),
                rejectWithError: !1
            },
            {
                body: n
            } = await i.Bo.get(t);
        s.h.dispatch({
            type: "STORE_LISTINGS_FETCH_SUCCESS",
            storeListings: n.store_listings
        }), null != n.subscription_plans && s.h.dispatch({
            type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
            skuId: e,
            subscriptionPlans: n.subscription_plans
        }), null != n.skus && n.skus.forEach(e => {
            s.h.dispatch({
                type: "SKU_FETCH_SUCCESS",
                sku: e
            })
        })
    }
});

function g(e) {
    let {
        data: t
    } = j(e), n = null == t ? void 0 : t.parentSku, a = null == t ? void 0 : t.sku, i = null == t ? void 0 : t.storeListing, s = null == t ? void 0 : t.subscriptionPlans, u = l.useCallback(() => {
        if ((null == a ? void 0 : a.applicationId) == null || (null == a ? void 0 : a.id) == null || (null == a ? void 0 : a.flags) == null) return null;
        (0, o.qfG)(e => {
            let {
                onClose: t,
                transitionState: n
            } = e;
            return (0, r.jsx)(b.SubscriptionDetailsModal, {
                appId: a.applicationId,
                subscriptionType: (0, c.bg)(a.flags) ? "user" : "guild",
                onClose: t,
                skuId: a.id,
                transitionState: n,
                guildId: null
            })
        })
    }, [null == a ? void 0 : a.applicationId, null == a ? void 0 : a.id, null == a ? void 0 : a.flags]), d = l.useCallback(() => {
        if (null == a) return null;
        (0, o.qfG)(e => {
            let {
                onClose: t,
                transitionState: n
            } = e;
            return (0, r.jsx)(O.ItemDetailsModal, {
                appId: a.applicationId,
                skuId: a.id,
                onClose: t,
                transitionState: n
            })
        })
    }, [a]);
    if (null != a && null != i && (null == a || a.type !== y.Puh.SUBSCRIPTION || null != n)) {
        if (null == e || null != a && !a.available) return {
            disabled: !0,
            label: h.intl.string(h.t.CHa0vN)
        };
        if (a.type === y.Puh.SUBSCRIPTION) {
            if (null == s || 0 === s.length) return {
                disabled: !0,
                label: h.intl.string(h.t.CHa0vN)
            };
            let e = s[0],
                t = (0, m.y8)(e.id);
            return {
                disabled: !1,
                label: h.intl.formatToPlainString(h.t["c6Q+B3"], {
                    skuName: a.name,
                    price: (0, f.$g)(t.amount, t.currency)
                }),
                onClick: u
            }
        }
        return null == a.price ? {
            disabled: !0,
            label: h.intl.string(h.t.CHa0vN)
        } : {
            disabled: !1,
            label: h.intl.formatToPlainString(h.t["c6Q+B3"], {
                skuName: a.name,
                price: (0, f.$g)(a.price.amount, a.price.currency)
            }),
            onClick: d
        }
    }
}