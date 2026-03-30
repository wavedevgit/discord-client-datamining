/** chunk id: 355052 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => M
}), i(142703);
var n = i(627968),
    s = i(64700),
    a = i(503698),
    l = i.n(a),
    r = i(735438),
    o = i.n(r),
    d = i(258873),
    c = i(622242),
    u = i(731738),
    h = i(118356),
    _ = i(397927),
    p = i(684013),
    f = i(996308),
    m = i(831062),
    g = i(471024),
    A = i(976860),
    x = i(144400),
    v = i(927813),
    y = i(9302),
    E = i(777334),
    I = i(41984),
    S = i(941023),
    C = i(855790),
    b = i(672396),
    N = i(652215),
    T = i(985018),
    O = i(227499);
let L = 10 * v.A.Millis.SECOND,
    j = new h.Vy("LegacyOverlayErrorBoundary");

function w() {
    let e = (0, y.getPID)(),
        t = (0, y.getRPCAuthToken)();
    (0, f.tN)({
        type: N.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !0,
            pid: e
        }]
    })
}
class D extends s.PureComponent {
    state = {
        showTrace: !1,
        busy: !1
    };
    notificationTimer;
    contentDomRef = s.createRef();
    componentDidMount() {
        this.notificationTimer = setTimeout(this.hideNotification, L), p.A.track(N.HAw.NOTIFICATION_VIEWED, {
            notif_type: b.KS.OverlayCrashed
        })
    }
    componentWillUnmount() {
        let {
            notificationTimer: e
        } = this;
        null != e && clearTimeout(e)
    }
    hideNotification = () => {
        w();
        let {
            notificationTimer: e
        } = this;
        null != e && clearTimeout(e), this.notificationTimer = null
    };
    handleReload = e => {
        this.setState({
            busy: !0
        }), w(), p.A.track(N.HAw.NOTIFICATION_CLICKED, {
            notif_type: b.KS.OverlayCrashed,
            action_type: "reload"
        }, !0), e.stopPropagation(), setTimeout(() => location.reload(!0), 200)
    };
    handleNotificationClick = e => {
        e.stopPropagation();
        let {
            notificationTimer: t
        } = this;
        null != t && clearTimeout(t), e.shiftKey && this.setState({
            showTrace: !0
        })
    };
    render() {
        let {
            info: e,
            error: t
        } = this.props, {
            showTrace: i
        } = this.state, {
            notificationTimer: s
        } = this;
        return null == s ? null : (0, n.jsx)(S.A, {
            contentDomRef: this.contentDomRef,
            observe: !1,
            children: (0, n.jsx)(_.NPJ, {
                theme: N.NJ8.DARK,
                children: s => (0, n.jsxs)(_.DUT, {
                    innerRef: this.contentDomRef,
                    className: l()(s, O.kL),
                    onClick: e => e.stopPropagation(),
                    children: [(0, n.jsx)(g.Ay, {
                        expand: !0,
                        icon: (0, n.jsx)(x.A, {
                            width: 40,
                            height: 40,
                            className: O.Lo
                        }),
                        title: T.intl.string(T.t.U38qZj),
                        confirmText: T.intl.string(T.t.TzAl1a),
                        onNotificationClick: this.handleNotificationClick,
                        onConfirmClick: this.handleReload,
                        onDismissClick: this.hideNotification,
                        locked: !1
                    }), i && null != e ? (0, n.jsxs)(C.Ay, {
                        className: O.a2,
                        children: [(0, n.jsx)(C.Ay.Bar, {
                            children: "Error Details"
                        }), (0, n.jsx)(C.Ay.Content, {
                            className: O.Xh,
                            children: (0, n.jsx)("code", {
                                className: O.aY,
                                children: (0, n.jsx)("pre", {
                                    children: t.stack
                                })
                            })
                        })]
                    }) : null]
                })
            })
        })
    }
}
let R = o().throttle(() => {
    m.A.increment({
        name: u.K.APP_CRASHED,
        tags: [`reason:${d.J.UNHANDLED_JS_ERROR}`, `level:${c.k.FATAL}`]
    }, !0)
}, 100, {
    trailing: !1
});
class k extends s.PureComponent {
    state = {
        error: null,
        info: null
    };
    componentDidCatch(e, t) {
        let i = (0, A.JK)().location;
        this.setState({
            error: e,
            info: t
        }), j.error(`ErrorBoundary caught error: ${e.message}`, {
            error: e,
            info: t
        });
        let n = (0, y.getPID)(),
            s = (0, y.getRPCAuthToken)();
        (0, f.tN)({
            type: N.kGV.DISPATCH,
            pid: (0, y.getPID)(),
            token: s,
            payloads: [{
                type: "OVERLAY_CRASHED",
                error: e.message,
                pid: n
            }, {
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: !0,
                pid: n
            }]
        }), setImmediate(() => window.addEventListener("click", w));
        let a = (0, E.St)(e, I.Ue.Hook, {
            extra: t
        });
        p.A.track(N.HAw.APP_CRASHED, {
            path: i.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: a,
            error_level: "fatal"
        }), R()
    }
    render() {
        let {
            children: e,
            className: t
        } = this.props, {
            error: i,
            info: s
        } = this.state;
        return null != i ? (0, n.jsx)(D, {
            error: i,
            info: s
        }) : (0, n.jsx)("div", {
            className: t,
            children: e
        })
    }
}
let M = k