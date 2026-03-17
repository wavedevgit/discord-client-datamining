/** chunk id: 355052 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(142703);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(258873),
    c = n(622242),
    u = n(731738),
    h = n(118356),
    p = n(397927),
    A = n(684013),
    f = n(996308),
    g = n(831062),
    _ = n(471024),
    m = n(976860),
    x = n(144400),
    E = n(927813),
    v = n(9302),
    y = n(777334),
    S = n(41984),
    C = n(941023),
    I = n(855790),
    N = n(672396),
    T = n(652215),
    O = n(985018),
    j = n(748498);
let b = 10 * E.A.Millis.SECOND,
    D = new h.Vy("LegacyOverlayErrorBoundary");

function L() {
    let e = (0, v.getPID)(),
        t = (0, v.getRPCAuthToken)();
    (0, f.tN)({
        type: T.kGV.DISPATCH,
        pid: e,
        token: t,
        payloads: [{
            type: "OVERLAY_SET_INPUT_LOCKED",
            locked: !0,
            pid: e
        }]
    })
}
class R extends s.PureComponent {
    state = {
        showTrace: !1,
        busy: !1
    };
    notificationTimer;
    contentDomRef = s.createRef();
    componentDidMount() {
        this.notificationTimer = setTimeout(this.hideNotification, b), A.A.track(T.HAw.NOTIFICATION_VIEWED, {
            notif_type: N.KS.OverlayCrashed
        })
    }
    componentWillUnmount() {
        let {
            notificationTimer: e
        } = this;
        null != e && clearTimeout(e)
    }
    hideNotification = () => {
        L();
        let {
            notificationTimer: e
        } = this;
        null != e && clearTimeout(e), this.notificationTimer = null
    };
    handleReload = e => {
        this.setState({
            busy: !0
        }), L(), A.A.track(T.HAw.NOTIFICATION_CLICKED, {
            notif_type: N.KS.OverlayCrashed,
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
            showTrace: n
        } = this.state, {
            notificationTimer: s
        } = this;
        return null == s ? null : (0, i.jsx)(C.A, {
            contentDomRef: this.contentDomRef,
            observe: !1,
            children: (0, i.jsx)(p.NPJ, {
                theme: T.NJ8.DARK,
                children: s => (0, i.jsxs)(p.DUT, {
                    innerRef: this.contentDomRef,
                    className: a()(s, j.kL),
                    onClick: e => e.stopPropagation(),
                    children: [(0, i.jsx)(_.Ay, {
                        expand: !0,
                        icon: (0, i.jsx)(x.A, {
                            width: 40,
                            height: 40,
                            className: j.Lo
                        }),
                        title: O.intl.string(O.t.U38qZj),
                        confirmText: O.intl.string(O.t.TzAl1a),
                        onNotificationClick: this.handleNotificationClick,
                        onConfirmClick: this.handleReload,
                        onDismissClick: this.hideNotification,
                        locked: !1
                    }), n && null != e ? (0, i.jsxs)(I.Ay, {
                        className: j.a2,
                        children: [(0, i.jsx)(I.Ay.Bar, {
                            children: "Error Details"
                        }), (0, i.jsx)(I.Ay.Content, {
                            className: j.Xh,
                            children: (0, i.jsx)("code", {
                                className: j.aY,
                                children: (0, i.jsx)("pre", {
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
let w = o().throttle(() => {
    g.A.increment({
        name: u.K.APP_CRASHED,
        tags: [`reason:${d.J.UNHANDLED_JS_ERROR}`, `level:${c.k.FATAL}`]
    }, !0)
}, 100, {
    trailing: !1
});
class M extends s.PureComponent {
    state = {
        error: null,
        info: null
    };
    componentDidCatch(e, t) {
        let n = (0, m.JK)().location;
        this.setState({
            error: e,
            info: t
        }), D.error(`ErrorBoundary caught error: ${e.message}`, {
            error: e,
            info: t
        });
        let i = (0, v.getPID)(),
            s = (0, v.getRPCAuthToken)();
        (0, f.tN)({
            type: T.kGV.DISPATCH,
            pid: (0, v.getPID)(),
            token: s,
            payloads: [{
                type: "OVERLAY_CRASHED",
                error: e.message,
                pid: i
            }, {
                type: "OVERLAY_SET_INPUT_LOCKED",
                locked: !0,
                pid: i
            }]
        }), setImmediate(() => window.addEventListener("click", L));
        let l = (0, y.St)(e, S.Ue.Hook, {
            extra: t
        });
        A.A.track(T.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: l,
            error_level: "fatal"
        }), w()
    }
    render() {
        let {
            children: e,
            className: t
        } = this.props, {
            error: n,
            info: s
        } = this.state;
        return null != n ? (0, i.jsx)(R, {
            error: n,
            info: s
        }) : (0, i.jsx)("div", {
            className: t,
            children: e
        })
    }
}
let k = M