/** chunk id: 631467, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => i
});
var r = t(749394),
    o = t(719986),
    n = t(507832);
class i {
    id;
    applicationId;
    name;
    description;
    products;
    createdAt;
    updatedAt;
    unpublishedAt;
    willUnpublishAt;
    styles;
    bannerTextColor;
    heroRanking;
    heroDisplayConfig;
    heroLogoDisplayConfig;
    heroUrl;
    heroRiveUrl;
    heroAnimatedUrl;
    heroLogoUrl;
    heroBannerUrl;
    heroBannerAnimatedUrl;
    catalogBannerUrl;
    catalogBannerRiveUrl;
    catalogBannerAnimatedUrl;
    featuredBlockUrl;
    logoUrl;
    pdpBgUrl;
    wideBannerUrl;
    wideBannerAnimatedUrl;
    mobileHeroUrl;
    mobileHeroAnimatedUrl;
    mobileBannerUrl;
    mobileBgUrl;
    shopButtonBgHoverUrl;
    upsellBannerPopoutUrl;
    upsellBannerUrl;
    heroBlockTitle;
    featuredBlockBody;
    mobileHeroBlockTitle;
    mobileProductsTitle;
    mobileSummary;
    wideBannerTitle;
    wideBannerBody;
    constructor(e) {
        this.id = e.id, this.applicationId = e.applicationId, this.name = e.name, this.description = e.description, this.products = e.products, this.createdAt = e.createdAt, this.updatedAt = e.updatedAt, this.unpublishedAt = e.unpublishedAt, this.willUnpublishAt = e.willUnpublishAt, this.styles = e.styles, this.bannerTextColor = e.bannerTextColor, this.heroRanking = e.heroRanking, this.heroDisplayConfig = e.heroDisplayConfig, this.heroLogoDisplayConfig = e.heroLogoDisplayConfig, this.heroUrl = e.heroUrl, this.heroRiveUrl = e.heroRiveUrl, this.heroAnimatedUrl = e.heroAnimatedUrl, this.heroLogoUrl = e.heroLogoUrl, this.heroBannerUrl = e.heroBannerUrl, this.heroBannerAnimatedUrl = e.heroBannerAnimatedUrl, this.catalogBannerUrl = e.catalogBannerUrl, this.catalogBannerRiveUrl = e.catalogBannerRiveUrl, this.catalogBannerAnimatedUrl = e.catalogBannerAnimatedUrl, this.featuredBlockUrl = e.featuredBlockUrl, this.logoUrl = e.logoUrl, this.pdpBgUrl = e.pdpBgUrl, this.wideBannerUrl = e.wideBannerUrl, this.wideBannerAnimatedUrl = e.wideBannerAnimatedUrl, this.mobileHeroUrl = e.mobileHeroUrl, this.mobileHeroAnimatedUrl = e.mobileHeroAnimatedUrl, this.mobileBannerUrl = e.mobileBannerUrl, this.mobileBgUrl = e.mobileBgUrl, this.shopButtonBgHoverUrl = e.shopButtonBgHoverUrl, this.upsellBannerPopoutUrl = e.upsellBannerPopoutUrl, this.upsellBannerUrl = e.upsellBannerUrl, this.heroBlockTitle = e.heroBlockTitle, this.featuredBlockBody = e.featuredBlockBody, this.mobileHeroBlockTitle = e.mobileHeroBlockTitle, this.mobileProductsTitle = e.mobileProductsTitle, this.mobileSummary = e.mobileSummary, this.wideBannerTitle = e.wideBannerTitle, this.wideBannerBody = e.wideBannerBody
    }
    static fromServer(e) {
        let {
            collection: {
                application_id: l,
                created_at: t,
                updated_at: a,
                unpublished_at: d,
                unpublish_settings: c,
                tenant_metadata: s,
                ...u
            },
            products: h
        } = e;
        return new i({
            ...u,
            applicationId: l,
            products: h.map(e => n.A.fromServer(e)),
            createdAt: new Date(t),
            updatedAt: new Date(a),
            unpublishedAt: null != d ? new Date(d) : void 0,
            willUnpublishAt: c?.will_unpublish_at != null ? new Date(c.will_unpublish_at) : void 0,
            styles: null != s.collectibles.styles ? r.A.fromServer(s.collectibles.styles) : void 0,
            bannerTextColor: s.collectibles.banner_text_color,
            heroRanking: s.collectibles.hero_ranking,
            heroDisplayConfig: null != s.collectibles.hero_display_config ? o.M.fromServer(s.collectibles.hero_display_config) : void 0,
            heroLogoDisplayConfig: null != s.collectibles.hero_logo_display_config ? o.M.fromServer(s.collectibles.hero_logo_display_config) : void 0,
            heroUrl: s.collectibles.hero_url,
            heroRiveUrl: s.collectibles.hero_rive_url,
            heroAnimatedUrl: s.collectibles.hero_animated_url,
            heroLogoUrl: s.collectibles.hero_logo_url,
            heroBannerUrl: s.collectibles.hero_banner_url,
            heroBannerAnimatedUrl: s.collectibles.hero_banner_animated_url,
            catalogBannerUrl: s.collectibles.catalog_banner_url,
            catalogBannerRiveUrl: s.collectibles.catalog_banner_rive_url,
            catalogBannerAnimatedUrl: s.collectibles.catalog_banner_animated_url,
            featuredBlockUrl: s.collectibles.featured_block_url,
            logoUrl: s.collectibles.logo_url,
            pdpBgUrl: s.collectibles.pdp_bg_url,
            wideBannerUrl: s.collectibles.wide_banner_url,
            wideBannerAnimatedUrl: s.collectibles.wide_banner_animated_url,
            mobileHeroUrl: s.collectibles.mobile_hero_url,
            mobileHeroAnimatedUrl: s.collectibles.mobile_hero_animated_url,
            mobileBannerUrl: s.collectibles.mobile_banner_url,
            mobileBgUrl: s.collectibles.mobile_bg_url,
            shopButtonBgHoverUrl: s.collectibles.shop_button_bg_hover_url,
            upsellBannerPopoutUrl: s.collectibles.upsell_banner_popout_url,
            upsellBannerUrl: s.collectibles.upsell_banner_url,
            heroBlockTitle: s.collectibles.hero_block_title,
            featuredBlockBody: s.collectibles.featured_block_body,
            mobileHeroBlockTitle: s.collectibles.mobile_hero_block_title,
            mobileProductsTitle: s.collectibles.mobile_products_title,
            mobileSummary: s.collectibles.mobile_summary,
            wideBannerTitle: s.collectibles.wide_banner_title,
            wideBannerBody: s.collectibles.wide_banner_body
        })
    }
}