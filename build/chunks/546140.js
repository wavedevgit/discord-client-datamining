/** chunk id: 546140 params = (module,exports,require) **/
n.d(e, {
    L: () => d
});
var i = n(311907),
    r = n(617617),
    l = n(287809),
    a = n(840387),
    o = n(639555);
let d = () => {
    let t = l.default.getCurrentUser(),
        e = (0, i.bG)([r.A], () => r.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        n = (0, a.Z)(),
        d = (0, o.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!n && !!d || (n || t?.isStaff() === !0) && e
}