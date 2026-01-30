/** chunk id: 915618, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(723702),
    i = n(734066),
    a = n(731854);

function o(e) {
    let {
        ignorePlatformRestriction: t
    } = i.L_.getCurrentConfig({
        location: "isClipsClientCapable"
    }, {
        autoTrackExposure: !1
    });
    return t || r.isDesktop() && e.getMediaEngine().supports(a.O5.CLIPS)
}