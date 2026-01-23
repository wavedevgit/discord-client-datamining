/** Chunk was on 52786 **/
/** chunk id: 287618, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
}), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    l = n(311907),
    a = n(31717),
    i = n(522602),
    o = n(256095);

function c(e) {
    var t, n;
    let {
        channelId: c,
        localCreationAnswerId: s,
        image: u
    } = e, f = null == u ? void 0 : u.emoji, d = (null == u || null == (t = u.mediaAttachmentState) ? void 0 : t.status) === o.k.PREPARING, m = (0, l.bG)([i.A], () => i.A.getUpload(c, s, a.C.Poll)), [b, p] = r.useState(), [g, O] = r.useState("");
    return r.useEffect(() => {
        var e;
        if ((null == m || null == (e = m.item) ? void 0 : e.file) == null) return;
        let t = URL.createObjectURL(m.item.file);
        return p(t), O(m.item.file.name), () => {
            URL.revokeObjectURL(t)
        }
    }, [null == m || null == (n = m.item) ? void 0 : n.file]), {
        emoji: f,
        isLoadingMedia: d,
        hasUpload: null != m,
        upload: m,
        mediaUrl: b,
        mediaFilename: g
    }
}