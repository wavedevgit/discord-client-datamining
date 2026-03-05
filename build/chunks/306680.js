/** chunk id: 306680 params = (module,exports,require) **/
n.d(t, {
    Co: () => s
}), n(417597);
var i = n(734057),
    l = n(661191);

function s(e, t) {
    if (e !== l.default.castChannelIdAsMessageId(t)) return !1;
    let n = i.A.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let s = i.A.getChannel(n.parent_id);
    return s?.isMediaChannel() === !0
}