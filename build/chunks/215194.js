/** chunk id: 215194 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(544420),
    o = n(793574),
    d = n(688810),
    c = n(837011),
    u = n(90084),
    m = n(42780),
    g = n(576705),
    x = n(997509),
    h = n(555337),
    _ = n(33888),
    A = n(494492),
    p = n(377337),
    f = n(249434),
    j = n(89145),
    N = n(913443),
    E = n(474215),
    C = n(561923),
    T = n(652215),
    I = n(985018),
    b = n(978945);
let v = function() {
    let {
        analyticsLocations: e
    } = (0, d.Ay)(o.A.GUILD_SETTINGS_PROFILE_PAGE), t = (0, l.bG)([h.A], () => h.A.getGuild(), []), n = t?.id, {
        fetchGuildProfile: v,
        fetchStatus: S
    } = (0, u.u)(t?.id), y = (0, l.bG)([h.A], () => h.A.getGuildProfile(), []), R = (0, l.bG)([g.A], () => g.A.can(T.xBc.MANAGE_GUILD, t)), O = s.useCallback(e => {
        null != n && (x.A.updateGuild({
            icon: e
        }), x.A.updateGuildProfile(n, {
            icon: e
        }))
    }, [n]), G = s.useCallback(e => {
        null != n && x.A.updateGuildProfile(n, {
            customBanner: e
        })
    }, [n]);
    s.useEffect(() => {
        null != n && v()
    }, [n, v]);
    let L = s.useCallback(() => {
        v(!0)
    }, [v]);
    return (s.useEffect(() => {
        a.Ay.getDetectableGames()
    }, []), S === c.X.FETCHED && null == y) ? (0, i.jsx)(N.g, {
        forceFetchGuildProfile: L
    }) : S === c.X.NOT_FETCHED || S === c.X.FETCHING ? (0, i.jsx)("main", {
        className: b.u1,
        children: (0, i.jsx)(r.y$y, {})
    }) : null == t || null == y ? null : (0, i.jsx)(d.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: b.Qs,
            children: [(0, i.jsxs)("div", {
                className: b.Cd,
                children: [(0, i.jsxs)("div", {
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: I.intl.string(I.t.txdaxf)
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: b.h_,
                        children: I.intl.string(I.t["5PGZWS"])
                    })]
                }), (0, i.jsx)(j.A, {
                    profile: y,
                    canManageGuild: R
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(f.A, {
                    profile: y,
                    canManageGuild: R,
                    onIconChange: O
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(_.A, {
                    profile: y,
                    onCustomBannerChange: G,
                    canManageGuild: R
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(E.A, {
                    profile: y,
                    canManageGuild: R
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(A.A, {
                    profile: y,
                    canManageGuild: R
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(p.A, {
                    profile: y,
                    canManageGuild: R
                }), (0, i.jsx)("div", {
                    className: b.yF
                }), (0, i.jsx)(C.A, {
                    profile: y,
                    canManageGuild: R
                })]
            }), (0, i.jsx)("div", {
                className: b.DK,
                children: (0, i.jsx)(r.HOs, {
                    className: b.ti,
                    children: (0, i.jsx)(m.Ay, {
                        className: b.q5,
                        profile: y,
                        disableCTA: !0,
                        onIconChange: R ? O : void 0,
                        disableGuildNameClick: !0
                    })
                })
            })]
        })
    })
}