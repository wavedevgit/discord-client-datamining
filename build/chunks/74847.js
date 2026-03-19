/** chunk id: 74847 params = (module,exports,require) **/
n.d(t, {
    t: () => r
});
var i = n(734057),
    a = n(576705),
    l = n(652215);

function r(e) {
    let t = i.A.getChannel(e),
        n = t?.isPrivate(),
        r = t?.isForumChannel();
    return n || a.A.can(l.xBc.ATTACH_FILES, t) && a.A.can(l.xBc.SEND_MESSAGES, t) && !r
}