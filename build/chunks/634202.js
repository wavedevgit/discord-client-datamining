/** chunk id: 634202 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => H
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
    g = n(421380),
    h = n(397927),
    A = n(686956),
    f = n(730134),
    p = n(736653),
    x = n(573648),
    v = n(58149),
    C = n(688810),
    N = n(709066),
    E = n(657331),
    I = n(427157),
    _ = n(696451),
    b = n(954571),
    S = n(370480),
    j = n(633452),
    T = n(600260),
    y = n(63104),
    R = n(355971),
    M = n(293260),
    O = n(783419),
    w = n(652215),
    L = n(518477),
    G = n(985018),
    k = n(333901);

function D(e) {
    let t, {
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: a,
        description: r
    } = e;
    if (null != r) switch (s) {
        case O.so.LESS_THAN:
            t = G.intl.format(G.t["2p7dA3"], {
                description: r,
                count: Math.max(0, Number(a) - 1)
            });
            break;
        case O.so.GREATER_THAN:
            t = G.intl.format(G.t["2p7dA3"], {
                description: r,
                count: Math.max(0, Number(a) + 1)
            });
            break;
        default:
            t = r
    } else t = (0, S.RP)({
        connectionType: n,
        connectionMetadataField: i,
        operator: s,
        value: a
    });
    return null == t ? null : (0, l.jsxs)("div", {
        className: k.wL,
        children: [(0, l.jsx)(h.A9s, {
            size: "md",
            color: "currentColor",
            className: k.D$
        }), (0, l.jsx)(h.Text, {
            variant: "text-xs/medium",
            color: "text-strong",
            children: t
        })]
    })
}

function U(e) {
    let {
        eligibilityStates: t
    } = e, n = (0, p.Ay)(), i = (0, h.rdh)(c.A.unsafe_rawColors.GREEN_330).hex(), s = o().groupBy(t, e => `${e.connection_type}${null!=e.application_id?`:${e.application_id}`:""}`);
    return (0, l.jsx)(l.Fragment, {
        children: Object.keys(s).map(e => {
            let t, r = s[e],
                o = r.filter(e => null != e.operator),
                u = r.find(e => null != e.application),
                c = x.A.get(e),
                d = u?.application,
                g = d?.bot != null ? new I.A(d.bot) : null;
            return S.iC.includes(d?.id ?? "") ? t = (0, l.jsx)(R.A, {
                className: k.AO,
                color: i,
                size: 16
            }) : null != g && (t = (0, l.jsx)(N.A, {
                className: k.AO,
                verified: g.isVerifiedBot()
            })), (0, l.jsxs)("div", {
                className: k.sV,
                children: [(0, l.jsxs)("div", {
                    className: k.ei,
                    children: [null != c ? (0, l.jsx)("img", {
                        src: (0, m.Mw)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                        alt: "",
                        className: k.j$
                    }) : null, null != g ? (0, l.jsx)(f.A, {
                        user: g,
                        size: h._3J.SIZE_20,
                        className: k.j$
                    }) : null, (0, l.jsx)(h.Text, {
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

function P(e) {
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
        b.default.track(w.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, v.Ou)(c),
            ...(0, v.H$)(d)
        })
    }, [r, o, c, d]);
    let m = (0, u.bG)([_.Ay], () => _.Ay.getSelfMember(d)?.roles.includes(o) ?? !1, [d, o]);
    return t = 1 === a.length && 1 === a[0].length ? G.intl.string(G.t.jDym4E) : 1 === a.length ? G.intl.format(G.t["0eBj3x"], {}) : G.intl.format(G.t.D7uftB, {}), (0, l.jsxs)("div", {
        className: k.SW,
        children: [(0, l.jsx)("div", {
            className: k.oT,
            children: (0, l.jsx)(h.Text, {
                variant: "text-xs/normal",
                color: "text-default",
                className: k.Io,
                children: t
            })
        }), (0, l.jsx)("div", {
            className: k.jf,
            children: (0, l.jsx)(U, {
                eligibilityStates: a.flat()
            })
        }), (0, l.jsxs)("div", {
            className: k.UD,
            children: [m ? null : (0, l.jsx)(g.$n, {
                className: k.wz,
                onClick: n,
                children: G.intl.string(G.t.T1t1WV)
            }), (0, l.jsx)(g.$n, {
                className: k.lQ,
                color: g.$n.Colors.PRIMARY,
                onClick: s,
                children: G.intl.string(G.t.hgKDnG)
            })]
        })]
    })
}

function H(e) {
    let {
        userId: t,
        messageId: n,
        guild: s,
        channel: r
    } = e, {
        analyticsLocations: o
    } = (0, C.Ay)(), c = (0, T.A)(s, t, r.id, !0), m = (0, u.bG)([j.A], () => j.A.getGuildRoleConnectionEligibility(c?.id)), [g, f] = i.useState(null == m), p = i.useRef(null);
    if (null == c) return null;
    async function x() {
        a()(null != c, "visibleConnectionsRole is null"), g && null == m && (await A.A.fetchGuildRoleConnectionsEligibility(s.id, c.id), f(!1))
    }
    return (0, l.jsx)(h.QCx, {
        targetElementRef: p,
        onRequestOpen: x,
        renderPopout: function() {
            return Promise.resolve(e => {
                let {
                    closePopout: i
                } = e;
                return null == m ? (0, l.jsx)(l.Fragment, {}) : (a()(null != c, "visibleConnectionsRole is null"), (0, l.jsx)(P, {
                    eligibilityStates: m,
                    userId: t,
                    roleId: c.id,
                    channelId: r.id,
                    guildId: s.id,
                    onGetRolesClicked: () => {
                        (0, M.c0)(s.id)
                    },
                    onOpenProfile: () => {
                        (0, E.openUserProfileModal)({
                            userId: t,
                            messageId: n,
                            guildId: s.id,
                            channelId: r.id,
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
            text: G.intl.string(G.t.Wpsnar),
            children: (0, l.jsxs)("div", {
                ref: p,
                className: k.qS,
                ...e,
                children: [(0, l.jsx)(y.A, {
                    className: k.f7,
                    size: 16,
                    color: c.colorString
                }), (0, l.jsx)(h.Text, {
                    variant: "text-xs/bold",
                    color: "text-strong",
                    className: k.S3,
                    children: c.name
                })]
            })
        })
    })
}