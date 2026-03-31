/** chunk id: 385113 params = (module,exports,require) **/
n.d(t, {
    A: () => g,
    e: () => s
});
var i, l = n(311907),
    a = n(73153),
    s = ((i = {}).NOT_FETCHED = "NOT_FETCHED", i.FETCHING = "FETCHING", i.SUCCESS = "SUCCESS", i.FAILURE = "FAILURE", i);
let r = {},
    o = {},
    d = "NOT_FETCHED",
    c = [];
class u extends l.Ay.Store {
    static displayName = "ApplicationWidgetConfigStore";
    getConfig(e) {
        return r[e]?.[0] ?? void 0
    }
    getConfigs(e) {
        return r[e] ?? []
    }
    getFetchState(e) {
        return o[e] ?? "NOT_FETCHED"
    }
    getFeaturedFetchState() {
        return d
    }
    getAllConfigsByApplication() {
        return r
    }
    getFeaturedApplicationIds() {
        return c
    }
}
let g = new u(a.h, {
    LOGOUT: function() {
        r = {}, o = {}, d = "NOT_FETCHED", c = []
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_START: function(e) {
        d = "FETCHING"
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_SUCCESS: function(e) {
        d = "SUCCESS", c = e.applicationIds, r = {
            ...r,
            ...e.configs
        }, o = {
            ...o,
            ...Object.fromEntries(e.applicationIds.map(e => [e, "SUCCESS"]))
        }
    },
    APPLICATION_WIDGET_CONFIG_FEATURED_FETCH_FAILURE: function() {
        d = "FAILURE"
    },
    APPLICATION_WIDGET_CONFIG_FETCH_START: function(e) {
        o = {
            ...o,
            [e.applicationId]: "FETCHING"
        }
    },
    APPLICATION_WIDGET_CONFIG_FETCH_SUCCESS: function(e) {
        r = {
            ...r,
            [e.applicationId]: e.configs
        }, o = {
            ...o,
            [e.applicationId]: "SUCCESS"
        }
    },
    APPLICATION_WIDGET_CONFIG_FETCH_FAILURE: function(e) {
        o = {
            ...o,
            [e.applicationId]: "FAILURE"
        }
    }
})