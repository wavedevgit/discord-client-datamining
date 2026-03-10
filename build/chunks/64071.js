/** chunk id: 64071 params = (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => o
});
var i = n(311907),
    s = n(519480),
    l = n(370876),
    a = n(222823),
    r = n(661191);

function o(e) {
    return (0, i.bG)([s.A, a.Ay], () => {
        if (null == e) return 0;
        let t = a.Ay.ackMessageId(e.id);
        if (null == t) return 0;
        let n = Object.values(s.A.getDirectoryEntries(e.id) ?? {}).filter(e => new Date(e.createdAt).getTime() > r.default.extractTimestamp(t));
        return Math.min(l.zP, n.length)
    }, [e])
}