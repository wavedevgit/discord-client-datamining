/** chunk id: 804147 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var r = n(627968),
    s = n(64700),
    i = n(697397),
    a = n(721092),
    l = n(795068),
    o = n(590358);

function u(e) {
    let {
        targetSec: t,
        isFullyVisible: n,
        percent: u,
        animate: c,
        interactionEnabled: d,
        isQuestCompleted: m,
        backgroundColor: E,
        preloadedBuffers: _,
        durationSec: f,
        maxSeekableTime: p,
        playerState: S,
        onClick: v,
        onScrubBack: h,
        onScrubForward: g,
        "data-testid": A
    } = e, {
        quest: C,
        sourceQuestContent: x,
        useNewProgressBarStyling: T
    } = s.useContext(l.a), {
        questConfig: D
    } = s.useContext(l.l), I = !m && T, y = (0, a.A)({
        targetSec: t,
        quest: C,
        sourceQuestContent: x,
        questConfig: D,
        onIndicatorClick: v
    });
    return (0, r.jsx)(i.uI, {
        isFullyVisible: n,
        percent: u,
        animate: c,
        interactionEnabled: d,
        playerState: S,
        backgroundColor: E,
        preloadedBuffers: _,
        durationSec: f,
        maxSeekableTime: p,
        segmentBorderRadius: T ? 99 : 8,
        progressGlow: !0,
        progressFillClassName: I ? o.QR : o.UA,
        glowClassName: I ? o.Um : o.U5,
        timelineHeightPx: T ? 4 : 2,
        hoverTimelineHeightPx: T ? void 0 : 4,
        initialTimelineHeightPx: T ? 4 : 2,
        onClick: v,
        onScrubBack: h,
        onScrubForward: g,
        indicatorConfig: y,
        "data-testid": A
    })
}