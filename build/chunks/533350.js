/** chunk id: 533350, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(228524);
var r = n(627968);
n(64700);
var i = n(158954),
    l = n(311907),
    s = n(432371),
    a = n(793574),
    o = n(688810),
    c = n(376261),
    d = n(576705),
    u = n(555337),
    g = n(503929),
    m = n(580403),
    p = n(242849),
    f = n(158352),
    h = n(668133),
    b = n(675654),
    x = n(652215),
    j = n(985018),
    _ = n(574436);
let O = function() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(a.A.GUILD_SETTINGS_ENGAGEMENT_PAGE), t = (0, l.bG)([u.A], () => u.A.getProps().guild, []), n = (0, l.bG)([d.A], () => null != t && d.A.can(x.xBc.MANAGE_GUILD, t)), O = (0, c.T)(t), v = (0, s.vC)(null != t ? t : void 0);
    return null == t ? null : (0, r.jsx)(o.f5, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: _.kL,
            children: [(0, r.jsxs)("div", {
                children: [(0, r.jsx)(i.DZT, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: j.intl.string(j.t["6TAHbx"])
                }), (0, r.jsx)(i.EYj, {
                    variant: "text-sm/medium",
                    color: "text-default",
                    tag: "p",
                    className: _.h_,
                    children: j.intl.string(j.t.XCGZFk)
                })]
            }), !0 === v && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(f.c, {
                    canManageGuild: n,
                    features: t.features
                }), (0, r.jsx)("div", {
                    className: _.yF
                })]
            }), (0, r.jsx)(h.h, {
                canManageGuild: n,
                guild: t
            }), void 0 !== O && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: _.yF
                }), (0, r.jsx)(g.l, {
                    isInventoryFeedEnabled: O,
                    canManageGuild: n,
                    features: t.features
                })]
            }), (0, r.jsx)("div", {
                className: _.yF
            }), (0, r.jsx)(m.P, {
                guildId: t.id,
                defaultSettings: t.defaultMessageNotifications,
                canManageGuild: n
            }), (0, r.jsx)("div", {
                className: _.yF
            }), (0, r.jsx)(p.R, {
                canManageGuild: n,
                guild: t
            }), !0 === n && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("div", {
                    className: _.yF
                }), (0, r.jsx)(b.E, {
                    guildId: t.id
                })]
            })]
        })
    })
}