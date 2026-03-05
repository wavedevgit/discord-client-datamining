/** chunk id: 842524, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
var n = r(311907),
    o = r(73153);
let i = a();

function a() {
    return {
        ignoreTimestamps: {}
    }
}
class _ extends n.Ay.PersistedStore {
    static displayName = "IgnoreNoticeStore";
    static persistKey = "IgnoreNoticeStore";
    initialize(e) {
        let t = e?.ignoreTimestamps ?? {};
        i = {
            ...a(),
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
let l = new _(o.h, {
    RELATIONSHIP_IGNORE_USER_SUCCESS: function(e) {
        let {
            userId: t,
            timestamp: r
        } = e;
        i.ignoreTimestamps[t] = r
    }
})