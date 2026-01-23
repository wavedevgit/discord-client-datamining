/** Chunk was on 47841 **/
/** chunk id: 175284, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(228524), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(554146),
    d = n(397927),
    u = n(157559),
    g = n(686956),
    m = n(386849),
    p = n(826673),
    f = n(801264),
    b = n(576705),
    h = n(405269),
    x = n(975571),
    j = n(997509),
    _ = n(50249),
    O = n(305053),
    v = n(512031),
    y = n(652215),
    A = n(49999),
    E = n(818348),
    N = n(985018),
    S = n(107550);

function I(e) {
    let {
        guild: t,
        everyoneRole: n,
        filteredRoles: l,
        setEditRoleId: s,
        query: a,
        setQuery: o,
        setHeaderHeight: c
    } = e, u = i.useRef(null), {
        enabled: g
    } = m.A.useExperiment({
        guildId: t.id,
        location: "GuildSettingsRolesOverviewHeader"
    });
    i.useEffect(() => {
        var e, t;
        c(null != (e = null == (t = u.current) ? void 0 : t.offsetHeight) ? e : v.p4)
    }, [c]);
    let p = i.useCallback(() => {
            s(n.id)
        }, [s, n.id]),
        f = g ? O.A : T;
    return (0, r.jsxs)("div", {
        ref: u,
        children: [(0, r.jsx)(d.Heading, {
            variant: "heading-lg/semibold",
            children: N.intl.string(N.t["LPJmL/"])
        }), (0, r.jsx)(d.Text, {
            className: S.h_,
            color: "text-default",
            variant: "text-sm/normal",
            children: N.intl.string(N.t["1ydhVp"])
        }), (0, r.jsx)(f, {
            guild: t
        }), (0, r.jsx)(C, {
            guild: t,
            everyoneRole: n,
            filteredRoles: l,
            query: a,
            setQuery: o,
            onEveryoneRoleClick: p
        })]
    })
}

function T(e) {
    let {
        guild: t
    } = e;
    i.useEffect(() => {
        (0, p.dX)(c.M.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
            dismissAction: A.i.INDIRECT_ACTION,
            guildId: t.id,
            forceTrack: !0
        })
    }, [t]);
    let n = (0, h.i$)(o()(y.X30), "LL"),
        l = t.features.has(y.GuildFeatures.PIN_PERMISSION_MIGRATION_COMPLETE) ? (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: N.intl.format(N.t.Vg2oTN, {
                breakingChangeDate: n
            })
        }) : b.A.can(E.xB.ADMINISTRATOR, t) ? (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: N.intl.format(N.t.HYM8OE, {
                onClickMigrate: () => {
                    u.A.show({
                        title: N.intl.string(N.t.nFE8dD),
                        body: N.intl.format(N.t["1PAzQ6"], {
                            guildName: t.name
                        }),
                        cancelText: N.intl.string(N.t["ETE/oC"]),
                        confirmText: N.intl.string(N.t["cY+Oob"]),
                        onConfirm: () => {
                            j.A.migratePinPermission(t.id)
                        }
                    })
                },
                breakingChangeDate: n
            })
        }) : (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: N.intl.format(N.t.cAuU1S, {
                breakingChangeDate: n
            })
        });
    return (0, r.jsx)(f.A, {
        look: f.k.WARNING,
        className: S.q4,
        children: l
    })
}

function C(e) {
    let {
        guild: t,
        everyoneRole: n,
        filteredRoles: i,
        query: l,
        setQuery: a,
        onEveryoneRoleClick: o
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(_.A, {
            role: n,
            onClick: o
        }), (0, r.jsx)(P, {
            guild: t,
            query: l,
            setQuery: a
        }), (0, r.jsx)(d.Text, {
            className: S.BK,
            color: "text-default",
            variant: "text-sm/normal",
            children: N.intl.format(N.t.xkC3Yf, {
                articleURL: x.A.getArticleURL(y.MVz.PERMISSIONS_TUTORIAL)
            })
        }), (0, r.jsx)("div", {
            className: S.kA,
            children: (0, r.jsxs)("div", {
                className: S.qd,
                children: [(0, r.jsx)("div", {
                    className: S._M
                }), (0, r.jsx)(d.Text, {
                    className: s()(S.jA, S.N5),
                    variant: "text-sm/normal",
                    children: N.intl.format(N.t["38N3Vz"], {
                        numRoles: String(i.length)
                    })
                }), (0, r.jsx)(d.Text, {
                    className: s()(S.jA, S.Hp),
                    variant: "text-sm/normal",
                    children: N.intl.string(N.t["9Oq93m"])
                }), (0, r.jsx)("div", {
                    className: S.DE
                })]
            })
        })]
    })
}

function P(e) {
    let {
        guild: t,
        query: n,
        setQuery: l
    } = e, [s, a] = i.useState(!1), o = i.useCallback(e => {
        l(e)
    }, [l]), c = i.useCallback(() => {
        l("")
    }, [l]), u = async () => {
        a(!0), await g.A.createRole(t.id), a(!1)
    };
    return (0, r.jsx)("div", {
        className: S.__invalid_rolesList,
        children: (0, r.jsxs)("div", {
            className: S.MT,
            children: [(0, r.jsx)(d.IWV, {
                query: n,
                onChange: o,
                onClear: c,
                placeholder: N.intl.string(N.t.Sojqsr),
                "aria-label": N.intl.string(N.t.Sojqsr)
            }), (0, r.jsx)(d.Button, {
                size: "sm",
                onClick: u,
                loading: s,
                text: N.intl.string(N.t.JZZjQK)
            })]
        })
    })
}