/** chunk id: 380098, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(228524), n(938796);
var r = n(122817),
    i = n(665260),
    l = n(315069),
    s = n(557009),
    a = n(202613),
    o = n(731935),
    c = n(272207),
    d = n(652215),
    u = n(788868);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class p extends l.A {
    static createFromServer(e) {
        let t = null != e.payment_source ? a.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? o.A.createFromServer(e.sku) : null,
            r = null != e.subscription ? c.A.createFromServer(e.subscription) : null;
        return new p({
            id: e.id,
            createdAt: new Date(e.created_at),
            currency: e.currency,
            tax: e.tax,
            taxInclusive: e.tax_inclusive,
            amount: e.amount,
            amountRefunded: e.amount_refunded,
            status: e.status,
            metadata: e.metadata,
            description: e.description,
            paymentSource: t,
            paymentGateway: e.payment_gateway,
            flags: e.flags,
            subscription: r,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map(e => s.A.createFromServer(e)) : void 0
        })
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === d.kM_.APPLE
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === d.kM_.GOOGLE
    }
    get isPurchasedExternally() {
        return this.isPurchasedViaApple || this.isPurchasedViaGoogle
    }
    get isSubscription() {
        return null != this.subscription
    }
    get isPremiumSubscription() {
        return null != this.subscription && u.JM.has(this.subscription.planId)
    }
    get isPremiumGuildSubscription() {
        return null != this.subscription && null != this.subscription.additionalPlans.find(e => {
            let {
                planId: t
            } = e;
            return u.pW.has(t)
        })
    }
    get isGift() {
        return i.Lt(this.flags, 1)
    }
    get isPremiumGift() {
        return this.isGift && Object.values(u.pe).includes(this.skuId)
    }
    get isGuildProductPurchase() {
        return null != this.sku && (this.sku.productLine === d.EZt.GUILD_PRODUCT || i.Lt(this.sku.flags, r.d.GUILD_PRODUCT))
    }
    get isSoftDeletedProduct() {
        var e;
        return (null == (e = this.sku) ? void 0 : e.deleted) === !0
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === d.EZt.COLLECTIBLES
    }
    constructor(e) {
        super(), _(this, "id", void 0), _(this, "createdAt", void 0), _(this, "currency", void 0), _(this, "tax", void 0), _(this, "taxInclusive", void 0), _(this, "amount", void 0), _(this, "amountRefunded", void 0), _(this, "status", void 0), _(this, "description", void 0), _(this, "hasInvoiceURL", void 0), _(this, "hasRefundInvoiceURLs", void 0), _(this, "downloadableInvoice", void 0), _(this, "downloadableRefundInvoices", void 0), _(this, "flags", void 0), _(this, "paymentSource", void 0), _(this, "paymentGateway", void 0), _(this, "subscription", void 0), _(this, "skuId", void 0), _(this, "skuPrice", void 0), _(this, "sku", void 0), _(this, "premiumRefundDisqualificationReasons", void 0), _(this, "entitlements", void 0), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.hasInvoiceURL = e.hasInvoiceURL, this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons, this.entitlements = e.entitlements
    }
}