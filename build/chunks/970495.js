/** chunk id: 970495, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var i = n(627968),
    r = n(503698),
    l = n.n(r),
    a = n(397927),
    s = n(391973),
    o = n(684013),
    u = n(401843),
    c = n(966327),
    d = n(587895),
    h = n(313961),
    p = n(15285),
    f = n(769015),
    g = n(401901),
    m = n(734057),
    y = n(760751),
    A = n(555528),
    v = n(287809),
    b = n(562153),
    E = n(810412),
    O = n(589051),
    x = n(761661),
    _ = n(592598),
    S = n(658198),
    I = n(581730),
    j = n(672396),
    T = n(652215),
    C = n(985018),
    N = n(676667);

function w(e) {
    let {
        user: t,
        application: n,
        runningGame: r
    } = e;
    return null != n || null != r ? (0, i.jsx)("div", {
        className: N.R3,
        children: (0, i.jsx)(a.Qk9, {
            lowerBadge: (0, i.jsx)("div", {
                className: N.oM,
                children: null != n || null != r ? (0, i.jsx)(f.A, {
                    game: n,
                    pid: null == r ? void 0 : r.pid,
                    size: f.M.XXSMALL,
                    className: N.Gt
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
        username: s,
        onWatchClick: o,
        buttonColor: u
    } = e;
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)("div", {
            className: N.H,
            children: (0, i.jsx)(w, {
                user: t,
                application: n,
                runningGame: r
            })
        }), (0, i.jsx)("div", {
            className: l()(N.rf, N.FR),
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-default",
                className: N.G3,
                children: C.intl.format(C.t.vTPX23, {
                    username: s
                })
            })
        }), (0, i.jsx)("div", {
            className: N.Xm,
            children: (0, i.jsx)(a.DUT, {
                onClick: o,
                className: l()(N.kx, "green" === u && N.Ib, "gray" === u && N.E0),
                children: (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "always-white",
                    tag: "span",
                    children: C.intl.string(C.t["xl+bTG"])
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
        username: s,
        onWatchClick: o,
        iconColor: u
    } = e;
    return (0, i.jsxs)("div", {
        className: N.kL,
        children: [(0, i.jsx)("div", {
            className: N.H,
            children: (0, i.jsx)(w, {
                user: t,
                application: n,
                runningGame: r
            })
        }), (0, i.jsx)("div", {
            className: l()(N.rf, N.FR),
            children: (0, i.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "interactive-text-default",
                className: N.G3,
                children: C.intl.format(C.t.NmEczg, {
                    username: s
                })
            })
        }), (0, i.jsx)("div", {
            className: N.U4
        }), (0, i.jsx)("div", {
            className: N.Xm,
            children: (0, i.jsx)(a.DUT, {
                onClick: o,
                className: N.zf,
                children: (0, i.jsx)(S.b, {
                    size: "sm",
                    color: "green" === u ? "white" : a.LU0.colors.INTERACTIVE_TEXT_ACTIVE.css
                })
            })
        })]
    })
}

function R(e, t, n) {
    var r, l;
    if (_.A.isNotificationDisabled(j.KS.StreamWatchNudge)) return null;
    let a = v.default.getUser(e);
    if (null == a) return null;
    let {
        designVariant: c
    } = (0, O.Fg)("OverlayV3StreamWatchNudge"), f = null == n ? void 0 : n.application_id, S = m.A.getChannel(t), C = null != f ? d.A.getApplication(f) : null, N = null != f ? y.A.getDetectableGame(f) : null, w = null != f ? p.Ay.getRunningGames().find(e => e.id === f) : null, R = null != (r = null != (l = null == w ? void 0 : w.name) ? l : null == N ? void 0 : N.name) ? r : null == C ? void 0 : C.name, k = (0, b.mG)(null == S ? void 0 : S.guild_id, null == S ? void 0 : S.id, a), {
        trackView: M,
        trackClick: L
    } = (0, I.Y9)(j.KS.StreamWatchNudge, {
        notif_type: j.KS.StreamWatchNudge,
        notif_user_id: a.id,
        activity_type: null == n ? void 0 : n.type,
        activity_name: null != R ? R : null == n ? void 0 : n.name
    });
    return {
        body: (() => {
            switch (c) {
                case O.wD.GREEN_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: C,
                        runningGame: w,
                        username: k,
                        buttonColor: "green"
                    });
                case O.wD.GRAY_BUTTON_WITH_TEXT:
                    return (0, i.jsx)(P, {
                        user: a,
                        application: C,
                        runningGame: w,
                        username: k,
                        buttonColor: "gray"
                    });
                case O.wD.SINGLE_ICON_BUTTON:
                    return (0, i.jsx)(D, {
                        user: a,
                        application: C,
                        runningGame: w,
                        username: k,
                        iconColor: "white"
                    })
            }
        })(),
        maxBodyLines: 1,
        onNotificationClick: (n, i) => {
            (() => {
                L("overlay-watch-stream");
                let [n] = A.A.getWidgetsByType(T.uss.GO_LIVE), i = h.A.getStreamParticipants(t).find(t => t.user.id === e);
                null != n && null != i && ((0, x.CZ)(i.stream, g.$.COVER), (0, u.A9)(i.stream, {
                    forceMultiple: !0,
                    noFocus: !0
                }), (0, s.v0)(n.id, {
                    forcedPinnedState: !0
                }), (0, s.dH)(n.id), (0, E.YX)(T.uss.GO_LIVE, {
                    type: E.Z5.GO_LIVE,
                    value: E.IP.ACCEPT_REQUEST,
                    userId: i.user.id
                }))
            })(), setTimeout(() => {
                o.A.updateNotificationStatus(i)
            }, 300)
        },
        onNotificationShow: () => {
            M()
        },
        onDismissClick: (e, t) => {
            L("dismiss"), o.A.updateNotificationStatus(t)
        }
    }
}