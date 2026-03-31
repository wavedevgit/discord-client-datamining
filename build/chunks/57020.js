/** chunk id: 57020 params = (module,exports,require) **/
a.d(t, {
    A: () => x,
    F: () => h
}), a(321073);
var l = a(855104),
    n = a(270051),
    r = a(287809),
    s = a(927578),
    i = a(623373),
    o = a(561769),
    d = a(652215);
let c = e => {
        let {
            product: t,
            isPremiumUser: a
        } = e, {
            enabled: l
        } = (0, n.m)({
            location: "getShopBasePricingData"
        }), r = l ? (0, i.CW)({
            product: t,
            isPremiumUser: a
        }) : void 0;
        return {
            orbPrice: r,
            fiatPrice: (0, i.$K)({
                product: t,
                isPremiumUser: a
            }) ?? void 0,
            isOrbExclusive: !!l && (0, i.Ab)(t)
        }
    },
    u = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: a,
            fiatPrice: l,
            isOrbExclusive: n,
            hasDiscountOffer: r = !1,
            prioritizedCurrency: s = null
        } = e, i = [], c = s === o.Hi.ORBS, u = s === o.Hi.FIAT;
        null != a && null != l ? c || !u && t && !r ? i.push(a, l) : i.push(l, a) : null != a ? i.push(a) : null != l && i.push(l);
        let x = i.length > 0 && i[0]?.currency === d.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: i,
            isOrbExclusive: n,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: x
        }
    },
    x = e => {
        let {
            product: t,
            prioritizedCurrency: a
        } = e, n = (0, l.r_)(), i = r.default.getCurrentUser(), {
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: x
        } = c({
            product: t,
            isPremiumUser: s.Ay.canUseCollectibles(i)
        }), h = null != o && null != n && n >= o.amount, {
            shouldCheckoutWithOrbs: m
        } = u({
            orbPrice: o,
            fiatPrice: d,
            isOrbExclusive: x,
            hasSufficientOrbs: h,
            prioritizedCurrency: a ?? null
        });
        return m
    };

function h(e) {
    let {
        product: t,
        isPremiumUser: a,
        prioritizedCurrency: n,
        hasDiscountOffer: r = !1
    } = e, {
        orbPrice: s,
        fiatPrice: i,
        isOrbExclusive: o
    } = c({
        product: t,
        isPremiumUser: a
    }), d = (0, l.kj)(null != s ? s.amount : null);
    return u({
        orbPrice: s,
        fiatPrice: i,
        isOrbExclusive: o,
        hasSufficientOrbs: d,
        hasDiscountOffer: r,
        prioritizedCurrency: n
    })
}