/** chunk id: 445567, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => h
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(664007),
    o = n(486020),
    c = n(695800),
    d = n(652215),
    u = n(874864),
    g = n(339984),
    m = n(478644),
    p = n(985018),
    f = n(664991);

function h(e) {
    let {
        guild: t,
        canManageGuild: n
    } = e, h = t.features.has(d.GuildFeatures.BANNER), b = t.features.has(d.GuildFeatures.ANIMATED_BANNER), x = h && n, {
        analyticsLocations: j
    } = (0, s.Ay)(), _ = i.useCallback((e, n) => {
        (0, c.fI)(t, j, e, n)
    }, [j, t]), O = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, c.p_)({
            guild: t,
            analyticsLocations: j,
            analyticsSection: d.JJy.GUILD_BANNER,
            analyticsObject: d.ZSU.UPLOAD_IMAGE,
            perks: (0, u.QR)()
        })
    }, [j, t]), v = (0, r.jsx)(a.A, {
        image: t.banner,
        makeURL: e => null != e ? o.Ay.getGuildBannerURL({
            id: t.id,
            banner: e
        }, b) : null,
        disabled: !x,
        onChange: _,
        hint: p.intl.string(p.t.uPvxqJ),
        onOpenImageSelectModal: () => (0, c.Nn)({
            uploadType: g.HL.GUILD_BANNER,
            maxFileSizeBytes: m.j,
            onComplete: e => {
                let {
                    imageUri: t,
                    file: n
                } = e;
                return _(t, n)
            },
            analyticsLocation: {
                page: d.liQ.GUILD_SETTINGS,
                section: d.JJy.GUILD_BANNER
            },
            analyticsLocations: j
        }),
        enabled: x
    });
    return h ? v : (0, r.jsx)(l.DUT, {
        "aria-hidden": !0,
        tabIndex: -1,
        className: f.U,
        onClick: O,
        children: v
    })
}