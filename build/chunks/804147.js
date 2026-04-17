/** chunk id: 804147 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968),
    s = n(64700),
    a = n(697397),
    l = n(721092),
    i = n(795068),
    u = n(924838);

function o(e) {
    let {
        targetSec: t,
        isFullyVisible: n,
        percent: o,
        animate: c,
        interactionEnabled: d,
        isQuestCompleted: E,
        backgroundColor: m,
        preloadedBuffers: f,
        durationSec: _,
        maxSeekableTime: S,
        playerState: p,
        onClick: v,
        onScrubBack: h,
        onScrubForward: g,
        "data-testid": A
    } = e, {
        quest: C,
        sourceQuestContent: x,
        useNewProgressBarStyling: T
    } = s.useContext(i.a), {
        questConfig: D
    } = s.useContext(i.l), I = (0, l.A)({
        targetSec: t,
        quest: C,
        sourceQuestContent: x,
        questConfig: D,
        onIndicatorClick: v
    });
    return (0, r.jsx)(a.uI, {
        isFullyVisible: n,
        percent: o,
        animate: c,
        interactionEnabled: d,
        playerState: p,
        backgroundColor: m,
        preloadedBuffers: f,
        durationSec: _,
        maxSeekableTime: S,
        segmentBorderRadius: T ? 99 : 8,
        progressClassName: !E && T ? u.q : u.c,
        timelineHeightPx: T ? 4 : 2,
        hoverTimelineHeightPx: T ? void 0 : 4,
        initialTimelineHeightPx: T ? 4 : 2,
        onClick: v,
        onScrubBack: h,
        onScrubForward: g,
        indicatorConfig: I,
        "data-testid": A
    })
}