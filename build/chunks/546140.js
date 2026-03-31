/** chunk id: 546140 params = (module,exports,require) **/
i.d(t, {
    L: () => o
});
var n = i(311907),
    a = i(617617),
    l = i(287809),
    s = i(840387),
    r = i(639555);
let o = () => {
    let e = l.default.getCurrentUser(),
        t = (0, n.bG)([a.A], () => a.A.settings.privacy?.inappropriateConversationWarnings?.value ?? !0),
        i = (0, s.Z)(),
        o = (0, r.Rv)({
            location: "useSafetyAlertsSettingOrDefault"
        });
    return !!i && !!o || (i || e?.isStaff() === !0) && t
}