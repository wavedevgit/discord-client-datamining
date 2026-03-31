/** chunk id: 785796 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(562465),
    l = n(73153),
    r = n(652215);
let s = `${r.Joy}/api/v2/scheduled-maintenances`,
    a = `${r.Joy}/api/v2/incidents/unresolved.json`,
    o = {
        checkIncidents() {
            Promise.all([i.Bo.get({
                url: `${s}/active.json`,
                rejectWithError: !0
            }), i.Bo.get(a)]).then(t => {
                let [e, n] = t, [i] = e.body.scheduled_maintenances, [r] = n.body.incidents;
                l.h.dispatch({
                    type: "STATUS_PAGE_INCIDENT",
                    incident: r || i
                })
            })
        },
        checkScheduledMaintenances() {
            i.Bo.get({
                url: `${s}/upcoming.json`,
                rejectWithError: !0
            }).then(t => {
                let [e] = t.body.scheduled_maintenances;
                l.h.dispatch({
                    type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                    maintenance: e
                })
            })
        },
        ackScheduledMaintenance() {
            l.h.dispatch({
                type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
            })
        }
    }