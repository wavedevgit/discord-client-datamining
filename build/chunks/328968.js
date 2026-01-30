/** chunk id: 328968, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => T
}), n(896048), n(65821);
var i, a = n(311907),
    o = n(73153),
    s = n(773669),
    l = n(60717),
    c = n(403362);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = {},
    f = {},
    p = {},
    _ = {},
    h = new Set;

function m(e) {
    let t = e.id,
        n = e.sku.id,
        r = d[t],
        i = l.A.createFromServer(e);
    null != r && !r.isSlimDirectoryVersion() && i.isSlimDirectoryVersion() || (!1 === e.published ? (null == p[n] && (p[n] = new Set), p[n].add(t)) : _[n] = t, d[t] = i, h.delete(e.sku.id))
}

function g(e, t) {
    return "".concat(e, ":").concat(t)
}

function E(e) {
    let {
        storeListings: t
    } = e;
    for (let e of t) m(e)
}

function y(e) {
    let {
        storeListing: t,
        channelId: n
    } = e;
    if (null != n) {
        let e = l.A.createFromServer(t);
        f[g(n, e.skuId)] = e, _[e.skuId] = e.id
    } else m(t)
}

function b(e) {
    let {
        giftCode: t
    } = e;
    if (null == t.store_listing) return !1;
    m(t.store_listing)
}

function O(e) {
    let {
        skuId: t
    } = e;
    h.add(t)
}

function v(e) {
    let {
        skuId: t
    } = e;
    h.delete(t)
}

function A() {
    d = {}, _ = {}, p = {}, f = {}, h = new Set
}

function I() {
    if (r === s.default.locale) return !1;
    A(), r = s.default.locale
}
class S extends(i = a.Ay.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], I), r = s.default.locale
    }
    get(e) {
        return d[e]
    }
    getForSKU(e, t) {
        let n = _[e];
        return null != t ? f[g(t, e)] : null != n ? d[n] : null
    }
    getUnpublishedForSKU(e) {
        let t = p[e];
        return null == t ? [] : Array.from(t).map(e => d[e]).filter(c.Vq)
    }
    getForChannel(e, t) {
        return f[g(e, t)]
    }
    isFetchingForSKU(e) {
        return h.has(e)
    }
    getStoreListing(e) {
        let {
            storeListingId: t,
            skuId: n,
            channelId: r,
            isTestMode: i
        } = e;
        if (i && null != n) {
            let e = this.getUnpublishedForSKU(n);
            if (null != e && e.length > 0) return e[0]
        }
        if (null != t) return this.get(t);
        if (null != r) {
            if (null == n) throw Error("getStoreListing with channel expects a skuId");
            return this.getForChannel(r, n)
        }
        return null != n ? this.getForSKU(n) : null
    }
}
u(S, "displayName", "StoreListingStore");
let T = new S(o.h, {
    STORE_LISTINGS_FETCH_START: O,
    STORE_LISTINGS_FETCH_FAIL: v,
    STORE_LISTINGS_FETCH_SUCCESS: E,
    STORE_LISTING_FETCH_SUCCESS: y,
    USER_SETTINGS_PROTO_UPDATE: I,
    APPLICATION_STORE_CLEAR_DATA: A,
    GIFT_CODE_RESOLVE_SUCCESS: b
})