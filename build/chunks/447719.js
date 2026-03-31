/** chunk id: 447719 params = (module,exports,require) **/
t.d(i, {
    l7: () => c
});
var r = t(64700),
    n = t(178213),
    a = t(594832),
    s = t(721932),
    l = t(985018);
let o = {
    FULL_WISHLIST: {
        title: l.intl.string(l.t["7lZ31J"]),
        getSubtitle: e => l.intl.formatToPlainString(l.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    },
    MIXED: {
        title: l.intl.string(l.t.SK5rmi),
        getSubtitle: e => l.intl.formatToPlainString(l.t.dIDKgi, {
            username: e
        }),
        showIcons: !0
    },
    SHOP_ONLY: {
        title: l.intl.string(l.t.SK5rmi),
        getSubtitle: e => l.intl.formatToPlainString(l.t.wyMp1j, {
            username: e
        }),
        showIcons: !1
    },
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: {
        title: l.intl.string(l.t.BCi1gT),
        getSubtitle: e => l.intl.formatToPlainString(l.t.BjEX38, {
            username: e
        }),
        showIcons: !1
    }
};

function c(e) {
    let {
        totalUnownedWishlistItemCount: i,
        wishlistInDmLength: t,
        displayItems: c,
        recipientName: d
    } = e, _ = (0, r.useMemo)(() => (function(e) {
        let {
            totalUnownedWishlistItemCount: i,
            wishlistInDmLength: t,
            displayItems: r
        } = e;
        return i >= t ? "FULL_WISHLIST" : i > 0 ? "MIXED" : r.length > 0 && r.every(e => {
            let {
                item: i,
                source: t
            } = e;
            return t === a.uS.POPULAR && (0, s.$)(i)
        }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY"
    })({
        totalUnownedWishlistItemCount: i,
        wishlistInDmLength: t,
        displayItems: c
    }), [i, t, c]), m = (0, n.GG)("wishlist_banner_config");
    return (0, r.useMemo)(() => {
        if (m) switch (_) {
            case "FULL_WISHLIST":
                return {
                    title: l.intl.formatToPlainString(l.t["YcL/Vr"], {
                        username: d
                    }), showIcons: !1
                };
            case "MIXED":
                return {
                    title: l.intl.formatToPlainString(l.t.dIDKgi, {
                        username: d
                    }), showIcons: !0
                };
            default:
                return {
                    title: l.intl.string(l.t.BCi1gT), showIcons: !1
                }
        }
        return {
            title: o[_].title,
            subtitle: o[_].getSubtitle(d),
            showIcons: o[_].showIcons
        }
    }, [_, d, m])
}
l.intl.string(l.t["7lZ31J"]), l.intl.string(l.t.pWG4ze), l.intl.string(l.t.SK5rmi), l.intl.string(l.t.BCi1gT)