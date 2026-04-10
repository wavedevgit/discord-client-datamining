/** chunk id: 851466 params = (module,exports,require) **/
var i = n(311907),
    l = n(73153);
let r = {};
class a extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return r[e]
    }
}
new a(l.h, {
    CONNECTION_OPEN: function() {
        r = {}
    },
    STORE_LISTING_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            storeListing: n
        } = e;
        null != t && (r[t] = n.sku.id)
    }
})