/** chunk id: 749471, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(321073), n(896048), n(667532);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(158954),
    o = n(554146),
    s = n(192308),
    u = n(298990),
    c = n(684013),
    d = n(833349),
    h = n(793574),
    p = n(429913),
    f = n(263577),
    g = n(826673),
    m = n(375492),
    A = n(589051),
    y = n(547463),
    O = n(823901),
    v = n(592598),
    b = n(395011),
    E = n(119191),
    _ = n(581730),
    S = n(672396),
    x = n(652215),
    I = n(231723),
    j = n(360469),
    C = n(985018),
    T = n(879716),
    w = n(573823);

function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i
        })
    }
    return e
}

function P(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function D(e) {
    let {
        game: t
    } = e, n = (0, p.h)(t.id);
    return null == n ? null : (0, i.jsx)(f.V, {
        src: n.getIconURL(j.iu.LARGE),
        size: 40
    })
}

function R(e, t) {
    if (v.A.isNotificationDisabled(S.KS.WelcomeNudge)) return null;
    let {
        enabled: r
    } = (0, A.o0)("welcomeNotification"), {
        trackView: p,
        trackClick: f
    } = (0, _.Y9)(S.KS.WelcomeNudge, {
        notif_type: S.KS.WelcomeNudge,
        secondary_notif_types: t.map(e => S.Jr[e.type])
    }), j = {}, R = [], L = [];
    for (let o of t) switch (o.type) {
        case S.Jr.WELCOME: {
            let t = (null == e ? void 0 : e.altId) != null ? m.A.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? m.A.getApplicationActivity(e.id) : null;
            null != t && (0, d.A)(t, x.jUm.JOIN) && (j.cancelText = C.intl.string(C.t["6F9ivu"]), j.onCancelClick = (e, n) => {
                f("unlock"), c.A.updateNotificationStatus(n), c.A.setInputLocked(!1, b.A.getTargetPID()), (0, u.qf)(t, !1, x.BRT.POPOUT)
            }), r && L.push((0, i.jsx)("div", {
                className: w.N7,
                children: (0, E.bi)((0, _.hM)(), C.t.mRbUco)
            }));
            break
        }
        case S.Jr.GO_LIVE_VOICE:
        case S.Jr.GO_LIVE_NON_VOICE: {
            let {
                oneClickGoLiveEnabled: e,
                useStreamCtaCopy: t
            } = (0, A.m5)("welcomeNotification"), l = C.intl.string(t ? C.t.pEuzii : C.t.U76Ft2), o = e ? e => {
                let t = () => {
                        f("go-live-modal"), c.A.setInputLocked(!1, b.A.getTargetPID())
                    },
                    n = () => {
                        f("one-click-go-live")
                    };
                (0, O.H)({
                    pid: b.A.getTargetPID(),
                    analyticsLocation: x.ThZ.OVERLAY_NUDGE,
                    allowOneClickGoLive: !0,
                    onBeforeShowModal: t,
                    onOneClickGoLive: n,
                    appContext: x.BRT.POPOUT
                })
            } : e => {
                f("go-live-modal");
                let t = b.A.getTargetPID();
                c.A.setInputLocked(!1, t), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
                    return n => (0, i.jsx)(e, P(N({}, n), {
                        selectSource: !1,
                        sourcePID: t,
                        analyticsLocations: [h.A.OVERLAY_NUDGE]
                    }))
                }, {
                    contextKey: I.KX
                })
            };
            r ? L.push((0, i.jsx)(a.$nd, {
                size: "sm",
                variant: "active",
                onClick: e => o(e),
                text: l
            })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
                c.A.updateNotificationStatus(t), o(e)
            });
            break
        }
        case S.Jr.CONTENT_INVENTORY: {
            j.onNotificationShow = () => {
                c.A.track(x.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: o.entries.map(e => e.author_id),
                    entry_ids: o.entries.map(e => e.id)
                })
            };
            let t = () => (0, i.jsx)(y.ru, {
                gamingId: null == e ? void 0 : e.id,
                maxUserShowCount: 5,
                variant: r ? "subtle" : "default",
                className: l()({
                    [w.kL]: !0,
                    [w.Wz]: r
                })
            });
            r ? R.push(t) : j.renderFooter = t
        }
    }
    L.length > 0 && R.unshift(() => (0, i.jsx)("div", {
        className: l()(w.kL, w.Wz, w.SH),
        children: L
    })), null == j.renderFooter && R.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
        className: w.NG,
        children: R.filter(e => null != e).map(i => i(e, t, n))
    }));
    let k = (0, g.k8)(o.M.OVERLAY_OOP_WELCOME_NUX),
        M = r ? void 0 : () => (0, E.sI)((0, _.Jn)(), C.t["z8/sgJ"], C.intl.string(C.t.jZkzVJ), {
            highlightAdminWarningIfElevated: !0
        }),
        z = r ? (0, i.jsx)(a.DZT, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: C.intl.string(C.t.KWDIrh)
        }) : C.intl.string(C.t.KWDIrh),
        V = null != e ? (0, i.jsx)(D, {
            game: e
        }) : (0, i.jsx)("img", {
            src: n(513653),
            className: T.Kk,
            alt: ""
        });
    return P(N({
        className: r ? w.fV : void 0,
        icon: V,
        title: z,
        hint: M
    }, j), {
        onNotificationShow: e => {
            var t;
            p(), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
        },
        onNotificationClick: (e, t) => {
            var n;
            f("unlock"), c.A.setInputLocked(!1, b.A.getTargetPID()), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
        },
        onDismissClick: (e, t) => {
            var n;
            f("dismiss"), k || (0, g.Dr)(o.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
        }
    })
}