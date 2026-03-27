/** chunk id: 842524 params = (module,exports,require) **/
r.d(t, {
    A: () => s
});
var o = r(311907),
    n = r(73153);
let i = _();

function _() {
    return {
        ignoreTimestamps: {}
    }
}
class a extends o.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        i = {
            ..._(),
            ignoreTimestamps: t
        }
    }
    getState() {
        return i
    }
    getIgnoreTimestamps() {
        return i.ignoreTimestamps
    }
}
let s = new a(n.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
        let {
            userId: t,
            timestamp: r
        } = e;
        i.ignoreTimestamps[t] = r
    }
})