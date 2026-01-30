/** chunk id: 684266, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(65821);
var r = n(743445),
    i = n(565150),
    a = n(515718),
    o = n(583954);
class s {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "png",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n)
    }
    async exportCanvas(e, t) {
        let {
            format: n,
            fileType: s = "png",
            quality: l = 1,
            fileName: c
        } = t;
        if (n === o.z5.Base64) return this.toDataUrl(e, s, l);
        if (n === o.z5.Blob) {
            let t = this.toDataUrl(e, s, l);
            return (0, a.aU)(t)
        }
        if (n === o.z5.File) {
            let t = this.toDataUrl(e, s, l);
            return await (0, a.bX)(t, c, "image/png")
        }
        if (n === o.z5.CloudUpload) {
            let {
                channelId: n
            } = t, o = this.toDataUrl(e, s, l), u = await (0, a.bX)(o, c, "image/png");
            return new r.bK({
                file: u,
                platform: i.xz.WEB,
                isThumbnail: !1,
                origin: "unknown:canvas_export"
            }, n)
        }
        throw Error("DiscordCanvas: ".concat(n, " is not a valid export format."))
    }
}
let l = s