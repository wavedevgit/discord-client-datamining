/** chunk id: 886393, original params: n,t,l (module,exports,require) **/
l.d(t, {
    A: () => h
});
var i = l(627968);
l(64700);
var e = l(417597),
    a = l(397927),
    r = l(853742),
    s = l(734057),
    c = l(147036),
    o = l(957565),
    d = l(652215),
    u = l(985018);

function h(n, t, l) {
    let h = (0, e.bG)([s.A], () => null != n ? s.A.getChannel(n.parent_id) : null);
    return null == n ? null : (0, i.jsx)(a.Drp, {
        id: "channel-copy-link",
        label: u.intl.string(u.t.WqhZss),
        action: () => {
            n.isForumPost() && (0, r.jC)({
                postId: n.id,
                location: {
                    section: d.JJy.CONTEXT_MENU
                }
            }), (0, o.C)((0, c.af)(n, h, t, l))
        }
    })
}