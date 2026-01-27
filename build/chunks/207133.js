/** Chunk was on 92414 **/
/** chunk id: 207133, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(417597),
    i = n(734057),
    l = n(746080);

function s(e) {
    let t = (0, r.bG)([i.A], () => {
        let t = i.A.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? i.A.getChannel(null == t ? void 0 : t.parent_id) : null
    });
    return (null == t ? void 0 : t.hasFlag(l.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
}