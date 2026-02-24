/** chunk id: 992250, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    r = n(73153),
    l = n(808728),
    a = n(287809),
    s = n(652215);
let o = null;

function d() {
    let e = a.default.getCurrentUser();
    if (null == e || e.mfaEnabled === o) return !1;
    o = e.mfaEnabled
}
class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
        this.waitFor(a.default, l.Ay), this.syncWith([a.default, l.Ay], d)
    }
    isVisible(e) {
        return null != e && e.mfaLevel === s.EkJ.ELEVATED && !1 === o && l.Ay.hasElevatedPermissions(e.id)
    }
}
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function() {
        return !0
    }
})