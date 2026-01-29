/** Chunk was on 4670 **/
/** chunk id: 372411, original params: e,t,i (module,exports,require) **/
i.d(t, {
    E: () => _
});
var n = i(311907),
    l = i(264686),
    s = i(970931),
    r = i(419954),
    a = i(803224),
    u = i(780964),
    o = i(932055),
    d = i(985018);
let T = {
        useTitle: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => (0, s.kB)() ? d.intl.string(d.t.cIRG0s) : void 0
    },
    c = {
        useTitle: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing"
    },
    A = (0, r.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useSubtitle: () => d.intl.format(d.t.OOiGCM, {
            onClick: () => (0, o.Jz)("message3")
        }),
        useValue: () => (0, n.bG)([a.A], () => a.A.getNotifyMessagesInSelectedChannel() && !a.A.getDisableAllSounds()),
        setValue: e => l.default.setNotifyMessagesInSelectedChannel(e),
        useDisabled: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds())
    }),
    S = (0, r.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, n.bG)([a.A], () => a.A.getDisableAllSounds()),
        setValue: e => l.default.toggleDisableAllSounds(e)
    }),
    _ = (0, r.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function() {
            return () => {
                (0, o.vd)()
            }
        },
        buildLayout: () => [(0, o.i)(T), A, (0, o.i)(c), S]
    })