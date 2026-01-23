/** Chunk was on 47841 **/
/** chunk id: 249202, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(732955),
    s = n(688810),
    a = n(342490),
    o = n(695800),
    c = n(652215),
    d = n(874864),
    u = n(339984),
    g = n(478644),
    m = n(985018);

function p(e) {
    let {
        guild: t,
        canManageGuild: n,
        buttonClassName: p
    } = e, {
        analyticsLocations: f
    } = (0, s.Ay)(), b = t.features.has(c.GuildFeatures.BANNER), h = i.useCallback(e => {
        let {
            imageUri: n,
            file: r
        } = e;
        (0, o.fI)(t, f, n, r)
    }, [f, t]), x = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, o.p_)({
            guild: t,
            analyticsLocations: f,
            analyticsSection: c.JJy.GUILD_BANNER,
            analyticsObject: c.ZSU.BUTTON_CTA,
            perks: (0, d.QR)()
        })
    }, [f, t]), j = i.useCallback(() => {
        (0, o.Nn)({
            uploadType: u.HL.GUILD_BANNER,
            maxFileSizeBytes: g.j,
            onComplete: h,
            analyticsLocation: {
                page: c.liQ.GUILD_SETTINGS,
                section: c.JJy.GUILD_BANNER
            },
            analyticsLocations: f
        })
    }, [f, h]);
    return b ? (0, r.jsx)("div", {
        className: p,
        children: (0, r.jsx)(l.$nd, {
            disabled: !(b && n),
            variant: "primary",
            text: m.intl.string(m.t.yG2pUi),
            onClick: j
        })
    }) : (0, r.jsx)("div", {
        className: p,
        children: (0, r.jsx)(a.u, {
            onClick: x
        })
    })
}