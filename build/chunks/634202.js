/** chunk id: 634202 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => B
});
var l = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    u = n(311907),
    c = n(827734),
    d = n(990078),
    m = n(582754),
    h = n(421380),
    g = n(397927),
    p = n(686956),
    A = n(730134),
    f = n(736653),
    x = n(573648),
    v = n(58149),
    j = n(688810),
    N = n(709066),
    b = n(657331),
    C = n(427157),
    E = n(696451),
    I = n(954571),
    R = n(370480),
    T = n(633452),
    y = n(600260),
    _ = n(63104),
    S = n(355971),
    M = n(293260),
    k = n(783419),
    O = n(652215),
    P = n(518477),
    w = n(985018),
    G = n(628972);

function D(e) {
    let t, {
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: a,
        description: r
    } = e;
    if (null != r) switch (s) {
        case k.so.LESS_THAN:
            t = w.intl.format(w.t["2p7dA3"], {
                description: r,
                count: Math.max(0, Number(a) - 1)
            });
            break;
        case k.so.GREATER_THAN:
            t = w.intl.format(w.t["2p7dA3"], {
                description: r,
                count: Math.max(0, Number(a) + 1)
            });
            break;
        default:
            t = r
    } else t = (0, R.RP)({
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: a
    });
    return null == t ? null : (0, l.jsxs)("div", {
        className: G.wL,
        children: [(0, l.jsx)(g.A9s, {
            size: "md",
            color: "currentColor",
            className: G.D$
        }), (0, l.jsx)(g.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: t
        })]
    })
}

function L(e) {
    let {
        eligibilityStates: t
    } = e, n = (0, f.Ay)(), i = (0, g.rdh)(c.A.unsafe_rawColors.GREEN_330).hex(), s = o().groupBy(t, e => `${e.connection_type}${null!=e.application_id?`:${e.application_id}`:""}`);
    return (0, l.jsx)(l.Fragment, {
        children: Object.keys(s).map(e => {
            let t, r = s[e],
                o = r.filter(e => null != e.operator),
                u = r.find(e => null != e.application),
                c = x.A.get(e),
                d = u?.application,
                h = d?.bot != null ? new C.A(d.bot) : null;
            return R.iC.includes(d?.id ?? "") ? t = (0, l.jsx)(S.A, {
                className: G.AO,
                color: i,
                size: 16
            }) : null != h && (t = (0, l.jsx)(N.A, {
                className: G.AO,
                verified: h.isVerifiedBot()
            })), (0, l.jsxs)("div", {
                className: G.sV,
                children: [(0, l.jsxs)("div", {
                    className: G.ei,
                    children: [null != c ? (0, l.jsx)("img", {
                        src: (0, m.Mw)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                        alt: "",
                        className: G.j$
                    }) : null, null != h ? (0, l.jsx)(A.A, {
                        user: h,
                        size: g._3J.SIZE_20,
                        className: G.j$
                    }) : null, (0, l.jsx)(g.Text, {
                        variant: "text-sm/medium",
                        color: "interactive-text-active",
                        children: c?.name ?? d?.name
                    }), t]
                }), o.map(e => {
                    let {
                        connection_type: t,
                        connection_metadata_field: n,
                        operator: i,
                        value: s,
                        description: r
                    } = e;
                    return a()(null != n, "connectionMetadataField is null"), a()(null != i, "operator is null"), a()(null != s, "value is null"), (0, l.jsx)(D, {
                        connectionType: t,
                        connectionMetadataField: n,
                        operator: i,
                        value: s,
                        description: r
                    }, `${t}:${n}:${i}:${s}`)
                })]
            }, e)
        })
    })
}

function U(e) {
    let t, {
        onGetRolesClicked: n,
        onOpenProfile: s,
        eligibilityStates: a,
        userId: r,
        roleId: o,
        channelId: c,
        guildId: d
    } = e;
    i.useEffect(() => {
        I.default.track(O.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, v.Ou)(c),
            ...(0, v.H$)(d)
        })
    }, [r, o, c, d]);
    let m = (0, u.bG)([E.Ay], () => E.Ay.getSelfMember(d)?.roles.includes(o) ?? !1, [d, o]);
    return t = 1 === a.length && 1 === a[0].length ? w.intl.string(w.t.jDym4E) : 1 === a.length ? w.intl.format(w.t["0eBj3x"], {}) : w.intl.format(w.t.D7uftB, {}), (0, l.jsxs)("div", {
        className: G.SW,
        children: [(0, l.jsx)("div", {
            className: G.oT,
            children: (0, l.jsx)(g.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: G.Io,
                children: t
            })
        }), (0, l.jsx)("div", {
            className: G.jf,
            children: (0, l.jsx)(L, {
                eligibilityStates: a.flat()
            })
        }), (0, l.jsxs)("div", {
            className: G.UD,
            children: [m ? null : (0, l.jsx)(h.$n, {
                className: G.wz,
                onClick: n,
                children: w.intl.string(w.t.T1t1WV)
            }), (0, l.jsx)(h.$n, {
                className: G.lQ,
                color: h.$n.Colors.PRIMARY,
                onClick: s,
                children: w.intl.string(w.t.hgKDnG)
            })]
        })]
    })
}

function B(e) {
    let {
        userId: t,
        messageId: n,
        guild: s,
        channel: r
    } = e, {
        analyticsLocations: o
    } = (0, j.Ay)(), c = (0, y.A)(s, t, r.id, !0), m = (0, u.bG)([T.A], () => T.A.getGuildRoleConnectionEligibility(c?.id)), [h, A] = i.useState(null == m), f = i.useRef(null);
    if (null == c) return null;
    async function x() {
        a()(null != c, "visibleConnectionsRole is null"), h && null == m && (await p.A.fetchGuildRoleConnectionsEligibility(s.id, c.id), A(!1))
    }
    return (0, l.jsx)(g.QCx, {
        targetElementRef: f,
        onRequestOpen: x,
        renderPopout: function() {
            return Promise.resolve(e => {
                let {
                    closePopout: i
                } = e;
                return null == m ? (0, l.jsx)(l.Fragment, {}) : (a()(null != c, "visibleConnectionsRole is null"), (0, l.jsx)(U, {
                    eligibilityStates: m,
                    userId: t,
                    roleId: c.id,
                    channelId: r.id,
                    guildId: s.id,
                    onGetRolesClicked: () => {
                        (0, M.c0)(s.id)
                    },
                    onOpenProfile: () => {
                        (0, b.openUserProfileModal)({
                            userId: t,
                            messageId: n,
                            guildId: s.id,
                            channelId: r.id,
                            roleId: c.id,
                            scrollTarget: P.bk.CONNECTIONS,
                            sourceAnalyticsLocations: o
                        }), i()
                    }
                }))
            })
        },
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: e => (0, l.jsx)(d.m, {
            text: w.intl.string(w.t.Wpsnar),
            children: (0, l.jsxs)("div", {
                ref: f,
                className: G.qS,
                ...e,
                children: [(0, l.jsx)(_.A, {
                    className: G.f7,
                    size: 16,
                    color: c.colorString
                }), (0, l.jsx)(g.Text, {
                    variant: "text-xs/bold",
                    color: "text-strong",
                    className: G.S3,
                    children: c.name
                })]
            })
        })
    })
}