/** chunk id: 57020, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => h,
    F: () => A
}), l(321073);
var r = l(855104),
    n = l(151252),
    i = l(287809),
    a = l(927578),
    s = l(623373),
    u = l(561769),
    o = l(652215);
let d = e => {
        let {
            product: t,
            isPremiumUser: l
        } = e, {
            enabled: r
        } = (0, n.m)({
            location: "getShopBasePricingData"
        }), i = r ? (0, s.CW)({
            product: t,
            isPremiumUser: l
        }) : void 0;
        return {
            orbPrice: i,
            fiatPrice: (0, s.$K)({
                product: t,
                isPremiumUser: l
            }) ?? void 0,
            isOrbExclusive: !!r && (0, s.Ab)(t)
        }
    },
    c = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: l,
            fiatPrice: r,
            isOrbExclusive: n,
            hasDiscountOffer: i = !1,
            prioritizedCurrency: a = null
        } = e, s = [], d = a === u.Hi.ORBS, c = a === u.Hi.FIAT;
        null != l && null != r ? d || !c && t && !i ? s.push(l, r) : s.push(r, l) : null != l ? s.push(l) : null != r && s.push(r);
        let h = s.length > 0 && s[0]?.currency === o.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: s,
            isOrbExclusive: n,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: h
        }
    },
    h = e => {
        let {
            product: t,
            prioritizedCurrency: l
        } = e, n = (0, r.r_)(), s = i.default.getCurrentUser(), {
            orbPrice: u,
            fiatPrice: o,
            isOrbExclusive: h
        } = d({
            product: t,
            isPremiumUser: a.Ay.canUseCollectibles(s)
        }), A = null != u && null != n && n >= u.amount, {
            shouldCheckoutWithOrbs: p
        } = c({
            orbPrice: u,
            fiatPrice: o,
            isOrbExclusive: h,
            hasSufficientOrbs: A,
            prioritizedCurrency: l ?? null
        });
        return p
    };

function A(e) {
    let {
        product: t,
        isPremiumUser: l,
        prioritizedCurrency: n,
        hasDiscountOffer: i = !1
    } = e, {
        orbPrice: a,
        fiatPrice: s,
        isOrbExclusive: u
    } = d({
        product: t,
        isPremiumUser: l
    }), o = (0, r.kj)(null != a ? a.amount : null);
    return c({
        orbPrice: a,
        fiatPrice: s,
        isOrbExclusive: u,
        hasSufficientOrbs: o,
        hasDiscountOffer: i,
        prioritizedCurrency: n
    })
}