/** chunk id: 546140 params = (module,exports,require) **/
i.d(e, {
    L: () => o
});
var n = i(311907),
    l = i(617617),
    r = i(287809),
    s = i(840387),
    a = i(639555);
let o = () => {
    let t = r.default.getCurrentUser(),
        e = (0, n.bG)([l.A], () => l.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        i = (0, s.Z)(),
        o = (0, a.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!i && !!o || (i || t?.isStaff() === !0) && e
}