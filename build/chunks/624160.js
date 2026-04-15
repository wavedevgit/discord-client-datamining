/** chunk id: 624160 params = (module,exports,require) **/
n.d(t, {
    A: () => b
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
    g = n(701613),
    _ = n(587895),
    m = n(429913),
    f = n(403362),
    x = n(635344),
    p = n(735321),
    I = n(606758),
    A = n(492280),
    h = n(939899),
    E = n(518477),
    v = n(985018),
    j = n(360841);
let T = {
    [r.x.FAVORITE_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: x.n.LEAGUE_OF_LEGENDS
        }),
        getAriaLabel: () => v.intl.string(v.t.xJtdIm)
    },
    [r.x.CURRENT_GAMES]: {
        placeholder: () => ({
            variant: "details",
            applicationId: x.n.VALORANT
        }),
        getAriaLabel: () => v.intl.string(v.t.Ae8tRi)
    },
    [r.x.PLAYED_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [x.n.PEAK, x.n.BATTLEFIELD_6, x.n.REPO, x.n.BALDURS_GATE_3]
        }),
        getAriaLabel: () => v.intl.string(v.t["pBR+4j"])
    },
    [r.x.WANT_TO_PLAY_GAMES]: {
        placeholder: () => ({
            variant: "grid",
            applicationIds: [x.n.MARVEL_RIVALS, x.n.WORLD_OF_WARCRAFT, x.n.RUST, x.n.SILKSONG]
        }),
        getAriaLabel: () => v.intl.string(v.t.NtoBi1)
    },
    [r.x.APPLICATION]: {
        placeholder: e => ({
            variant: "application-widget",
            applicationId: e.applicationId
        }),
        icon: e => _.A.getApplication(e.applicationId)?.getIconURL(16),
        getAriaLabel: e => v.intl.formatToPlainString(v.t.KfGahB, {
            applicationName: _.A.getApplication(e.applicationId)?.name ?? ""
        })
    }
};

function b(e) {
    let t, {
            widget: n,
            onAddWidget: l,
            size: _ = "default",
            loading: x = !1,
            trackUserProfileEditAction: b
        } = e,
        {
            placeholder: N,
            getAriaLabel: C,
            icon: S
        } = T[n.type],
        k = n.type === r.x.APPLICATION,
        O = k ? n.applicationId : void 0,
        D = (0, m.h)(O),
        {
            hasAlreadyLinked: L,
            canStartAuthorization: P,
            startAuthorization: R
        } = (0, u.RD)(D),
        {
            analyticsLocations: G
        } = (0, d.Ay)(c.A.USER_PROFILE_APPLICATION_WIDGET),
        w = g.G.useConfig({
            location: "UserProfileWidgetOptionAddButton"
        }),
        y = k && !L && P && w.enabled,
        U = a.useCallback(() => {
            if (!x) {
                if (y) {
                    w.autoAdd && ((0, p.Y5)(n), b({
                        action: "WIDGET_ADDED",
                        ...n.getProfileEditAnalyticsOptions()
                    }), (0, I.XA)(E.jM.WIDGET_ADDED), l?.()), R({
                        analyticsLocations: G
                    });
                    return
                }(0, p.Y5)(n), b({
                    action: "WIDGET_ADDED",
                    ...n.getProfileEditAnalyticsOptions()
                }), (0, I.XA)(E.jM.WIDGET_ADDED), l?.()
            }
        }, [x, y, w, n, b, l, R, G]),
        M = S?.(n),
        F = y ? o.qYV : o.U1e;
    return (0, i.jsxs)("div", {
        className: j.LG,
        children: [(0, i.jsxs)(o.DUT, {
            className: s()(j.PH, "small" === _ && j.PG, x && j.Lq),
            onClick: U,
            "aria-label": y && null != D ? v.intl.formatToPlainString(v.t.ATS0FK, {
                applicationName: D.name
            }) : C(n),
            "aria-busy": x,
            children: [(() => {
                let e = N(n);
                switch (e.variant) {
                    case "details":
                        return (0, i.jsx)(A.E, {
                            className: j.l4,
                            gridClassName: j.Qs,
                            applicationId: e.applicationId
                        });
                    case "grid":
                        return (0, i.jsx)(A.l, {
                            className: j.l4,
                            gridClassName: j.Qs,
                            applicationIds: e.applicationIds
                        });
                    case "application-widget":
                        return (0, i.jsx)(h.A, {
                            applicationId: e.applicationId,
                            size: _
                        });
                    default:
                        return (0, f.xb)(e)
                }
            })(), (0, i.jsxs)("div", {
                className: j.Lw,
                children: [(0, i.jsx)(F, {
                    size: "md",
                    color: "currentColor",
                    className: j.c9
                }), (0, i.jsxs)("div", {
                    className: j.DD,
                    children: [(0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        children: (0, p.L)(n)
                    }), null != M ? (0, i.jsx)("img", {
                        src: M,
                        alt: "",
                        width: 16,
                        height: 16,
                        className: j.Kk
                    }) : null]
                })]
            })]
        }), "application-widget" === (t = N(n)).variant ? (0, i.jsx)(h.R, {
            applicationId: t.applicationId,
            size: _
        }) : null]
    })
}