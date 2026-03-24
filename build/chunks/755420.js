/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => l,
    z4: () => o
}), n(321073);
var i, a = n(64700),
    r = n(652215),
    l = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
r.yTV.DESKTOP, r.yTV.ANDROID, r.yTV.IOS, r.yTV.XBOX, r.yTV.PS4, r.yTV.PS5, r.yTV.SAMSUNG, r.yTV.EMBEDDED, r.yTV.META_QUEST;
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
        } = e, a = new Set(t), l = [];
        return null == t || 0 === t.length || null != n && a.has(n) && i ? s : (a.has(r.yTV.ANDROID) && a.has(r.yTV.IOS) ? l.push("mobile") : a.has(r.yTV.ANDROID) ? l.push("android") : a.has(r.yTV.IOS) && l.push("ios"), (a.has(r.yTV.PS4) || a.has(r.yTV.PS5)) && l.push("playstation"), a.has(r.yTV.XBOX) && l.push("xbox"), a.has(r.yTV.DESKTOP) && l.push("desktop"), a.has(r.yTV.META_QUEST) && l.push("vr"), l)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}