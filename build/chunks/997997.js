/** Chunk was on web.js **/
/** chunk id: 997997, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    C: () => a,
    K: () => s
});
var r = n(954571),
    i = n(652215),
    a = function(e) {
        return e.STORE_MODAL = "store_modal", e.DETAILS_MODAL = "details_modal", e.STORE_EMBED = "store_embed", e.SKU_EMBED = "sku_embed", e
    }({});

function s(e, t, n) {
    r.default.track(i.HAw.STOREFRONT_COPY_LINK_CLICKED, {
        application_id: e,
        area: t,
        sku_id: n
    })
}