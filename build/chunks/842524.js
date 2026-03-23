/** chunk id: 842524 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153);
let l = r();

function r() {
    return {
        ignoreTimestamps: {}
    }
}
class s extends i.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        l = {
            ...r(),
            ignoreTimestamps: t
        }
    }
    getState() {
        return l
    }
    getIgnoreTimestamps() {
        return l.ignoreTimestamps
    }
}
let o = new s(a.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
        let {
            userId: t,
            timestamp: n
        } = e;
        l.ignoreTimestamps[t] = n
    }
})