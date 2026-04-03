/** chunk id: 762168 params = (module,exports,require) **/
n.d(t, {
    DX: () => g,
    _v: () => y,
    cs: () => T,
    ec: () => C,
    kK: () => f,
    sn: () => h
});
var r = n(627968),
    a = n(64700),
    o = n(412703),
    i = n(440703),
    s = n(267548),
    l = n(668824),
    c = n(397927),
    d = n(341915),
    u = n(73473),
    p = n(839727),
    b = n(795068),
    m = n(654487),
    _ = n(652215),
    S = n(784018);

function g(e) {
    let {
        url: t,
        width: n = 640,
        height: r = 360,
        target: a = 60,
        videoTitle: i = "Test Video Quest",
        transcript: s
    } = e;
    return {
        type: o.n.WATCH_VIDEO,
        target: a,
        assets: {
            video: {
                url: t,
                width: n,
                height: r,
                transcript: s
            }
        },
        messages: {
            videoTitle: i
        }
    }
}

function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            streamProgressSeconds: t = 0,
            completedAt: n = null,
            enrolledAt: r = null,
            claimedAt: a = null
        } = e;
    return {
        userId: "123",
        questId: v,
        enrolledAt: r,
        completedAt: n,
        claimedAt: a,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    }
}
let v = `playground-video-quest-${Date.now()}`;

function C(e) {
    return {
        id: v,
        preview: !0,
        config: {
            id: v,
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
                platforms: [d.pY.CROSS_PLATFORM]
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
        userStatus: f({
            enrolledAt: new Date().toISOString()
        }),
        targetedContent: [d.uF.QUEST_HOME_DESKTOP]
    }
}

function h(e) {
    let {
        quest: t,
        isPortrait: n,
        children: o,
        isFullscreenEnabled: i = !1,
        useNewStyling: s = !1,
        setIsFullscreenEnabled: l = _.tEg
    } = e, c = a.useMemo(() => ({
        quest: t,
        sourceQuestContent: d.uF.INTERNAL_PREVIEW_TOOL,
        videoSessionId: "playground-session",
        isPortrait: n,
        onClose: _.tEg,
        isFullscreenEnabled: i,
        setIsFullscreenEnabled: l,
        useNewProgressBarStyling: s
    }), [t, n, i, l, s]), p = a.useMemo(() => ({
        questConfig: t.config
    }), [t.config]);
    return (0, r.jsx)(u.R, {
        questOrQuests: t,
        questContent: d.uF.VIDEO_MODAL,
        sourceQuestContent: d.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) => (0, r.jsx)(b.l.Provider, {
            value: p,
            children: (0, r.jsx)(b.a.Provider, {
                value: c,
                children: o
            })
        })
    })
}

function x(e) {
    let {
        orientation: t,
        autoplay: n,
        questCompleted: o,
        fullEpisode: i,
        targetTimeSec: s,
        useNewStyling: l,
        videoUrl: d
    } = e, u = "portrait" === t, [b, S] = a.useState(!1), v = g({
        url: d,
        width: u ? 360 : 640,
        height: u ? 640 : 360,
        target: s,
        videoTitle: u ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), x = C(v);
    i && (x.config.features = [m.Li.FULL_EPISODE_VIDEO_QUEST]);
    let y = o ? {
        ...x,
        userStatus: f({
            enrolledAt: x.userStatus?.enrolledAt ?? null,
            completedAt: x.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: v.target
        })
    } : x;
    return (0, r.jsx)("div", {
        style: {
            width: u ? "400px" : "100%",
            maxWidth: u ? void 0 : "800px",
            height: u ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px"
        },
        children: (0, r.jsx)(h, {
            quest: y,
            isPortrait: u,
            isFullscreenEnabled: b,
            setIsFullscreenEnabled: S,
            useNewStyling: l,
            children: (0, r.jsx)(p.A, {
                targetTimeSec: v.target,
                parentTransitionState: c.ip4.ENTERED,
                onOptimisticProgressUpdate: _.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: d
            })
        })
    })
}
let y = {
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
    T = {
        title: "Video Player",
        stories: [{
            name: "Landscape Video (Quests)",
            id: "landscape-video",
            component: x,
            controls: {
                ...y,
                orientation: {
                    ...y.orientation,
                    defaultValue: "landscape"
                }
            }
        }, {
            name: "Portrait Video (Quests)",
            id: "portrait-video",
            component: x,
            controls: {
                ...y,
                orientation: {
                    ...y.orientation,
                    defaultValue: "portrait"
                }
            }
        }]
    }