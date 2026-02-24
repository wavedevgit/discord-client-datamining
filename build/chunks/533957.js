/** chunk id: 533957, original params: n,e,t (module,exports,require) **/
t.d(e, {
    A: () => A
});
var l = t(627968);
t(64700);
var r = t(311907),
    a = t(397927),
    i = t(576705),
    c = t(652215),
    d = t(985018);

function A(n, e) {
    let A = (0, r.bG)([i.A], () => i.A.can(c.xBc.MANAGE_CHANNELS, n), [n]);
    return __OVERLAY__ || !A ? null : (0, l.jsx)(a.Drp, {
        id: "clone-channel",
        label: d.intl.string(d.t.dEaPc4),
        action: () => (0, a.mMO)(async () => {
            let {
                default: r
            } = await Promise.all([t.e("93142"), t.e("64233"), t.e("56651")]).then(t.bind(t, 409200));
            return t => (0, l.jsx)(r, {
                ...t,
                channelType: n.type,
                guildId: e.id,
                categoryId: n.parent_id,
                cloneChannelId: n.id
            })
        })
    })
}