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
    } = e, m = "portrait" === t, b = (0, i.DX)({
        url: p,
        width: m ? 360 : 640,
        height: m ? 640 : 360,
        target: u,
        videoTitle: m ? "Test Portrait Video" : "Test Landscape Video",
        transcript: "transcript.txt"
    }), _ = (0, i.ec)(b);
    d && (_.config.features = [s.Li.FULL_EPISODE_VIDEO_QUEST]);
    let S = c ? {
        ..._,
        userStatus: (0, i.kK)({
            enrolledAt: _.userStatus?.enrolledAt ?? null,
            completedAt: _.userStatus?.enrolledAt ?? null,
            streamProgressSeconds: b.target
        })
    } : _;
    return (0, r.jsx)("div", {
        style: {
            width: m ? "400px" : "100%",
            maxWidth: m ? void 0 : "800px",
            height: m ? "700px" : "500px",
            backgroundColor: "#1e1f22",
            borderRadius: "8px",
            overflow: "hidden"
        },
        children: (0, r.jsx)(i.sn, {
            quest: S,
            isPortrait: m,
            children: (0, r.jsx)(o.A, {
                targetTimeSec: b.target,
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