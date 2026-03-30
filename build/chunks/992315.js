/** chunk id: 992315 params = (module,exports,require) **/
r.d(t, {
    A: () => o
});
var a = r(649032),
    n = r(26508),
    s = r(881373),
    i = r(612669),
    l = r(23003);

function o() {
    let e = (0, s.YS)({
            location: "bento_box"
        }).functionalityEnabled,
        t = (0, i.O9)(),
        r = (0, n.DK)(a.W.NITRO, "useBentoBoxes"),
        o = [...e ? [l.NI.THREE_P_PROMOTIONS] : [], ...t ? [l.NI.PREMIUM_GROUP] : [], ...r ? [l.NI.ORB_REWARDS] : []];
    if (o.length > 0) {
        let [e, t = l.NI.SERVER_PROFILES] = o;
        return [e, t, l.NI.REFERRAL_PROGRAM]
    }
    return [l.NI.DISPLAY_NAME_STYLES, l.NI.CUSTOM_THEMES, l.NI.REFERRAL_PROGRAM]
}