/** Chunk was on web.js **/
/** chunk id: 869003, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(397927),
    o = n(73153),
    s = n(87001),
    l = n(574172),
    c = n(378570),
    u = n(646865),
    d = n(795816),
    f = n(458664),
    p = n(933958),
    _ = n(969151),
    h = n(315206),
    m = n(594007),
    g = n(5867),
    E = n(652215),
    y = n(985018);

function b(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            b(e, t, n[t])
        })
    }
    return e
}
let v = !1,
    A = !1;
class I extends f.A {
    _initialize() {
        super._initialize(), s.A.addChangeListener(this.handlePopoutWindowUpdate), o.h.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
    }
    _terminate() {
        super._terminate(), s.A.removeChangeListener(this.handlePopoutWindowUpdate), o.h.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen)
    }
    showErrorModal(e) {
        let {
            code: t,
            message: n
        } = e;
        (0, a.mMO)(async () => e => (0, r.jsx)(i.Modal, O({
            title: y.intl.formatToPlainString(y.t.hbiAO6, {
                code: t
            }),
            subtitle: n,
            actions: [{
                text: y.intl.string(y.t.BddRzS),
                onClick: e.onClose,
                variant: "primary"
            }]
        }, e)))
    }
    showLaunchErrorModal(e) {
        (0, a.mMO)(async () => t => (0, r.jsx)(i.Modal, O({
            title: y.intl.string(y.t.PtobXW),
            subtitle: e,
            actions: [{
                text: y.intl.string(y.t.BddRzS),
                onClick: t.onClose,
                variant: "primary"
            }]
        }, t)))
    }
    showDevShelfOverrideEnabled() {
        (0, a.showToast)((0, a.createToast)(y.intl.string(y.t.JfA7IK), a.ToastType.SUCCESS))
    }
    leaveActivity(e) {
        let {
            location: t,
            applicationId: n,
            showFeedback: r,
            shouldClosePopout: i = !0
        } = e;
        o.h.wait(() => {
            (0, d._H)({
                location: t,
                applicationId: n,
                showFeedback: r
            })
        }), (0, u.f)() && i && (0, l.close)(E.MLl.ACTIVITY_POPOUT)
    }
    hidePIPEmbed(e) {
        let {
            location: t,
            applicationId: n
        } = e, r = (0, m.A)(t.id, n);
        (0, h.bK)(r)
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e), b(this, "handleRPCDisconnect", e => {
            let {
                reason: t,
                application: n
            } = e;
            this.superHandleRPCDisconnect({
                reason: t,
                application: n
            })
        }), b(this, "handlePopoutWindowOpen", e => {
            let {
                key: t
            } = e;
            t === E.MLl.ACTIVITY_POPOUT && (A = !1)
        }), b(this, "popInActivity", () => {
            A = !0, l.close(E.MLl.ACTIVITY_POPOUT);
            let e = p.Ay.getCurrentEmbeddedActivity();
            if (null != e) {
                let t = (0, _.H)(e.location);
                null != t && (0, c.iN)(t), (0, d.gk)(g.Gd.PANEL)
            }
        }), b(this, "handlePopoutWindowUpdate", () => {
            let e = v,
                t = s.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT);
            if (e && !t && !A) {
                let e = p.Ay.getCurrentEmbeddedActivity();
                null != e && this.leaveActivity({
                    location: e.location,
                    applicationId: e.applicationId
                })
            }
            v = t
        })
    }
}
let S = new I