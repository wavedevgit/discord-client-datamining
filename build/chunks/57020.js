/** chunk id: 57020 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    F: () => x
}), n(321073);
var a = n(855104),
    l = n(270051),
    i = n(287809),
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
        } = (0, l.m)({
            location: "getShopBasePricingData"
        }), i = a ? (0, s.CW)({
            product: t,
            isPremiumUser: n
        }) : void 0;
        return {
            orbPrice: i,
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
            isOrbExclusive: l,
            hasDiscountOffer: i = !1,
            prioritizedCurrency: r = null
        } = e, s = [], d = r === c.Hi.ORBS, u = r === c.Hi.FIAT;
        null != n && null != a ? d || !u && t && !i ? s.push(n, a) : s.push(a, n) : null != n ? s.push(n) : null != a && s.push(a);
        let m = s.length > 0 && s[0]?.currency === o.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: s,
            isOrbExclusive: l,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: m
        }
    },
    m = e => {
        let {
            product: t,
            prioritizedCurrency: n
        } = e, l = (0, a.r_)(), s = i.default.getCurrentUser(), {
            orbPrice: c,
            fiatPrice: o,
            isOrbExclusive: m
        } = d({
            product: t,
            isPremiumUser: r.Ay.canUseCollectibles(s)
        }), x = null != c && null != l && l >= c.amount, {
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
        prioritizedCurrency: l,
        hasDiscountOffer: i = !1
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
        hasDiscountOffer: i,
        prioritizedCurrency: l
    })
}