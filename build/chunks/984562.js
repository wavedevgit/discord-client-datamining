/** chunk id: 984562, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(280513),
    s = n(311907),
    a = n(397927),
    o = n(793574),
    c = n(837011),
    d = n(90084),
    u = n(685073),
    g = n(828162),
    m = n(801264),
    p = n(997509),
    f = n(555337),
    h = n(342490),
    b = n(694878),
    x = n(989556),
    j = n(712150),
    _ = n(190695),
    O = n(29086),
    v = n(652215),
    y = n(743981),
    A = n(583970),
    E = n(985018),
    N = n(175820);
let S = function() {
    var e, t, n, S;
    (0, E.useSyncMessages)(A.messagesLoader);
    let I = (0, s.bG)([f.A], () => f.A.getGuild()),
        C = (0, s.bG)([f.A], () => f.A.getGuildProfile()),
        {
            fetchGuildProfile: T,
            fetchStatus: P
        } = (0, d.u)(null == I ? void 0 : I.id);
    if (i.useEffect(() => {
            P === c.X.NOT_FETCHED && T()
        }, [T, P]), P !== c.X.FETCHED) return (0, r.jsx)("div", {
        className: N.dc,
        children: (0, r.jsx)(a.y$y, {})
    });
    if (null == I || null == C) return null;
    let w = l.i.VISIBLE.has(C.visibility),
        R = (0, u.Rg)(I),
        D = !R || (null == C ? void 0 : C.tag) == null,
        G = null != (e = C.badge) ? e : y.hc["0"],
        L = null != (t = C.badgeColorPrimary) ? t : y.Ub["0"].primary,
        k = null != (n = C.badgeColorSecondary) ? n : y.Ub["0"].secondary,
        M = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(x.A, {
                className: N.uW,
                guildId: I.id,
                isDisabled: D,
                tag: null != (S = C.tag) ? S : "",
                badge: G,
                primaryColor: L,
                secondaryColor: k
            }), (0, r.jsx)(b.A, {
                className: N.uW,
                selectedBadge: G,
                guildId: I.id
            }), (0, r.jsx)(j.A, {
                className: N.uW,
                guildId: I.id,
                badge: G,
                primaryColor: L,
                secondaryColor: k
            })]
        });
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
            className: N.DD,
            variant: "heading-lg/semibold",
            children: E.intl.string(A.default.mf2OwH)
        }), (0, r.jsxs)("div", {
            className: N.kL,
            children: [(0, r.jsxs)("div", {
                className: N.hu,
                children: [(0, r.jsxs)("div", {
                    className: N.iQ,
                    children: [(0, r.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: E.intl.format(A.default["655Uny"], {
                            onClickServerProfile: () => {
                                p.A.setSection(v.BEX.PROFILE)
                            },
                            onClickApplyToJoin: () => {
                                p.A.setSection(v.BEX.ACCESS)
                            }
                        })
                    }), !w && (0, r.jsx)(m.A, {
                        className: N.pB,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: E.intl.format(A.default.CRbkIz, {
                                onClickEditSetting: () => p.A.setSection(v.BEX.PROFILE, v.nd0.PROFILE_VISIBILITY)
                            })
                        })
                    })]
                }), R ? (0, r.jsxs)("div", {
                    className: N.DZ,
                    children: [(0, r.jsx)("label", {
                        htmlFor: "enable-server-tag",
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: E.intl.string(A.default["1zams8"])
                        })
                    }), (0, r.jsx)(a.dOG, {
                        id: "enable-server-tag",
                        checked: !D,
                        onChange: () => {
                            if (D) {
                                var e;
                                p.A.updateGuildProfile(I.id, {
                                    tag: null != (e = C.tag) ? e : "",
                                    badge: G,
                                    badgeColorPrimary: L,
                                    badgeColorSecondary: k
                                })
                            } else p.A.updateGuildProfile(I.id, {
                                tag: null
                            })
                        }
                    })]
                }) : (0, r.jsx)("div", {
                    className: N.vw,
                    children: (0, r.jsx)(h.u, {
                        onClick: () => {
                            (0, g.A)(I.id, o.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), p.A.close()
                        }
                    })
                }), D ? (0, r.jsx)(a.RDc, {
                    children: (0, r.jsx)("div", {
                        className: N.n8,
                        children: M
                    })
                }) : M]
            }), (0, r.jsxs)("div", {
                className: N.so,
                children: [(0, r.jsx)(O.A, {
                    guildId: I.id,
                    tag: C.tag,
                    badge: G,
                    primaryColor: L,
                    secondaryColor: k
                }), !D && (0, r.jsx)(_.A, {
                    guildId: I.id
                })]
            })]
        })]
    })
}