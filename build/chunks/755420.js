/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => r,
    z4: () => o
}), n(321073);
var i, a = n(64700),
    l = n(652215),
    r = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
l.yTV.DESKTOP, l.yTV.ANDROID, l.yTV.IOS, l.yTV.XBOX, l.yTV.PS4, l.yTV.PS5, l.yTV.SAMSUNG, l.yTV.EMBEDDED, l.yTV.META_QUEST;
let s = [];

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
        } = e, a = new Set(t), r = [];
        return null == t || 0 === t.length || null != n && a.has(n) && i ? s : (a.has(l.yTV.ANDROID) && a.has(l.yTV.IOS) ? r.push("mobile") : a.has(l.yTV.ANDROID) ? r.push("android") : a.has(l.yTV.IOS) && r.push("ios"), (a.has(l.yTV.PS4) || a.has(l.yTV.PS5)) && r.push("playstation"), a.has(l.yTV.XBOX) && r.push("xbox"), a.has(l.yTV.DESKTOP) && r.push("desktop"), a.has(l.yTV.META_QUEST) && r.push("vr"), r)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}