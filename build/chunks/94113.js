/** chunk id: 94113 params = (module,exports,require) **/
s.d(t, {
    A: () => u
});
var l = s(311907),
    n = s(73153),
    r = s(522435);
s(131955);
let i = {
        recentImageUrls: []
    },
    a = i;

function c(e) {
    let t = (0, r.K7)(e),
        s = a.recentImageUrls.filter(e => e !== t);
    return a = {
        recentImageUrls: [t, ...s].slice(0, 9)
    }, !0
}
class o extends l.Ay.PersistedStore {
    static displayName = "HangoutWindowHistoryStore";
    static persistKey = "HangoutWindowHistoryStore";
    initialize(e) {
        a = e ?? i
    }
    getState() {
        return a
    }
    getRecentImageUrls() {
        return a.recentImageUrls
    }
}
let u = new o(n.h, {
    VOICE_CHANNEL_STATUS_UPDATE: function(e) {
        let {
            status: t
        } = e;
        return !!(null != t && (0, r.TP)(t)) && c(t)
    },
    HANGOUT_WINDOW_IMAGE_SELECTED: function(e) {
        let {
            url: t
        } = e;
        return c(t)
    },
    LOGOUT: function() {
        return a = i, !0
    }
})