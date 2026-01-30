/** chunk id: 915417, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    g: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(280513),
    s = n(158954),
    a = n(311907),
    o = n(397927),
    c = n(60175),
    d = n(90084),
    u = n(42780),
    g = n(997509),
    m = n(555337),
    p = n(583047),
    f = n(501381),
    h = n(652215),
    b = n(985018),
    x = n(5425);
let j = {
    id: "0",
    name: "",
    description: "",
    icon: "",
    customBanner: null,
    onlineCount: 0,
    memberCount: 0,
    traits: [],
    gameApplicationIds: [],
    gameActivity: {},
    visibility: l.n.RESTRICTED,
    brandColorPrimary: null,
    tag: null,
    badge: null,
    badgeHash: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null
};

function _(e) {
    let {
        pendingFields: t
    } = e, {
        guild: n,
        guildProfile: _
    } = (0, a.cf)([m.A], () => ({
        guild: m.A.getGuild(),
        guildProfile: m.A.getGuildProfile()
    })), O = null == n ? void 0 : n.id, v = (0, a.bG)([c.A], () => c.A.get(O)), {
        fetchGuildProfile: y
    } = (0, d.u)(O), A = (null == _ ? void 0 : _.visibility) == null || !l.i.VISIBLE.has(null == _ ? void 0 : _.visibility), E = (null == _ ? void 0 : _.visibility) === l.n.PUBLIC_WITH_RECRUITMENT;
    i.useEffect(() => {
        null != O && y()
    }, [O, y]);
    let N = i.useMemo(() => null == n || null == _ ? j : _, [n, _]),
        S = i.useCallback(() => {
            (null == n ? void 0 : n.id) != null && (E ? g.A.updateGuildProfile(n.id, {
                visibility: l.n.PUBLIC
            }) : g.A.updateGuildProfile(n.id, {
                visibility: l.n.PUBLIC_WITH_RECRUITMENT
            }))
        }, [null == n ? void 0 : n.id, E]),
        I = i.useCallback(() => {
            g.A.setSection(h.BEX.PROFILE)
        }, []);
    if (null == n) return null;
    let T = null != t ? t : null == v ? void 0 : v.formFields;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.DZT, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: b.intl.string(b.t.AHJddL)
        }), (0, r.jsx)(s.EYj, {
            tag: "p",
            variant: "text-sm/medium",
            color: "text-subtle",
            className: x.nB,
            children: b.intl.string(b.t.Z7TCtd)
        }), (0, r.jsx)(f.o, {
            guildId: n.id
        }), (0, r.jsx)("div", {
            className: x.Zd,
            children: null != T ? (0, r.jsx)(p.a, {
                guild: n,
                formFields: T
            }) : (0, r.jsx)(o.y$y, {})
        }), (0, r.jsx)("div", {
            className: x.yF
        }), (0, r.jsxs)("div", {
            className: x.Im,
            children: [(0, r.jsxs)("div", {
                className: x.fi,
                children: [(0, r.jsx)(o.dOG, {
                    label: b.intl.string(b.t["N/0232"]),
                    checked: E,
                    onChange: S,
                    disabled: A
                }), (0, r.jsx)(s.EYj, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: b.intl.string(b.t["3TSZYK"])
                }), A && (0, r.jsx)(s.EYj, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: b.intl.format(b.t.Bk0VOi, {
                        profileLink: (e, t) => (0, r.jsx)(o.MzZ, {
                            onClick: I,
                            children: e
                        }, t)
                    })
                })]
            }), (0, r.jsx)("div", {
                className: x.fi,
                children: (0, r.jsxs)("div", {
                    className: x.cK,
                    children: [(0, r.jsx)("div", {
                        className: x.D7
                    }), (0, r.jsx)(u.Ay, {
                        className: x.VH,
                        profile: N,
                        CTAOverride: (0, r.jsx)(s.$nd, {
                            variant: "active",
                            size: "sm",
                            text: b.intl.string(b.t["7XdMW2"]),
                            fullWidth: !0
                        }),
                        disableGuildNameClick: !0
                    })]
                })
            })]
        })]
    })
}