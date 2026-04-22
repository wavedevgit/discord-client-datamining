/** chunk id: 546140 params = (module,exports,require) **/
n.d(t, {
    L: () => o
});
var i = n(311907),
    l = n(617617),
    s = n(287809),
    a = n(840387),
    r = n(639555);
let o = () => {
    let e = s.default.getCurrentUser(),
        t = (0, i.bG)([l.A], () => l.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, a.Z)(),
        o = (0, r.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!o || (n || e?.isStaff() === !0) && t
}