/** Chunk was on 95782 **/
/** chunk id: 204050, original params: e,t,n (module,exports,require) **/
n.d(t, {
    i: () => c,
    p: () => a
}), n(747238), n(812715), n(65821);
var s = n(299855),
    r = n.n(s),
    l = n(77729),
    i = n(723702);
let o = /\{65E8773D-8F56-11D0-A3B9-00A0C9223196\}/i;

function a() {
    return !!(0, i.isWindows)() && !!i.isPlatformEmbedded && r().satisfies(l.A.os.release, ">=10.0.22000")
}

function c(e) {
    return (0, i.getPlatform)() === i.PlatformTypes.WINDOWS ? "ms-settings:camera" + (null != e ? "?cameraId=".concat(encodeURIComponent(e.replace(o, "{E5323777-F976-4f5b-9B55-B94699C46E44}"))) : "") : ""
}