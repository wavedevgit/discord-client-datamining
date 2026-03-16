/** chunk id: 484762 params = (module,exports,require) **/
n.d(t, {
    A: () => ek
}), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(835245),
    c = n(311907),
    u = n(435371),
    m = n(421380),
    h = n(397927),
    p = n(73153),
    x = n(391973),
    g = n(684013),
    _ = n(56562),
    f = n(765671),
    v = n(235986),
    b = n(15285),
    j = n(742589),
    A = n(41984),
    C = n(181435),
    y = n(435736),
    T = n(833551),
    S = n(515183),
    E = n(395011),
    N = n(127242),
    I = n(869014),
    R = n(379078),
    O = n(704554),
    k = n(528772),
    w = n(555528),
    D = n(157257),
    M = n(532624),
    P = n(242286),
    U = n(957565),
    L = n(405269),
    B = n(927813),
    G = n(996439),
    F = n(350535),
    V = n(9302),
    W = n(708403),
    H = n(260880),
    K = n(303054),
    z = n(231643),
    $ = n(652215),
    q = n(644434),
    Q = n(985018),
    Y = n(167056),
    J = n(661251);
let X = {
        [$.uss.CLICK_ZONE_DEBUG]: e => ({
            type: $.uss.CLICK_ZONE_DEBUG,
            id: (0, d.A)(),
            layoutId: e,
            anchor: {
                top: .35,
                right: .35
            },
            size: {
                width: 100,
                height: 100
            },
            ...w.A.getWidgetDefaultSettings($.uss.CLICK_ZONE_DEBUG),
            pinned: !0
        }),
        [$.uss.PERFORMANCE_DEBUG]: e => ({
            type: $.uss.PERFORMANCE_DEBUG,
            id: (0, d.A)(),
            layoutId: e,
            anchor: {
                top: .1,
                right: .1
            },
            size: {
                fixed: !1,
                width: "auto",
                height: "auto"
            },
            ...w.A.getWidgetDefaultSettings($.uss.PERFORMANCE_DEBUG),
            pinned: !0
        })
    },
    Z = {};

function ee(e) {
    let {
        id: t
    } = e, [n, s] = i.useState(!1);
    return i.useEffect(() => {
        let e;
        return n && (e = setTimeout(() => {
            s(!1)
        }, 1e3)), () => {
            null != e && clearTimeout(e)
        }
    }, [n]), (0, a.jsxs)(m.$n, {
        look: m.$n.Looks.LINK,
        color: m.$n.Colors.LINK,
        size: m.$n.Sizes.MIN,
        onClick: function() {
            (0, U.C)(t, () => s(!0))
        },
        className: Y.DT,
        children: ["Application Id: ", t, " ", n ? Q.intl.string(Q.t.t5VZ88) : null]
    })
}
let et = i.memo(function(e) {
        let {
            trackedGame: t
        } = e, n = (0, c.bG)([b.Ay], () => b.Ay.getGameOrTransformedSubgameForPID(t.pid)), i = (0, c.bG)([D.A], () => D.A.getGameForPID(t.pid)), s = (0, c.bG)([b.Ay], () => null == n ? null : b.Ay.getGameOverlayStatus(n));
        return (0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsx)(h.Text, {
                variant: "text-md/bold",
                color: "text-strong",
                children: t.gameName
            }), (0, a.jsx)(h.Text, {
                variant: "text-sm/bold",
                color: "text-subtle",
                children: t.pid
            }), (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: n?.exeName
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["isLauncher: ", n?.isLauncher ? "Yes" : "No"]
            }), null != t.applicationId && (0, a.jsx)(h.Text, {
                variant: "text-md/bold",
                color: "text-strong",
                children: (0, a.jsx)(ee, {
                    id: t.applicationId
                })
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["fullscreenType: ", (0, S.wR)(t.fullscreenType)]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["state: ", t.state]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"]
            }), (0, a.jsxs)("div", {
                className: Y.st,
                children: [(0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["source: ", t.source]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayMethod: ", (0, S.gK)(t.overlayMethod)]
                })]
            }), null != s && (0, a.jsxs)("div", {
                className: Y.st,
                children: [(0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["raw source: ", s.source]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["raw enabledLegacy: ", s.enabledLegacy ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["raw enabledOOP: ", s.enabledOOP ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["raw overlayMethod: ", (0, S.gK)(s.overlayMethod)]
                })]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["hidden: ", n?.hidden ? "Yes" : "No"]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["hook: ", i?.hook ? "Yes" : "No"]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["overlay: ", i?.overlay ? "Yes" : "No"]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["overlayCompatibilityHook: ", i?.overlayCompatibilityHook ? "Yes" : "No"]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: ["supportsOutOfProcessOverlay: ", i?.supportsOutOfProcessOverlay ? "Yes" : "No"]
            })]
        })
    }),
    en = i.memo(function(e) {
        let {
            pid: t
        } = e, n = (0, c.cf)([P.default], () => P.default.getOverlayPIDStatuses()), i = (0, c.cf)([T.default], () => T.default.getTrackedGames()), s = (0, c.bG)([P.default], () => P.default.isInputLocked(t), [t]), l = (0, c.bG)([P.default], () => P.default.DEV_isInputLockedV3(t), [t]), r = (0, c.bG)([P.default], () => P.default.DEV_isInputLocked(t), [t]), o = (0, c.bG)([P.default], () => P.default.isReady(t), [t]);
        return (0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsx)(h.Text, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: `${t}`
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: ["Screen Type Resolution: ", (e => {
                    let t = i[e]?.timer;
                    if (null == t || null == t.screenTypeResolutionTimestamp) return "...";
                    let n = t.screenTypeResolutionTimestamp - t.startTrackingTimestamp;
                    return `${n.toFixed(2)}ms`
                })(t)]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: ["Window Creation: ", (e => {
                    let t = i[e]?.timer;
                    if (null == t || null == t.moduleTrackingTimestamp || null == t.screenTypeResolutionTimestamp) return "...";
                    let n = t.moduleTrackingTimestamp - t.screenTypeResolutionTimestamp;
                    return `${n.toFixed(2)}ms`
                })(t)]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: ["Rendering: ", (e => {
                    let t = i[e]?.timer;
                    if (null == t || null == t.overlayRenderingTimestamp || null == t.moduleTrackingTimestamp) return "...";
                    let n = t.overlayRenderingTimestamp - t.moduleTrackingTimestamp;
                    return `${n.toFixed(2)}ms`
                })(t)]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: ["Bridge Status: ", n.get(Number(t))]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: ["isInputLocked: ", s]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: ["isInputLockedV3: ", l]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: ["isInputLockedV2: ", r]
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-strong",
                children: ["isReady: ", o]
            })]
        })
    });

function ea(e) {
    let t, n = (t = Object.values((0, c.yK)([w.A], () => w.A.getWidgetsForLayout(q.G))), t.find(t => t.type === e));
    return [n, () => {
        if (null != n)(0, x.uv)(n.id);
        else {
            let t = X[e];
            if (null == t) return;
            let n = t(q.G);
            (0, x.jn)(n)
        }
    }]
}

function ei(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, L.i$)(o()(e), "h:mm:ss.SSS")
}
let es = i.memo(function(e) {
    let {
        pid: t,
        ...n
    } = e, i = (0, c.bG)([T.default], () => {
        if (null == t) return "Unknown";
        let e = T.default.getTrackedGameByPid(t)?.gameName;
        return null != e ? (Z[t] = e, e) : Z[t] ?? "Unknown"
    }, [t]);
    return (0, a.jsx)(h.Text, {
        ...n,
        variant: "text-md/semibold",
        color: "text-strong",
        children: i
    })
});

function el() {
    let e = (0, c.bG)([N.A], () => N.A.hasRenderDebugMode(A.x7.TrackFocusPIDs)),
        t = (0, c.yK)([T.default], () => T.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, a.jsxs)("div", {
        className: Y.st,
        children: [(0, a.jsxs)("div", {
            className: Y.Iv,
            children: [(0, a.jsx)(h.dOG, {
                checked: e,
                onChange: () => void g.A.setRenderDebugMode(!N.A.hasRenderDebugMode(A.x7.TrackFocusPIDs), A.x7.TrackFocusPIDs),
                label: "Track Focus Pids"
            }), (0, a.jsx)(h.DUT, {
                className: Y.LL,
                onClick: () => g.A.clearTrackedPids(),
                children: (0, a.jsx)(h.ucK, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        }), (0, a.jsxs)(h.IpV, {
            className: l()(Y.st, Y.XG),
            children: [0 === t.length && (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: "No recent focused pids"
            }), [...t].reverse().map(e => {
                let [t, n, s] = e;
                return (0, a.jsx)(i.Fragment, {
                    children: (0, a.jsx)(u.m_, {
                        position: "left",
                        text: s === A.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                        children: (0, a.jsx)("div", {
                            children: (0, a.jsxs)(h.Text, {
                                variant: "text-sm/medium",
                                color: s === A.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                children: [(0, a.jsx)(es, {
                                    pid: n,
                                    tag: "span"
                                }), " - ", n?.toString() ?? "null", " @ ", ei(t)]
                            })
                        })
                    })
                }, `${n}-${t}`)
            })]
        })]
    })
}
let er = i.memo(function(e) {
        let {
            pid: t
        } = e, n = (0, c.bG)([T.default, b.Ay], () => {
            if (null == t) return null;
            let e = T.default.getTrackedGameByPid(t)?.fullscreenType;
            if (null != e) return e;
            let n = b.Ay.getGameOrTransformedSubgameForPID(t);
            return n?.fullscreenType ?? _.aI.UNKNOWN
        }, [t]);
        return (0, a.jsxs)(h.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != n ? (0, S.wR)(n) : "Unknown"]
        })
    }),
    eo = i.memo(function() {
        let e = (0, c.cf)([T.default], () => T.default.getTrackedGames()),
            [t, n] = i.useState({}),
            s = i.useRef(null);
        return i.useEffect(() => (s.current = setInterval(async () => {
            let e = b.Ay.getRunningGames(),
                t = [],
                a = Date.now();
            for (let n of e) t.push((0, S.E1)(n.pid, 0).then(e => [n.pid, e, a]));
            let i = await Promise.all(t);
            n(e => i.reduce((e, t) => {
                let [n, a, i] = t;
                if (null == a || null == n) return e;
                let s = e[n] ?? [],
                    l = s[s.length - 1]?.screenType;
                return (0 === s.length || l !== a) && (e[n] = [...s, {
                    pid: n,
                    screenType: a,
                    timestamp: i
                }]), e
            }, {
                ...e
            }))
        }, +B.A.Millis.SECOND), () => clearInterval(s.current)), []), (0, a.jsx)(u.m_, {
            position: "left",
            text: "The most recent screen types we've logged, indexed by pid",
            children: (0, a.jsx)("div", {
                children: (0, a.jsxs)(h.IpV, {
                    className: l()(Y.st, Y.XG),
                    children: [0 === Object.keys(e).length && (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No recent screen types"
                    }), Object.values(e).map(e => (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(es, {
                            tag: "div",
                            pid: e.pid
                        }), (0, a.jsx)(er, {
                            pid: e.pid
                        }), null != t[e.pid] && [...t[e.pid]].reverse().map(t => {
                            let {
                                screenType: n,
                                timestamp: i
                            } = t;
                            return (0, a.jsx)(h.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                children: `${n}:${(0,S.wR)(n)} @ ${ei(i)}`
                            }, `${e.pid}-${n}-${i}`)
                        })]
                    }, e.pid))]
                })
            })
        })
    }),
    ed = i.memo(function() {
        let e = (0, c.cf)([T.default], () => T.default.getTrackedGames()),
            t = (0, V.getPID)(),
            n = (0, c.bG)([T.default], () => T.default.isOverlayOOPEnabledForPid(t), [t]),
            [i, s] = (0, c.yK)([k.A], () => [k.A.enabled, k.A.keepOpen]),
            l = (0, c.bG)([P.default], () => P.default.getFocusedPID()),
            r = (0, c.bG)([P.default], () => P.default.isFocusedPidOutOfProcess());
        return (0, a.jsxs)("div", {
            className: Y.st,
            children: [0 === Object.keys(e).length && (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: "No tracked game times"
            }), Object.values(e).map(e => (0, a.jsx)(en, {
                pid: e.pid
            }, e.pid)), (0, a.jsxs)("div", {
                children: [(0, a.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["focusedPID: ", l?.toString() ?? "null"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: ["isFocusedPidOutOfProcess: ", r ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/medium",
                    color: "text-strong",
                    children: ["processPid: ", t?.toString() ?? "unknown"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: ["isOOPEnabledForPid: ", n ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: ["SoundboardOverlay.enabled: ", i ? "Yes" : "No"]
                }), (0, a.jsxs)(h.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: ["SoundboardOverlay.keepOpen: ", s ? "Yes" : "No"]
                })]
            })]
        })
    }),
    ec = [{
        mode: A.x7.ClickZones,
        label: "Click Zone Debug Mode",
        tooltip: "Enables a red border around click zones to help with debugging."
    }, {
        mode: A.x7.WidgetAreas,
        label: "Render Debug Mode",
        tooltip: "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets"
    }, {
        mode: A.x7.WindowContainer,
        label: "Window Container Debug Mode",
        tooltip: "Enables a border the overlay window"
    }, {
        mode: A.x7.DisabledGPUBoost,
        label: "Disable GPU Boost",
        tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources."
    }, {
        mode: A.x7.ForceGPUBoost,
        label: "Force GPU Boost",
        tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources."
    }, {
        mode: A.x7.OverlayRafManagerForceEnabled,
        label: "Overlay SmartRAF",
        tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds."
    }, {
        mode: A.x7.LegacyOverlayLogging,
        label: "Legacy Overlay Logging",
        tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console."
    }],
    eu = i.memo(function() {
        let [e, t] = ea($.uss.CLICK_ZONE_DEBUG), [n, s] = ea($.uss.PERFORMANCE_DEBUG), l = (0, c.bG)([N.A], () => N.A.getRenderDebugModes()), [r, o] = i.useState({});
        return i.useEffect(() => {
            let e = setInterval(() => {
                o({})
            }, 200);
            return () => clearInterval(e)
        }, []), (0, a.jsx)("div", {
            className: Y.st,
            children: ec.map(r => {
                let o = r.mode === A.x7.OverlayRafManagerForceEnabled ? `${r.label} (${I.A.getLastRAFCallbackReason()})` : r.label,
                    d = () => r.mode === A.x7.ClickZones ? null != e : r.mode === A.x7.WidgetAreas ? null != n : l.has(r.mode);
                return (0, a.jsx)(i.Fragment, {
                    children: (0, a.jsx)(h.dOG, {
                        checked: d(),
                        onChange: () => {
                            var e;
                            let n = d();
                            r.mode === A.x7.ClickZones && t(), r.mode === A.x7.WidgetAreas && s(), e = r.mode, g.A.setRenderDebugMode(!n, e)
                        },
                        label: o,
                        description: r.tooltip
                    })
                }, r.mode)
            })
        })
    }),
    em = i.memo(function() {
        let e = (0, c.cf)([T.default], () => T.default.getTrackedGames()),
            t = (0, c.bG)([b.Ay], () => b.Ay.getRunningGames()).filter(t => null == e[t.pid]);
        return (0, a.jsxs)(a.Fragment, {
            children: [t.length > 0 && (0, a.jsx)(u.m_, {
                position: "left",
                text: "Games that are running but not tracked by the overlay",
                children: (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                        className: Y.st,
                        children: [(0, a.jsx)(h.Text, {
                            variant: "text-md/bold",
                            color: "text-feedback-critical",
                            children: "Untracked Running Games"
                        }), t.map(e => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(h.Text, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                children: `${e.pid} - ${e.name} (${e.exeName})`
                            }, e.pid), (0, a.jsx)(er, {
                                pid: e.pid
                            })]
                        }))]
                    })
                })
            }), (0, a.jsx)(u.m_, {
                position: "left",
                text: "The current running games process information",
                children: (0, a.jsx)("div", {
                    children: (0, a.jsxs)("div", {
                        className: Y.st,
                        children: [0 === Object.keys(e).length && (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No running games"
                        }), Object.values(e).map(e => (0, a.jsx)(et, {
                            trackedGame: e
                        }, e.pid))]
                    })
                })
            })]
        })
    }),
    eh = i.memo(function() {
        let e = (0, c.bG)([T.default], () => T.default.getForcedRenderMode()),
            [t, n] = i.useState(e),
            s = [{
                label: A.V6.UNSET,
                value: A.V6.UNSET,
                id: A.V6.UNSET
            }, {
                label: A.V6.IN_PROCESS_V2,
                value: A.V6.IN_PROCESS_V2,
                id: A.V6.IN_PROCESS_V2
            }, {
                label: A.V6.OUT_OF_PROCESS_V3,
                value: A.V6.OUT_OF_PROCESS_V3,
                id: A.V6.OUT_OF_PROCESS_V3
            }, {
                label: A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                value: A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                id: A.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION
            }].map(t => ({
                ...t,
                label: `${t.label} ${e===t.value?"(current)":""}`
            }));
        return (0, a.jsx)(h.l6P, {
            label: "Override the overlay render mode",
            value: t,
            options: s,
            onSelectionChange: e => {
                n(e), g.A.forceRenderMode(e)
            },
            selectionMode: "single",
            fullWidth: !0
        })
    });

function ep(e) {
    let {
        modalProps: t,
        onClose: n
    } = e, [s, l] = i.useState(null);

    function r() {
        n(null)
    }
    return (0, a.jsxs)(h.EOs, {
        size: h.rIJ.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [(0, a.jsxs)(h.rQ0, {
            align: v.A.Align.CENTER,
            justify: v.A.Justify.BETWEEN,
            children: [(0, a.jsx)(h.Text, {
                variant: "text-md/bold",
                color: "text-feedback-critical",
                children: "Breadcrumb Import"
            }), (0, a.jsx)(h.s_y, {
                onClick: r
            })]
        }), (0, a.jsx)(h.$mQ, {
            children: (0, a.jsx)("div", {
                className: Y.st,
                children: (0, a.jsx)(h.fs1, {
                    label: "Paste JSON Here",
                    onChange: l,
                    value: s ?? "",
                    rows: 12
                })
            })
        }), (0, a.jsx)(h.jlY, {
            children: (0, a.jsxs)(h.ButtonGroup, {
                direction: "horizontal-reverse",
                children: [(0, a.jsx)(h.Button, {
                    variant: "primary",
                    text: "Import",
                    onClick: function() {
                        n(s)
                    }
                }), (0, a.jsx)(h.Button, {
                    variant: "secondary",
                    text: "Clear",
                    onClick: r
                })]
            })
        })]
    })
}
let ex = {
    native: {
        label: "Native",
        filter: e => e.type === C.ON.NativeLegacy || e.type === C.ON.NativeOOP
    },
    render: {
        label: "Render",
        filter: e => e.type === C.ON.Renderer
    },
    flux: {
        label: "Flux",
        filter: e => e.type === C.ON.Flux
    },
    client: {
        label: "Client",
        filter: e => e.type === C.ON.OOPModule || e.type === C.ON.LegacyModule
    }
};

function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : C.QJ.Info;
    if (t === C.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case C.ON.NativeLegacy:
            return "var(--yellow-500)";
        case C.ON.NativeOOP:
            return "var(--green-500)";
        case C.ON.Flux:
            return "var(--brand-400)";
        case C.ON.Renderer:
            return "var(--brand-500)";
        case C.ON.LegacyModule:
            return "var(--yellow-300)";
        case C.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)"
    }
}
let e_ = [{
    key: "type",
    cellClassName: Y.SZ,
    renderHeader: () => null,
    render(e) {
        let {
            type: t,
            logType: n
        } = e, i = ef(t);
        return (0, a.jsx)("div", {
            className: Y.g$,
            style: {
                color: eg(t, n)
            },
            children: (0, a.jsx)(i, {
                color: "currentColor",
                size: "sm"
            })
        })
    }
}, {
    key: "name",
    cellClassName: Y.Cm,
    render(e) {
        let {
            name: t,
            type: n,
            logType: i
        } = e;
        return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.Text, {
                variant: "text-md/normal",
                color: function(e) {
                    switch (e) {
                        case C.QJ.Info:
                            return "text-strong";
                        case C.QJ.Warning:
                            return "text-feedback-warning";
                        case C.QJ.Error:
                            return "text-feedback-critical";
                        default:
                            return "text-subtle"
                    }
                }(i),
                children: t
            }), (0, a.jsxs)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: ["(", n, ")"]
            })]
        })
    }
}, {
    key: "timestamp",
    cellClassName: Y.DK,
    render(e) {
        let {
            timestamp: t
        } = e;
        return (0, L.i$)(o()(t), "h:mm:ss.SSS")
    }
}];

function ef(e) {
    switch (e) {
        case C.ON.NativeLegacy:
            return h.WxK;
        case C.ON.NativeOOP:
            return h.qXB;
        case C.ON.Renderer:
        case C.ON.Flux:
            return h.vH5;
        case C.ON.LegacyModule:
            return h.kN9;
        case C.ON.OOPModule:
            return h.ofK;
        default:
            return h.kN9
    }
}

function ev(e) {
    return JSON.stringify(e, (e, t) => void 0 === t ? null : t, 2)
}
let eb = ["__webpack_require__", "fn"],
    ej = ["web.js", "web.js.map"],
    eA = [{
        id: "details",
        name: "Details",
        group: z.fu.NONE,
        render: e => {
            let {
                breadcrumb: t,
                onClose: n
            } = e, {
                name: i,
                type: s,
                logType: r,
                nativeId: d,
                stack: c,
                data: u,
                timestamp: m,
                pid: p
            } = t, x = o()(m), g = ef(s);
            return (0, a.jsxs)(h.ArX, {
                className: Y.bW,
                children: [(0, a.jsxs)(j.A, {
                    className: l()(J.jr, Y.nZ),
                    children: [(0, a.jsx)("div", {
                        style: {
                            color: eg(s, r)
                        },
                        className: Y.nr,
                        children: (0, a.jsx)(g, {
                            color: "currentColor",
                            size: "sm"
                        })
                    }), (0, a.jsxs)(j.A.Title, {
                        wrapperClassName: Y.qd,
                        children: [i, " (", s, ")", (0, a.jsx)(h.DUT, {
                            tag: "span",
                            className: Y.KE,
                            onClick: () => (0, U.C)(i),
                            children: (0, a.jsx)(h.TdU, {
                                color: "currentColor",
                                size: "sm"
                            })
                        })]
                    }), (0, a.jsx)(j.A.Icon, {
                        icon: h.TdU,
                        tooltip: "Copy all properties",
                        onClick: () => {
                            (0, U.C)(ev(t))
                        }
                    }), (0, a.jsx)(j.A.Icon, {
                        icon: h.aXh,
                        tooltip: "Close",
                        onClick: n
                    })]
                }), (0, a.jsxs)(W.OA, {
                    className: Y.ZK,
                    children: [(0, a.jsx)(W.mA, {
                        name: "Timestamp",
                        copyValue: x.toISOString(),
                        children: (0, a.jsx)("time", {
                            dateTime: x.toISOString(),
                            title: (0, L.i$)(x, "LLLL"),
                            children: (0, L.i$)(x, "L h:mm:ss.SSS")
                        })
                    }), (0, a.jsx)(W.mA, {
                        name: "Log Type",
                        copyValue: r,
                        children: (0, a.jsx)("code", {
                            children: r
                        })
                    }), (0, a.jsx)(W.mA, {
                        name: "PID",
                        copyValue: p?.toString() ?? "null",
                        children: (0, a.jsx)("code", {
                            children: p?.toString() ?? "null"
                        })
                    }), (0, a.jsx)(W.mA, {
                        name: "Native ID",
                        copyValue: d?.toString() ?? "null",
                        children: (0, a.jsx)("code", {
                            children: d?.toString() ?? "null"
                        })
                    }), (0, a.jsx)(W.mA, {
                        name: "Data",
                        copyValue: ev(u),
                        children: (0, a.jsx)("code", {
                            children: ev(u)
                        })
                    }), null != c && (0, a.jsx)(W.mA, {
                        name: "Stack Trace",
                        copyValue: c,
                        children: (0, a.jsx)("code", {
                            children: c.split("\n").map((e, t) => {
                                let n = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                if (null != n) {
                                    let [, e, i, s, l] = n, r = i.split(/[\\/]/).pop();
                                    return eb.includes(e.trim()) ? null : (0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("span", {
                                            className: Y.e0,
                                            children: e.trim()
                                        }), !ej.includes(r ?? "") && (0, a.jsxs)(a.Fragment, {
                                            children: [" (", (0, a.jsxs)("span", {
                                                className: Y.lz,
                                                title: i,
                                                children: [r, ":", s, ":", l]
                                            }), ")"]
                                        })]
                                    }, t)
                                }
                                return (0, a.jsx)("div", {
                                    children: e
                                }, t)
                            })
                        })
                    })]
                })]
            })
        }
    }],
    eC = {
        searchType: R.n.REGEX,
        searchStringGenerator: e => {
            let {
                name: t,
                type: n,
                stack: a,
                data: i
            } = e, s = [t, n, JSON.stringify(i)];
            return null != a && s.push(a), s
        },
        throttleMs: 100
    };

function ey() {
    let {
        ref: e,
        height: t
    } = (0, f.Ay)(), n = (0, c.bG)([N.A], () => N.A.isModuleLoggingEnabled()), [s, r] = i.useState(n), [o, d] = i.useState(!1), [u, m] = i.useState(null), [p, x] = i.useState(Object.keys(ex)), [_, v] = (0, c.bG)([N.A], () => N.A.getOverlayLoggingBreadcrumbs(), [], G.D), [b, j] = i.useState(null), A = b ?? _, C = null != b ? -1 : v;
    i.useEffect(() => {
        0 !== C && (o ? m(A.reduce((e, t) => "game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e, 0)) : m(null))
    }, [o, A, C]);
    let [y, T] = i.useState(""), S = i.useMemo(() => 0 === C ? [] : A.filter(e => {
        if (o && null != u && e.timestamp < u) return !1;
        for (let t of p) {
            let {
                filter: n
            } = ex[t];
            if (n(e)) return !0
        }
        return !1
    }), [A, p, u, o, C]), [E, I] = i.useState(S), [R, k] = i.useState(null), w = i.useMemo(() => A.find(e => e.key === R), [A, R]), D = i.useCallback(e => {
        I(e)
    }, []), {
        renderSelectedTab: M
    } = (0, z.Ay)({
        tabs: eA
    }, []);
    (0, O.RT)(y, S, D, eC, [A]);
    let P = i.useCallback(e => {
            r(e), g.A.setModuleLogging(e)
        }, []),
        [L, B] = i.useState(!1),
        F = i.useRef(null),
        V = i.useCallback(() => {
            (0, U.C)(JSON.stringify(S)), B(!0)
        }, [S]);
    i.useEffect(() => {
        if (L) return F.current = setTimeout(() => {
            B(!1)
        }, 4e3), () => {
            null != F.current && clearTimeout(F.current)
        }
    }, [L]);
    let W = i.useCallback(e => {
            j(null != e ? JSON.parse(e) : null)
        }, []),
        $ = i.useCallback(e => {
            if (e) return j(null);
            (0, h.qfG)(e => (0, a.jsx)(ep, {
                modalProps: e,
                onClose: t => {
                    W(t), e.onClose()
                }
            }), {
                modalKey: "breadcrumb-import-panel"
            }, h.SYi)
        }, [W]);
    return (0, a.jsxs)("div", {
        ref: e,
        className: Y.rh,
        children: [(0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsxs)("div", {
                className: l()(Y._V, Y.XQ),
                children: [(0, a.jsx)("div", {
                    title: "Toggles the Polling of Native",
                    className: Y.iR,
                    children: (0, a.jsx)(h.Checkbox, {
                        label: "Poll Native",
                        checked: s,
                        onChange: e => P(e)
                    })
                }), (0, a.jsx)("div", {
                    title: "Only show breadcrumbs for active games",
                    className: Y.iR,
                    children: (0, a.jsx)(h.Checkbox, {
                        label: "Only Active Games",
                        checked: o,
                        onChange: e => d(e)
                    })
                }), (0, a.jsxs)(h.DUT, {
                    className: Y.ny,
                    onClick: V,
                    children: [(0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: L ? "Copied" : "Copy All"
                    }), L ? (0, a.jsx)(h.A9s, {
                        size: "sm",
                        color: h.LU0.unsafe_rawColors.GREEN_330.css
                    }) : (0, a.jsx)(h.TdU, {
                        color: "currentColor",
                        size: "sm"
                    })]
                }), (0, a.jsx)(h.DUT, {
                    className: Y.ny,
                    onClick: () => $(null != b),
                    children: (0, a.jsx)(h.Text, {
                        variant: "text-sm/normal",
                        color: "currentColor",
                        children: null != b ? "Clear" : "Import"
                    })
                })]
            }), (0, a.jsx)("div", {
                className: l()(Y._V, Y.XQ),
                children: Object.entries(ex).map(e => {
                    let [t, n] = e;
                    return (0, a.jsx)(h.DUT, {
                        className: l()(Y.pb, p.includes(t) && Y.bx),
                        onClick: () => {
                            x(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
                        },
                        children: (0, a.jsx)(h.Text, {
                            variant: "text-sm/normal",
                            color: "currentColor",
                            children: n.label
                        })
                    }, t)
                })
            }), (0, a.jsx)("div", {
                className: Y._V,
                children: (0, a.jsx)(h.IWV, {
                    query: y,
                    onChange: T,
                    onClear: () => T(""),
                    placeholder: "Regex search by breadcrumb name and data"
                })
            })]
        }), (0, a.jsx)("div", {
            className: l()(Y.st, Y.CZ),
            children: (0, a.jsx)(K.A, {
                columns: e_,
                data: E,
                selectedRowKey: R ?? void 0,
                onClickRow: e => k(e.key)
            })
        }), null != w && (0, a.jsx)(H.A, {
            className: l()(Y.st, Y.rf),
            minHeight: 100,
            initialHeight: null != t ? t / 3 : 300,
            children: M({
                breadcrumb: w,
                onClose: () => k(null)
            })
        })]
    })
}
let eT = i.memo(function() {
        let e = (0, c.bG)([E.A], () => E.A.getPopoutInitializationStages());
        return (0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsx)("div", {
                className: Y.Iv,
                children: (0, a.jsx)(h.Text, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    children: "Popout Initialization Stages"
                })
            }), (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, a.jsx)("pre", {
                    children: JSON.stringify(e, void 0, 2)
                })
            })]
        })
    }),
    eS = i.memo(function() {
        let e = (0, c.bG)([N.A], () => N.A.isStateDebuggingEnabled()),
            t = (0, c.bG)([N.A], () => N.A.getDebuggingState());
        return i.useEffect(() => (g.A.setStateDebugging(!0), () => {
            g.A.setStateDebugging(!1)
        }), []), (0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsx)("div", {
                className: Y.Iv,
                children: (0, a.jsx)(h.dOG, {
                    checked: e,
                    onChange: () => g.A.setStateDebugging(!e),
                    label: "Poll Native Module State"
                })
            }), (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, a.jsx)("pre", {
                    children: JSON.stringify(t, void 0, 2)
                })
            })]
        })
    });

function eE() {
    return (0, a.jsx)(h.ArX, {
        children: (0, a.jsxs)("div", {
            className: l()(J.nd, Y.rf),
            children: [(0, a.jsx)(eu, {}), (0, a.jsx)(eh, {}), (0, a.jsx)(em, {}), (0, a.jsx)(ed, {}), (0, a.jsx)(el, {}), (0, a.jsx)(eo, {}), (0, a.jsx)(eT, {}), (0, a.jsx)(eS, {})]
        })
    })
}
let eN = e => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0
        }
    },
    eI = e => null == e ? "Disabled" : e ? "True" : "False",
    eR = i.memo(function() {
        let e = (0, y.wW)(),
            t = (0, c.bG)([M.Ay], () => M.Ay.getOverlayKeybind());
        return (0, a.jsxs)("div", {
            className: Y.st,
            children: [(0, a.jsx)(h.Heading, {
                variant: "heading-lg/semibold",
                children: "Overlay Default Keybind Experiment"
            }), (0, a.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                children: "Experiment State"
            }), (0, a.jsx)(h.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: (0, a.jsx)("pre", {
                    children: JSON.stringify({
                        ...e,
                        overlayKeybind: (0, F.dI)(t.shortcut)
                    }, void 0, 2)
                })
            }), (0, a.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                children: "Overrides"
            }), (0, a.jsx)(h.l6P, {
                label: "Overlay User Status",
                description: "Override whether the current user was a new or existing user",
                value: eI(e.overrideIsNewOverlayUser),
                options: [{
                    label: "Disabled (no override)",
                    value: "Disabled",
                    id: "Disabled"
                }, {
                    label: "Existing user",
                    value: "False",
                    id: "False"
                }, {
                    label: "New user",
                    value: "True",
                    id: "True"
                }],
                onSelectionChange: e => {
                    (0, y.sw)(eN(e))
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, a.jsx)(h.l6P, {
                label: "Override Previous Keybind Status",
                description: "Override whether the user's pre-experiment keybind was the default keybind",
                value: eI(e.overrideIsUsingDefaultOverlayKeybind),
                options: [{
                    label: "Disabled (no override)",
                    value: "Disabled",
                    id: "Disabled"
                }, {
                    label: "Using default keybind",
                    value: "True",
                    id: "True"
                }, {
                    label: "Not using default keybind",
                    value: "False",
                    id: "False"
                }],
                onSelectionChange: e => {
                    (0, y.C3)(eN(e))
                },
                selectionMode: "single",
                fullWidth: !0
            }), (0, a.jsx)(h.Heading, {
                variant: "heading-md/semibold",
                children: "Actions"
            }), (0, a.jsx)(h.Button, {
                size: "sm",
                text: "Reset isNewOverlayUser",
                onClick: () => (0, y.xc)()
            }), (0, a.jsx)(h.Button, {
                size: "sm",
                text: "Reset isUsingDefaultOverlayKeybind",
                onClick: () => (0, y.tM)()
            })]
        })
    });

function eO() {
    return (0, a.jsx)(h.ArX, {
        children: (0, a.jsx)("div", {
            className: l()(J.nd, Y.rf),
            children: (0, a.jsx)(eR, {})
        })
    })
}

function ek() {
    let [e, t] = i.useState("state");
    return i.useEffect(() => (p.h.dispatch({
        type: "OVERLAY_SET_DETAILED_LOGGING",
        enabled: !0
    }), () => {
        p.h.dispatch({
            type: "OVERLAY_SET_DETAILED_LOGGING",
            enabled: !1
        })
    }), []), (0, a.jsxs)("div", {
        className: l()(J.nd, Y.nd),
        children: [(0, a.jsxs)("div", {
            className: Y._V,
            children: [(0, a.jsx)(h.DUT, {
                className: l()(Y.k0, "state" === e && Y.a),
                onClick: () => t("state"),
                children: (0, a.jsx)(h.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: "Client State"
                })
            }), (0, a.jsx)(h.DUT, {
                className: l()(Y.k0, "logging" === e && Y.a),
                onClick: () => t("logging"),
                children: (0, a.jsx)(h.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: "Logging"
                })
            }), (0, a.jsx)(h.DUT, {
                className: l()(Y.k0, "experiments" === e && Y.a),
                onClick: () => t("experiments"),
                children: (0, a.jsx)(h.Text, {
                    variant: "text-md/medium",
                    color: "currentColor",
                    children: "Experiments"
                })
            })]
        }), "state" === e && (0, a.jsx)(eE, {}), "logging" === e && (0, a.jsx)(ey, {}), "experiments" === e && (0, a.jsx)(eO, {})]
    })
}