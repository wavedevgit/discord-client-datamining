/** Chunk was on 33957 **/
/** chunk id: 490171, original params: e,n,l (module,exports,require) **/
l.d(n, {
    A: () => u,
    O: () => d
});
var t = l(627968);
l(64700);
var r = l(311907),
    a = l(812771),
    i = l(274541),
    s = l(761640),
    c = l(652215),
    o = l(746080);
let d = 656;

function u(e) {
    let {
        pageWidth: n,
        onSidebarResize: l
    } = e, u = (0, r.bG)([s.Ay], () => s.Ay.getSidebarState(o.VV.GUILD_HOME));
    if (null == u || null == u.channelId) return null;
    let m = n - c.MdR - d;
    return (0, t.jsx)(a.A, {
        sidebarType: a.X.HomeSidebar,
        maxWidth: m,
        onWidthChange: l,
        children: (0, t.jsx)(i.A, {
            channelId: u.channelId,
            baseChannelId: o.VV.GUILD_HOME,
            channelViewSource: "Home View",
            isResourceChannelView: !0
        })
    })
}