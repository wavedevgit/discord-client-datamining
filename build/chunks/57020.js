/** chunk id: 57020 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    F: () => x
}), n(321073);
var a = n(855104),
    i = n(151252),
    l = n(287809),
    r = n(927578),
    s = n(623373),
    c = n(561769),
    o = n(652215);
let d = e => {
        let {
            product: t,
            isPremiumUser: n
        } = e, {
            enabled: a
        } = (0, i.m)({
            location: "getShopBasePricingData"
        }), l = a ? (0, s.CW)({
            product: t,
            isPremiumUser: n
        }) : void 0;
        return {
            orbPrice: l,
            fiatPrice: (0, s.$K)({
                product: t,
                isPremiumUser: n
            }) ?? void 0,
            isOrbExclusive: !!a && (0, s.Ab)(t)
        }
    },
    u = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: a,
            isOrbExclusive: i,
            hasDiscountOffer: l = !1,
            prioritizedCurrency: r = null
        } = e, s = [], d = r === c.Hi.ORBS, u = r === c.Hi.FIAT;
        null != n && null != a ? d || !u && t && !l ? s.push(n, a) : s.push(a, n) : null != n ? s.push(n) : null != a && s.push(a);
        let m = s.length > 0 && s[0]?.currency === o.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: s,
            isOrbExclusive: i,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: m
        }
    },
    m = e => {
        let {
            product: t,
            prioritizedCurrency: n
        } = e, i = (0, a.r_)(), s = l.default.getCurrentUser(), {
            orbPrice: c,
            fiatPrice: o,
            isOrbExclusive: m
        } = d({
            product: t,
            isPremiumUser: r.Ay.canUseCollectibles(s)
        }), x = null != c && null != i && i >= c.amount, {
            shouldCheckoutWithOrbs: h
        } = u({
            orbPrice: c,
            fiatPrice: o,
            isOrbExclusive: m,
            hasSufficientOrbs: x,
            prioritizedCurrency: n ?? null
        });
        return h
    };

function x(e) {
    let {
        product: t,
        isPremiumUser: n,
        prioritizedCurrency: i,
        hasDiscountOffer: l = !1
    } = e, {
        orbPrice: r,
        fiatPrice: s,
        isOrbExclusive: c
    } = d({
        product: t,
        isPremiumUser: n
    }), o = (0, a.kj)(null != r ? r.amount : null);
    return u({
        orbPrice: r,
        fiatPrice: s,
        isOrbExclusive: c,
        hasSufficientOrbs: o,
        hasDiscountOffer: l,
        prioritizedCurrency: i
    })
}