/** chunk id: 57020 params = (module,exports,require) **/
l.d(t, {
    A: () => x,
    F: () => h
}), l(321073);
var a = l(855104),
    r = l(270051),
    n = l(287809),
    s = l(927578),
    o = l(623373),
    i = l(561769),
    d = l(652215);
let c = e => {
        let {
            product: t,
            isPremiumUser: l
        } = e, {
            enabled: a
        } = (0, r.m)({
            location: "getShopBasePricingData"
        }), n = a ? (0, o.CW)({
            product: t,
            isPremiumUser: l
        }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, o.$K)({
                product: t,
                isPremiumUser: l
            }) ?? void 0,
            isOrbExclusive: (0, o.Ab)(t)
        }
    },
    u = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: l,
            fiatPrice: a,
            isOrbExclusive: r,
            hasDiscountOffer: n = !1,
            prioritizedCurrency: s = null
        } = e, o = [], c = s === i.Hi.ORBS, u = s === i.Hi.FIAT;
        null != l && null != a ? c || !u && t && !n ? o.push(l, a) : o.push(a, l) : null != l ? o.push(l) : null != a && o.push(a);
        let x = o.length > 0 && o[0]?.currency === d.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: o,
            isOrbExclusive: r,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: x
        }
    },
    x = e => {
        let {
            product: t,
            prioritizedCurrency: l
        } = e, r = (0, a.r_)(), o = n.default.getCurrentUser(), {
            orbPrice: i,
            fiatPrice: d,
            isOrbExclusive: x
        } = c({
            product: t,
            isPremiumUser: s.Ay.canUseCollectibles(o)
        }), h = null != i && null != r && r >= i.amount, {
            shouldCheckoutWithOrbs: m
        } = u({
            orbPrice: i,
            fiatPrice: d,
            isOrbExclusive: x,
            hasSufficientOrbs: h,
            prioritizedCurrency: l ?? null
        });
        return m
    };

function h(e) {
    let {
        product: t,
        isPremiumUser: l,
        prioritizedCurrency: r,
        hasDiscountOffer: n = !1
    } = e, {
        orbPrice: s,
        fiatPrice: o,
        isOrbExclusive: i
    } = c({
        product: t,
        isPremiumUser: l
    }), d = (0, a.kj)(null != s ? s.amount : null);
    return u({
        orbPrice: s,
        fiatPrice: o,
        isOrbExclusive: i,
        hasSufficientOrbs: d,
        hasDiscountOffer: n,
        prioritizedCurrency: r
    })
}