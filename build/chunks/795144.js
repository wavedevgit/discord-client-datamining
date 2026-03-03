/** chunk id: 795144, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(967198),
    d = t(652215),
    s = t(985018);

function c(n) {
    let e = (0, r.bG)([a.A], () => a.A.getGuildId());
    return n.type, d.rbe.GUILD_CATEGORY, __OVERLAY__ || e !== d.YYv ? null : (0, i.jsx)(l.Drp, {
        id: "set-channel-nickname",
        label: s.intl.string(s.t.dilOF6),
        action: function() {
            (0, l.mMO)(async () => {
                let {
                    default: e
                } = await t.e("83504").then(t.bind(t, 872243));
                return t => (0, i.jsx)(e, {
                    ...t,
                    channelId: n.id,
                    heading: s.intl.string(s.t.dilOF6),
                    formTitle: s.intl.string(s.t["621LJD"]),
                    allowReset: !0
                })
            })
        }
    })
}