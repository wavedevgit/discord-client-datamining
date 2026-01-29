/** Chunk was on 1113 **/
/** chunk id: 64071, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => o
});
var r = n(311907),
    l = n(519480),
    i = n(370876),
    s = n(222823),
    a = n(661191);

function o(e) {
    return (0, r.bG)([l.A, s.Ay], () => {
        var t;
        if (null == e) return 0;
        let n = s.Ay.ackMessageId(e.id);
        if (null == n) return 0;
        let r = Object.values(null != (t = l.A.getDirectoryEntries(e.id)) ? t : {}).filter(e => new Date(e.createdAt).getTime() > a.default.extractTimestamp(n));
        return Math.min(i.zP, r.length)
    }, [e])
}