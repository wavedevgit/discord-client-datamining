/** chunk id: 975648, original params: e,t,n (module,exports,require) **/
let i;
n.d(t, {
    A: () => o
});
var s = n(311907),
    a = n(73153);
let r = !1;
class l extends s.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i
    }
    get requestingHarvest() {
        return r
    }
}
let o = new l(a.h, {
    CONNECTION_OPEN: function() {
        i = void 0
    },
    UPDATE_DATA_HARVEST_TYPE: function(e) {
        let {
            harvestType: t
        } = e;
        r = !1, i = t
    },
    LOAD_DATA_HARVEST_TYPE_START: function() {
        r = !0
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function() {
        r = !1
    },
    LOGOUT: function() {
        r = !1, i = null
    }
})