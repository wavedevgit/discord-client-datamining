/** chunk id: 795144, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => c
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(967198),
    d = e(652215),
    s = e(985018);

function c(n) {
    let t = (0, r.bG)([a.A], () => a.A.getGuildId());
    return n.type, d.rbe.GUILD_CATEGORY, __OVERLAY__ || t !== d.YYv ? null : (0, i.jsx)(l.Drp, {
        id: "set-channel-nickname",
        label: s.intl.string(s.t.dilOF6),
        action: function() {
            (0, l.mMO)(async () => {
                let {
                    default: t
                } = await e.e("83504").then(e.bind(e, 872243));
                return e => (0, i.jsx)(t, {
                    ...e,
                    channelId: n.id,
                    heading: s.intl.string(s.t.dilOF6),
                    formTitle: s.intl.string(s.t["621LJD"]),
                    allowReset: !0
                })
            })
        }
    })
}