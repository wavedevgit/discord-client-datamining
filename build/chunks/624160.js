/** Chunk was on 42944 **/
/** chunk id: 624160, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => h
});
var t = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(540185),
    o = n(397927),
    c = n(587895),
    d = n(403362),
    u = n(635344),
    m = n(735321),
    p = n(384377),
    f = n(492280),
    v = n(939899),
    x = n(518477),
    g = n(985018),
    A = n(369134);
let j = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: u.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => g.intl.string(g.t.xJtdIm)
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: u.n.VALORANT
        }),
        getAriaLabel: () => g.intl.string(g.t.Ae8tRi)
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.PEAK, u.n.BATTLEFIELD_6, u.n.REPO, u.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => g.intl.string(g.t["pBR+4j"])
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [u.n.MARVEL_RIVALS, u.n.WORLD_OF_WARCRAFT, u.n.RUST, u.n.SILKSONG]
        }),
        getAriaLabel: () => g.intl.string(g.t.NtoBi1)
    },
    [s.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => {
            var a;
            return null == (a = c.A.getApplication(e.applicationId)) ? void 0 : a.getIconURL(16)
        },
        getAriaLabel: e => {
            var a, n;
            return g.intl.formatToPlainString(g.t.KfGahB, {
                applicationName: null != (a = null == (n = c.A.getApplication(e.applicationId)) ? void 0 : n.name) ? a : ""
            })
        }
    }
};

function h(e) {
    let a, {
            widget: n,
            onAddWidget: i,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: u
        } = e,
        {
            placeholder: g,
            getAriaLabel: h,
            icon: I
        } = j[n.type],
        N = "small" === s,
        b = l.useCallback(() => {
            c || ((0, m.Y5)(n), u(function(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = null != arguments[a] ? arguments[a] : {},
                        t = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.forEach(function(a) {
                        var t;
                        t = n[a], a in e ? Object.defineProperty(e, a, {
                            value: t,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[a] = t
                    })
                }
                return e
            }({
                action: "WIDGET_ADDED"
            }, n.getProfileEditAnalyticsOptions())), (0, p.XA)(x.jM.WIDGET_ADDED), null == i || i())
        }, [c, n, u, i]),
        E = null == I ? void 0 : I(n);
    return (0, t.jsxs)("div", {
        className: A.LG,
        children: [(0, t.jsxs)(o.DUT, {
            className: r()(A.PH, N && A.PG, c && A.Lq),
            onClick: b,
            "aria-label": h(n),
            "aria-busy": c,
            children: [(() => {
                let e = g(n);
                switch (e.variant) {
                    case "details":
                        return (0, t.jsx)(f.E, {
                            className: A.xR,
                            applicationId: e.applicationId,
                            size: s
                        });
                    case "grid":
                        return (0, t.jsx)(f.l, {
                            className: A.xR,
                            applicationIds: e.applicationIds,
                            size: s
                        });
                    case "application-widget":
                        return (0, t.jsx)(v.A, {
                            applicationId: e.applicationId,
                            size: s
                        });
                    default:
                        return (0, d.xb)(e)
                }
            })(), (0, t.jsxs)("div", {
                className: A.Lw,
                children: [(0, t.jsx)(o.U1e, {
                    size: "md",
                    color: "currentColor",
                    className: A.c9
                }), (0, t.jsxs)("div", {
                    className: A.DD,
                    children: [(0, t.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, m.L)(n)
                    }), null != E ? (0, t.jsx)("img", {
                        src: E,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: A.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (a = g(n)).variant ? (0, t.jsx)(v.R, {
            applicationId: a.applicationId,
            size: s
        }) : null]
    })
}