/** chunk id: 57020 params = (module,exports,require) **/
i.d(t, {
    A: () => I,
    F: () => h
}), i(321073);
var r = i(855104),
    l = i(270051),
    n = i(287809),
    s = i(927578),
    u = i(623373),
    o = i(561769),
    a = i(652215);
let d = e => {
        let {
            product: t,
            isPremiumUser: i
        } = e, {
            enabled: r
        } = (0, l.m)({
            location: "getShopBasePricingData"
        }), n = r ? (0, u.CW)({
            product: t,
            isPremiumUser: i
        }) : void 0;
        return {
            orbPrice: n,
            fiatPrice: (0, u.$K)({
                product: t,
                isPremiumUser: i
            }) ?? void 0,
            isOrbExclusive: !!r && (0, u.Ab)(t)
        }
    },
    c = e => {
        let {
            hasSufficientOrbs: t,
            orbPrice: i,
            fiatPrice: r,
            isOrbExclusive: l,
            hasDiscountOffer: n = !1,
            prioritizedCurrency: s = null
        } = e, u = [], d = s === o.Hi.ORBS, c = s === o.Hi.FIAT;
        null != i && null != r ? d || !c && t && !n ? u.push(i, r) : u.push(r, i) : null != i ? u.push(i) : null != r && u.push(r);
        let I = u.length > 0 && u[0]?.currency === a.Yri.DISCORD_ORB;
        return {
            checkoutEligiblePrices: u,
            isOrbExclusive: l,
            hasSufficientOrbs: t,
            shouldCheckoutWithOrbs: I
        }
    },
    I = e => {
        let {
            product: t,
            prioritizedCurrency: i
        } = e, l = (0, r.r_)(), u = n.default.getCurrentUser(), {
            orbPrice: o,
            fiatPrice: a,
            isOrbExclusive: I
        } = d({
            product: t,
            isPremiumUser: s.Ay.canUseCollectibles(u)
        }), h = null != o && null != l && l >= o.amount, {
            shouldCheckoutWithOrbs: g
        } = c({
            orbPrice: o,
            fiatPrice: a,
            isOrbExclusive: I,
            hasSufficientOrbs: h,
            prioritizedCurrency: i ?? null
        });
        return g
    };

function h(e) {
    let {
        product: t,
        isPremiumUser: i,
        prioritizedCurrency: l,
        hasDiscountOffer: n = !1
    } = e, {
        orbPrice: s,
        fiatPrice: u,
        isOrbExclusive: o
    } = d({
        product: t,
        isPremiumUser: i
    }), a = (0, r.kj)(null != s ? s.amount : null);
    return c({
        orbPrice: s,
        fiatPrice: u,
        isOrbExclusive: o,
        hasSufficientOrbs: a,
        hasDiscountOffer: n,
        prioritizedCurrency: l
    })
}