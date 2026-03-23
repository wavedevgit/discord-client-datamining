/** chunk id: 785796 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => o
});
var i = n(562465),
    r = n(73153),
    s = n(652215);
let l = `${s.Joy}/api/v2/scheduled-maintenances`,
    a = `${s.Joy}/api/v2/incidents/unresolved.json`,
    o = {
        checkIncidents() {
            Promise.all([i.Bo.get({
                url: `${l}/active.json`,
                rejectWithError: !0
            }), i.Bo.get(a)]).then(t => {
                let [e, n] = t, [i] = e.body.scheduled_maintenances, [s] = n.body.incidents;
                r.h.dispatch({
                    type: "STATUS_PAGE_INCIDENT",
                    incident: s || i
                })
            })
        },
        checkScheduledMaintenances() {
            i.Bo.get({
                url: `${l}/upcoming.json`,
                rejectWithError: !0
            }).then(t => {
                let [e] = t.body.scheduled_maintenances;
                r.h.dispatch({
                    type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                    maintenance: e
                })
            })
        },
        ackScheduledMaintenance() {
            r.h.dispatch({
                type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
            })
        }
    }