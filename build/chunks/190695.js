/** chunk id: 190695, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(291661),
    c = n(685073),
    d = n(534400),
    u = n(514661),
    g = n(71393),
    m = n(287809),
    p = n(562153),
    f = n(29086),
    h = n(583970),
    b = n(985018),
    x = n(908742);

function j(e) {
    var t, n;
    let {
        guildId: i
    } = e, j = (0, s.bG)([g.A], () => g.A.getGuild(i)), _ = (0, s.bG)([m.default], () => m.default.getCurrentUser()), {
        onAdoptTag: O,
        isAdopting: v
    } = (0, u.A)(i), y = (null == _ || null == (t = _.primaryGuild) ? void 0 : t.identityGuildId) === i && (null == _ || null == (n = _.primaryGuild) ? void 0 : n.identityEnabled) === !0;
    if (null != _ && null != j && (0, c.q0)(j)) return (0, r.jsxs)("div", {
        className: x.kL,
        children: [(0, r.jsx)(a.Text, {
            className: x.uW,
            variant: "text-xs/medium",
            color: "text-muted",
            children: y ? b.intl.string(h.default["6xBCpG"]) : b.intl.string(h.default.eSRKez)
        }), (0, r.jsx)("div", {
            className: x.yF
        }), (0, r.jsxs)("div", {
            className: l()(x.uW, x.rf),
            children: [(0, r.jsx)(f.V, {
                avatar: (0, r.jsx)(o.A, {
                    user: _,
                    guildId: i,
                    avatarSize: a._3J.SIZE_40,
                    "aria-hidden": !0
                }),
                decorations: (0, r.jsx)(d.o9, {
                    guildId: j.id,
                    guildBadge: j.profile.badge,
                    guildTag: j.profile.tag,
                    inline: !1
                }),
                username: p.Ay.getName(i, null, _),
                message: b.intl.string(b.t["6OSasb"])
            }), (0, r.jsx)(a.Button, {
                variant: "primary",
                text: b.intl.string(b.t.cQDYRu),
                onClick: O,
                loading: v,
                disabled: y,
                fullWidth: !0
            })]
        })]
    })
}