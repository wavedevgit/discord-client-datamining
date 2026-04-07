/** chunk id: 546140 params = (module,exports,require) **/
n.d(e, {
    L: () => o
});
var i = n(311907),
    l = n(617617),
    r = n(287809),
    s = n(840387),
    a = n(639555);
let o = () => {
    let t = r.default.getCurrentUser(),
        e = (0, i.bG)([l.A], () => l.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, s.Z)(),
        o = (0, a.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!o || (n || t?.isStaff() === !0) && e
}