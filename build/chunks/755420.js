/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => a,
    z4: () => o
}), n(321073);
var i, l = n(64700),
    s = n(652215),
    a = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
s.yTV.DESKTOP, s.yTV.ANDROID, s.yTV.IOS, s.yTV.XBOX, s.yTV.PS4, s.yTV.PS5, s.yTV.SAMSUNG, s.yTV.EMBEDDED, s.yTV.META_QUEST;
let r = [];

function o(e) {
    let {
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    } = e;
    return l.useMemo(() => (function(e) {
        let {
            platforms: t,
            currentPlatform: n,
            isGameLaunchable: i
        } = e, l = new Set(t), a = [];
        return null == t || 0 === t.length || null != n && l.has(n) && i ? r : (l.has(s.yTV.ANDROID) && l.has(s.yTV.IOS) ? a.push("mobile") : l.has(s.yTV.ANDROID) ? a.push("android") : l.has(s.yTV.IOS) && a.push("ios"), (l.has(s.yTV.PS4) || l.has(s.yTV.PS5)) && a.push("playstation"), l.has(s.yTV.XBOX) && a.push("xbox"), l.has(s.yTV.DESKTOP) && a.push("desktop"), l.has(s.yTV.META_QUEST) && a.push("vr"), a)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}