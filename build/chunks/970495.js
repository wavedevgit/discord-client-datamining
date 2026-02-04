/** chunk id: 970495, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    o = n(391973),
    s = n(684013),
    u = n(401843),
    c = n(966327),
    d = n(587895),
    h = n(313961),
    p = n(15285),
    f = n(769015),
    g = n(401901),
    m = n(734057),
    A = n(760751),
    y = n(555528),
    O = n(287809),
    v = n(562153),
    b = n(810412),
    E = n(589051),
    _ = n(761661),
    S = n(592598),
    x = n(658198),
    I = n(581730),
    j = n(672396),
    C = n(652215),
    T = n(985018),
    w = n(676667);

function N(e) {
    let {
        user: t,
        application: n,
        runningGame: r
    } = e;
    return null != n || null != r ? (0, i.jsx)("div", {
        className: w.R3,
        children: (0, i.jsx)(a.Qk9, {
            lowerBadge: (0, i.jsx)("div", {
                className: w.oM,
                children: null != n || null != r ? (0, i.jsx)(f.A, {
                    game: n,
                    pid: null == r ? void 0 : r.pid,
                    size: f.M.XXSMALL,
                    className: w.Gt
                }) : null
            }),
            lowerBadgeSize: {
                width: 16,
                height: 16
            },
            children: (0, i.jsx)(c.A, {
                user: t,
                "aria-hidden": !0,
                size: a._3J.SIZE_40
            })
        })
    }) : (0, i.jsx)(c.A, {
        user: t,
        "aria-hidden": !0,
        size: a._3J.SIZE_40
    })
}

function P(e) {
    let {
        user: t,
        application: n,
        runningGame: r,
        username: o,
        onWatchClick: s,
        buttonColor: u
    } = e;
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [(0, i.jsx)("div", {
            className: w.H,
            children: (0, i.jsx)(N, {
                user: t,
                application: n,
                runningGame: r
            })
        }), (0, i.jsx)("div", {
            className: l()(w.rf, w.FR),
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-default",
                className: w.G3,
                children: T.intl.format(T.t.vTPX23, {
                    username: o
                })
            })
        }), (0, i.jsx)("div", {
            className: w.Xm,
            children: (0, i.jsx)(a.DUT, {
                onClick: s,
                className: l()(w.kx, "green" === u && w.Ib, "gray" === u && w.E0),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "always-white",
                    tag: "span",
                    children: T.intl.string(T.t["xl+bTG"])
                })
            })
        })]
    })
}

function D(e) {
    let {
        user: t,
        application: n,
        runningGame: r,
        username: o,
        onWatchClick: s,
        iconColor: u
    } = e;
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [(0, i.jsx)("div", {
            className: w.H,
            children: (0, i.jsx)(N, {
                user: t,
                application: n,
                runningGame: r
            })
        }), (0, i.jsx)("div", {
            className: l()(w.rf, w.FR),
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-default",
                className: w.G3,
                children: T.intl.format(T.t.NmEczg, {
                    username: o
                })
            })
        }), (0, i.jsx)("div", {
            className: w.U4
        }), (0, i.jsx)("div", {
            className: w.Xm,
            children: (0, i.jsx)(a.DUT, {
                onClick: s,
                className: w.zf,
                children: (0, i.jsx)(x.b, {
                    size: "sm",
                    color: "green" === u ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css
                })
            })
        })]
    })
}

function R(e, t, n) {
    var r, l;
    if (S.A.isNotificationDisabled(j.KS.StreamWatchNudge)) return null;
    let a = O.default.getUser(e);
    if (null == a) return null;
    let {
        designVariant: c
    } = (0, E.Fg)("OverlayV3StreamWatchNudge"), f = null == n ? void 0 : n.application_id, x = m.A.getChannel(t), T = null != f ? d.A.getApplication(f) : null, w = null != f ? A.A.getDetectableGame(f) : null, N = null != f ? p.Ay.getRunningGames().find(e => e.id === f) : null, R = null != (r = null != (l = null == N ? void 0 : N.name) ? l : null == w ? void 0 : w.name) ? r : null == T ? void 0 : T.name, L = (0, v.mG)(null == x ? void 0 : x.guild_id, null == x ? void 0 : x.id, a), {
        trackView: k,
        trackClick: M
    } = (0, I.Y9)(j.KS.StreamWatchNudge, {
        notif_type: j.KS.StreamWatchNudge,
        notif_user_id: a.id,
        activity_type: null == n ? void 0 : n.type,
        activity_name: null != R ? R : null == n ? void 0 : n.name
    });
    return {
        body: (() => {
            switch (c) {
                case E.wD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: T,
                        runningGame: N,
                        username: L,
                        buttonColor: "green"
                    });
                case E.wD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: T,
                        runningGame: N,
                        username: L,
                        buttonColor: "gray"
                    });
                case E.wD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(D, {
                        user: a,
                        application: T,
                        runningGame: N,
                        username: L,
                        iconColor: "white"
                    })
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            (() => {
                M("overlay-watch-stream");
                let [n] = y.A.getWidgetsByType(C.uss.GO_LIVE), i = h.A.getStreamParticipants(t).find(t => t.user.id === e);
                null != n && null != i && ((0, _.CZ)(i.stream, g.$.COVER), (0, u.A9)(i.stream, {
                    forceMultiple: !0,
                    noFocus: !0
                }), (0, o.v0)(n.id, {
                    forcedPinnedState: !0
                }), (0, o.dH)(n.id), (0, b.YX)(C.uss.GO_LIVE, {
                    type: b.Z5.GO_LIVE,
                    value: b.IP.ACCEPT_REQUEST,
                    userId: i.user.id
                }))
            })(), setTimeout(() => {
                s.A.updateNotificationStatus(i)
            }, 300)
        },
        onNotificationShow: () => {
            k()
        },
        onDismissClick: (e, t) => {
            M("dismiss"), s.A.updateNotificationStatus(t)
        }
    }
}