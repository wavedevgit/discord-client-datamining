/** chunk id: 546140, original params: t,e,n (module,exports,require) **/
n.d(e, {
    L: () => u
});
var r = n(311907),
    i = n(617617),
    a = n(287809),
    l = n(840387),
    o = n(639555);
let u = () => {
    let t = a.default.getCurrentUser(),
        e = (0, r.bG)([i.A], () => {
            var t, e, n;
            return null == (t = null == (n = i.A.settings.privacy) || null == (e = n.inappropriateConversationWarnings) ? void 0 : e.value) || t
        }),
        n = (0, l.Z)(),
        u = (0, o.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!u || (n || (null == t ? void 0 : t.isStaff()) === !0) && e
}