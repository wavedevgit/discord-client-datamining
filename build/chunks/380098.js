/** chunk id: 380098, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(938796);
var i = n(122817),
    s = n(665260),
    l = n(315069),
    a = n(260811),
    r = n(557009),
    o = n(202613),
    d = n(272207),
    c = n(652215),
    u = n(788868);
class _ extends l.A {
    id;
    createdAt;
    currency;
    tax;
    taxInclusive;
    amount;
    amountRefunded;
    status;
    description;
    hasInvoiceURL;
    hasRefundInvoiceURLs;
    downloadableInvoice;
    downloadableRefundInvoices;
    flags;
    paymentSource;
    paymentGateway;
    subscription;
    skuId;
    skuPrice;
    sku;
    premiumRefundDisqualificationReasons;
    entitlements;
    static createFromServer(e) {
        let t = null != e.payment_source ? o.Ay.createFromServer(e.payment_source) : null,
            n = null != e.sku ? a.A.createFromServer(e.sku) : null,
            i = null != e.subscription ? d.A.createFromServer(e.subscription) : null;
        return new _({
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
            subscription: i,
            skuId: e.sku_id,
            skuPrice: e.sku_price,
            sku: n,
            downloadableInvoice: e.downloadable_invoice,
            downloadableRefundInvoices: e.downloadable_refund_invoices,
            hasInvoiceURL: e.has_invoice_url,
            hasRefundInvoiceURLs: e.has_refund_invoice_urls,
            premiumRefundDisqualificationReasons: e.premium_refund_disqualification_reasons,
            entitlements: null != e.entitlements ? e.entitlements.map(e => r.A.createFromServer(e)) : void 0
        })
    }
    constructor(e) {
        super(), this.id = e.id, this.amount = e.amount, this.amountRefunded = e.amountRefunded, this.createdAt = e.createdAt, this.currency = e.currency, this.description = e.description, this.paymentSource = e.paymentSource, this.paymentGateway = e.paymentGateway, this.status = e.status, this.tax = e.tax, this.taxInclusive = e.taxInclusive, this.subscription = e.subscription, this.skuId = e.skuId, this.skuPrice = e.skuPrice, this.sku = e.sku, this.flags = e.flags, this.downloadableInvoice = e.downloadableInvoice, this.downloadableRefundInvoices = e.downloadableRefundInvoices, this.hasInvoiceURL = e.hasInvoiceURL, this.hasRefundInvoiceURLs = e.hasRefundInvoiceURLs, this.premiumRefundDisqualificationReasons = e.premiumRefundDisqualificationReasons, this.entitlements = e.entitlements
    }
    get isPurchasedViaApple() {
        return this.paymentGateway === c.kM_.APPLE
    }
    get isPurchasedViaGoogle() {
        return this.paymentGateway === c.kM_.GOOGLE
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
        return s.Lt(this.flags, 1)
    }
    get isPremiumGift() {
        return this.isGift && Object.values(u.pe).includes(this.skuId)
    }
    get isGuildProductPurchase() {
        return null != this.sku && (this.sku.productLine === c.EZt.GUILD_PRODUCT || s.Lt(this.sku.flags, i.d.GUILD_PRODUCT))
    }
    get isSoftDeletedProduct() {
        return this.sku?.deleted === !0
    }
    get isCollectible() {
        return null != this.sku && this.sku.productLine === c.EZt.COLLECTIBLES
    }
}