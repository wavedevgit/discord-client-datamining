/** chunk id: 788322 params = (module,exports,require) **/
n.d(e, {
    F: () => o,
    L: () => a
});
var i = n(417597),
    r = n(320501),
    l = n(930125),
    E = n(282108),
    s = n(33358);
let a = (t, e, n) => {
        let a = (0, i.bG)([r.A], () => r.A.getMessage(t, e)),
            o = (0, s.P)(a);
        if (null == a) return [];
        let _ = void 0 !== n ? t => t.url === n || t.id === n : t => (0, E.qo)({
            type: l.D.Attachment,
            media: t
        }, o);
        return a?.attachments?.filter(_) ?? []
    },
    o = (t, e, n) => {
        let a = (0, i.bG)([r.A], () => r.A.getMessage(t, e)),
            o = (0, s.P)(a);
        if (null == a) return [];
        let _ = void 0 !== n ? t => t.id === n : t => (0, E.qo)({
            type: l.D.Embed,
            media: t
        }, o);
        return a?.embeds?.filter(_) ?? []
    }