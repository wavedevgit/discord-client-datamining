/** chunk id: 781489, original params: e,n,t (module,exports,require) **/
t.d(n, {
    e: () => l
});
var r = t(311907),
    i = t(287809),
    a = t(616075);

function l(e) {
    let n = (0, r.bG)([i.default], () => i.default.getCurrentUser());
    return {
        isEnabled: a.w.useConfig({
            location: e
        }).enabled,
        hasStaffPrivileges: null != n && (n.hasAnyStaffLevel() || n.isStaffPersonal())
    }
}