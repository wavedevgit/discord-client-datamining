/** chunk id: 186433, original params: e,t,n (module,exports,require) **/
"use strict";
n.r(t), n(896048), n(680155), n(323874), n(14289), n(35956), n(142703);
var r, i, a, o, s, l = n(627968);
n(140595), n(64700);
var c = n(507240),
    u = n(284009),
    d = n.n(u),
    f = n(999212),
    p = n(242120),
    _ = n(716680),
    h = n(908379),
    m = n(46460),
    g = n(557042),
    E = n(8917),
    y = n(728458),
    b = n(975571),
    O = n(769341),
    v = n(837921),
    A = n(763685),
    I = n(184849),
    S = n(723702),
    T = n(976860),
    C = n(350723),
    N = n(913934),
    w = n(451988),
    R = n(77729),
    P = n(772432),
    D = n(975616),
    L = n(617590),
    x = n(111162),
    M = n(769253),
    j = n(639723),
    k = n(626584),
    U = n(927813),
    G = n(316501),
    F = n(338816);
x.default.cssDebuggingEnabled && n.e("42592").then(n.t.bind(n, 196995, 19)), (0, G.pF)();
let V = 5 * U.A.Millis.MINUTE,
    B = document.getElementById("app-mount");
d()(null != B, "Could not find app-mount"), B.className = __OVERLAY__ ? "" : M.l;
let H = (0, c.createRoot)(B),
    Y = {
        "/oauth2/authorize": I.A,
        "/one-time": F.A
    };

function W(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    null != (r = Y[t]) && r.call(Y, i) || (0, T.pX)(t)
}
let K = e => H.render((0, l.jsx)(D.e, {
    children: (0, l.jsx)(P.A, {
        children: (0, l.jsx)(e, {})
    })
}));
if (null != R.A) {
    null == (r = R.A.setUncaughtExceptionHandler) || r.call(R.A, (e, t) => {
        setImmediate(() => {
            throw y.A.captureCrash(e), e
        })
    }), v.Ay.appLoaded();
    let e = null == (i = (a = R.A.remoteApp).getVersion) ? void 0 : i.call(a),
        t = null == (o = (s = R.A.remoteApp).getBuildNumber) ? void 0 : o.call(s),
        n = {};
    null != R.A.remoteApp.getModuleVersions && (n = R.A.remoteApp.getModuleVersions()), y.A.setExtra({
        hostVersion: e,
        moduleVersions: n
    }), y.A.setTags({
        nativeBuildNumber: null == t ? void 0 : t.toString()
    });
    let l = Object.keys(n).filter(e => null != n[e]).map(e => "".concat(e, ": ").concat(n[e])).join(", ");
    new k.A().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(l, ", build: ").concat(t)), v.Ay.pauseFrameEvictor(), v.Ay.initializeExitHook(), v.Ay.initializeWERHandler()
}
if ((0, N.M)(window), __OVERLAY__) K(f.A.Overlay);
else if (null != window.require && null == window.DiscordNative) K(f.A.OutdatedClient);
else {
    if (document.addEventListener("scroll", e => e.preventDefault()), S.isPlatformEmbedded) {
        window.onbeforeunload = () => v.Ay.beforeUnload(), v.Ay.on("HELP_OPEN", () => window.open(b.A.getCommunityURL()));
        let e = new w.J_(V, () => v.Ay.purgeMemory());
        v.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), v.Ay.setFocused(!1), (0, C.XC)(window, !1)
        }), v.Ay.on("MAIN_WINDOW_FOCUS", () => {
            e.cancel(), v.Ay.setFocused(!0), (0, C.XC)(window, !0)
        }), v.Ay.on("MAIN_WINDOW_PATH", W), v.Ay.on("MAIN_WINDOW_HIDDEN", () => {
            (0, C.R)(window)
        })
    }
    m.A.initialize(), p.A.initialize(), _.A.init(), E.A.init(), j.A.init(), h.A.initialize(), O.A.initialize(), A.A.initialize(), g.n(), (0, L.wP)(), K(f.A.App)
}