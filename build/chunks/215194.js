/** chunk id: 215194, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(544420),
    o = n(793574),
    c = n(688810),
    d = n(837011),
    u = n(90084),
    g = n(42780),
    m = n(576705),
    p = n(997509),
    f = n(555337),
    h = n(33888),
    b = n(494492),
    x = n(377337),
    j = n(249434),
    _ = n(89145),
    O = n(913443),
    v = n(474215),
    y = n(561923),
    A = n(652215),
    E = n(985018),
    N = n(754136);
let S = function() {
    let {
        analyticsLocations: e
    } = (0, c.Ay)(o.A.GUILD_SETTINGS_PROFILE_PAGE), t = (0, l.bG)([f.A], () => f.A.getGuild(), []), n = null == t ? void 0 : t.id, {
        fetchGuildProfile: S,
        fetchStatus: I
    } = (0, u.u)(null == t ? void 0 : t.id), T = (0, l.bG)([f.A], () => f.A.getGuildProfile(), []), C = (0, l.bG)([m.A], () => m.A.can(A.xBc.MANAGE_GUILD, t)), P = i.useCallback(e => {
        null != n && (p.A.updateGuild({
            icon: e
        }), p.A.updateGuildProfile(n, {
            icon: e
        }))
    }, [n]), w = i.useCallback(e => {
        null != n && p.A.updateGuildProfile(n, {
            customBanner: e
        })
    }, [n]);
    i.useEffect(() => {
        null != n && S()
    }, [n, S]);
    let R = i.useCallback(() => {
        S(!0)
    }, [S]);
    return (i.useEffect(() => {
        a.A.getDetectableGames()
    }, []), I === d.X.FETCHED && null == T) ? (0, r.jsx)(O.g, {
        forceFetchGuildProfile: R
    }) : I === d.X.NOT_FETCHED || I === d.X.FETCHING ? (0, r.jsx)("main", {
        className: N.u1,
        children: (0, r.jsx)(s.y$y, {})
    }) : null == t || null == T ? null : (0, r.jsx)(c.f5, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: N.Qs,
            children: [(0, r.jsxs)("div", {
                className: N.Cd,
                children: [(0, r.jsxs)("div", {
                    children: [(0, r.jsx)(s.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: E.intl.string(E.t.txdaxf)
                    }), (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: N.h_,
                        children: E.intl.string(E.t["5PGZWS"])
                    })]
                }), (0, r.jsx)(_.A, {
                    profile: T,
                    canManageGuild: C
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(j.A, {
                    profile: T,
                    canManageGuild: C,
                    onIconChange: P
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(h.A, {
                    profile: T,
                    onCustomBannerChange: w,
                    canManageGuild: C
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(v.A, {
                    profile: T,
                    canManageGuild: C
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(b.A, {
                    profile: T,
                    canManageGuild: C
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(x.A, {
                    profile: T,
                    canManageGuild: C
                }), (0, r.jsx)("div", {
                    className: N.yF
                }), (0, r.jsx)(y.A, {
                    profile: T,
                    canManageGuild: C
                })]
            }), (0, r.jsx)("div", {
                className: N.DK,
                children: (0, r.jsx)(s.HOs, {
                    className: N.ti,
                    children: (0, r.jsx)(g.Ay, {
                        className: N.q5,
                        profile: T,
                        disableCTA: !0,
                        onIconChange: C ? P : void 0,
                        disableGuildNameClick: !0
                    })
                })
            })]
        })
    })
}