/** chunk id: 748579, original params: e,t,a (module,exports,require) **/
a.r(t), a.d(t, {
    default: () => v
}), a(896048);
var n = a(627968),
    s = a(64700),
    r = a(503698),
    i = a.n(r),
    d = a(110259),
    l = a(990078),
    c = a(397927),
    _ = a(139286),
    u = a(607470),
    o = a(224016),
    m = a(954571),
    x = a(764231),
    h = a(112848),
    p = a(788868),
    E = a(652215),
    T = a(985018),
    g = a(962131);

function v(e) {
    var t;
    let {
        levelUpData: a
    } = e, [r, v] = s.useState(!1), [f, b] = s.useState(!1), [N, y] = s.useState(!1), k = (0, h.Xb)(), j = s.useRef(null), w = s.useRef(null), {
        currentBadge: A,
        prevBadge: R,
        levelUpVideoSrc: U
    } = a, C = s.useCallback(() => {
        let e = 700 * (A.id !== p.Ac.PREMIUM_TENURE_1_MONTH);
        w.current.currentTime = 0, setTimeout(() => {
            y(!0), w.current.play()
        }, e)
    }, [A.id]);
    s.useEffect(() => {
        r && C()
    }, [r, C]), (0, _.A)({
        type: d.ImpressionTypes.POPOUT,
        name: d.ImpressionNames.TIERED_TENURE_BADGE_LEVEL_UP,
        properties: {
            new_badge_id: A.id
        }
    }, {
        trackOnInitialLoad: !0
    }), s.useEffect(() => {
        null != w.current && w.current.load()
    }, []);
    let D = s.useCallback(() => {
            b(!1), y(!1), C(), j.current.style.display = "none", j.current.offsetWidth, j.current.style.display = "", m.default.track(E.HAw.TIERED_TENURE_BADGE_LEVEL_UP_REPLAY_CLICKED, {
                new_badge_id: A.id
            })
        }, [A.id, C]),
        I = {
            "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (t = a.prevBadgeTextGradient) ? t : "transparent", ")"),
            "--custom-new-badge-color": "linear-gradient(to right, ".concat(a.currentBadgeTextGradient, ")")
        };
    return (0, n.jsxs)("div", {
        className: i()(g.Qs, {
            [g.v6]: f,
            [g.Kc]: r,
            [g.A4]: N
        }),
        style: I,
        ref: j,
        children: [(0, n.jsx)(u.A, {
            ref: w,
            className: g.Ki,
            src: U,
            playsInline: !0,
            onLoadedData: () => v(!0),
            onEnded: () => b(!0)
        }), (0, n.jsxs)("div", {
            className: g.FS,
            children: [(0, n.jsx)(o.A, {
                width: 60,
                height: 15
            }), null != R && (0, n.jsx)(c.Text, {
                variant: "display-md",
                className: i()(g.Vv, g.km),
                children: T.intl.string(R.nameUnformatted)
            }), (0, n.jsx)(c.Text, {
                variant: "display-md",
                className: i()(g.Vv, g.Hl),
                children: T.intl.string(A.nameUnformatted)
            }), null != k && (0, n.jsx)(c.Text, {
                variant: "text-xs/medium",
                className: g.SD,
                children: T.intl.formatToPlainString(T.t["f/OGgM"], {
                    timeFrame: (0, x.T)(A.id, A.tenureReqNumMonths),
                    date: k
                })
            }), (0, n.jsx)("div", {
                className: g.uu,
                children: (0, n.jsx)(l.m, {
                    text: T.intl.string(T.t.hsvh0i),
                    children: (0, n.jsx)(c.K0, {
                        icon: c.udU,
                        variant: "secondary",
                        size: "sm",
                        onClick: D,
                        "aria-label": T.intl.string(T.t.hsvh0i)
                    })
                })
            })]
        })]
    })
}