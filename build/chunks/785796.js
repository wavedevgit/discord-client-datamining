/** Chunk was on 93140 **/
/** chunk id: 785796, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(896048);
var r = n(562465),
    i = n(73153),
    l = n(652215);
let o = "".concat(l.Joy, "/api/v2/scheduled-maintenances"),
    a = "".concat(l.Joy, "/api/v2/incidents/unresolved.json"),
    s = {
        checkIncidents() {
            Promise.all([r.Bo.get({
                url: "".concat(o, "/active.json"),
                rejectWithError: !0
            }), r.Bo.get(a)]).then(e => {
                let [t, n] = e, [r] = t.body.scheduled_maintenances, [l] = n.body.incidents;
                i.h.dispatch({
                    type: "STATUS_PAGE_INCIDENT",
                    incident: l || r
                })
            })
        },
        checkScheduledMaintenances() {
            r.Bo.get({
                url: "".concat(o, "/upcoming.json"),
                rejectWithError: !0
            }).then(e => {
                let [t] = e.body.scheduled_maintenances;
                i.h.dispatch({
                    type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                    maintenance: t
                })
            })
        },
        ackScheduledMaintenance() {
            i.h.dispatch({
                type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
            })
        }
    }