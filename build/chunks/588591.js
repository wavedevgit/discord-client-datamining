/** chunk id: 588591 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(311907),
    r = n(73153);
let a = {},
    i = [];

function s() {
    a = {}
}
class d extends l.Ay.Store {
    static displayName = "GameServerRegionStore";
    getRegionStateForPingUrl(e) {
        if (null != e) return a[e]
    }
    getRegionState() {
        return a
    }
    getRegions() {
        return i
    }
}
let o = new d(r.h, {
    LOGOUT: s,
    GAME_SERVER_REGION_PING_STATE_UPDATE: function(e) {
        let {
            pingUrl: t,
            state: n
        } = e;
        a = {
            ...a,
            [t]: n
        }
    },
    GAME_SERVER_REGION_PING_STATE_RESET: s,
    GAME_SERVER_FETCH_REGIONS_SUCCESS: function(e) {
        let {
            regions: t
        } = e;
        i = t
    }
})