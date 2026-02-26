/** chunk id: 466410, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(926919),
    c = t(172272),
    r = t(540999),
    o = t(111162),
    d = t(253932),
    u = t(780964),
    g = t(840065),
    p = t(652215);

function A() {
    let {
        layoutDebuggingEnabled: e,
        isDeveloper: n,
        isLoggingGatewayEvents: t,
        isLoggingOverlayEvents: A,
        isLoggingAnalyticsEvents: E,
        isTracingRequests: v,
        isForcedCanary: b,
        isAxeEnabled: h,
        preventPopoutClose: S,
        onlyShowPreviewAppCollections: y,
        disableAppCollectionsCache: _
    } = (0, l.cf)([o.default, r.A], () => ({
        layoutDebuggingEnabled: o.default.layoutDebuggingEnabled,
        isDeveloper: r.A.isDeveloper,
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
        horizontalSpacing: x,
        verticalSpacing: C
    } = (0, c.Or)(), {
        setHorizontalSpacing: O,
        setVerticalSpacing: f
    } = c.Or.getState(), D = d.HZ.useSetting();
    return n ? [(0, i.jsxs)(a.Drp, {
        id: "overrides",
        label: "Overrides",
        action: () => {
            (0, g.openUserSettings)(u.X.DEV_OVERRIDES, {
                section: p.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(a.sLh, {
            id: "always-deliver",
            label: "Always Deliver Ads",
            checked: D,
            action: () => {
                d.HZ.updateSetting(!D)
            }
        }, "always-deliver"), (0, i.jsx)(a.sLh, {
            id: "forced-canary",
            label: "Forced Canary",
            checked: b,
            action: () => {
                (0, s.x)({
                    canary: !b
                })
            }
        }, "forced-canary"), (0, i.jsx)(a.sLh, {
            id: "preview-collections",
            label: "Preview Unpublished Collections",
            checked: y,
            action: () => {
                (0, s.x)({
                    onlyShowPreviewAppCollections: !y
                })
            }
        }, "preview-collections"), (0, i.jsx)(a.sLh, {
            id: "disable-collections-cache",
            label: "Disable Collections Cache",
            checked: _,
            action: () => {
                (0, s.x)({
                    disableAppCollectionsCache: !_
                })
            }
        }, "disable-collections-cache")]
    }, "overrides"), (0, i.jsxs)(a.Drp, {
        id: "logging",
        label: "Logging",
        action: () => {
            (0, g.openUserSettings)(u.X.LOGGING, {
                section: p.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(a.sLh, {
            id: "gateway-events",
            label: "Gateway Events",
            checked: t,
            action: () => {
                (0, s.x)({
                    logGatewayEvents: !t
                })
            }
        }, "gateway-events"), (0, i.jsx)(a.sLh, {
            id: "overlay-events",
            label: "Overlay RPC Events",
            checked: A,
            action: () => {
                (0, s.x)({
                    logOverlayEvents: !A
                })
            }
        }, "overlay-events"), (0, i.jsx)(a.sLh, {
            id: "analytics-events",
            label: "Analytics Events",
            checked: E,
            action: () => {
                (0, s.x)({
                    logAnalyticsEvents: !E
                })
            }
        }, "analytics-events"), (0, i.jsx)(a.sLh, {
            id: "tracing-requests",
            label: "Tracing Requests",
            checked: v,
            action: () => {
                (0, s.x)({
                    trace: !v
                })
            }
        }, "tracing-requests"), (0, i.jsx)(a.sLh, {
            id: "prevent-popout-close",
            label: "Prevent Popouts From Closing",
            checked: S,
            action: () => {
                (0, s.x)({
                    preventPopoutClose: !S
                })
            }
        }, "prevent-popout-close")]
    }, "logging"), (0, i.jsxs)(a.Drp, {
        id: "design-tools",
        label: "Design/A11y Tools",
        action: () => {
            (0, g.openUserSettings)(u.X.DESIGN_TOOLS, {
                section: p.nc_.DEVELOPER_OPTIONS
            })
        },
        children: [(0, i.jsx)(a.sLh, {
            id: "accessibility-auditing",
            label: "Accessibility Auditing",
            checked: h,
            action: () => {
                (0, s.x)({
                    axeEnabled: !h
                })
            }
        }, "accessibility-auditing"), (0, i.jsx)(a.sLh, {
            id: "layout-debugging",
            label: "Enable Layout Debugging",
            checked: e,
            action: () => {
                (0, s.x)({
                    layoutDebuggingEnabled: !e
                })
            }
        }, "layout-debugging"), e && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.aK1, {
                id: "horizontal-spacing",
                label: "Horizontal Spacing",
                control: (e, n) => (0, i.jsx)(a.i42, {
                    ...e,
                    ref: n,
                    value: x,
                    minValue: 0,
                    maxValue: c.YR,
                    onChange: e => O(e),
                    renderValue: e => `${Math.round(e)}px`,
                    "aria-label": "Horizontal Spacing"
                })
            }, "horizontal-spacing"), (0, i.jsx)(a.aK1, {
                id: "vertical-spacing",
                label: "Vertical Spacing",
                control: (e, n) => (0, i.jsx)(a.i42, {
                    ...e,
                    ref: n,
                    value: C,
                    minValue: 0,
                    maxValue: c.YR,
                    onChange: e => f(e),
                    "aria-label": "Vertical Spacing",
                    renderValue: e => `${Math.round(e)}px`
                })
            }, "vertical-spacing")]
        })]
    }, "design-tools")] : null
}