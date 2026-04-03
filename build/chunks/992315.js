/** chunk id: 992315 params = (module,exports,require) **/
r.d(t, {
    A: () => d
});
var n = r(649032),
    a = r(26508),
    i = r(881373),
    s = r(612669),
    l = r(23003);

function d() {
    let e = (0, i.YS)({
            location: "bento_box"
        }).functionalityEnabled,
        t = (0, s.O9)(),
        r = (0, a.DK)(n.W.NITRO, "useBentoBoxes"),
        d = [...e ? [l.NI.THREE_P_PROMOTIONS] : [], ...t ? [l.NI.PREMIUM_GROUP] : [], ...r ? [l.NI.ORB_REWARDS] : []];
    if (d.length > 0) {
        let [e, t = l.NI.SERVER_PROFILES] = d;
        return [e, t, l.NI.REFERRAL_PROGRAM]
    }
    return [l.NI.DISPLAY_NAME_STYLES, l.NI.CUSTOM_THEMES, l.NI.REFERRAL_PROGRAM]
}