/** chunk id: 749471, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(321073), n(896048), n(667532);
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(158954),
    s = n(554146),
    o = n(192308),
    u = n(298990),
    c = n(684013),
    d = n(833349),
    h = n(793574),
    p = n(429913),
    f = n(263577),
    g = n(826673),
    m = n(375492),
    y = n(589051),
    A = n(547463),
    v = n(823901),
    b = n(592598),
    E = n(395011),
    O = n(119191),
    x = n(581730),
    _ = n(672396),
    S = n(652215),
    I = n(231723),
    j = n(360469),
    T = n(985018),
    C = n(879716),
    N = n(573823);

function w(e) {
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
    if (b.A.isNotificationDisabled(_.KS.WelcomeNudge)) return null;
    let {
        enabled: r
    } = (0, y.o0)("welcomeNotification"), {
        trackView: p,
        trackClick: f
    } = (0, x.Y9)(_.KS.WelcomeNudge, {
        notif_type: _.KS.WelcomeNudge,
        secondary_notif_types: t.map(e => _.Jr[e.type])
    }), j = {}, R = [], k = [];
    for (let s of t) switch (s.type) {
        case _.Jr.WELCOME: {
            let t = (null == e ? void 0 : e.altId) != null ? m.A.getApplicationActivity(e.altId) : (null == e ? void 0 : e.id) != null ? m.A.getApplicationActivity(e.id) : null;
            null != t && (0, d.A)(t, S.jUm.JOIN) && (j.cancelText = T.intl.string(T.t["6F9ivu"]), j.onCancelClick = (e, n) => {
                f("unlock"), c.A.updateNotificationStatus(n), c.A.setInputLocked(!1, E.A.getTargetPID()), (0, u.qf)(t, !1, S.BRT.POPOUT)
            }), r && k.push((0, i.jsx)("div", {
                className: N.N7,
                children: (0, O.bi)((0, x.hM)(), T.t.mRbUco)
            }));
            break
        }
        case _.Jr.GO_LIVE_VOICE:
        case _.Jr.GO_LIVE_NON_VOICE: {
            let {
                oneClickGoLiveEnabled: e,
                useStreamCtaCopy: t
            } = (0, y.m5)("welcomeNotification"), l = T.intl.string(t ? T.t.pEuzii : T.t.U76Ft2), s = e ? e => {
                let t = () => {
                        f("go-live-modal"), c.A.setInputLocked(!1, E.A.getTargetPID())
                    },
                    n = () => {
                        f("one-click-go-live")
                    };
                (0, v.H)({
                    pid: E.A.getTargetPID(),
                    analyticsLocation: S.ThZ.OVERLAY_NUDGE,
                    allowOneClickGoLive: !0,
                    onBeforeShowModal: t,
                    onOneClickGoLive: n,
                    appContext: S.BRT.POPOUT
                })
            } : e => {
                f("go-live-modal");
                let t = E.A.getTargetPID();
                c.A.setInputLocked(!1, t), (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("96811"), n.e("48697")]).then(n.bind(n, 648230));
                    return n => (0, i.jsx)(e, P(w({}, n), {
                        selectSource: !1,
                        sourcePID: t,
                        analyticsLocations: [h.A.OVERLAY_NUDGE]
                    }))
                }, {
                    contextKey: I.KX
                })
            };
            r ? k.push((0, i.jsx)(a.$nd, {
                size: "sm",
                variant: "active",
                onClick: e => s(e),
                text: l
            })) : (j.confirmText = l, j.onConfirmClick = (e, t) => {
                c.A.updateNotificationStatus(t), s(e)
            });
            break
        }
        case _.Jr.CONTENT_INVENTORY: {
            j.onNotificationShow = () => {
                c.A.track(S.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                    user_ids: s.entries.map(e => e.author_id),
                    entry_ids: s.entries.map(e => e.id)
                })
            };
            let t = () => (0, i.jsx)(A.ru, {
                gamingId: null == e ? void 0 : e.id,
                maxUserShowCount: 5,
                variant: r ? "subtle" : "default",
                className: l()({
                    [N.kL]: !0,
                    [N.Wz]: r
                })
            });
            r ? R.push(t) : j.renderFooter = t
        }
    }
    k.length > 0 && R.unshift(() => (0, i.jsx)("div", {
        className: l()(N.kL, N.Wz, N.SH),
        children: k
    })), null == j.renderFooter && R.length > 0 && (j.renderFooter = (e, t, n) => (0, i.jsx)("div", {
        className: N.NG,
        children: R.filter(e => null != e).map(i => i(e, t, n))
    }));
    let M = (0, g.k8)(s.M.OVERLAY_OOP_WELCOME_NUX),
        L = r ? void 0 : () => (0, O.sI)((0, x.Jn)(), T.t["z8/sgJ"], T.intl.string(T.t.jZkzVJ), {
            highlightAdminWarningIfElevated: !0
        }),
        U = r ? (0, i.jsx)(a.DZT, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: T.intl.string(T.t.KWDIrh)
        }) : T.intl.string(T.t.KWDIrh),
        G = null != e ? (0, i.jsx)(D, {
            game: e
        }) : (0, i.jsx)("img", {
            src: n(513653),
            className: C.Kk,
            alt: ""
        });
    return P(w({
        className: r ? N.fV : void 0,
        icon: G,
        title: U,
        hint: L
    }, j), {
        onNotificationShow: e => {
            var t;
            p(), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (t = j.onNotificationShow) || t.call(j, e)
        },
        onNotificationClick: (e, t) => {
            var n;
            f("unlock"), c.A.setInputLocked(!1, E.A.getTargetPID()), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onNotificationClick) || n.call(j, e, t)
        },
        onDismissClick: (e, t) => {
            var n;
            f("dismiss"), M || (0, g.Dr)(s.M.OVERLAY_OOP_WELCOME_NUX), null == (n = j.onDismissClick) || n.call(j, e, t)
        }
    })
}