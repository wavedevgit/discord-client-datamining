/** Chunk was on 60667 **/
/** chunk id: 769838, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(688810),
    a = n(195043),
    o = n(253932),
    c = n(698723),
    d = n(531525),
    u = n(985018);

function _() {
    let e = o.uh.useSetting(),
        {
            analyticsLocations: t
        } = (0, s.Ay)(),
        n = i.useCallback(e => {
            (0, c.A)("stream_previews_disabled", e, o.uh.getSetting(), t), o.uh.updateSetting(e)
        }, [t]);
    return (0, r.jsx)(a.x, {
        setting: d.H.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: (0, r.jsx)(l.dOG, {
            label: u.intl.string(u.t["1CzWUK"]),
            description: u.intl.string(u.t.jTNPHM),
            checked: e,
            onChange: n
        })
    })
}