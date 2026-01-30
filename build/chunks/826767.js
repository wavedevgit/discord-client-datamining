/** chunk id: 826767, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(222823),
    i = n(927813),
    a = n(661191);

function o(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * i.A.Millis.MINUTE;
    return s(e) + t
}

function s(e) {
    var t;
    if (null == e.threadMetadata) return 0;
    let n = null != (t = r.Ay.lastMessageId(e.id)) ? t : e.id;
    return Math.max(a.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0)
}