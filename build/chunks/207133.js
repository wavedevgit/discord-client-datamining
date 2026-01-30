/** chunk id: 207133, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(417597),
    l = n(734057),
    i = n(746080);

function s(e) {
    let t = (0, r.bG)([l.A], () => {
        let t = l.A.getChannel(e);
        return (null == t ? void 0 : t.parent_id) != null && t.isForumPost() ? l.A.getChannel(null == t ? void 0 : t.parent_id) : null
    });
    return (null == t ? void 0 : t.hasFlag(i.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS)) === !0
}