/** chunk id: 57020, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => h,
    F: () => A
}), l(321073);
var i = l(855104),
    r = l(151252),
    n = l(287809),
    a = l(927578),
    s = l(623373),
    u = l(561769),
    d = l(652215);
let o = e => {
        let {
            product: t,
            isPremiumUser: l
        } = e, {
            enabled: i
        } = (0, r.m)({
            location: "getShopBasePricingData"
        }), n = i ? (0, s.CW)({
            product: t,
            isPremiumUser: l
        }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, s.$K)({
                product: t,
                isPremiumUser: l
            }) ?? void 0,
            isOrbExclusive: !!i && (0, s.Ab)(t)
        }
    },
    c = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: l,
            fiatPrice: i,
            isOrbExclusive: r,
            hasDiscountOffer: n = !1,
            prioritizedCurrency: a = null
        } = e, s = [], o = a === u.Hi.ORBS;
        null != l && null != i ? o || t && !n ? s.push(l, i) : s.push(i, l) : null != l ? s.push(l) : null != i && s.push(i);
        let c = s.length > 0 && s[0]?.currency === d.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: s,
            isOrbExclusive: r,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: c
        }
    },
    h = e => {
        let {
            product: t
        } = e, l = (0, i.r_)(), r = n.default.getCurrentUser(), {
            orbPrice: s,
            fiatPrice: u,
            isOrbExclusive: d
        } = o({
            product: t,
            isPremiumUser: a.Ay.canUseCollectibles(r)
        }), h = null != s && null != l && l >= s.amount, {
            shouldCheckoutWithOrbs: A
        } = c({
            orbPrice: s,
            fiatPrice: u,
            isOrbExclusive: d,
            hasSufficientOrbs: h
        });
        return A
    };

function A(e) {
    let {
        product: t,
        isPremiumUser: l,
        prioritizedCurrency: r,
        hasDiscountOffer: n = !1
    } = e, {
        orbPrice: a,
        fiatPrice: s,
        isOrbExclusive: u
    } = o({
        product: t,
        isPremiumUser: l
    }), d = (0, i.kj)(null != a ? a.amount : null);
    return c({
        orbPrice: a,
        fiatPrice: s,
        isOrbExclusive: u,
        hasSufficientOrbs: d,
        hasDiscountOffer: n,
        prioritizedCurrency: r
    })
}