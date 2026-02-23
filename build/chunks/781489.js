/** chunk id: 781489, original params: e,t,n (module,exports,require) **/
n.d(t, {
    e: () => a
});
var i = n(311907),
    r = n(287809),
    l = n(616075);

function a(e) {
    let t = (0, i.bG)([r.default], () => r.default.getCurrentUser());
    return {
        isEnabled: l.w.useConfig({
            location: e
        }).enabled,
        hasStaffPrivileges: null != t && (t.hasAnyStaffLevel() || t.isStaffPersonal())
    }
}