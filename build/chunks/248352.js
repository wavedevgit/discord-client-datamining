/** chunk id: 248352, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = [],
    l = s,
    c = e => {
        d(e.shopHome.userDiscounts)
    },
    u = e => {
        d(e.categories.userDiscounts)
    },
    d = e => {
        l = null != e && e.length > 0 ? e : s
    },
    f = e => {
        let t = e.appliedUserDiscounts;
        if (null != t && t.length > 0) {
            let e = l.filter(e => !t.some(t => t.discount.id === e.discountId));
            e.length !== l.length && (l = e)
        }
    },
    p = e => {
        let t = e.discountIds;
        if (t.length > 0) {
            let e = l.filter(e => !t.includes(e.discountId));
            e.length !== l.length && (l = e)
        }
    },
    _ = () => {
        l = s
    };
class h extends(r = i.Ay.Store) {
    getUserDiscounts() {
        return l
    }
    getUserDiscount(e) {
        return l.find(t => t.discountId === e)
    }
}
o(h, "displayName", "CollectiblesUserDiscountStore");
let m = new h(a.h, {
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: c,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: u,
    SKU_PURCHASE_SUCCESS: f,
    COLLECTIBLES_USER_DISCOUNTS_EXPIRED: p,
    LOGOUT: _
})