/** chunk id: 391680, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => E
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(397927),
    a = i(926919),
    r = i(172272),
    u = i(540999),
    o = i(111162),
    d = i(253932),
    A = i(780964),
    T = i(840065),
    S = i(652215);

function E() {
    let {
        layoutDebuggingEnabled: t,
        isDeveloper: e,
        isLoggingGatewayEvents: i,
        isLoggingOverlayEvents: E,
        isLoggingAnalyticsEvents: g,
        isTracingRequests: c,
        isForcedCanary: _,
        isAxeEnabled: I,
        preventPopoutClose: C,
        onlyShowPreviewAppCollections: N,
        disableAppCollectionsCache: O
    } = (0, l.cf)([o.default, u.A], () => ({
        layoutDebuggingEnabled: o.default.layoutDebuggingEnabled,
        isDeveloper: u.A.isDeveloper,
        isLoggingGatewayEvents: o.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: o.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: o.default.isLoggingAnalyticsEvents,
        isTracingRequests: o.default.isTracingRequests,
        isForcedCanary: o.default.isForcedCanary,
        isSourceMapsEnabled: o.default.sourceMapsEnabled,
        isAxeEnabled: o.default.isAxeEnabled,
        preventPopoutClose: o.default.preventPopoutClose,
        onlyShowPreviewAppCollections: o.default.onlyShowPreviewAppCollections,
        disableAppCollectionsCache: o.default.disableAppCollectionsCache
    })), {
        horizontalSpacing: b,
        verticalSpacing: D
    } = (0, r.Or)(), {
        setHorizontalSpacing: L,
        setVerticalSpacing: p
    } = r.Or.getState(), m = d.HZ.useSetting();
    return e ? [(0, n.jsxs)(s.Drp, {
        id: "overrides",
        label: "Overrides",
        action: () => {
            (0, T.openUserSettings)(A.X.DEV_OVERRIDES, {
                section: S.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, n.jsx)(s.sLh, {
            id: "always-deliver",
            label: "Always Deliver Ads",
            checked: m,
            action: () => {
                d.HZ.updateSetting(!m)
            }
        }, "always-deliver"), (0, n.jsx)(s.sLh, {
            id: "forced-canary",
            label: "Forced Canary",
            checked: _,
            action: () => {
                (0, a.x)({
                    canary: !_
                })
            }
        }, "forced-canary"), (0, n.jsx)(s.sLh, {
            id: "preview-collections",
            label: "Preview Unpublished Collections",
            checked: N,
            action: () => {
                (0, a.x)({
                    onlyShowPreviewAppCollections: !N
                })
            }
        }, "preview-collections"), (0, n.jsx)(s.sLh, {
            id: "disable-collections-cache",
            label: "Disable Collections Cache",
            checked: O,
            action: () => {
                (0, a.x)({
                    disableAppCollectionsCache: !O
                })
            }
        }, "disable-collections-cache")]
    }, "overrides"), (0, n.jsxs)(s.Drp, {
        id: "logging",
        label: "Logging",
        action: () => {
            (0, T.openUserSettings)(A.X.LOGGING, {
                section: S.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, n.jsx)(s.sLh, {
            id: "gateway-events",
            label: "Gateway Events",
            checked: i,
            action: () => {
                (0, a.x)({
                    logGatewayEvents: !i
                })
            }
        }, "gateway-events"), (0, n.jsx)(s.sLh, {
            id: "overlay-events",
            label: "Overlay RPC Events",
            checked: E,
            action: () => {
                (0, a.x)({
                    logOverlayEvents: !E
                })
            }
        }, "overlay-events"), (0, n.jsx)(s.sLh, {
            id: "analytics-events",
            label: "Analytics Events",
            checked: g,
            action: () => {
                (0, a.x)({
                    logAnalyticsEvents: !g
                })
            }
        }, "analytics-events"), (0, n.jsx)(s.sLh, {
            id: "tracing-requests",
            label: "Tracing Requests",
            checked: c,
            action: () => {
                (0, a.x)({
                    trace: !c
                })
            }
        }, "tracing-requests"), (0, n.jsx)(s.sLh, {
            id: "prevent-popout-close",
            label: "Prevent Popouts From Closing",
            checked: C,
            action: () => {
                (0, a.x)({
                    preventPopoutClose: !C
                })
            }
        }, "prevent-popout-close")]
    }, "logging"), (0, n.jsxs)(s.Drp, {
        id: "design-tools",
        label: "Design/A11y Tools",
        action: () => {
            (0, T.openUserSettings)(A.X.DESIGN_TOOLS, {
                section: S.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, n.jsx)(s.sLh, {
            id: "accessibility-auditing",
            label: "Accessibility Auditing",
            checked: I,
            action: () => {
                (0, a.x)({
                    axeEnabled: !I
                })
            }
        }, "accessibility-auditing"), (0, n.jsx)(s.sLh, {
            id: "layout-debugging",
            label: "Enable Layout Debugging",
            checked: t,
            action: () => {
                (0, a.x)({
                    layoutDebuggingEnabled: !t
                })
            }
        }, "layout-debugging"), t && (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(s.aK1, {
                id: "horizontal-spacing",
                label: "Horizontal Spacing",
                control: (t, e) => (0, n.jsx)(s.i42, {
                    ...t,
                    ref: e,
                    value: b,
                    minValue: 0,
                    maxValue: r.YR,
                    onChange: t => L(t),
                    renderValue: t => `${Math.round(t)}px`,
                    "aria-label": "Horizontal Spacing"
                })
            }, "horizontal-spacing"), (0, n.jsx)(s.aK1, {
                id: "vertical-spacing",
                label: "Vertical Spacing",
                control: (t, e) => (0, n.jsx)(s.i42, {
                    ...t,
                    ref: e,
                    value: D,
                    minValue: 0,
                    maxValue: r.YR,
                    onChange: t => p(t),
                    "aria-label": "Vertical Spacing",
                    renderValue: t => `${Math.round(t)}px`
                })
            }, "vertical-spacing")]
        })]
    }, "design-tools")] : null
}