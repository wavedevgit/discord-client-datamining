/** Chunk was on 39048 **/
/** chunk id: 72507, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(732955),
    s = n(688810),
    a = n(2553),
    o = n(946274),
    c = n(997509),
    d = n(342490),
    u = n(695800),
    g = n(652215),
    m = n(874864),
    p = n(478644),
    f = n(985018),
    h = n(822679);

function b(e) {
    let {
        guild: t,
        canManageGuild: n,
        buttonClassName: b
    } = e, {
        analyticsLocations: x
    } = (0, s.Ay)(), j = t.features.has(g.GuildFeatures.INVITE_SPLASH), _ = n && j, O = i.useRef(null), v = i.useCallback(e => {
        c.A.updateGuild({
            splash: e
        })
    }, []), y = i.useCallback(e => {
        e.preventDefault(), e.stopPropagation(), (0, u.p_)({
            guild: t,
            analyticsLocations: x,
            analyticsSection: g.JJy.GUILD_INVITE_BACKGROUND,
            analyticsObject: g.ZSU.BUTTON_CTA,
            perks: (0, m.Lp)()
        })
    }, [x, t]), A = i.useCallback(() => {
        var e;
        null == (e = O.current) || e.activateUploadDialogue()
    }, []);
    return j ? (0, r.jsxs)("div", {
        className: b,
        children: [(0, r.jsx)(l.$nd, {
            disabled: !_,
            variant: "primary",
            text: f.intl.string(f.t.yG2pUi),
            onClick: A
        }), (0, r.jsx)("div", {
            className: h.y,
            children: (0, r.jsx)(o.Ay, {
                ref: O,
                disabled: !_,
                onChange: v,
                maxFileSizeBytes: p.j,
                onFileSizeError: () => (0, a.A)(p.j),
                tabIndex: -1,
                "aria-hidden": !0
            })
        })]
    }) : (0, r.jsx)("div", {
        className: b,
        children: (0, r.jsx)(d.u, {
            onClick: y
        })
    })
}