/** Chunk was on web.js **/
/** chunk id: 151476, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048);
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    o = n(430452),
    s = n(731854);

function l() {
    let {
        enabled: e,
        cameraUnavailable: t
    } = (0, a.cf)([o.A], () => {
        var e, t;
        let n = null == (e = null == (t = i()(o.A.getVideoDevices()).values().first()) ? void 0 : t.disabled) || e;
        return {
            enabled: o.A.isVideoEnabled(),
            cameraUnavailable: n || !o.A.supports(s.O5.VIDEO)
        }
    });
    return {
        enabled: e,
        cameraUnavailable: t
    }
}