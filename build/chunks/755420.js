/** chunk id: 755420 params = (module,exports,require) **/
n.d(t, {
    FL: () => s,
    z4: () => o
}), n(321073);
var i, l = n(64700),
    r = n(652215),
    s = ((i = {}).DESKTOP = "desktop", i.MOBILE = "mobile", i.ANDROID = "android", i.IOS = "ios", i.PLAYSTATION = "playstation", i.XBOX = "xbox", i.VR = "vr", i);
r.yTV.DESKTOP, r.yTV.ANDROID, r.yTV.IOS, r.yTV.XBOX, r.yTV.PS4, r.yTV.PS5, r.yTV.SAMSUNG, r.yTV.EMBEDDED, r.yTV.META_QUEST;
let a = [];

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
        } = e, l = new Set(t), s = [];
        return null == t || 0 === t.length || null != n && l.has(n) && i ? a : (l.has(r.yTV.ANDROID) && l.has(r.yTV.IOS) ? s.push("mobile") : l.has(r.yTV.ANDROID) ? s.push("android") : l.has(r.yTV.IOS) && s.push("ios"), (l.has(r.yTV.PS4) || l.has(r.yTV.PS5)) && s.push("playstation"), l.has(r.yTV.XBOX) && s.push("xbox"), l.has(r.yTV.DESKTOP) && s.push("desktop"), l.has(r.yTV.META_QUEST) && s.push("vr"), s)
    })({
        platforms: t,
        currentPlatform: n,
        isGameLaunchable: i
    }), [n, t, i])
}