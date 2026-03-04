/** chunk id: 795144, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => o
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(967198),
    d = e(652215),
    s = e(985018);

function o(n) {
    let t = (0, l.bG)([a.A], () => a.A.getGuildId()),
        o = n.type === d.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || t !== d.YYv ? null : (0, i.jsx)(r.Drp, {
        id: "set-channel-nickname",
        label: o ? s.intl.string(s.t.xXYKiP) : s.intl.string(s.t.dilOF6),
        action: function() {
            (0, r.mMO)(async () => {
                let {
                    default: t
                } = await e.e("83504").then(e.bind(e, 872243));
                return e => (0, i.jsx)(t, {
                    ...e,
                    channelId: n.id,
                    heading: o ? s.intl.string(s.t.xXYKiP) : s.intl.string(s.t.dilOF6),
                    formTitle: o ? s.intl.string(s.t.OCAkGP) : s.intl.string(s.t["621LJD"]),
                    allowReset: !1
                })
            })
        }
    })
}