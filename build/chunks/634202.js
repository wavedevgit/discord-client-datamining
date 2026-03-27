/** chunk id: 634202 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => H
});
var l = n(627968),
    i = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    u = n(311907),
    c = n(827734),
    d = n(990078),
    m = n(582754),
    h = n(421380),
    g = n(397927),
    A = n(686956),
    f = n(730134),
    p = n(736653),
    x = n(573648),
    C = n(58149),
    N = n(688810),
    v = n(709066),
    E = n(657331),
    T = n(427157),
    b = n(696451),
    _ = n(954571),
    j = n(370480),
    I = n(633452),
    S = n(600260),
    R = n(63104),
    y = n(355971),
    M = n(293260),
    O = n(783419),
    w = n(652215),
    L = n(518477),
    k = n(985018),
    G = n(333901);

function D(e) {
    let t, {
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: r,
        description: a
    } = e;
    if (null != a) switch (s) {
        case O.so.LESS_THAN:
            t = k.intl.format(k.t["2p7dA3"], {
                description: a,
                count: Math.max(0, Number(r) - 1)
            });
            break;
        case O.so.GREATER_THAN:
            t = k.intl.format(k.t["2p7dA3"], {
                description: a,
                count: Math.max(0, Number(r) + 1)
            });
            break;
        default:
            t = a
    } else t = (0, j.RP)({
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: r
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

function U(e) {
    let {
        eligibilityStates: t
    } = e, n = (0, p.Ay)(), i = (0, g.rdh)(c.A.unsafe_rawColors.GREEN_330).hex(), s = o().groupBy(t, e => `${e.connection_type}${null!=e.application_id?`:${e.application_id}`:""}`);
    return (0, l.jsx)(l.Fragment, {
        children: Object.keys(s).map(e => {
            let t, a = s[e],
                o = a.filter(e => null != e.operator),
                u = a.find(e => null != e.application),
                c = x.A.get(e),
                d = u?.application,
                h = d?.bot != null ? new T.A(d.bot) : null;
            return j.iC.includes(d?.id ?? "") ? t = (0, l.jsx)(y.A, {
                className: G.AO,
                color: i,
                size: 16
            }) : null != h && (t = (0, l.jsx)(v.A, {
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
                    }) : null, null != h ? (0, l.jsx)(f.A, {
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
                        description: a
                    } = e;
                    return r()(null != n, "connectionMetadataField is null"), r()(null != i, "operator is null"), r()(null != s, "value is null"), (0, l.jsx)(D, {
                        connectionType: t,
                        connectionMetadataField: n,
                        operator: i,
                        value: s,
                        description: a
                    }, `${t}:${n}:${i}:${s}`)
                })]
            }, e)
        })
    })
}

function P(e) {
    let t, {
        onGetRolesClicked: n,
        onOpenProfile: s,
        eligibilityStates: r,
        userId: a,
        roleId: o,
        channelId: c,
        guildId: d
    } = e;
    i.useEffect(() => {
        _.default.track(w.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: a,
            role_id: o,
            ...(0, C.Ou)(c),
            ...(0, C.H$)(d)
        })
    }, [a, o, c, d]);
    let m = (0, u.bG)([b.Ay], () => b.Ay.getSelfMember(d)?.roles.includes(o) ?? !1, [d, o]);
    return t = 1 === r.length && 1 === r[0].length ? k.intl.string(k.t.jDym4E) : 1 === r.length ? k.intl.format(k.t["0eBj3x"], {}) : k.intl.format(k.t.D7uftB, {}), (0, l.jsxs)("div", {
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
            children: (0, l.jsx)(U, {
                eligibilityStates: r.flat()
            })
        }), (0, l.jsxs)("div", {
            className: G.UD,
            children: [m ? null : (0, l.jsx)(h.$n, {
                className: G.wz,
                onClick: n,
                children: k.intl.string(k.t.T1t1WV)
            }), (0, l.jsx)(h.$n, {
                className: G.lQ,
                color: h.$n.Colors.PRIMARY,
                onClick: s,
                children: k.intl.string(k.t.hgKDnG)
            })]
        })]
    })
}

function H(e) {
    let {
        userId: t,
        messageId: n,
        guild: s,
        channel: a
    } = e, {
        analyticsLocations: o
    } = (0, N.Ay)(), c = (0, S.A)(s, t, a.id, !0), m = (0, u.bG)([I.A], () => I.A.getGuildRoleConnectionEligibility(c?.id)), [h, f] = i.useState(null == m), p = i.useRef(null);
    if (null == c) return null;
    async function x() {
        r()(null != c, "visibleConnectionsRole is null"), h && null == m && (await A.A.fetchGuildRoleConnectionsEligibility(s.id, c.id), f(!1))
    }
    return (0, l.jsx)(g.QCx, {
        targetElementRef: p,
        onRequestOpen: x,
        renderPopout: function() {
            return Promise.resolve(e => {
                let {
                    closePopout: i
                } = e;
                return null == m ? (0, l.jsx)(l.Fragment, {}) : (r()(null != c, "visibleConnectionsRole is null"), (0, l.jsx)(P, {
                    eligibilityStates: m,
                    userId: t,
                    roleId: c.id,
                    channelId: a.id,
                    guildId: s.id,
                    onGetRolesClicked: () => {
                        (0, M.c0)(s.id)
                    },
                    onOpenProfile: () => {
                        (0, E.openUserProfileModal)({
                            userId: t,
                            messageId: n,
                            guildId: s.id,
                            channelId: a.id,
                            roleId: c.id,
                            scrollTarget: L.bk.CONNECTIONS,
                            sourceAnalyticsLocations: o
                        }), i()
                    }
                }))
            })
        },
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: e => (0, l.jsx)(d.m, {
            text: k.intl.string(k.t.Wpsnar),
            children: (0, l.jsxs)("div", {
                ref: p,
                className: G.qS,
                ...e,
                children: [(0, l.jsx)(R.A, {
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