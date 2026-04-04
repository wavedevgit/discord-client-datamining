/** chunk id: 851466 params = (module,exports,require) **/
var i = n(311907),
    a = n(73153);
let l = {};
class r extends i.Ay.Store {
    static displayName = "ChannelSKUStore";
    getSkuIdForChannel(e) {
        return l[e]
    }
}
new r(a.h, {
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