/** chunk id: 477190, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => c
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(576705),
    s = t(652215),
    d = t(985018);

function c(n, e) {
    let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.type,
        A = (0, r.bG)([a.A], () => a.A.can(s.xBc.MANAGE_CHANNELS, n), [n]);
    if (__OVERLAY__ || !A) return null;
    let o = () => {
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([t.e("93142"), t.e("64233"), t.e("56651")]).then(t.bind(t, 409200));
            return t => (0, i.jsx)(e, {
                ...t,
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