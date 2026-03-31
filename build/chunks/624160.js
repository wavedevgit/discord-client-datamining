/** chunk id: 624160 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(540185),
    o = n(397927),
    d = n(793574),
    c = n(688810),
    u = n(362490),
    g = n(701613),
    m = n(587895),
    p = n(429913),
    x = n(403362),
    f = n(635344),
    h = n(735321),
    _ = n(606758),
    A = n(492280),
    I = n(939899),
    j = n(518477),
    E = n(985018),
    v = n(788676);
let T = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: f.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => E.intl.string(E.t.xJtdIm)
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: f.n.VALORANT
        }),
        getAriaLabel: () => E.intl.string(E.t.Ae8tRi)
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.PEAK, f.n.BATTLEFIELD_6, f.n.REPO, f.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => E.intl.string(E.t["pBR+4j"])
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.MARVEL_RIVALS, f.n.WORLD_OF_WARCRAFT, f.n.RUST, f.n.SILKSONG]
        }),
        getAriaLabel: () => E.intl.string(E.t.NtoBi1)
    },
    [r.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => m.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: e => E.intl.formatToPlainString(E.t.KfGahB, {
            applicationName: m.A.getApplication(e.applicationId)?.name ?? ""
        })
    }
};

function b(e) {
    let t, {
            widget: n,
            onAddWidget: a,
            size: m = "default",
            loading: f = !1,
            trackUserProfileEditAction: b
        } = e,
        {
            placeholder: C,
            getAriaLabel: S,
            icon: N
        } = T[n.type],
        y = n.type === r.x.APPLICATION,
        R = y ? n.applicationId : void 0,
        O = (0, p.h)(R),
        {
            hasAlreadyLinked: k,
            canStartAuthorization: L,
            startAuthorization: w
        } = (0, u.RD)(O),
        {
            analyticsLocations: P
        } = (0, c.Ay)(d.A.USER_PROFILE_APPLICATION_WIDGET),
        D = g.G.useConfig({
            location: "UserProfileWidgetOptionAddButton"
        }),
        G = y && !k && L && D.enabled,
        F = l.useCallback(() => {
            if (!f) {
                if (G) {
                    D.autoAdd && ((0, h.Y5)(n), b({
                        action: "WIDGET_ADDED",
                        ...n.getProfileEditAnalyticsOptions()
                    }), (0, _.XA)(j.jM.WIDGET_ADDED), a?.()), w({
                        analyticsLocations: P
                    });
                    return
                }(0, h.Y5)(n), b({
                    action: "WIDGET_ADDED",
                    ...n.getProfileEditAnalyticsOptions()
                }), (0, _.XA)(j.jM.WIDGET_ADDED), a?.()
            }
        }, [f, G, D, n, b, a, w, P]),
        U = N?.(n),
        M = G ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: v.LG,
        children: [(0, i.jsxs)(o.DUT, {
            className: s()(v.PH, "small" === m && v.PG, f && v.Lq),
            onClick: F,
            "aria-label": G && null != O ? E.intl.formatToPlainString(E.t.ATS0FK, {
                applicationName: O.name
            }) : S(n),
            "aria-busy": f,
            children: [(() => {
                let e = C(n);
                switch (e.variant) {
                    case "details":
                        return (0, i.jsx)(A.E, {
                            className: v.l4,
                            gridClassName: v.Qs,
                            applicationId: e.applicationId
                        });
                    case "grid":
                        return (0, i.jsx)(A.l, {
                            className: v.l4,
                            gridClassName: v.Qs,
                            applicationIds: e.applicationIds
                        });
                    case "application-widget":
                        return (0, i.jsx)(I.A, {
                            applicationId: e.applicationId,
                            size: m
                        });
                    default:
                        return (0, x.xb)(e)
                }
            })(), (0, i.jsxs)("div", {
                className: v.Lw,
                children: [(0, i.jsx)(M, {
                    size: "md",
                    color: "currentColor",
                    className: v.c9
                }), (0, i.jsxs)("div", {
                    className: v.DD,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, h.L)(n)
                    }), null != U ? (0, i.jsx)("img", {
                        src: U,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: v.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (t = C(n)).variant ? (0, i.jsx)(I.R, {
            applicationId: t.applicationId,
            size: m
        }) : null]
    })
}