/** chunk id: 372411, original params: t,e,i (module,exports,require) **/
i.d(e, {
    E: () => g
});
var n = i(311907),
    l = i(264686),
    s = i(970931),
    a = i(419954),
    r = i(803224),
    u = i(780964),
    o = i(932055),
    d = i(985018);
let A = {
        useTitle: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => (0, s.kB)() ? d.intl.string(d.t.cIRG0s) : void 0
    },
    T = {
        useTitle: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing"
    },
    S = (0, a.zD)(u.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useSubtitle: () => d.intl.format(d.t.OOiGCM, {
            onClick: () => (0, o.Jz)("message3")
        }),
        useValue: () => (0, n.bG)([r.A], () => r.A.getNotifyMessagesInSelectedChannel() && !r.A.getDisableAllSounds()),
        setValue: t => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, n.bG)([r.A], () => r.A.getDisableAllSounds())
    }),
    E = (0, a.zD)(u.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, n.bG)([r.A], () => r.A.getDisableAllSounds()),
        setValue: t => l.default.toggleDisableAllSounds(t)
    }),
    g = (0, a.D1)(u.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function() {
            return () => {
                (0, o.vd)()
            }
        },
        buildLayout: () => [(0, o.i)(A), S, (0, o.i)(T), E]
    })