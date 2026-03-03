/** chunk id: 477190, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => c
});
var i = e(627968);
e(64700);
var r = e(311907),
    l = e(397927),
    a = e(576705),
    s = e(652215),
    d = e(985018);

function c(n, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        A = (0, r.bG)([a.A], () => a.A.can(s.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !A) return null;
    let o = () => {
        (0, l.mMO)(async () => {
            let {
                default: t
            } = await Promise.all([e.e("93142"), e.e("64233"), e.e("56651")]).then(e.bind(e, 409200));
            return e => (0, i.jsx)(t, {
                ...e,
                channelType: c,
                guildId: n.guild_id,
                categoryId: n.parent_id
            })
        })
    };
    switch (c) {
        case s.rbe.GUILD_TEXT:
            return (0, i.jsx)(l.Drp, {
                id: "create-text-channel",
                label: d.intl.string(d.t.HHkTJP),
                action: o
            });
        case s.rbe.GUILD_VOICE:
            return (0, i.jsx)(l.Drp, {
                id: "create-voice-channel",
                label: d.intl.string(d.t.AlbZaI),
                action: o
            });
        default:
            return null
    }
}