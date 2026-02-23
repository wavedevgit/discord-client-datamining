/** chunk id: 546140, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => s
});
var i = n(311907),
    r = n(617617),
    l = n(287809),
    a = n(840387),
    o = n(639555);
let s = () => {
    let e = l.default.getCurrentUser(),
        t = (0, i.bG)([r.A], () => r.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, a.Z)(),
        s = (0, o.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!s || (n || e?.isStaff() === !0) && t
}