/** chunk id: 447719 params = (module,exports,require) **/
t.d(i, {
    l7: () => d
});
var n = t(64700),
    r = t(178213),
    s = t(594832),
    a = t(721932),
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

function d(e) {
    let {
        totalUnownedWishlistItemCount: i,
        wishlistInDmLength: t,
        displayItems: d,
        recipientName: c
    } = e, _ = (0, n.useMemo)(() => (function(e) {
        let {
            totalUnownedWishlistItemCount: i,
            wishlistInDmLength: t,
            displayItems: n
        } = e;
        return i >= t ? "FULL_WISHLIST" : i > 0 ? "MIXED" : n.length > 0 && n.every(e => {
            let {
                item: i,
                source: t
            } = e;
            return t === s.uS.POPULAR && (0, a.$)(i)
        }) ? "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" : "SHOP_ONLY"
    })({
        totalUnownedWishlistItemCount: i,
        wishlistInDmLength: t,
        displayItems: d
    }), [i, t, d]), u = (0, r.GG)("wishlist_banner_config");
    return (0, n.useMemo)(() => {
        if (u) switch (_) {
            case "FULL_WISHLIST":
                return {
                    title: l.intl.formatToPlainString(l.t["YcL/Vr"], {
                        username: c
                    }), showIcons: !1
                };
            case "MIXED":
                return {
                    title: l.intl.formatToPlainString(l.t.dIDKgi, {
                        username: c
                    }), showIcons: !0
                };
            default:
                return {
                    title: l.intl.string(l.t.BCi1gT), showIcons: !1
                }
        }
        return {
            title: o[_].title,
            subtitle: o[_].getSubtitle(c),
            showIcons: o[_].showIcons
        }
    }, [_, c, u])
}
l.intl.string(l.t["7lZ31J"]), l.intl.string(l.t.pWG4ze), l.intl.string(l.t.SK5rmi), l.intl.string(l.t.BCi1gT)