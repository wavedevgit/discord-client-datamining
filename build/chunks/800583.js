/** chunk id: 800583 params = (module,exports,require) **/
n.d(t, {
    j: () => o
}), n(989349);
var i = n(311907),
    a = n(707539),
    l = n(222823),
    r = n(661191),
    s = n(978914);

function o(e) {
    let t = (0, s.I)(e),
        n = function(e) {
            let {
                lastMessageId: t,
                message: n,
                loaded: i
            } = e;
            return i && null != n ? r.default.extractTimestamp(n.id) : null != t ? r.default.extractTimestamp(t) : null
        }({
            lastMessageId: (0, i.bG)([l.Ay], () => l.Ay.lastMessageId(e.id)),
            ...t
        });
    return null == n ? "" : (0, a.aK)(n)
}