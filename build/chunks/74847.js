/** Chunk was on 92917 **/
/** chunk id: 74847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => a
});
var r = n(734057),
    i = n(576705),
    l = n(652215);

function a(e) {
    let t = r.A.getChannel(e),
        n = null == t ? void 0 : t.isPrivate(),
        a = null == t ? void 0 : t.isForumChannel();
    return n || i.A.can(l.xBc.ATTACH_FILES, t) && i.A.can(l.xBc.SEND_MESSAGES, t) && !a
}