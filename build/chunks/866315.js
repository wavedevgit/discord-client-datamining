/** Chunk was on web.js **/
/** chunk id: 866315, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    M: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(554146),
    o = n(506774),
    l = n(397927),
    c = n(73153),
    u = n(817281),
    d = n(47671),
    f = n(826673),
    p = n(379848),
    _ = n(544028),
    h = n(961350),
    m = n(927813),
    g = n(661191),
    E = n(559868),
    y = n(49999),
    b = n(818348);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            O(e, t, n[t])
        })
    }
    return e
}
let A = 1e3;

function I() {
    let [e, t] = i.useState(!1), O = (0, l.Ry6)(E.lb), I = i.useMemo(() => [s.M.DESKTOP_REFRESH_ONBOARDING_MODAL], []), [S, T] = (0, p.kn)(I), C = S === s.M.DESKTOP_REFRESH_ONBOARDING_MODAL, N = (0, a.bG)([h.default], () => h.default.getId());
    i.useLayoutEffect(() => {
        null != N && g.default.age(N) < m.A.Millis.DAY && (0, f.Dr)(s.M.DESKTOP_REFRESH_ONBOARDING_MODAL);
        let e = "desktop_refresh_theme_migration_key",
            t = "true" === o.w.get(e);
        !C || t || _.A.theme !== b.NJ.DARK || null != d.A.gradientPreset || t || (o.w.set(e, "true"), (0, u.u_)({
            theme: b.NJ.DARKER
        }))
    }, [C, N]), i.useLayoutEffect(() => {
        function e() {
            t(!0)
        }
        return c.h.subscribe("CHANGE_LOG_RESOLVED", e), () => {
            c.h.unsubscribe("CHANGE_LOG_RESOLVED", e)
        }
    }, []);
    let w = i.useCallback(() => {
        (0, l.mMO)(async () => {
            let {
                DesktopRefreshOnboardingModal: e
            } = await n.e("33638").then(n.bind(n, 887781));
            return t => (0, r.jsx)(e, v({}, t))
        }, {
            backdropStyle: l.F2Z.TOP_RADIAL,
            onCloseCallback: () => {
                T(y.i.USER_DISMISS)
            }
        })
    }, [T]);
    i.useEffect(() => {
        if (C && !O && e) {
            let e = setTimeout(() => {
                w()
            }, A);
            return () => clearTimeout(e)
        }
    }, [e, O, C, w])
}