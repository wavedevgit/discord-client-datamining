/** chunk id: 546140, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => o
});
var r = n(311907),
    l = n(617617),
    i = n(287809),
    a = n(840387),
    s = n(639555);
let o = () => {
    let e = i.default.getCurrentUser(),
        t = (0, r.bG)([l.A], () => {
            var e, t, n;
            return null == (e = null == (n = l.A.settings.privacy) || null == (t = n.inappropriateConversationWarnings) ? void 0 : t.value) || e
        }),
        n = (0, a.Z)(),
        o = (0, s.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!o || (n || (null == e ? void 0 : e.isStaff()) === !0) && t
}