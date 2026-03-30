/** chunk id: 851466 params = (module,exports,require) **/
var i = n(311907),
    l = n(73153);
let a = {};
class r extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return a[e]
    }
}
new r(l.h, {
    CONNECTION_OPEN: function() {
        a = {}
    },
    STORE_LISTING_FETCH_SUCCESS: function(e) {
        let {
            channelId: t,
            storeListing: n
        } = e;
        null != t && (a[t] = n.sku.id)
    }
})