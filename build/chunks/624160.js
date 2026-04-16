/** chunk id: 624160 params = (module,exports,require) **/
n.d(t, {
    A: () => T
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
    g = n(587895),
    _ = n(429913),
    m = n(403362),
    f = n(635344),
    x = n(735321),
    p = n(606758),
    I = n(492280),
    A = n(939899),
    h = n(518477),
    E = n(985018),
    v = n(563929);
let j = {
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
        icon: e => g.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: e => E.intl.formatToPlainString(E.t.KfGahB, {
            applicationName: g.A.getApplication(e.applicationId)?.name ?? ""
        })
    }
};

function T(e) {
    let t, {
            widget: n,
            onAddWidget: l,
            size: g = "default",
            loading: f = !1,
            trackUserProfileEditAction: T
        } = e,
        {
            placeholder: N,
            getAriaLabel: b,
            icon: C
        } = j[n.type],
        S = n.type === r.x.APPLICATION,
        k = S ? n.applicationId : void 0,
        O = (0, _.h)(k),
        {
            hasAlreadyLinked: L,
            canStartAuthorization: P,
            startAuthorization: R
        } = (0, u.RD)(O),
        D = S && !L && P,
        {
            analyticsLocations: G
        } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        w = a.useCallback(() => {
            !f && ((0, x.Y5)(n), T({
                action: "WIDGET_ADDED",
                ...n.getProfileEditAnalyticsOptions()
            }), (0, p.XA)(h.jM.WIDGET_ADDED), l?.(), D && R({
                analyticsLocations: G
            }))
        }, [f, D, n, T, l, R, G]),
        y = C?.(n),
        U = D ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: v.LG,
        children: [(0, i.jsxs)(o.DUT, {
            className: s()(v.PH, "small" === g && v.PG, f && v.Lq),
            onClick: w,
            "aria-label": D && null != O ? E.intl.formatToPlainString(E.t.ATS0FK, {
                applicationName: O.name
            }) : b(n),
            "aria-busy": f,
            children: [(() => {
                let e = N(n);
                switch (e.variant) {
                    case "details":
                        return (0, i.jsx)(I.E, {
                            className: v.l4,
                            gridClassName: v.Qs,
                            applicationId: e.applicationId
                        });
                    case "grid":
                        return (0, i.jsx)(I.l, {
                            className: v.l4,
                            gridClassName: v.Qs,
                            applicationIds: e.applicationIds
                        });
                    case "application-widget":
                        return (0, i.jsx)(A.A, {
                            applicationId: e.applicationId,
                            size: g
                        });
                    default:
                        return (0, m.xb)(e)
                }
            })(), (0, i.jsxs)("div", {
                className: v.Lw,
                children: [(0, i.jsx)(U, {
                    size: "md",
                    color: "currentColor",
                    className: v.c9
                }), (0, i.jsxs)("div", {
                    className: v.DD,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, x.L)(n)
                    }), null != y ? (0, i.jsx)("img", {
                        src: y,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: v.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (t = N(n)).variant ? (0, i.jsx)(A.R, {
            applicationId: t.applicationId,
            size: g
        }) : null]
    })
}