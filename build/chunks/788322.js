/** chunk id: 788322, original params: t,e,n (module,exports,require) **/
n.d(e, {
    F: () => s,
    L: () => _
});
var i = n(417597),
    r = n(320501),
    l = n(930125),
    E = n(282108),
    o = n(33358);
let _ = (t, e, n) => {
        let _ = (0, i.bG)([r.A], () => r.A.getMessage(t, e)),
            s = (0, o.P)(_);
        if (null == _) return [];
        let a = void 0 !== n ? t => t.url === n || t.id === n : t => (0, E.qo)({
            type: l.D.Attachment,
            media: t
        }, s);
        return _?.attachments?.filter(a) ?? []
    },
    s = (t, e, n) => {
        let _ = (0, i.bG)([r.A], () => r.A.getMessage(t, e)),
            s = (0, o.P)(_);
        if (null == _) return [];
        let a = void 0 !== n ? t => t.id === n : t => (0, E.qo)({
            type: l.D.Embed,
            media: t
        }, s);
        return _?.embeds?.filter(a) ?? []
    }