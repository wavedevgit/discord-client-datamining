/** chunk id: 795144, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => c
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(967198),
    s = e(652215),
    d = e(985018);

function c(n) {
    let t = (0, r.bG)([a.A], () => a.A.getGuildId()),
        c = n.type === s.rbe.GUILD_CATEGORY;
    return __OVERLAY__ || t !== s.YYv ? null : (0, i.jsx)(l.Drp, {
        id: "set-channel-nickname",
        label: c ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
        action: function() {
            (0, l.mMO)(async () => {
                let {
                    default: t
                } = await e.e("83504").then(e.bind(e, 872243));
                return e => (0, i.jsx)(t, {
                    ...e,
                    channelId: n.id,
                    heading: c ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
                    formTitle: c ? d.intl.string(d.t.OCAkGP) : d.intl.string(d.t["621LJD"]),
                    allowReset: !1
                })
            })
        }
    })
}