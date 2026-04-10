/** chunk id: 495871 params = (module,exports,require) **/
n.d(t, {
    w: () => o
});
var i = n(311907),
    s = n(926919),
    l = n(419954),
    r = n(111162),
    a = n(780964);
let o = (0, l.zD)(a.X.QUEST_LOGGING, {
    useTitle: () => "Enable Quests Debug Logging",
    useSubtitle: () => "Logs quest lifecycle events to the developer console.",
    useValue: () => (0, i.bG)([r.default], () => r.default.isLoggingQuestEvents),
    setValue: e => (0, s.x)({
        logQuestEvents: e
    })
})