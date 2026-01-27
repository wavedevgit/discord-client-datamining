/** Chunk was on web.js **/
/** chunk id: 360966, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u,
    Q: () => c
}), n(896048);
var r = n(562465),
    i = n(439372),
    a = n(869290),
    o = n(652215);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class l extends i.A {
    handleDmSettingsUpsellShow(e) {
        a.A.openDmSettingsUpsellModal(e.guildId)
    }
    constructor(...e) {
        super(...e), s(this, "actions", {
            DM_SETTINGS_UPSELL_SHOW: this.handleDmSettingsUpsellShow
        })
    }
}

function c(e) {
    return r.Bo.post({
        url: o.Rsh.DM_SETTINGS_UPSELL_ACK(e),
        rejectWithError: !1
    })
}
let u = new l