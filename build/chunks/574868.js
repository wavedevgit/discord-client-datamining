/** Chunk was on 60449 **/
/** chunk id: 574868, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(817281),
    a = n(195043),
    o = n(964404),
    c = n(698723),
    d = n(531525),
    u = n(985018);

function g() {
    let e = (0, s.bG)([o.Ay], () => o.Ay.disableVoiceChannelChangeAlert);
    return (0, i.jsx)(a.x, {
        setting: d.H.VOICE_AND_VIDEO_SWITCH_CHANNEL_ALERT,
        children: (0, i.jsx)(l.dOG, {
            label: u.intl.string(u.t.e7LIiY),
            description: u.intl.string(u.t.YCCMkJ),
            checked: !e,
            onChange: t => {
                (0, c.A)("switch_channel_warning_enabled", t, !e), r.Ay.updatedUnsyncedSettings({
                    disableVoiceChannelChangeAlert: !t
                })
            }
        })
    })
}