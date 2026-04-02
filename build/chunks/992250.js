/** chunk id: 992250 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(311907),
    a = n(73153),
    l = n(808728),
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
        this.waitFor(r.default, l.Ay), this.syncWith([r.default, l.Ay], d)
    }
    isVisible(e) {
        return null != e && e.mfaLevel === s.EkJ.ELEVATED && !1 === o && l.Ay.hasElevatedPermissions(e.id)
    }
}
let u = new c(a.h, {
    CONNECTION_OPEN: d,
    GUILD_UPDATE: function() {
        return !0
    }
})