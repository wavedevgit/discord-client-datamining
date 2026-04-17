/** chunk id: 57020 params = (module,exports,require) **/
n.d(t, {
    A: () => m,
    F: () => f
}), n(321073);
var l = n(855104),
    a = n(270051),
    i = n(287809),
    r = n(927578),
    s = n(623373),
    o = n(561769),
    c = n(652215);
let d = e => {
        let {
            product: t,
            isPremiumUser: n
        } = e, {
            enabled: l
        } = (0, a.m)({
            location: "getShopBasePricingData"
        }), i = l ? (0, s.CW)({
            product: t,
            isPremiumUser: n
        }) : void 0;
        return {
            orbPrice: i,
            fiatPrice: (0, s.$K)({
                product: t,
                isPremiumUser: n
            }) ?? void 0,
            isOrbExclusive: (0, s.Ab)(t)
        }
    },
    u = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: n,
            fiatPrice: l,
            isOrbExclusive: a,
            hasDiscountOffer: i = !1,
            prioritizedCurrency: r = null
        } = e, s = [], d = r === o.Hi.ORBS, u = r === o.Hi.FIAT;
        null != n && null != l ? d || !u && t && !i ? s.push(n, l) : s.push(l, n) : null != n ? s.push(n) : null != l && s.push(l);
        let m = s.length > 0 && s[0]?.currency === c.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: s,
            isOrbExclusive: a,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: m
        }
    },
    m = e => {
        let {
            product: t,
            prioritizedCurrency: n
        } = e, a = (0, l.r_)(), s = i.default.getCurrentUser(), {
            orbPrice: o,
            fiatPrice: c,
            isOrbExclusive: m
        } = d({
            product: t,
            isPremiumUser: r.Ay.canUseCollectibles(s)
        }), f = null != o && null != a && a >= o.amount, {
            shouldCheckoutWithOrbs: h
        } = u({
            orbPrice: o,
            fiatPrice: c,
            isOrbExclusive: m,
            hasSufficientOrbs: f,
            prioritizedCurrency: n ?? null
        });
        return h
    };

function f(e) {
    let {
        product: t,
        isPremiumUser: n,
        prioritizedCurrency: a,
        hasDiscountOffer: i = !1
    } = e, {
        orbPrice: r,
        fiatPrice: s,
        isOrbExclusive: o
    } = d({
        product: t,
        isPremiumUser: n
    }), c = (0, l.kj)(null != r ? r.amount : null);
    return u({
        orbPrice: r,
        fiatPrice: s,
        isOrbExclusive: o,
        hasSufficientOrbs: c,
        hasDiscountOffer: i,
        prioritizedCurrency: a
    })
}