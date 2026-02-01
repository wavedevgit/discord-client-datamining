/** chunk id: 306680, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Co: () => i
}), n(417597);
var l = n(734057),
    r = n(661191);

function i(e, t) {
    if (e !== r.default.castChannelIdAsMessageId(t)) return !1;
    let n = l.A.getChannel(t);
    if (null == n || !n.isForumPost()) return !1;
    let i = l.A.getChannel(n.parent_id);
    return (null == i ? void 0 : i.isMediaChannel()) === !0
}