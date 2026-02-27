/** chunk id: 57020, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => h,
    F: () => I
}), l(321073);
var r = l(855104),
    i = l(151252),
    n = l(287809),
    s = l(927578),
    u = l(623373),
    a = l(561769),
    o = l(652215);
let d = e => {
        let {
            product: t,
            isPremiumUser: l
        } = e, {
            enabled: r
        } = (0, i.m)({
            location: "getShopBasePricingData"
        }), n = r ? (0, u.CW)({
            product: t,
            isPremiumUser: l
        }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, u.$K)({
                product: t,
                isPremiumUser: l
            }) ?? void 0,
            isOrbExclusive: !!r && (0, u.Ab)(t)
        }
    },
    c = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: l,
            fiatPrice: r,
            isOrbExclusive: i,
            hasDiscountOffer: n = !1,
            prioritizedCurrency: s = null
        } = e, u = [], d = s === a.Hi.ORBS;
        null != l && null != r ? d || t && !n ? u.push(l, r) : u.push(r, l) : null != l ? u.push(l) : null != r && u.push(r);
        let c = u.length > 0 && u[0]?.currency === o.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: u,
            isOrbExclusive: i,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: c
        }
    },
    h = e => {
        let {
            product: t
        } = e, l = (0, r.r_)(), i = n.default.getCurrentUser(), {
            orbPrice: u,
            fiatPrice: a,
            isOrbExclusive: o
        } = d({
            product: t,
            isPremiumUser: s.Ay.canUseCollectibles(i)
        }), h = null != u && null != l && l >= u.amount, {
            shouldCheckoutWithOrbs: I
        } = c({
            orbPrice: u,
            fiatPrice: a,
            isOrbExclusive: o,
            hasSufficientOrbs: h
        });
        return I
    };

function I(e) {
    let {
        product: t,
        isPremiumUser: l,
        prioritizedCurrency: i,
        hasDiscountOffer: n = !1
    } = e, {
        orbPrice: s,
        fiatPrice: u,
        isOrbExclusive: a
    } = d({
        product: t,
        isPremiumUser: l
    }), o = (0, r.kj)(null != s ? s.amount : null);
    return c({
        orbPrice: s,
        fiatPrice: u,
        isOrbExclusive: a,
        hasSufficientOrbs: o,
        hasDiscountOffer: n,
        prioritizedCurrency: i
    })
}