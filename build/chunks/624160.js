/** chunk id: 624160 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(540185),
    o = n(397927),
    c = n(793574),
    d = n(688810),
    u = n(362490),
    m = n(701613),
    g = n(587895),
    f = n(429913),
    x = n(403362),
    p = n(635344),
    _ = n(735321),
    I = n(606758),
    h = n(492280),
    A = n(939899),
    E = n(518477),
    T = n(985018),
    v = n(788676);
let j = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: p.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => T.intl.string(T.t.xJtdIm)
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: p.n.VALORANT
        }),
        getAriaLabel: () => T.intl.string(T.t.Ae8tRi)
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [p.n.PEAK, p.n.BATTLEFIELD_6, p.n.REPO, p.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => T.intl.string(T.t["pBR+4j"])
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [p.n.MARVEL_RIVALS, p.n.WORLD_OF_WARCRAFT, p.n.RUST, p.n.SILKSONG]
        }),
        getAriaLabel: () => T.intl.string(T.t.NtoBi1)
    },
    [r.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => g.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: e => T.intl.formatToPlainString(T.t.KfGahB, {
            applicationName: g.A.getApplication(e.applicationId)?.name ?? ""
        })
    }
};

function C(e) {
    let t, {
            widget: n,
            onAddWidget: a,
            size: g = "default",
            loading: p = !1,
            trackUserProfileEditAction: C
        } = e,
        {
            placeholder: N,
            getAriaLabel: y,
            icon: b
        } = j[n.type],
        R = n.type === r.x.APPLICATION,
        O = R ? n.applicationId : void 0,
        S = (0, f.h)(O),
        {
            hasAlreadyLinked: k,
            canStartAuthorization: D,
            startAuthorization: P
        } = (0, u.RD)(S),
        {
            analyticsLocations: L
        } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        G = m.G.useConfig({
            location: "UserProfileWidgetOptionAddButton"
        }),
        w = R && !k && D && G.enabled,
        U = l.useCallback(() => {
            if (!p) {
                if (w) {
                    G.autoAdd && ((0, _.Y5)(n), C({
                        action: "WIDGET_ADDED",
                        ...n.getProfileEditAnalyticsOptions()
                    }), (0, I.XA)(E.jM.WIDGET_ADDED), a?.()), P({
                        analyticsLocations: L
                    });
                    return
                }(0, _.Y5)(n), C({
                    action: "WIDGET_ADDED",
                    ...n.getProfileEditAnalyticsOptions()
                }), (0, I.XA)(E.jM.WIDGET_ADDED), a?.()
            }
        }, [p, w, G, n, C, a, P, L]),
        M = b?.(n),
        F = w ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: v.LG,
        children: [(0, i.jsxs)(o.DUT, {
            className: s()(v.PH, "small" === g && v.PG, p && v.Lq),
            onClick: U,
            "aria-label": w && null != S ? T.intl.formatToPlainString(T.t.ATS0FK, {
                applicationName: S.name
            }) : y(n),
            "aria-busy": p,
            children: [(() => {
                let e = N(n);
                switch (e.variant) {
                    case "details":
                        return (0, i.jsx)(h.E, {
                            className: v.l4,
                            gridClassName: v.Qs,
                            applicationId: e.applicationId
                        });
                    case "grid":
                        return (0, i.jsx)(h.l, {
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
                        return (0, x.xb)(e)
                }
            })(), (0, i.jsxs)("div", {
                className: v.Lw,
                children: [(0, i.jsx)(F, {
                    size: "md",
                    color: "currentColor",
                    className: v.c9
                }), (0, i.jsxs)("div", {
                    className: v.DD,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, _.L)(n)
                    }), null != M ? (0, i.jsx)("img", {
                        src: M,
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