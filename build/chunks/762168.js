/** chunk id: 762168 params = (module,exports,require) **/
a.d(t, {
    DX: () => x,
    _v: () => C,
    cs: () => A,
    ec: () => b,
    kK: () => v,
    sn: () => y
});
var r = a(627968),
    n = a(64700),
    o = a(412703),
    i = a(440703),
    s = a(267548),
    l = a(668824),
    d = a(397927),
    u = a(341915),
    c = a(405670),
    p = a(73473),
    m = a(839727),
    g = a(795068),
    f = a(654487),
    h = a(652215),
    S = a(784018);

function x(e) {
    let {
        url: t,
        width: a = 640,
        height: r = 360,
        target: n = 60,
        videoTitle: i = "Test Video Quest",
        transcript: s
    } = e;
    return {
        type: o.n.WATCH_VIDEO,
        target: n,
        assets: {
            video: {
                url: t,
                width: a,
                height: r,
                transcript: s
            }
        },
        messages: {
            videoTitle: i
        }
    }
}

function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            streamProgressSeconds: t = 0,
            completedAt: a = null,
            enrolledAt: r = null,
            claimedAt: n = null
        } = e;
    return {
        userId: "123",
        questId: E,
        enrolledAt: r,
        completedAt: a,
        claimedAt: n,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    }
}
let E = `playground-video-quest-${Date.now()}`;

function b(e) {
    return {
        id: E,
        preview: !0,
        config: {
            id: E,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: {
                id: "123",
                name: "Video Quest Playground"
            },
            messages: {
                questName: "Video Quest Playground",
                gameTitle: "Test Game",
                gamePublisher: "Discord"
            },
            colors: {
                primary: "#5865F2",
                secondary: "#3BA55C"
            },
            rewardsConfig: {
                assignmentMethod: 1,
                rewards: [{
                    skuId: "",
                    type: i.l.VIRTUAL_CURRENCY,
                    orbQuantity: 200,
                    messages: {
                        name: "Test Reward",
                        nameWithArticle: "a Test Reward",
                        redemptionInstructionsByPlatform: {}
                    }
                }],
                rewardsExpireAt: "2030-01-01T00:00:00+00:00",
                platforms: [u.pY.CROSS_PLATFORM]
            },
            assets: {
                hero: "",
                heroVideo: S.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: ""
            },
            taskConfigV2: {
                joinOperator: l.K.AND,
                tasks: {
                    [o.n.WATCH_VIDEO]: e
                }
            },
            features: [],
            sharePolicy: s.i.SHAREABLE_EVERYWHERE,
            ctaConfig: {
                link: "https://discord.com/",
                buttonLabel: "Learn More"
            }
        },
        userStatus: v({
            enrolledAt: new Date().toISOString()
        }),
        targetedContent: [u.uF.QUEST_HOME_DESKTOP]
    }
}

function y(e) {
    let {
        quest: t,
        isPortrait: a,
        children: o,
        isFullscreenEnabled: i = !1,
        useNewStyling: s = !1,
        setIsFullscreenEnabled: l = h.tEg
    } = e, d = n.useMemo(() => ({
        quest: t,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        videoSessionId: "playground-session",
        isPortrait: a,
        onClose: h.tEg,
        isFullscreenEnabled: i,
        setIsFullscreenEnabled: l,
        useNewProgressBarStyling: s,
        progressSec: 0,
        targetSec: 0
    }), [t, a, i, l, s]), c = n.useMemo(() => ({
        questConfig: t.config
    }), [t.config]);
    return (0, r.jsx)(p.R, {
        questOrQuests: t,
        questContent: u.uF.VIDEO_MODAL,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) => (0, r.jsx)(g.l.Provider, {
            value: c,
            children: (0, r.jsx)(g.a.Provider, {
                value: d,
                children: o
            })
        })
    })
}

function T(e) {
    let {
        orientation: t,
        autoplay: a,
        questCompleted: o,
        fullEpisode: i,
        targetTimeSec: s,
        useNewStyling: l,
        videoUrl: u
    } = e, p = "portrait" === t, [g, S] = n.useState(!1), E = x({
        url: u,
        width: p ? 360 : 640,
        height: p ? 640 : 360,
        target: s,
        videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), T = b(E), C = n.useRef(!1);
    C.current || (C.current = !0, c.Kr.getState().clearState()), i && (T.config.features = [f.Li.FULL_EPISODE_VIDEO_QUEST]);
    let A = o ? {
        ...T,
        userStatus: v({
            enrolledAt: T.userStatus?.enrolledAt ?? null,
            completedAt: T.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: E.target
        })
    } : T;
    return (0, r.jsx)("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            width: p ? "400px" : "100%",
            maxWidth: p ? void 0 : "800px",
            height: p ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px"
        },
        children: (0, r.jsx)(y, {
            quest: A,
            isPortrait: p,
            isFullscreenEnabled: g,
            setIsFullscreenEnabled: S,
            useNewStyling: l,
            children: (0, r.jsx)(m.A, {
                targetTimeSec: E.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: h.tEg,
                autoplay: a,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: u
            })
        })
    })
}
let C = {
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
        questCompleted: {
            label: "Quest Completed",
            type: "boolean",
            defaultValue: !1
        },
        fullEpisode: {
            label: "Full Episode (shows reward indicator)",
            type: "boolean",
            defaultValue: !1
        },
        targetTimeSec: {
            label: "Target Time (sec)",
            type: "number",
            defaultValue: 15
        },
        useNewStyling: {
            label: "Use New Styling",
            type: "boolean",
            defaultValue: !1
        },
        videoUrl: {
            label: "Video URL",
            type: "text",
            defaultValue: S.kz
        }
    },
    A = {
        title: "Legacy Quest Player",
        stories: [{
            name: "Landscape",
            id: "landscape-video",
            component: T,
            controls: {
                ...C,
                orientation: {
                    ...C.orientation,
                    defaultValue: "landscape"
                }
            }
        }, {
            name: "Portrait",
            id: "portrait-video",
            component: T,
            controls: {
                ...C,
                orientation: {
                    ...C.orientation,
                    defaultValue: "portrait"
                }
            }
        }]
    }