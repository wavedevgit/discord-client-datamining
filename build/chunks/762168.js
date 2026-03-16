/** chunk id: 762168 params = (module,exports,require) **/
r.d(t, {
    DX: () => m,
    _v: () => x,
    cs: () => y,
    ec: () => v,
    kK: () => g,
    sn: () => S
});
var a = r(627968),
    o = r(64700),
    n = r(412703),
    i = r(440703),
    s = r(267548),
    l = r(668824),
    d = r(397927),
    c = r(104473),
    u = r(341915),
    _ = r(73473),
    p = r(752231),
    f = r(839727),
    b = r(652215);

function m(e) {
    let {
        url: t,
        width: r = 640,
        height: a = 360,
        target: o = 60,
        videoTitle: i = "Test Video Quest"
    } = e;
    return {
        type: n.n.WATCH_VIDEO,
        target: o,
        assets: {
            video: {
                url: t,
                width: r,
                height: a
            }
        },
        messages: {
            videoTitle: i
        }
    }
}

function g() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        {
            streamProgressSeconds: t = 0,
            completedAt: r = null,
            enrolledAt: a = null,
            claimedAt: o = null
        } = e;
    return {
        userId: "123",
        questId: C,
        enrolledAt: a,
        completedAt: r,
        claimedAt: o,
        claimedTier: null,
        lastStreamHeartbeatAt: null,
        streamProgressSeconds: t,
        dismissedQuestContent: 0,
        progress: {}
    }
}
let C = `playground-video-quest-${Date.now()}`;

function v(e) {
    return {
        id: C,
        preview: !0,
        config: {
            id: C,
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
                    asset: "",
                    assetVideo: null,
                    type: i.l.REWARD_CODE,
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
                heroVideo: c.kz,
                questBarHero: "",
                questBarHeroVideo: null,
                questBarHeroBlurhash: null,
                gameTile: "",
                logotype: ""
            },
            taskConfigV2: {
                joinOperator: l.K.AND,
                tasks: {
                    [n.n.WATCH_VIDEO]: e
                }
            },
            features: [],
            sharePolicy: s.i.SHAREABLE_EVERYWHERE,
            ctaConfig: {
                link: "https://discord.com/",
                buttonLabel: "Learn More"
            }
        },
        userStatus: g({
            enrolledAt: new Date().toISOString()
        }),
        targetedContent: [u.uF.QUEST_HOME_DESKTOP]
    }
}

function S(e) {
    let {
        quest: t,
        isPortrait: r,
        children: n,
        isFullscreenEnabled: i = !1,
        useNewStyling: s = !1,
        setIsFullscreenEnabled: l = b.tEg
    } = e, d = o.useMemo(() => ({
        quest: t,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        videoSessionId: "playground-session",
        isPortrait: r,
        onClose: b.tEg,
        isFullscreenEnabled: i,
        setIsFullscreenEnabled: l,
        useNewProgressBarStyling: s
    }), [t, r, i, l, s]), c = o.useMemo(() => ({
        questConfig: t.config
    }), [t.config]);
    return (0, a.jsx)(_.R, {
        questOrQuests: t,
        questContent: u.uF.VIDEO_MODAL,
        sourceQuestContent: u.uF.INTERNAL_PREVIEW_TOOL,
        children: (e, t) => (0, a.jsx)(p.VideoQuestConfigContext.Provider, {
            value: c,
            children: (0, a.jsx)(p.VideoQuestModalContext.Provider, {
                value: d,
                children: n
            })
        })
    })
}

function h(e) {
    let {
        orientation: t,
        autoplay: r,
        questCompleted: n,
        useNewStyling: i,
        videoUrl: s
    } = e, l = "portrait" === t, [c, u] = o.useState(!1), _ = m({
        url: s,
        width: l ? 360 : 640,
        height: l ? 640 : 360,
        videoTitle: l ? "Test Portrait Video" : "Test Landscape Video"
    }), p = v(_), C = n ? {
        ...p,
        userStatus: g({
            enrolledAt: p.userStatus?.enrolledAt ?? null,
            completedAt: p.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: _.target
        })
    } : p;
    return (0, a.jsx)("div", {
        style: {
            width: l ? "400px" : "100%",
            maxWidth: l ? void 0 : "800px",
            height: l ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden",
            "--custom-footer-horizontal-padding": "20px"
        },
        children: (0, a.jsx)(S, {
            quest: C,
            isPortrait: l,
            isFullscreenEnabled: c,
            setIsFullscreenEnabled: u,
            useNewStyling: i,
            children: (0, a.jsx)(f.A, {
                targetTimeSec: _.target,
                parentTransitionState: d.ip4.ENTERED,
                onOptimisticProgressUpdate: b.tEg,
                autoplay: r,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: s
            })
        })
    })
}
let x = {
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
        useNewStyling: {
            label: "Use New Styling",
            type: "boolean",
            defaultValue: !1
        },
        videoUrl: {
            label: "Video URL",
            type: "text",
            defaultValue: c.kz
        }
    },
    y = {
        title: "Video Player",
        stories: [{
            name: "Landscape Video (Quests)",
            id: "landscape-video",
            component: h,
            controls: {
                ...x,
                orientation: {
                    ...x.orientation,
                    defaultValue: "landscape"
                }
            }
        }, {
            name: "Portrait Video (Quests)",
            id: "portrait-video",
            component: h,
            controls: {
                ...x,
                orientation: {
                    ...x.orientation,
                    defaultValue: "portrait"
                }
            }
        }]
    }