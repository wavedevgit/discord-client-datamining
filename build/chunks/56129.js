/** chunk id: 56129, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Mp: () => k,
    gE: () => j,
    ll: () => U,
    tM: () => G
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(827343),
    c = n(688810),
    u = n(429913),
    d = n(525788),
    f = n(384059),
    p = n(235986),
    _ = n(267102),
    h = n(574172),
    m = n(704877),
    g = n(222692),
    E = n(447404),
    y = n(271195),
    b = n(709562),
    O = n(383831),
    v = n(128286),
    A = n(80051),
    I = n(970636),
    S = n(430452),
    T = n(646865),
    C = n(795816),
    N = n(104171),
    w = n(47294),
    R = n(652215),
    P = n(818348),
    D = n(985018),
    L = n(31545),
    x = n(319567);

function M(e) {
    let {
        onClick: t,
        isExpanded: n
    } = e;
    return (0, r.jsx)(b.A, {
        iconClassName: a()(L.D6, {
            [L.S7]: n
        }),
        onClick: t,
        iconComponent: s.abt,
        label: n ? D.intl.string(D.t["2TiKgS"]) : D.intl.string(D.t.oN8bqe)
    })
}

function j(e) {
    var t, n, i;
    let {
        channel: a,
        applicationId: s,
        onMouseDown: b,
        onMouseMove: A,
        onMouseLeave: N,
        onJumpToChannel: D,
        idle: M,
        selectedParticipant: j,
        embeddedActivity: k
    } = e, U = (0, _.Us)() === R.BRT.POPOUT, G = (0, o.bG)([S.A], () => S.A.isVideoEnabled()), F = (0, o.bG)([S.A], () => Object.values(S.A.getVideoDevices())[0]), V = !1 === (null == (t = null == F ? void 0 : F.disabled) || t), B = (0, u.A)([s])[0], H = (0, m.A)(a), {
        parentAnalyticsLocation: Y
    } = (0, c.Ay)(), W = e => {
        (0, f.X)(Y, f.O.CAMERA, e), l.A.setVideoEnabled(e)
    }, K = () => {
        V ? W(!0) : (0, g.A)()
    }, z = () => {
        (0, f.X)(Y, f.O.POPOUT, !0), null != a && (0, w.A)({
            onConfirm: async () => {
                await (0, C.od)(s, a.id), h.openChannelCallPopout(a)
            }
        })
    };
    return (0, r.jsxs)("div", {
        className: x._v,
        onMouseMove: A,
        onMouseDown: b,
        onMouseLeave: N,
        children: [(0, r.jsx)("div", {
            className: x.K1,
            children: (0, r.jsx)(y.X, {
                idle: M,
                title: null != (n = null != (i = null == B ? void 0 : B.name) ? i : null == a ? void 0 : a.name) ? n : "",
                onJumpToChannel: D,
                preventIdleComponent: E.A
            })
        }), (0, r.jsxs)("div", {
            className: x.q6,
            children: [(0, r.jsxs)(p.A, {
                grow: 0,
                shrink: 1,
                basis: "50%",
                align: p.A.Align.CENTER,
                children: [(0, r.jsx)(I.A, {
                    className: L.Oc,
                    enabled: G,
                    cameraUnavailable: !V,
                    hasPermission: H,
                    onChange: W,
                    onCameraUnavailable: K
                }), null != a && (0, r.jsx)(E.A, {
                    children: (0, r.jsx)(d.A, {
                        channelId: a.id,
                        guildId: a.getGuildId(),
                        className: x.__invalid_leftTrayIcon,
                        participant: j,
                        compact: !0
                    })
                })]
            }), (0, r.jsxs)(p.A, {
                grow: 0,
                shrink: 1,
                justify: p.A.Justify.END,
                basis: "50%",
                align: p.A.Align.CENTER,
                children: [U || (0, T.f)() ? null : (0, r.jsx)(v.A, {
                    className: L.BD,
                    popoutOpen: !1,
                    onOpenPopout: z,
                    onClosePopout: P.FX
                }), (0, r.jsx)(O.A, {
                    applicationId: s,
                    location: k.location,
                    className: L.BD
                })]
            })]
        })]
    })
}

function k(e) {
    var t, n;
    let {
        channel: i,
        applicationId: o,
        onMouseDown: l,
        onMouseMove: c,
        onMouseLeave: d,
        onJumpToChannel: f,
        idle: p,
        users: _,
        embeddedActivity: h
    } = e, m = (0, u.A)([o])[0];
    return (0, r.jsxs)(s.DUT, {
        className: a()(x._v, x.ob),
        onMouseMove: c,
        onMouseDown: l,
        onMouseLeave: d,
        onDoubleClick: f,
        children: [(0, r.jsx)("div", {
            className: x.K1,
            children: (0, r.jsx)(y.X, {
                idle: p,
                title: null != (t = null != (n = null == m ? void 0 : m.name) ? n : null == i ? void 0 : i.name) ? t : "",
                onJumpToChannel: f,
                preventIdleComponent: E.A
            })
        }), (0, r.jsxs)("div", {
            className: x.q6,
            children: [(0, r.jsx)(N.Ay, {
                renderIcon: !1,
                users: _,
                size: 24,
                max: 3,
                className: L.__invalid_userSummaryContainer
            }), (0, r.jsx)(O.A, {
                applicationId: o,
                location: h.location,
                iconClassName: L.Gu,
                isActive: !0
            })]
        })]
    })
}

function U(e) {
    let {
        channelId: t,
        participantsOpen: n,
        showToggleParticipants: i
    } = e;
    return i ? (0, r.jsx)(A.A, {
        channelId: t,
        isParticipantsOpen: n,
        className: L.N9
    }) : null
}

function G(e) {
    var t, n;
    let {
        onMouseDown: i,
        onMouseMove: o,
        onMouseLeave: l,
        showControls: c,
        applicationId: d,
        channel: f,
        onJumpToChannel: p,
        onToggleHeight: _,
        isExpanded: h,
        hideExpandedButton: m,
        embeddedActivity: g
    } = e, b = (0, u.A)([d])[0];
    return (0, r.jsx)("div", {
        className: L.LO,
        onMouseMove: o,
        onMouseDown: i,
        onMouseLeave: l,
        children: (0, r.jsxs)("div", {
            className: a()(x.K1, L.eA, {
                [L.eo]: c
            }),
            children: [!c && (0, r.jsx)(s.jNK, {
                size: "xxs",
                color: "currentColor",
                className: L.ro
            }), c && (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(y.X, {
                    idle: !c,
                    title: null != (t = null != (n = null == b ? void 0 : b.name) ? n : null == f ? void 0 : f.name) ? t : "",
                    onJumpToChannel: p,
                    preventIdleComponent: E.A
                }), (0, r.jsxs)("div", {
                    className: L.QS,
                    children: [m ? null : (0, r.jsx)(M, {
                        isExpanded: h,
                        onClick: _
                    }), (0, r.jsx)(O.A, {
                        applicationId: d,
                        location: g.location,
                        iconClassName: L.Gu
                    })]
                })]
            })]
        })
    })
}