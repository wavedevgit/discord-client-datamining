/** chunk id: 391680 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(926919),
    r = n(172272),
    o = n(540999),
    d = n(111162),
    c = n(253932),
    u = n(780964),
    _ = n(840065),
    m = n(652215);

function g() {
    let {
        layoutDebuggingEnabled: e,
        isDeveloper: t,
        isLoggingGatewayEvents: n,
        isLoggingOverlayEvents: g,
        isLoggingAnalyticsEvents: A,
        isTracingRequests: h,
        isForcedCanary: x,
        isAxeEnabled: p,
        preventPopoutClose: T,
        onlyShowPreviewAppCollections: E,
        disableAppCollectionsCache: S
    } = (0, s.cf)([d.default, o.A], () => ({
        layoutDebuggingEnabled: d.default.layoutDebuggingEnabled,
        isDeveloper: o.A.isDeveloper,
        isLoggingGatewayEvents: d.default.isLoggingGatewayEvents,
        isLoggingOverlayEvents: d.default.isLoggingOverlayEvents,
        isLoggingAnalyticsEvents: d.default.isLoggingAnalyticsEvents,
        isTracingRequests: d.default.isTracingRequests,
        isForcedCanary: d.default.isForcedCanary,
        isSourceMapsEnabled: d.default.sourceMapsEnabled,
        isAxeEnabled: d.default.isAxeEnabled,
        preventPopoutClose: d.default.preventPopoutClose,
        onlyShowPreviewAppCollections: d.default.onlyShowPreviewAppCollections,
        disableAppCollectionsCache: d.default.disableAppCollectionsCache
    })), {
        horizontalSpacing: C,
        verticalSpacing: f
    } = (0, r.Or)(), {
        setHorizontalSpacing: b,
        setVerticalSpacing: N
    } = r.Or.getState(), I = c.HZ.useSetting();
    return t ? [(0, i.jsxs)(l.Drp, {
        id: "overrides",
        label: "Overrides",
        action: () => {
            (0, _.openUserSettings)(u.X.DEV_OVERRIDES, {
                section: m.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(l.sLh, {
            id: "always-deliver",
            label: "Always Deliver Ads",
            checked: I,
            action: () => {
                c.HZ.updateSetting(!I)
            }
        }, "always-deliver"), (0, i.jsx)(l.sLh, {
            id: "forced-canary",
            label: "Forced Canary",
            checked: x,
            action: () => {
                (0, a.x)({
                    canary: !x
                })
            }
        }, "forced-canary"), (0, i.jsx)(l.sLh, {
            id: "preview-collections",
            label: "Preview Unpublished Collections",
            checked: E,
            action: () => {
                (0, a.x)({
                    onlyShowPreviewAppCollections: !E
                })
            }
        }, "preview-collections"), (0, i.jsx)(l.sLh, {
            id: "disable-collections-cache",
            label: "Disable Collections Cache",
            checked: S,
            action: () => {
                (0, a.x)({
                    disableAppCollectionsCache: !S
                })
            }
        }, "disable-collections-cache")]
    }, "overrides"), (0, i.jsxs)(l.Drp, {
        id: "logging",
        label: "Logging",
        action: () => {
            (0, _.openUserSettings)(u.X.LOGGING, {
                section: m.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(l.sLh, {
            id: "gateway-events",
            label: "Gateway Events",
            checked: n,
            action: () => {
                (0, a.x)({
                    logGatewayEvents: !n
                })
            }
        }, "gateway-events"), (0, i.jsx)(l.sLh, {
            id: "overlay-events",
            label: "Overlay RPC Events",
            checked: g,
            action: () => {
                (0, a.x)({
                    logOverlayEvents: !g
                })
            }
        }, "overlay-events"), (0, i.jsx)(l.sLh, {
            id: "analytics-events",
            label: "Analytics Events",
            checked: A,
            action: () => {
                (0, a.x)({
                    logAnalyticsEvents: !A
                })
            }
        }, "analytics-events"), (0, i.jsx)(l.sLh, {
            id: "tracing-requests",
            label: "Tracing Requests",
            checked: h,
            action: () => {
                (0, a.x)({
                    trace: !h
                })
            }
        }, "tracing-requests"), (0, i.jsx)(l.sLh, {
            id: "prevent-popout-close",
            label: "Prevent Popouts From Closing",
            checked: T,
            action: () => {
                (0, a.x)({
                    preventPopoutClose: !T
                })
            }
        }, "prevent-popout-close")]
    }, "logging"), (0, i.jsxs)(l.Drp, {
        id: "design-tools",
        label: "Design/A11y Tools",
        action: () => {
            (0, _.openUserSettings)(u.X.DESIGN_TOOLS, {
                section: m.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(l.sLh, {
            id: "accessibility-auditing",
            label: "Accessibility Auditing",
            checked: p,
            action: () => {
                (0, a.x)({
                    axeEnabled: !p
                })
            }
        }, "accessibility-auditing"), (0, i.jsx)(l.sLh, {
            id: "layout-debugging",
            label: "Enable Layout Debugging",
            checked: e,
            action: () => {
                (0, a.x)({
                    layoutDebuggingEnabled: !e
                })
            }
        }, "layout-debugging"), e && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.aK1, {
                id: "horizontal-spacing",
                label: "Horizontal Spacing",
                control: (e, t) => (0, i.jsx)(l.i42, {
                    ...e,
                    ref: t,
                    value: C,
                    minValue: 0,
                    maxValue: r.YR,
                    onChange: e => b(e),
                    renderValue: e => `${Math.round(e)}px`,
                    "aria-label": "Horizontal Spacing"
                })
            }, "horizontal-spacing"), (0, i.jsx)(l.aK1, {
                id: "vertical-spacing",
                label: "Vertical Spacing",
                control: (e, t) => (0, i.jsx)(l.i42, {
                    ...e,
                    ref: t,
                    value: f,
                    minValue: 0,
                    maxValue: r.YR,
                    onChange: e => N(e),
                    "aria-label": "Vertical Spacing",
                    renderValue: e => `${Math.round(e)}px`
                })
            }, "vertical-spacing")]
        })]
    }, "design-tools")] : null
}