/** Chunk was on web.js **/
/** chunk id: 242120, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(272355),
    i = n(954571),
    a = n(723702),
    o = n(837921),
    s = n(652215);
class l extends r.A {
    _initialize() {
        a.isPlatformEmbedded && (o.Ay.on("APP_PUSH_ANALYTICS", (e, t) => {
            this._handleEventResponse(t)
        }), this.processModuleEvents())
    }
    _terminate() {}
    processModuleEvents() {
        try {
            o.Ay.send("APP_GET_ANALYTICS_EVENTS")
        } catch (e) {
            console.error("[analytics] failed to send analytics events query: ".concat(e))
        }
    }
    _handleEventResponse(e) {
        null != e && e.forEach(e => {
            "cdm" === e.type ? e.name === s.HAw.CDM_LOAD_STATUS || e.name === s.HAw.CDM_READY_COMPLETE ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown cdm analytic event ".concat(e.name)) : "desktop_tti" === e.type && (e.name === s.HAw.DESKTOP_TTI ? i.default.track(e.name, e.data) : console.log("[analytics] received unknown desktop_tti analytic event ".concat(e.name)))
        })
    }
}
let c = new l