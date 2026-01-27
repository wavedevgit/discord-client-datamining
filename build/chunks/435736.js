/** Chunk was on web.js **/
/** chunk id: 435736, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => w,
    C3: () => T,
    sw: () => S,
    tM: () => I,
    wW: () => b,
    xc: () => A
}), n(896048);
var r = n(353640),
    i = n(118356),
    a = n(554146),
    o = n(506774),
    s = n(97260),
    l = n(439372),
    c = n(826673),
    u = n(532624),
    d = n(350535),
    f = n(589051),
    p = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            _(e, t, n[t])
        })
    }
    return e
}

function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function g(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let E = "overlayKeybindExperimentPreviousKeybindSettings",
    y = new i.Vy("OverlayKeybindExperimentManager"),
    b = (0, r.v)(() => o.w.get(E, {}));

function O() {
    return b.getState()
}

function v(e) {
    b.setState(t => h({}, t, e), !0), o.w.set(E, b.getState())
}
let A = () => {
        v({
            isNewOverlayUser: void 0
        })
    },
    I = () => {
        v({
            isUsingDefaultOverlayKeybind: void 0
        })
    },
    S = e => {
        v({
            overrideIsNewOverlayUser: e
        })
    };

function T(e) {
    v({
        overrideIsUsingDefaultOverlayKeybind: e
    })
}

function C() {
    let e = u.Ay.getKeybindForAction(p.hCu.TOGGLE_OVERLAY_INPUT_LOCK, !0);
    if (null == e) return !0;
    let t = (0, u.aS)();
    return (0, d.Xt)(e.shortcut, t.shortcut)
}
class N extends l.A {
    constructor(...e) {
        super(...e), _(this, "_hasInitialized", !1), _(this, "_isProcessing", !1), _(this, "initializeKeybind", () => {
            if (null != O().previousKeybind) return;
            let e = u.Ay.getOverlayKeybind();
            v({
                previousKeybind: (0, d.dI)(e.shortcut)
            })
        }), _(this, "dispatchSetKeybind", e => {
            if (null == e) return;
            let t = u.Ay.getOverlayKeybind();
            return s.A.setKeybind(g(h({}, t), {
                shortcut: (0, d.OH)(e)
            }))
        }), _(this, "restoreKeybind", async () => {
            let e = O().previousKeybind;
            null != e && await this.dispatchSetKeybind(e)
        }), _(this, "processKeybindExperiment", async () => {
            this.initializeKeybind();
            let {
                keybindOverride: e
            } = (0, f.sq)("OverlayKeybindExperimentManager", !1), t = this.isEligibleForExperiment();
            O().keybindTreatment !== e && (null == e ? (await this.restoreKeybind(), v({
                keybindTreatment: void 0
            })) : t && (await this.dispatchSetKeybind(e), v({
                keybindTreatment: e
            })))
        }), _(this, "processExperiment", async () => {
            if (!__OVERLAY__ && !this._isProcessing) {
                this._isProcessing = !0;
                try {
                    await this.processKeybindExperiment()
                } catch (e) {
                    y.error("Experiments processing failed", {
                        error: e
                    })
                } finally {
                    this._isProcessing = !1
                }
            }
        }), _(this, "maybeInitExperiment", async () => {
            this._hasInitialized || (this._hasInitialized = !0, y.info("Experiments initializing..."), await this.processExperiment(), y.info("Experiments initialized"))
        }), _(this, "isNewOverlayUser", () => (null == O().isNewOverlayUser && v({
            isNewOverlayUser: !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX) && !(0, c.k8)(a.M.OVERLAY_OOP_WELCOME_NUX)
        }), null != O().overrideIsNewOverlayUser) ? O().overrideIsNewOverlayUser : O().isNewOverlayUser), _(this, "isUsingDefaultOverlayKeybind", () => (null == O().isUsingDefaultOverlayKeybind && v({
            isUsingDefaultOverlayKeybind: C()
        }), null != O().overrideIsUsingDefaultOverlayKeybind) ? O().overrideIsUsingDefaultOverlayKeybind : O().isUsingDefaultOverlayKeybind), _(this, "isEligibleForExperiment", () => {
            let e = this.isNewOverlayUser(),
                t = this.isUsingDefaultOverlayKeybind();
            return e && t
        }), _(this, "handlePostConnectionOpen", async () => {
            __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
        }), _(this, "handleExperimentsInit", async () => {
            __OVERLAY__ || this._isProcessing || await this.maybeInitExperiment()
        }), _(this, "handleExperimentOverrideBucket", async e => {
            __OVERLAY__ || this._isProcessing || (y.info("Experiments processing...", {
                action: e
            }), await this.processExperiment())
        }), _(this, "handleKeybindSet", e => {
            __OVERLAY__ || this._isProcessing || e.keybind.action === p.hCu.TOGGLE_OVERLAY_INPUT_LOCK && v({
                previousKeybind: (0, d.dI)(e.keybind.shortcut)
            })
        }), _(this, "handleOverlayReady", () => {
            __OVERLAY__ || this.isEligibleForExperiment() && f.lR.trackExposure({
                location: "OverlayKeybindExperimentManager"
            })
        }), _(this, "actions", {
            POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
            EXPERIMENTS_FETCH_SUCCESS: this.handleExperimentsInit,
            EXPERIMENT_OVERRIDE_BUCKET: this.handleExperimentOverrideBucket,
            KEYBINDS_SET_KEYBIND: this.handleKeybindSet,
            OVERLAY_READY: this.handleOverlayReady
        })
    }
}
let w = new N