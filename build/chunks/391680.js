/** chunk id: 391680 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    m = n(840065);

function _() {
    let {
        layoutDebuggingEnabled: e,
        isDeveloper: t,
        isLoggingGatewayEvents: n,
        isLoggingOverlayEvents: _,
        isLoggingAnalyticsEvents: g,
        isTracingRequests: x,
        isForcedCanary: A,
        isAxeEnabled: h,
        preventPopoutClose: p,
        onlyShowPreviewAppCollections: T,
        disableAppCollectionsCache: f
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
        horizontalSpacing: S,
        verticalSpacing: E
    } = (0, r.Or)(), {
        setHorizontalSpacing: b,
        setVerticalSpacing: C
    } = r.Or.getState(), v = c.HZ.useSetting();
    return t ? [(0, i.jsxs)(l.Drp, {
        id: "overrides",
        label: "Overrides",
        action: () => {
            (0, m.openUserSettings)(u.X.DEV_OVERRIDES)
        },
        children: [(0, i.jsx)(l.sLh, {
            id: "always-deliver",
            label: "Always Deliver Ads",
            checked: v,
            action: () => {
                c.HZ.updateSetting(!v)
            }
        }, "always-deliver"), (0, i.jsx)(l.sLh, {
            id: "forced-canary",
            label: "Forced Canary",
            checked: A,
            action: () => {
                (0, a.x)({
                    canary: !A
                })
            }
        }, "forced-canary"), (0, i.jsx)(l.sLh, {
            id: "preview-collections",
            label: "Preview Unpublished Collections",
            checked: T,
            action: () => {
                (0, a.x)({
                    onlyShowPreviewAppCollections: !T
                })
            }
        }, "preview-collections"), (0, i.jsx)(l.sLh, {
            id: "disable-collections-cache",
            label: "Disable Collections Cache",
            checked: f,
            action: () => {
                (0, a.x)({
                    disableAppCollectionsCache: !f
                })
            }
        }, "disable-collections-cache")]
    }, "overrides"), (0, i.jsxs)(l.Drp, {
        id: "logging",
        label: "Logging",
        action: () => {
            (0, m.openUserSettings)(u.X.LOGGING)
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
            checked: _,
            action: () => {
                (0, a.x)({
                    logOverlayEvents: !_
                })
            }
        }, "overlay-events"), (0, i.jsx)(l.sLh, {
            id: "analytics-events",
            label: "Analytics Events",
            checked: g,
            action: () => {
                (0, a.x)({
                    logAnalyticsEvents: !g
                })
            }
        }, "analytics-events"), (0, i.jsx)(l.sLh, {
            id: "tracing-requests",
            label: "Tracing Requests",
            checked: x,
            action: () => {
                (0, a.x)({
                    trace: !x
                })
            }
        }, "tracing-requests"), (0, i.jsx)(l.sLh, {
            id: "prevent-popout-close",
            label: "Prevent Popouts From Closing",
            checked: p,
            action: () => {
                (0, a.x)({
                    preventPopoutClose: !p
                })
            }
        }, "prevent-popout-close")]
    }, "logging"), (0, i.jsxs)(l.Drp, {
        id: "design-tools",
        label: "Design/A11y Tools",
        action: () => {
            (0, m.openUserSettings)(u.X.DESIGN_TOOLS)
        },
        children: [(0, i.jsx)(l.sLh, {
            id: "accessibility-auditing",
            label: "Accessibility Auditing",
            checked: h,
            action: () => {
                (0, a.x)({
                    axeEnabled: !h
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
                    value: S,
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
                    value: E,
                    minValue: 0,
                    maxValue: r.YR,
                    onChange: e => C(e),
                    "aria-label": "Vertical Spacing",
                    renderValue: e => `${Math.round(e)}px`
                })
            }, "vertical-spacing")]
        })]
    }, "design-tools")] : null
}