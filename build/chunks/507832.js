/** chunk id: 507832 params = (module,exports,require) **/
l.d(t, {
    A: () => c
});
var r = l(575593),
    n = l(696444),
    i = l(474012),
    o = l(986630),
    a = l(260811),
    s = l(652215),
    d = l(758836);
class c {
    id;
    skuIds;
    name;
    summary;
    options;
    createdAt;
    updatedAt;
    skus;
    primaryCollectionId;
    constructor(e) {
        this.id = e.id, this.skuIds = e.skuIds, this.name = e.name, this.summary = e.summary, this.options = e.options, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.skus = e.skus, this.primaryCollectionId = e.primaryCollectionId
    }
    static fromServer(e) {
        let {
            sku_ids: t,
            options: l,
            created_at: r,
            updated_at: n,
            skus: i,
            tenant_metadata: o,
            ...s
        } = e;
        return new c({
            ...s,
            skuIds: t,
            options: l.map(e => ({
                name: e.name,
                optionValues: e.option_values
            })),
            createdAt: new Date(r),
            updatedAt: new Date(n),
            skus: i.map(e => a.A.createFromServer(e)),
            primaryCollectionId: o.collectibles.primary_collection_id
        })
    }
    toCollectiblesProduct() {
        let e = this.skus[0];
        if (null == e) return;
        let t = e.tenantMetadata?.collectibles;
        if (null == t) return;
        let l = this.skus.length > 1 ? r.R.VARIANTS_GROUP : t.type,
            {
                items: a,
                item: c
            } = (0, i.T)(e) ?? {};
        return new o.A({
            storeListingId: e.id,
            skuId: e.id,
            name: this.name,
            summary: this.summary,
            unpublishedAt: void 0,
            styles: void 0,
            type: l,
            premiumType: t.premiumType === s.oA2 ? null : t.premiumType,
            items: a ?? [c].filter(e => null != e),
            categorySkuId: t.categorySkuId ?? "",
            isCategoryReward: d.MS.some(t => {
                let {
                    rewardSkuId: l
                } = t;
                return l === e.id
            }),
            prices: e.prices,
            variants: l === r.R.VARIANTS_GROUP ? this.skus.map(t => {
                let l = t.tenantMetadata?.collectibles;
                if (null == l) return null;
                let {
                    items: r,
                    item: n
                } = (0, i.T)(t) ?? {}, [a] = t.selectedOptions;
                return new o.x({
                    baseVariantName: this.name,
                    baseVariantSkuId: e.id,
                    variantLabel: a?.optionValue ?? "",
                    variantValue: l.optionSelectorDisplayValue ?? "",
                    storeListingId: t.id,
                    skuId: t.id,
                    name: t.name,
                    summary: t.summary,
                    unpublishedAt: void 0,
                    styles: void 0,
                    type: l.type,
                    premiumType: l.premiumType === s.oA2 ? null : l.premiumType,
                    items: r ?? [n].filter(e => null != e),
                    categorySkuId: l.categorySkuId ?? "",
                    isCategoryReward: d.MS.some(e => {
                        let {
                            rewardSkuId: l
                        } = e;
                        return l === t.id
                    }),
                    prices: t.prices,
                    googleSkuIds: t.googleSkuIds ?? {
                        [s.lid.MOBILE]: "",
                        [s.lid.MOBILE_PREMIUM_TIER_2]: ""
                    },
                    eligibleOffers: void 0,
                    variants: void 0,
                    bundledProducts: void 0
                })
            }).filter(e => null != e) : void 0,
            googleSkuIds: e.googleSkuIds ?? {
                [s.lid.MOBILE]: "",
                [s.lid.MOBILE_PREMIUM_TIER_2]: ""
            },
            eligibleOffers: void 0,
            bundledProducts: e.bundledSkus?.map(e => {
                let t = e.tenantMetadata?.collectibles;
                return null == t ? null : new n.A({
                    type: t.type,
                    premiumType: t.premiumType === s.oA2 ? null : t.premiumType,
                    name: e.name,
                    skuId: e.id,
                    summary: e.summary,
                    prices: e.prices
                })
            }).filter(e => null != e)
        })
    }
}