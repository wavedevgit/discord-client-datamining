/** chunk id: 372411, original params: t,e,i (module,exports,require) **/
i.d(e, {
    E: () => E
});
var n = i(311907),
    l = i(264686),
    s = i(970931),
    r = i(419954),
    u = i(803224),
    a = i(780964),
    o = i(932055),
    d = i(985018);
let T = {
        useTitle: () => d.intl.string(d.t.jD1qzM),
        sound: "message1",
        useDisabled: s.kB,
        useDisabledMessage: () => (0, s.kB)() ? d.intl.string(d.t.cIRG0s) : void 0
    },
    A = {
        useTitle: () => d.intl.string(d.t.XBrJT6),
        sound: "call_ringing"
    },
    S = (0, r.zD)(a.X.SELECTED_CHANNEL_NOTIFICATIONS, {
        useTitle: () => d.intl.string(d.t.TzjwV9),
        useSubtitle: () => d.intl.format(d.t.OOiGCM, {
            onClick: () => (0, o.Jz)("message3")
        }),
        useValue: () => (0, n.bG)([u.A], () => u.A.getNotifyMessagesInSelectedChannel() && !u.A.getDisableAllSounds()),
        setValue: t => l.default.setNotifyMessagesInSelectedChannel(t),
        useDisabled: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds())
    }),
    c = (0, r.zD)(a.X.DISABLE_ALL_NOTIFICATION_SOUNDS, {
        useTitle: () => d.intl.string(d.t["2ZhCOd"]),
        useSubtitle: () => d.intl.string(d.t.EAKdPr),
        useValue: () => (0, n.bG)([u.A], () => u.A.getDisableAllSounds()),
        setValue: t => l.default.toggleDisableAllSounds(t)
    }),
    E = (0, r.D1)(a.X.NOTIFICATION_SOUNDS_LIST, {
        initialize: function() {
            return () => {
                (0, o.vd)()
            }
        },
        buildLayout: () => [(0, o.i)(T), S, (0, o.i)(A), c]
    })