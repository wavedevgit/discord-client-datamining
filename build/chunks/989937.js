/** chunk id: 989937 params = (module,exports,require) **/
var i = n(311907),
    r = n(73153);
let l = new Set;

function a(e) {
    let {
        userActivities: t
    } = e;
    null != t && (l = new Set(t.map(e => e.application_id)))
}
class s extends i.Ay.Store {
    static displayName = "RecentUserActivityStore";
    get currentUserApplicationIds() {
        return l
    }
}
new s(r.h, {
    CONNECTION_OPEN_SUPPLEMENTAL: a,
    CONNECTION_OPEN_STATE_UPDATE: a
})