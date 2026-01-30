/** chunk id: 525505, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c,
    u: () => l
}), n(896048);
var r = n(311907),
    i = n(961350),
    a = n(709710),
    o = n(161518),
    s = n(731854);

function l(e, t) {
    return (0, r.bG)([o.A, i.default], () => {
        for (let n of i.default.getId() === t ? [...e === s.x.STREAM ? o.A.getActiveErrorsOfType(a.iy.SCREENSHARE_OS_ERROR) : [], ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT), ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM)] : [...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), ...o.A.getActiveErrorsOfType(a.iy.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM)])
            if (n.mediaContext === e && n.userId === t) return n
    })
}

function c(e, t) {
    var n;
    return null == (n = l(e, t)) ? void 0 : n.type
}