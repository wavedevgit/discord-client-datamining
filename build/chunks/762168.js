/** chunk id: 762168 params = (module,exports,require) **/
a.d(t, {
    DX: () => h,
    _v: () => T,
    cs: () => E,
    ec: () => S,
    kK: () => f,
    sn: () => y
});
var o = a(627968),
    n = a(64700),
    r = a(412703),
    i = a(440703),
    l = a(267548),
    s = a(668824),
    d = a(397927),
    c = a(341915),
    u = a(405670),
    p = a(73473),
    m = a(839727),
    b = a(795068),
    _ = a(654487),
    g = a(652215),
    v = a(784018);

function h(e) {
    let {
        url: t,
        width: a = 640,
        height: o = 360,
        target: n = 60,
        videoTitle: i = "Test Video Quest",
        transcript: l
    } = e;
    return {
        type: r.n.WATCH_VIDEO,
        target: n,
        assets: {
            video: {
                url: t,
                width: a,
                height: o,
                transcript: l
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
            completedAt: a = null,
            enrolledAt: o = null,
            claimedAt: n = null
        } = e;
    return {
        userId: "123",
        questId: x,
        enrolledAt: o,
        completedAt: a,
        claimedAt: n,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    }
}
let x = `playground-video-quest-${Date.now()}`;

function S(e) {
    return {
        id: x,
        preview: !0,
        config: {
            id: x,
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
                platforms: [c.pY.CROSS_PLATFORM]
            },
            assets: {
                hero: "",
                heroVideo: v.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: ""
            },
            taskConfigV2: {
                joinOperator: s.K.AND,
                tasks: {
                    [r.n.WATCH_VIDEO]: e
                }
            },
            features: [],
            sharePolicy: l.i.SHAREABLE_EVERYWHERE,
            ctaConfig: {
                link: "https://discord.com/",
                buttonLabel: "Learn More"
            }
        },
        userStatus: f({
            enrolledAt: new Date().toISOString()
        }),
        targetedContent: [c.uF.QUEST_HOME_DESKTOP]
    }
}

function y(e) {
    let {
        quest: t,
        isPortrait: a,
        children: r,
        isFullscreenEnabled: i = !1,
        useNewStyling: l = !1,
        setIsFullscreenEnabled: s = g.tEg
    } = e, d = n.useMemo(() => ({
        quest: t,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        videoSessionId: "playground-session",
        isPortrait: a,
        onClose: g.tEg,
        isFullscreenEnabled: i,
        setIsFullscreenEnabled: s,
        useNewProgressBarStyling: l,
        progressSec: 0,
        targetSec: 0
    }), [t, a, i, s, l]), u = n.useMemo(() => ({
        questConfig: t.config
    }), [t.config]);
    return (0, o.jsx)(p.R, {
        questOrQuests: t,
        questContent: c.uF.VIDEO_MODAL,
        sourceQuestContent: c.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) => (0, o.jsx)(b.l.Provider, {
            value: u,
            children: (0, o.jsx)(b.a.Provider, {
                value: d,
                children: r
            })
        })
    })
}

function C(e) {
    let {
        orientation: t,
        autoplay: a,
        questCompleted: r,
        fullEpisode: i,
        targetTimeSec: l,
        useNewStyling: s,
        videoUrl: c
    } = e, p = "portrait" === t, [b, v] = n.useState(!1), x = h({
        url: c,
        width: p ? 360 : 640,
        height: p ? 640 : 360,
        target: l,
        videoTitle: p ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), C = S(x), T = n.useRef(!1);
    T.current || (T.current = !0, u.Kr.getState().clearState()), i && (C.config.features = [_.Li.FULL_EPISODE_VIDEO_QUEST]);
    let E = r ? {
        ...C,
        userStatus: f({
            enrolledAt: C.userStatus?.enrolledAt ?? null,
            completedAt: C.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: x.target
        })
    } : C;
    return (0, o.jsx)("div", {
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
        children: (0, o.jsx)(y, {
            quest: E,
            isPortrait: p,
            isFullscreenEnabled: b,
            setIsFullscreenEnabled: v,
            useNewStyling: s,
            children: (0, o.jsx)(m.A, {
                targetTimeSec: x.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: g.tEg,
                autoplay: a,
                autoFocus: !1,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: c
            })
        })
    })
}
let T = {
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
            defaultValue: !0
        },
        videoUrl: {
            label: "Video URL",
            type: "text",
            defaultValue: v.kz
        }
    },
    E = {
        title: "Legacy Quest Player",
        stories: [{
            name: "Landscape",
            id: "landscape-video",
            component: C,
            controls: {
                ...T,
                orientation: {
                    ...T.orientation,
                    defaultValue: "landscape"
                }
            }
        }, {
            name: "Portrait",
            id: "portrait-video",
            component: C,
            controls: {
                ...T,
                orientation: {
                    ...T.orientation,
                    defaultValue: "portrait"
                }
            }
        }]
    }