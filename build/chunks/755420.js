/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => s,
    z4: () => o
}), n(321073);
var i, a = n(64700),
    l = n(652215),
    s = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
l.yTV.DESKTOP, l.yTV.ANDROID, l.yTV.IOS, l.yTV.XBOX, l.yTV.PS4, l.yTV.PS5, l.yTV.SAMSUNG, l.yTV.EMBEDDED, l.yTV.META_QUEST;
let r = [];

function o(e) {
    let {
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    } = e;
    return a.useMemo(() => (function(e) {
        let {
            platforms: t,
            currentPlatform: n,
            isGameLaunchable: i
        } = e, a = new Set(t), s = [];
        return null == t || 0 === t.length || null != n && a.has(n) && i ? r : (a.has(l.yTV.ANDROID) && a.has(l.yTV.IOS) ? s.push("mobile") : a.has(l.yTV.ANDROID) ? s.push("android") : a.has(l.yTV.IOS) && s.push("ios"), (a.has(l.yTV.PS4) || a.has(l.yTV.PS5)) && s.push("playstation"), a.has(l.yTV.XBOX) && s.push("xbox"), a.has(l.yTV.DESKTOP) && s.push("desktop"), a.has(l.yTV.META_QUEST) && s.push("vr"), s)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}