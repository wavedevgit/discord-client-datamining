/** Chunk was on 47841 **/
/** chunk id: 561923, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(280513),
    o = n(311907),
    c = n(397927),
    d = n(837011),
    u = n(348943),
    g = n(576055),
    m = n(997509),
    p = n(665346),
    f = n(652215),
    b = n(985018),
    h = n(7791);

function x(e) {
    var t;
    let {
        profile: n,
        canManageGuild: l
    } = e, x = n.id, j = a.i.VISIBLE.has(n.visibility), _ = (0, o.bG)([d.A], () => {
        var e;
        return (null == (e = d.A.getProfile(x)) ? void 0 : e.visibility) === u.n.PUBLIC_WITH_RECRUITMENT
    }, [x]), O = i.useRef(null);
    (0, p.A)(O, f.nd0.PROFILE_VISIBILITY);
    let v = i.useCallback(() => {
            j ? m.A.updateGuildProfile(x, {
                visibility: u.n.RESTRICTED
            }) : m.A.updateGuildProfile(x, {
                visibility: _ ? u.n.PUBLIC_WITH_RECRUITMENT : u.n.PUBLIC
            })
        }, [x, _, j]),
        y = i.useCallback(() => {
            m.A.setSection(f.BEX.ACCESS, f.nd0.ACCESS_DISCOVERABLE)
        }, []),
        A = null == (t = n.features) ? void 0 : t.includes(f.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: h.Im,
        ref: O,
        children: [(0, r.jsxs)("div", {
            className: h.fi,
            children: [(0, r.jsx)(c.dOG, {
                label: b.intl.string(b.t.fjHWen),
                description: b.intl.string(b.t.J1YOV6),
                checked: !j,
                onChange: v,
                disabled: A || !l
            }), A && (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: b.intl.format(b.t.R8jY9g, {
                    accessLink: (e, t) => (0, r.jsx)(c.MzZ, {
                        onClick: y,
                        children: e
                    }, t)
                })
            })]
        }), (0, r.jsx)("div", {
            className: s()(h.fi, {
                [h.Rl]: j
            }),
            children: (0, r.jsx)(g.A, {
                guildId: x,
                name: null
            })
        })]
    })
}