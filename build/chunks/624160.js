/** chunk id: 624160 params = (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(540185),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    m = n(701613),
    g = n(587895),
    p = n(429913),
    x = n(403362),
    f = n(635344),
    _ = n(735321),
    h = n(606758),
    A = n(492280),
    I = n(939899),
    v = n(518477),
    j = n(985018),
    E = n(788676);
let T = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: f.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => j.intl.string(j.t.xJtdIm)
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: f.n.VALORANT
        }),
        getAriaLabel: () => j.intl.string(j.t.Ae8tRi)
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.PEAK, f.n.BATTLEFIELD_6, f.n.REPO, f.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => j.intl.string(j.t["pBR+4j"])
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [f.n.MARVEL_RIVALS, f.n.WORLD_OF_WARCRAFT, f.n.RUST, f.n.SILKSONG]
        }),
        getAriaLabel: () => j.intl.string(j.t.NtoBi1)
    },
    [r.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => g.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: e => j.intl.formatToPlainString(j.t.KfGahB, {
            applicationName: g.A.getApplication(e.applicationId)?.name ?? ""
        })
    }
};

function N(e) {
    let t, {
            widget: n,
            onAddWidget: l,
            size: g = "default",
            loading: f = !1,
            trackUserProfileEditAction: N
        } = e,
        {
            placeholder: C,
            getAriaLabel: b,
            icon: S
        } = T[n.type],
        y = n.type === r.x.APPLICATION,
        R = y ? n.applicationId : void 0,
        O = (0, p.h)(R),
        {
            hasAlreadyLinked: w,
            canStartAuthorization: k,
            startAuthorization: L
        } = (0, u.RD)(O),
        {
            analyticsLocations: D
        } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        P = m.G.useConfig({
            location: "UserProfileWidgetOptionAddButton"
        }),
        G = y && !w && k && P.enabled,
        U = a.useCallback(() => {
            if (!f) {
                if (G) {
                    P.autoAdd && ((0, _.Y5)(n), N({
                        action: "WIDGET_ADDED",
                        ...n.getProfileEditAnalyticsOptions()
                    }), (0, h.XA)(v.jM.WIDGET_ADDED), l?.()), L({
                        analyticsLocations: D
                    });
                    return
                }(0, _.Y5)(n), N({
                    action: "WIDGET_ADDED",
                    ...n.getProfileEditAnalyticsOptions()
                }), (0, h.XA)(v.jM.WIDGET_ADDED), l?.()
            }
        }, [f, G, P, n, N, l, L, D]),
        F = S?.(n),
        M = G ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: E.LG,
        children: [(0, i.jsxs)(o.DUT, {
            className: s()(E.PH, "small" === g && E.PG, f && E.Lq),
            onClick: U,
            "aria-label": G && null != O ? j.intl.formatToPlainString(j.t.ATS0FK, {
                applicationName: O.name
            }) : b(n),
            "aria-busy": f,
            children: [(() => {
                let e = C(n);
                switch (e.variant) {
                    case "details":
                        return (0, i.jsx)(A.E, {
                            className: E.l4,
                            gridClassName: E.Qs,
                            applicationId: e.applicationId
                        });
                    case "grid":
                        return (0, i.jsx)(A.l, {
                            className: E.l4,
                            gridClassName: E.Qs,
                            applicationIds: e.applicationIds
                        });
                    case "application-widget":
                        return (0, i.jsx)(I.A, {
                            applicationId: e.applicationId,
                            size: g
                        });
                    default:
                        return (0, x.xb)(e)
                }
            })(), (0, i.jsxs)("div", {
                className: E.Lw,
                children: [(0, i.jsx)(M, {
                    size: "md",
                    color: "currentColor",
                    className: E.c9
                }), (0, i.jsxs)("div", {
                    className: E.DD,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, _.L)(n)
                    }), null != F ? (0, i.jsx)("img", {
                        src: F,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: E.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (t = C(n)).variant ? (0, i.jsx)(I.R, {
            applicationId: t.applicationId,
            size: g
        }) : null]
    })
}