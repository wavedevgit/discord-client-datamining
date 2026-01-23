/** Chunk was on 35270 **/
/** chunk id: 788322, original params: t,e,n (module,exports,require) **/
n.d(e, {
    F: () => s,
    L: () => E
});
var r = n(417597),
    i = n(320501),
    l = n(930125),
    o = n(282108),
    a = n(33358);
let E = (t, e, n) => {
        var E, s;
        let _ = (0, r.bG)([i.A], () => i.A.getMessage(t, e)),
            I = (0, a.P)(_);
        if (null == _) return [];
        let c = void 0 !== n ? t => t.url === n || t.id === n : t => (0, o.qo)({
            type: l.D.Attachment,
            media: t
        }, I);
        return null != (E = null == _ || null == (s = _.attachments) ? void 0 : s.filter(c)) ? E : []
    },
    s = (t, e, n) => {
        var E, s;
        let _ = (0, r.bG)([i.A], () => i.A.getMessage(t, e)),
            I = (0, a.P)(_);
        if (null == _) return [];
        let c = void 0 !== n ? t => t.id === n : t => (0, o.qo)({
            type: l.D.Embed,
            media: t
        }, I);
        return null != (E = null == _ || null == (s = _.embeds) ? void 0 : s.filter(c)) ? E : []
    }