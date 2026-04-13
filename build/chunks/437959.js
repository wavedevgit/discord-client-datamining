/** chunk id: 437959 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(311907),
    r = n(506774),
    s = n(73153),
    a = n(785796);
let l = "MaintenanceStore",
    o = null,
    c = null,
    u = null;
class d extends i.Ay.Store {
    static displayName = "MaintenanceStore";
    initialize() {
        u = r.w.get(l)
    }
    getIncident() {
        return o
    }
    getScheduledMaintenance() {
        let e = c?.scheduled_until ?? c?.scheduled_for;
        return null != c && c.id !== u && (null == e || Date.now() < new Date(e).getTime()) ? c : null
    }
}
let _ = new d(s.h, {
    CONNECTION_OPEN: function() {
        o = null, a.A.checkScheduledMaintenances()
    },
    STATUS_PAGE_INCIDENT: function(e) {
        o = e.incident
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
        c = e.maintenance
    },
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
        if (null == c) return !1;
        u = c.id, r.w.set(l, u)
    }
})