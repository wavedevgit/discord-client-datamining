/** chunk id: 851466 params = (module,exports,require) **/
var i = n(311907),
    r = n(73153);
let l = {};
class a extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return l[e]
    }
}
new a(r.h, {
    CONNECTION_OPEN: function() {
        l = {}
    },
    STORE_LISTING_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            storeListing: n
        } = e;
        null != t && (l[t] = n.sku.id)
    }
})