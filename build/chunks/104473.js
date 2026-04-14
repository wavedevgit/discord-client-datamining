/** chunk id: 104473 params = (module,exports,require) **/
a.d(t, {
    AZ: () => x
});
var r = a(627968),
    n = a(64700),
    o = a(294426),
    i = a(397927),
    s = a(664111),
    l = a(831056),
    d = a(784018);
let u = "https://cdn.discordapp.com/assets/og_img_discord_home.png";

function c(e) {
    let {
        orientation: t,
        thumbnailUrl: a,
        onReplay: n
    } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.nY, {
            url: a
        }), (0, r.jsx)(l.KP, {}), (0, r.jsxs)(l.zj, {
            orientation: t,
            children: [(0, r.jsx)(l.Kb, {
                url: a,
                orientation: t
            }), (0, r.jsx)(l.lx, {
                title: "Watch Again",
                subtitle: "Replay this video",
                ctaBtnLabel: "Replay",
                onCTAClick: n,
                orientation: t
            })]
        })]
    })
}

function p(e) {
    let {
        orientation: t,
        autoplay: a,
        maxSeekableTimeSec: n,
        videoUrl: o,
        poster: l,
        showEndScreen: p,
        active: m
    } = e;
    return (0, r.jsx)("div", {
        style: {
            width: "landscape" === t ? "640px" : "360px",
            height: "landscape" === t ? "360px" : "640px",
            margin: "0 auto"
        },
        children: (0, r.jsx)(s.A, {
            src: o,
            poster: l,
            active: m,
            autoplay: a,
            orientation: t,
            maxSeekableTimeSec: n > 0 ? n : void 0,
            parentTransitionState: i.ip4.ENTERED,
            targetTimeSec: 1 / 0,
            onOptimisticProgressUpdate: () => {},
            performanceClockStartTime: 0,
            onProgressUpdate: () => {},
            onEnded: () => {},
            onError: () => {},
            transcriptText: o === d.Im ? d.LI : d.pQ,
            renderEndScreen: p ? e => {
                let {
                    replay: a
                } = e;
                return (0, r.jsx)(c, {
                    orientation: t,
                    thumbnailUrl: u,
                    onReplay: a
                })
            } : void 0
        }, String(m))
    })
}
let m = {
        orientation: {
            label: "Orientation",
            type: "select",
            options: [{
                label: "Landscape",
                value: "landscape"
            }, {
                label: "Portrait",
                value: "portrait"
            }],
            defaultValue: "landscape"
        },
        autoplay: {
            label: "Autoplay",
            type: "boolean",
            defaultValue: !1
        },
        maxSeekableTimeSec: {
            label: "Max Seekable Time (sec, 0 = unrestricted)",
            type: "number",
            defaultValue: 0
        },
        videoUrl: {
            label: "Video URL",
            type: "text",
            defaultValue: d.kz
        },
        poster: {
            label: "Poster URL",
            type: "text",
            defaultValue: u
        },
        showEndScreen: {
            label: "Show End Screen",
            type: "boolean",
            defaultValue: !0
        },
        active: {
            label: "Active",
            type: "boolean",
            defaultValue: !0
        }
    },
    g = {
        name: "Landscape",
        id: "landscape-video-generic",
        component: p,
        controls: {
            ...m,
            orientation: {
                ...m.orientation,
                defaultValue: "landscape"
            }
        }
    },
    f = {
        name: "Portrait",
        id: "portrait-video-generic",
        component: p,
        controls: {
            ...m,
            orientation: {
                ...m.orientation,
                defaultValue: "portrait"
            }
        }
    },
    h = {
        name: "HLS",
        id: "hls-video-generic",
        component: p,
        controls: {
            ...m,
            orientation: {
                ...m.orientation,
                defaultValue: "landscape"
            },
            videoUrl: {
                ...m.videoUrl,
                defaultValue: d.Im
            }
        }
    },
    S = {
        tension: 500,
        friction: 30,
        clamp: !0
    },
    x = {
        title: "Discord Video Player (Generic)",
        stories: [g, f, h, {
            name: "Timeline Indicators",
            id: "timeline-indicators-generic",
            component: function(e) {
                let {
                    orientation: t,
                    autoplay: a,
                    maxSeekableTimeSec: l,
                    videoUrl: d,
                    indicatorTimeSec: u
                } = e, c = function(e) {
                    let [t, a] = n.useState(null), [s, l] = n.useState(null), d = n.useRef(null), [{
                        expansion: u
                    }, c] = (0, i.zhh)(() => ({
                        expansion: 0,
                        config: S,
                        onRest: () => {
                            null == d.current && l(null)
                        }
                    })), p = n.useCallback(e => {
                        d.current = e, null != e ? (l(e), c({
                            expansion: 4
                        })) : c({
                            expansion: 0
                        }), a(e)
                    }, [c]), m = n.useMemo(() => [{
                        index: 0,
                        timeSec: e,
                        widthPx: 32,
                        gapPx: 4
                    }], [e]), g = n.useCallback((e, t) => {
                        let a = s === e.index;
                        return (0, r.jsx)(o.animated.div, {
                            "data-testid": "timeline-indicator",
                            onMouseEnter: () => p(e.index),
                            onMouseLeave: () => p(null),
                            style: {
                                position: "absolute",
                                left: a ? u.to(t => e.leftPx - t) : e.leftPx,
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: a ? u.to(e => `${32+2*e}px`) : 32,
                                height: a ? u.to(e => `${32+2*e}px`) : 32,
                                boxSizing: "border-box",
                                borderRadius: "50%",
                                backgroundColor: "#3ba55c",
                                border: "2px solid white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                zIndex: 1
                            },
                            children: (0, r.jsx)(i.Text, {
                                variant: "text-xs/semibold",
                                color: "always-white",
                                children: "R"
                            })
                        }, `indicator-${e.index}`)
                    }, [p, s, u]);
                    return {
                        indicators: m,
                        animatingIndex: s,
                        expansionSpring: u,
                        hoverExpansionPx: 4,
                        renderIndicator: g
                    }
                }(u);
                return (0, r.jsx)("div", {
                    style: {
                        width: "landscape" === t ? "640px" : "360px",
                        height: "landscape" === t ? "360px" : "640px",
                        margin: "0 auto"
                    },
                    children: (0, r.jsx)(s.A, {
                        src: d,
                        autoplay: a,
                        orientation: t,
                        maxSeekableTimeSec: l > 0 ? l : void 0,
                        parentTransitionState: i.ip4.ENTERED,
                        targetTimeSec: 1 / 0,
                        onOptimisticProgressUpdate: () => {},
                        performanceClockStartTime: 0,
                        timelineIndicatorConfig: c
                    })
                })
            },
            controls: {
                orientation: m.orientation,
                autoplay: m.autoplay,
                maxSeekableTimeSec: m.maxSeekableTimeSec,
                videoUrl: m.videoUrl,
                indicatorTimeSec: {
                    label: "Indicator Time (sec)",
                    type: "number",
                    defaultValue: 15
                }
            }
        }]
    }