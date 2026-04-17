/** chunk id: 984562 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var i = n(627968),
    s = n(64700),
    l = n(280513),
    r = n(311907),
    a = n(397927),
    o = n(793574),
    d = n(837011),
    c = n(90084),
    u = n(685073),
    m = n(828162),
    g = n(208039),
    x = n(997509),
    h = n(555337),
    _ = n(342490),
    A = n(694878),
    p = n(989556),
    f = n(712150),
    j = n(190695),
    N = n(29086),
    E = n(652215),
    T = n(743981),
    C = n(661023),
    I = n(985018),
    b = n(644961);
let v = function() {
    (0, I.useSyncMessages)(C.messagesLoader);
    let e = (0, r.bG)([h.A], () => h.A.getGuild()),
        t = (0, r.bG)([h.A], () => h.A.getGuildProfile()),
        {
            fetchGuildProfile: n,
            fetchStatus: v
        } = (0, c.u)(e?.id);
    if (s.useEffect(() => {
            v === d.X.NOT_FETCHED && n()
        }, [n, v]), v !== d.X.FETCHED) return (0, i.jsx)("div", {
        className: b.dc,
        children: (0, i.jsx)(a.y$y, {})
    });
    if (null == e || null == t) return null;
    let S = l.i.VISIBLE.has(t.visibility),
        y = (0, u.Rg)(e),
        R = !y || t?.tag == null,
        O = t.badge ?? T.hc["0"],
        G = t.badgeColorPrimary ?? null,
        L = t.badgeColorSecondary ?? null,
        D = (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(p.A, {
                className: b.uW,
                guildId: e.id,
                isDisabled: R,
                tag: t.tag ?? "",
                badge: O,
                primaryColor: G,
                secondaryColor: L
            }), (0, i.jsx)(A.A, {
                className: b.uW,
                selectedBadge: O,
                guildId: e.id
            }), (0, i.jsx)(f.A, {
                className: b.uW,
                guildId: e.id,
                badge: O,
                primaryColor: G,
                secondaryColor: L
            })]
        });
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(a.Heading, {
            className: b.DD,
            variant: "heading-lg/semibold",
            children: I.intl.string(C.default.mf2OwH)
        }), (0, i.jsxs)("div", {
            className: b.kL,
            children: [(0, i.jsxs)("div", {
                className: b.hu,
                children: [(0, i.jsxs)("div", {
                    className: b.iQ,
                    children: [(0, i.jsx)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.format(C.default["655Uny"], {
                            onClickServerProfile: () => {
                                x.A.setSection(E.BEX.PROFILE)
                            },
                            onClickApplyToJoin: () => {
                                x.A.setSection(E.BEX.ACCESS)
                            }
                        })
                    }), !S && (0, i.jsx)(g.A, {
                        className: b.pB,
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            children: I.intl.format(C.default.CRbkIz, {
                                onClickEditSetting: () => x.A.setSection(E.BEX.PROFILE, E.nd0.PROFILE_VISIBILITY)
                            })
                        })
                    })]
                }), y ? (0, i.jsxs)("div", {
                    className: b.DZ,
                    children: [(0, i.jsx)("label", {
                        htmlFor: "enable-server-tag",
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            children: I.intl.string(C.default["1zams8"])
                        })
                    }), (0, i.jsx)(a.dOG, {
                        id: "enable-server-tag",
                        checked: !R,
                        onChange: () => {
                            R ? x.A.updateGuildProfile(e.id, {
                                tag: t.tag ?? "",
                                badge: O,
                                badgeColorPrimary: G,
                                badgeColorSecondary: L
                            }) : x.A.updateGuildProfile(e.id, {
                                tag: null
                            })
                        }
                    })]
                }) : (0, i.jsx)("div", {
                    className: b.vw,
                    children: (0, i.jsx)(_.u, {
                        onClick: () => {
                            (0, m.A)(e.id, o.A.GUILD_POWERUPS_GUILD_SETTINGS_TAGS), x.A.close()
                        }
                    })
                }), R ? (0, i.jsx)(a.RDc, {
                    children: (0, i.jsx)("div", {
                        className: b.n8,
                        children: D
                    })
                }) : D]
            }), (0, i.jsxs)("div", {
                className: b.so,
                children: [(0, i.jsx)(N.A, {
                    guildId: e.id,
                    tag: t.tag,
                    badge: O,
                    primaryColor: G,
                    secondaryColor: L
                }), !R && (0, i.jsx)(j.A, {
                    guildId: e.id
                })]
            })]
        })]
    })
}