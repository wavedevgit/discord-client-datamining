/** chunk id: 758889 params = (module,exports,require) **/
a.d(t, {
    Vy: () => m
});
var r = a(627968),
    n = a(64700),
    o = a(397927),
    i = a(405670),
    s = a(931135),
    l = a(762168),
    d = a(654487),
    u = a(652215);

function c(e) {
    let {
        orientation: t,
        autoplay: a,
        questCompleted: c,
        fullEpisode: p,
        targetTimeSec: m,
        videoUrl: g,
        useNewStyling: f
    } = e, h = "portrait" === t, S = (0, l.DX)({
        url: g,
        width: h ? 360 : 640,
        height: h ? 640 : 360,
        target: m,
        videoTitle: h ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), x = (0, l.ec)(S), v = n.useRef(!1);
    v.current || (v.current = !0, i.Kr.getState().clearState()), n.useEffect(() => {
        let e = document.querySelector('[data-testid="discord-web-video-player-video"]');
        if (null == e) return;
        let t = () => {
            e.currentTime = 0
        };
        if (!(e.readyState >= 1)) return e.addEventListener("loadedmetadata", t, {
            once: !0
        }), () => e.removeEventListener("loadedmetadata", t);
        t()
    }, []), p && (x.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
    let E = c ? {
        ...x,
        userStatus: (0, l.kK)({
            enrolledAt: x.userStatus?.enrolledAt ?? null,
            completedAt: x.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: S.target
        })
    } : x;
    return (0, r.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: h ? "400px" : "100%",
            maxWidth: h ? void 0 : "800px",
            height: h ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden"
        },
        children: (0, r.jsx)(l.sn, {
            quest: E,
            isPortrait: h,
            useNewStyling: f,
            children: (0, r.jsx)(s.A, {
                targetTimeSec: S.target,
                parentTransitionState: o.ip4.ENTERED,
                onOptimisticProgressUpdate: u.tEg,
                autoplay: a,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: g
            })
        })
    })
}
let p = {
        label: "Full Episode (shows reward indicator)",
        type: "boolean",
        defaultValue: !1
    },
    m = {
        title: "Composed Quest Player",
        stories: [{
            name: "Landscape",
            id: "landscape-video-composed",
            component: c,
            controls: {
                ...l._v,
                orientation: {
                    ...l._v.orientation,
                    defaultValue: "landscape"
                },
                fullEpisode: p
            }
        }, {
            name: "Portrait",
            id: "portrait-video-composed",
            component: c,
            controls: {
                ...l._v,
                orientation: {
                    ...l._v.orientation,
                    defaultValue: "portrait"
                },
                fullEpisode: p
            }
        }, {
            name: "Landscape — Autoplay",
            id: "landscape-video-composed-autoplay",
            component: c,
            controls: {
                ...l._v,
                orientation: {
                    ...l._v.orientation,
                    defaultValue: "landscape"
                },
                autoplay: {
                    label: "Autoplay",
                    type: "boolean",
                    defaultValue: !0
                },
                fullEpisode: p
            }
        }, {
            name: "Landscape — Progress Persistence",
            id: "landscape-video-composed-persistence",
            component: function(e) {
                let {
                    orientation: t,
                    autoplay: a,
                    questCompleted: n,
                    fullEpisode: i,
                    targetTimeSec: c,
                    videoUrl: p,
                    useNewStyling: m
                } = e, g = "portrait" === t, f = (0, l.DX)({
                    url: p,
                    width: g ? 360 : 640,
                    height: g ? 640 : 360,
                    target: c,
                    videoTitle: g ? "Test Portrait Video" : "Test Landscape Video",
                    transcript: "transcript.txt"
                }), h = (0, l.ec)(f);
                i && (h.config.features = [d.Li.FULL_EPISODE_VIDEO_QUEST]);
                let S = n ? {
                    ...h,
                    userStatus: (0, l.kK)({
                        enrolledAt: h.userStatus?.enrolledAt ?? null,
                        completedAt: h.userStatus?.enrolledAt ?? null,
                        streamProgressSeconds: f.target
                    })
                } : h;
                return (0, r.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        maxWidth: "800px",
                        height: "500px",
                        backgroundColor: "#1e1f22",
                        borderRadius: "8px",
                        overflow: "hidden"
                    },
                    children: (0, r.jsx)(l.sn, {
                        quest: S,
                        isPortrait: !1,
                        useNewStyling: m,
                        children: (0, r.jsx)(s.A, {
                            targetTimeSec: f.target,
                            parentTransitionState: o.ip4.ENTERED,
                            onOptimisticProgressUpdate: u.tEg,
                            autoplay: a,
                            autoFocus: !1,
                            performanceClockStartTime: 0,
                            orientation: t,
                            videoUrlOverride: p
                        })
                    })
                })
            },
            controls: {
                ...l._v,
                orientation: {
                    ...l._v.orientation,
                    defaultValue: "landscape"
                },
                fullEpisode: p
            }
        }]
    }