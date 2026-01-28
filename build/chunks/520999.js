/** Chunk was on 5606 **/
/** chunk id: 520999, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(212245),
    o = n(287809),
    c = n(927578),
    d = n(987384),
    u = n(912630),
    p = n(965162),
    _ = n(413339),
    m = n(952572),
    g = n(144830),
    f = n(577718),
    b = n(652215),
    h = n(693591),
    A = n(985018);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function x(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function O(e) {
    let {
        onLearnMore: t,
        selectedBackgroundOption: O,
        onSelectBackgroundOption: C,
        currentDeviceId: y,
        responsiveBackgroundOptions: j,
        className: T
    } = e, v = (0, l.bG)([o.default], () => o.default.getCurrentUser()), [S, I] = i.useState(null), N = (0, m.A)(), P = c.Ay.canUseCustomBackgrounds(v);
    i.useEffect(() => {
        (0, d.HR)()
    }, []);
    let R = (0, l.cf)([u.A], () => P ? u.A.videoFilterAssets : {}),
        D = i.useMemo(() => Object.values(R).filter(e => e.type === f.yZ.BACKGROUND), [R]),
        w = (0, a.p)(),
        L = {
            isVideoBackgroundSupported: N,
            onSelectBackgroundOption: C,
            selectedBackgroundOption: O
        },
        M = i.useRef(L);
    i.useEffect(() => {
        M.current = L
    }), i.useEffect(() => {
        let {
            isVideoBackgroundSupported: e,
            onSelectBackgroundOption: t,
            selectedBackgroundOption: n
        } = M.current;
        e ? (0, _.S1)(n, y, {
            track: !1
        }).catch(() => t(null)) : null != n && t(null)
    }, [y]);
    let G = e => {
        C(e), (0, _.S1)(e, y, {
            location: w.location
        }).then(() => I(null)).catch(() => {
            I(A.intl.string(A.t.ejrSLe)), (0, _.S1)(null, y, {
                location: w.location
            })
        })
    };
    return N ? (0, r.jsx)("div", {
        className: T,
        children: (0, r.jsx)(s.D0$, {
            label: A.intl.string(A.t.lZTUPs),
            errorMessage: S,
            children: (0, r.jsx)(g.A, {
                canUseCustomBackgrounds: P,
                customBackgroundOptions: D,
                selectedOption: O,
                onSelectOption: G,
                onUpsellClick: () => {
                    (0, s.mMO)(async () => {
                        let {
                            default: e
                        } = await n.e("95743").then(n.bind(n, 210402));
                        return n => (0, r.jsx)(e, x(E({}, n), {
                            onLearnMore: t,
                            analyticsSource: x(E({}, w.location), {
                                object: b.ZSU.BUTTON_CTA
                            })
                        }))
                    })
                },
                onAddBackgroundImage: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return new Promise(async r => {
                        try {
                            let r = await (0, d.F9)(e, f.yZ.BACKGROUND);
                            G(r), (0, p.D1)(r, t.type === h.a.MP4, n), I(null)
                        } catch (e) {
                            I(e.message)
                        }
                        r()
                    })
                },
                responsive: j
            })
        })
    }) : null
}