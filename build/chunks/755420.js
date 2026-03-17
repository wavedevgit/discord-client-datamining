/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => a,
    z4: () => o
}), n(321073);
var i, r = n(64700),
    l = n(652215),
    a = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
l.yTV.DESKTOP, l.yTV.ANDROID, l.yTV.IOS, l.yTV.XBOX, l.yTV.PS4, l.yTV.PS5, l.yTV.SAMSUNG, l.yTV.EMBEDDED, l.yTV.META_QUEST;
let s = [];

function o(e) {
    let {
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    } = e;
    return r.useMemo(() => (function(e) {
        let {
            platforms: t,
            currentPlatform: n,
            isGameLaunchable: i
        } = e, r = new Set(t), a = [];
        return null == t || 0 === t.length || null != n && r.has(n) && i ? s : (r.has(l.yTV.ANDROID) && r.has(l.yTV.IOS) ? a.push("mobile") : r.has(l.yTV.ANDROID) ? a.push("android") : r.has(l.yTV.IOS) && a.push("ios"), (r.has(l.yTV.PS4) || r.has(l.yTV.PS5)) && a.push("playstation"), r.has(l.yTV.XBOX) && a.push("xbox"), r.has(l.yTV.DESKTOP) && a.push("desktop"), r.has(l.yTV.META_QUEST) && a.push("vr"), a)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}