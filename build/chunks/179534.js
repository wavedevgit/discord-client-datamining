/** chunk id: 179534, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => w
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(985925),
    g = n(547015),
    m = n(997509),
    p = n(138298),
    f = n(657331),
    h = n(761640),
    b = n(71393),
    x = n(266047),
    j = n(221950),
    _ = n(735937),
    O = n(104685),
    v = n(856768),
    y = n(189552),
    A = n(508160),
    E = n(749060),
    N = n(374963),
    S = n(636670),
    I = n(652215),
    T = n(985018),
    C = n(503377),
    P = n(63135);

function w(e) {
    let {
        guildId: t
    } = e, n = (0, a.bG)([b.A], () => b.A.getGuild(t)), {
        analyticsLocations: l
    } = (0, d.Ay)(c.A.GUILD_SETTINGS_MEMBERS_PAGE), w = (0, u.q)(t), R = (0, a.bG)([h.Ay], () => h.Ay.getGuildSidebarState(t), [t]), D = i.useCallback(() => {
        p.A.closeGuildSidebar(t)
    }, [t]), G = !1 == !!(null == n ? void 0 : n.features.has(I.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), L = (0, a.bG)([x.A], () => x.A.getEstimatedMemberSearchCountByGuildId(t), [t]), k = i.useCallback(e => {
        null != e && (0, f.openUserProfileModal)({
            userId: e.userId,
            guildId: e.guildId,
            sourceAnalyticsLocations: l
        })
    }, [l]), M = i.useRef(null), U = i.useCallback(() => {
        var e;
        null == (e = M.current) || e.resetSearchText()
    }, []);
    if (null == n) return null;
    let B = (0, y.ii)(!1, !1, L);
    return (0, r.jsxs)(d.f5, {
        value: l,
        children: [(0, r.jsx)("div", {
            className: s()(P.customColumn, C.$Z, C.ed),
            children: (0, r.jsx)("div", {
                className: P.customContainer,
                children: (0, r.jsx)(o.ArX, {
                    className: s()(P.customScroller, C.cj),
                    orientation: "auto",
                    children: (0, r.jsx)(o.ArX, {
                        className: C.mh,
                        orientation: "auto",
                        children: (0, r.jsxs)("main", {
                            className: s()(P.customColumn, P.contentColumnDefault, C.$Z, C.ed, C.z1),
                            children: [(0, r.jsx)("div", {
                                className: C.wx,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: T.intl.string(T.t.S40K66)
                                })
                            }, "header"), (0, r.jsx)("div", {
                                children: (0, r.jsxs)("div", {
                                    className: C.CZ,
                                    children: [(0, r.jsx)(O.A, {
                                        guild: n
                                    }), (0, r.jsx)(_.A, {
                                        guild: n
                                    }), G ? (0, r.jsxs)("div", {
                                        className: C.FV,
                                        children: [(0, r.jsx)(N.A, {
                                            guild: n,
                                            ref: M
                                        }), (0, r.jsx)(A.A, {
                                            guild: n,
                                            searchState: B,
                                            compact: !0,
                                            onSelectRow: k,
                                            onResetForNewMembers: U
                                        }), B !== y.IY.SUCCESS_STILL_INDEXING && (0, r.jsx)(E.A, {
                                            guildId: n.id
                                        })]
                                    }) : (0, r.jsx)("div", {
                                        className: C.qQ,
                                        children: (0, r.jsxs)("div", {
                                            className: C.pb,
                                            children: [(0, r.jsx)("div", {
                                                children: (0, r.jsx)(S.A, {})
                                            }), (0, r.jsx)(o.Text, {
                                                variant: "text-md/normal",
                                                color: "text-muted",
                                                children: T.intl.format(T.t.Bf6yxB, {
                                                    onClick: e => {
                                                        null != n && (e.preventDefault(), m.A.close(), (0, j.aZ)(n.id))
                                                    }
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }, "body"), (0, r.jsx)(v.A, {
                                guildId: n.id
                            })]
                        })
                    })
                })
            })
        }), w && null != R && (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(o.pkL, {
                isVisible: !0,
                onClick: D
            }), (0, r.jsx)("div", {
                className: C.zd,
                style: {
                    width: I.da6
                },
                children: (0, r.jsx)(g.A, {
                    userId: R.details.userId,
                    guildId: R.details.guildId,
                    onClose: D
                })
            })]
        })]
    })
}