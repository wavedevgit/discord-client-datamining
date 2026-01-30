/** chunk id: 72742, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(378570),
    o = n(323443),
    s = n(233993),
    l = n(82149),
    c = n(734057),
    u = n(576705),
    d = n(977997),
    f = n(939496),
    p = n(993401),
    _ = n(996988),
    h = n(985018);

function m(e) {
    let {
        activity: t,
        onAction: n,
        onClose: m
    } = e, {
        themeType: g
    } = (0, f.E)(), E = g === _.d.MODAL_V2, y = (0, l.UW)(t), {
        channelId: b,
        guildId: O
    } = null != y ? y : {}, v = (0, i.bG)([d.A], () => null != b && d.A.isInChannel(b), [b]), A = (0, i.bG)([c.A], () => null != b ? c.A.getChannel(b) : null, [b]), I = (0, i.bG)([u.A], () => null != A && u.A.can(s.Gk, A), [A]);
    if (!(0, l.Cy)(t) || !I || null == O || null == b) return null;
    let S = e => {
        e.stopPropagation(), null == n || n({
            action: "PRESS_STAGE_CHANNEL_LISTEN_BUTTON"
        }), o.CH(O, b), (0, a.iN)(b), null == m || m()
    };
    return (0, r.jsx)(p.FD, {
        text: h.intl.string(h.t.ZYO5OK),
        fullWidth: !E,
        disabled: v,
        onClick: S
    })
}