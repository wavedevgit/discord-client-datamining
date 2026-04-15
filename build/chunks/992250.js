/** chunk id: 992250 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    l = n(73153),
    a = n(808728),
    r = n(287809),
    s = n(652215);
let o = null;

function d() {
    let e = r.default.getCurrentUser();
    if (null == e || e.mfaEnabled === o) return !1;
    o = e.mfaEnabled
}
class c extends i.Ay.Store {
    static displayName = "GuildMFAWarningStore";
    initialize() {
        this.waitFor(r.default, a.Ay), this.syncWith([r.default, a.Ay], d)
    }
    isVisible(e) {
        return null != e && e.mfaLevel === s.EkJ.ELEVATED && !1 === o && a.Ay.hasElevatedPermissions(e.id)
    }
}
let u = new c(l.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function() {
        return !0
    }
})