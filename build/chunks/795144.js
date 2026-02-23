/** chunk id: 795144, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(967198),
    s = t(652215),
    d = t(985018);

function c(n) {
    let e = (0, r.bG)([a.A], () => a.A.getGuildId());
    return n.type, s.rbe.GUILD_CATEGORY, __OVERLAY__ || e !== s.YYv ? null : (0, i.jsx)(l.Drp, {
        id: "set-channel-nickname",
        label: d.intl.string(d.t.dilOF6),
        action: function() {
            (0, l.mMO)(async () => {
                let {
                    default: e
                } = await t.e("83504").then(t.bind(t, 872243));
                return t => (0, i.jsx)(e, {
                    ...t,
                    channelId: n.id,
                    heading: d.intl.string(d.t.dilOF6),
                    formTitle: d.intl.string(d.t["621LJD"]),
                    allowReset: !0
                })
            })
        }
    })
}