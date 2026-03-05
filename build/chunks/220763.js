/** chunk id: 220763, original params: t,e,s (module,exports,require) **/
s.d(e, {
    default: () => L
});
var n = s(627968);
s(64700);
var a = s(87719),
    c = s(414345),
    i = s(244975),
    o = s(788868),
    d = s(652215),
    l = s(985018),
    r = s(736975),
    p = s(101280);

function L(t) {
    let {
        channel: e,
        onClose: s,
        ...L
    } = t, u = l.intl.format(l.t.AVVUse, {
        onLearnMore: function() {
            s(), (0, a.e)()
        }
    });
    return (0, c.g1)({
        location: "PremiumMessageLengthUpsell"
    }) ? (0, n.jsx)(i.F, {
        title: l.intl.string(l.t.SeL3ec),
        subtitle: u,
        graphic: {
            src: p.A,
            type: "image"
        },
        secondaryCTA: l.intl.string(l.t["13/7kX"]),
        onSecondaryClick: s,
        onClose: s,
        ...L
    }) : (0, n.jsx)(i.A, {
        artURL: r.A,
        type: o.e.MESSAGE_LENGTH_UPSELL,
        title: l.intl.string(l.t.SeL3ec),
        body: u,
        glowUp: u,
        analyticsSource: {
            page: e?.getGuildId() != null ? d.liQ.GUILD_CHANNEL : e?.isGroupDM() || e?.isPrivate() ? d.liQ.DM_CHANNEL : null
        },
        analyticsLocation: {
            section: d.JJy.MESSAGE_LENGTH_UPSELL_MODAL,
            object: d.ZSU.BUTTON_CTA
        },
        onClose: s,
        ...L
    })
}