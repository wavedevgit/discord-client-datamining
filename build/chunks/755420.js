/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => l,
    z4: () => o
}), n(321073);
var i, r = n(64700),
    a = n(652215),
    l = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
a.yTV.DESKTOP, a.yTV.ANDROID, a.yTV.IOS, a.yTV.XBOX, a.yTV.PS4, a.yTV.PS5, a.yTV.SAMSUNG, a.yTV.EMBEDDED, a.yTV.META_QUEST;
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
        } = e, r = new Set(t), l = [];
        return null == t || 0 === t.length || null != n && r.has(n) && i ? s : (r.has(a.yTV.ANDROID) && r.has(a.yTV.IOS) ? l.push("mobile") : r.has(a.yTV.ANDROID) ? l.push("android") : r.has(a.yTV.IOS) && l.push("ios"), (r.has(a.yTV.PS4) || r.has(a.yTV.PS5)) && l.push("playstation"), r.has(a.yTV.XBOX) && l.push("xbox"), r.has(a.yTV.DESKTOP) && l.push("desktop"), r.has(a.yTV.META_QUEST) && l.push("vr"), l)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}