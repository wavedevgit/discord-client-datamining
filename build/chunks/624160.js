/** chunk id: 624160, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(540185),
    o = n(397927),
    c = n(587895),
    u = n(403362),
    d = n(635344),
    p = n(735321),
    h = n(384377),
    g = n(492280),
    m = n(939899),
    f = n(518477),
    A = n(985018),
    _ = n(369134);
let b = {
    [s.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => A.intl.string(A.t.xJtdIm)
    },
    [s.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: d.n.VALORANT
        }),
        getAriaLabel: () => A.intl.string(A.t.Ae8tRi)
    },
    [s.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.n.PEAK, d.n.BATTLEFIELD_6, d.n.REPO, d.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => A.intl.string(A.t["pBR+4j"])
    },
    [s.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [d.n.MARVEL_RIVALS, d.n.WORLD_OF_WARCRAFT, d.n.RUST, d.n.SILKSONG]
        }),
        getAriaLabel: () => A.intl.string(A.t.NtoBi1)
    },
    [s.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => {
            var t;
            return null == (t = c.A.getApplication(e.applicationId)) ? void 0 : t.getIconURL(16)
        },
        getAriaLabel: e => {
            var t, n;
            return A.intl.formatToPlainString(A.t.KfGahB, {
                applicationName: null != (t = null == (n = c.A.getApplication(e.applicationId)) ? void 0 : n.name) ? t : ""
            })
        }
    }
};

function E(e) {
    let t, {
            widget: n,
            onAddWidget: l,
            size: s = "default",
            loading: c = !1,
            trackUserProfileEditAction: d
        } = e,
        {
            placeholder: A,
            getAriaLabel: E,
            icon: O
        } = b[n.type],
        y = "small" === s,
        I = i.useCallback(() => {
            c || ((0, p.Y5)(n), d(function(e) {
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
            }({
                action: "WIDGET_ADDED"
            }, n.getProfileEditAnalyticsOptions())), (0, h.XA)(f.jM.WIDGET_ADDED), null == l || l())
        }, [c, n, d, l]),
        v = null == O ? void 0 : O(n);
    return (0, r.jsxs)("div", {
        className: _.LG,
        children: [(0, r.jsxs)(o.DUT, {
            className: a()(_.PH, y && _.PG, c && _.Lq),
            onClick: I,
            "aria-label": E(n),
            "aria-busy": c,
            children: [(() => {
                let e = A(n);
                switch (e.variant) {
                    case "details":
                        return (0, r.jsx)(g.E, {
                            className: _.xR,
                            applicationId: e.applicationId,
                            size: s
                        });
                    case "grid":
                        return (0, r.jsx)(g.l, {
                            className: _.xR,
                            applicationIds: e.applicationIds,
                            size: s
                        });
                    case "application-widget":
                        return (0, r.jsx)(m.A, {
                            applicationId: e.applicationId,
                            size: s
                        });
                    default:
                        return (0, u.xb)(e)
                }
            })(), (0, r.jsxs)("div", {
                className: _.Lw,
                children: [(0, r.jsx)(o.U1e, {
                    size: "md",
                    color: "currentColor",
                    className: _.c9
                }), (0, r.jsxs)("div", {
                    className: _.DD,
                    children: [(0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, p.L)(n)
                    }), null != v ? (0, r.jsx)("img", {
                        src: v,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: _.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (t = A(n)).variant ? (0, r.jsx)(m.R, {
            applicationId: t.applicationId,
            size: s
        }) : null]
    })
}