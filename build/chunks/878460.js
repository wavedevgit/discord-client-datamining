/** chunk id: 878460 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(311907),
    s = n(73153);
let l = {},
    a = null;

function r() {
    l = {}, a = null
}
class o extends i.Ay.Store {
    static displayName = "EmailSettingsStore";
    getEmailSettings() {
        return {
            categories: l,
            initialized: a
        }
    }
}
let d = new o(s.h, {
    CONNECTION_OPEN: r,
    LOGOUT: r,
    EMAIL_SETTINGS_FETCH_SUCCESS: function(e) {
        let {
            settings: t
        } = e;
        l = t.categories, a = t.initialized
    },
    EMAIL_SETTINGS_UPDATE_SUCCESS: function(e) {
        let {
            settings: t
        } = e;
        l = t.categories
    },
    EMAIL_SETTINGS_UPDATE: function(e) {
        let {
            updates: t
        } = e;
        l = {
            ...l,
            ...t
        }
    }
})