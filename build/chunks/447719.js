/** chunk id: 447719, original params: e,i,t (module,exports,require) **/
t.d(i, {
    K: () => l,
    a: () => s
});
var n = t(594832),
    r = t(721932),
    a = t(985018);
let s = {
    FULL_WISHLIST: {
        title: a.intl.string(a.t["7lZ31J"]),
        getSubtitle: e => a.intl.formatToPlainString(a.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    },
    MIXED: {
        title: a.intl.string(a.t.SK5rmi),
        getSubtitle: e => a.intl.formatToPlainString(a.t.dIDKgi, {
            username: e
        }),
        showIcons: !0
    },
    SHOP_ONLY: {
        title: a.intl.string(a.t.SK5rmi),
        getSubtitle: e => a.intl.formatToPlainString(a.t.wyMp1j, {
            username: e
        }),
        showIcons: !1
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: a.intl.string(a.t.BCi1gT),
        getSubtitle: e => a.intl.formatToPlainString(a.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    }
};

function l(e) {
    let {
        totalUnownedWishlistItemCount: i,
        wishlistInDmLength: t,
        displayItems: a
    } = e;
    return i >= t ? "FULL_WISHLIST" : i > 0 ? "MIXED" : a.length > 0 && a.every(e => {
        let {
            item: i,
            source: t
        } = e;
        return t === n.uS.POPULAR && (0, r.$)(i)
    }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY"
}