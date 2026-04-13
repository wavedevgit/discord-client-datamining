/** chunk id: 207133 params = (module,exports,require) **/
i.d(t, {
    A: () => a
});
var n = i(417597),
    s = i(734057),
    l = i(746080);

function a(e) {
    let t = (0, n.bG)([s.A], () => {
        let t = s.A.getChannel(e);
        return t?.parent_id != null && t.isForumPost() ? s.A.getChannel(t?.parent_id) : null
    });
    return t?.hasFlag(l.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS) === !0
}