/** chunk id: 758889 params = (module,exports,require) **/
n.d(t, {
    Vy: () => u
});
var r = n(627968);
n(64700);
var a = n(397927),
    o = n(931135),
    i = n(762168),
    s = n(654487),
    l = n(652215);

function c(e) {
    let {
        orientation: t,
        autoplay: n,
        questCompleted: c,
        fullEpisode: d,
        targetTimeSec: u,
        videoUrl: p
    } = e, b = "portrait" === t, m = (0, i.DX)({
        url: p,
        width: b ? 360 : 640,
        height: b ? 640 : 360,
        target: u,
        videoTitle: b ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), _ = (0, i.ec)(m);
    d && (_.config.features = [s.Li.FULL_EPISODE_VIDEO_QUEST]);
    let S = c ? {
        ..._,
        userStatus: (0, i.kK)({
            enrolledAt: _.userStatus?.enrolledAt ?? null,
            completedAt: _.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: m.target
        })
    } : _;
    return (0, r.jsx)("div", {
        style: {
            width: b ? "400px" : "100%",
            maxWidth: b ? void 0 : "800px",
            height: b ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden"
        },
        children: (0, r.jsx)(i.sn, {
            quest: S,
            isPortrait: b,
            children: (0, r.jsx)(o.A, {
                targetTimeSec: m.target,
                parentTransitionState: a.ip4.ENTERED,
                onOptimisticProgressUpdate: l.tEg,
                autoplay: n,
                performanceClockStartTime: 0,
                orientation: t,
                videoUrlOverride: p
            })
        })
    })
}
let d = {
        label: "Full Episode (shows reward indicator)",
        type: "boolean",
        defaultValue: !1
    },
    u = {
        title: "Video Player (Composed Quests)",
        stories: [{
            name: "Landscape Video (Composed Quests)",
            id: "landscape-video-composed",
            component: c,
            controls: {
                ...i._v,
                orientation: {
                    ...i._v.orientation,
                    defaultValue: "landscape"
                },
                fullEpisode: d
            }
        }, {
            name: "Portrait Video (Composed Quests)",
            id: "portrait-video-composed",
            component: c,
            controls: {
                ...i._v,
                orientation: {
                    ...i._v.orientation,
                    defaultValue: "portrait"
                },
                fullEpisode: d
            }
        }]
    }