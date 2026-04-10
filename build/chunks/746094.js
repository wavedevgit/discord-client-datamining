/** chunk id: 746094 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(73153),
    l = n(272355),
    r = n(627363),
    a = n(800828),
    s = n(652215);
class o extends l.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
    handlePostConnectionOpen = () => {
        let e = a.A.getGameRelationships(),
            t = new Set;
        e.values().forEach(e => {
            e.type === s.eA$.PENDING_INCOMING && t.add(e.applicationId)
        }), r.Ay.fetchApplications(Array.from(t))
    };
    destroy() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen)
    }
}
let d = new o