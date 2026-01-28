/** Chunk was on 60449 **/
/** chunk id: 769838, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(688810),
    a = n(195043),
    o = n(253932),
    c = n(698723),
    d = n(531525),
    u = n(985018);

function g() {
    let e = o.uh.useSetting(),
        {
            analyticsLocations: t
        } = (0, r.Ay)(),
        n = s.useCallback(e => {
            (0, c.A)("stream_previews_disabled", e, o.uh.getSetting(), t), o.uh.updateSetting(e)
        }, [t]);
    return (0, i.jsx)(a.x, {
        setting: d.H.VOICE_AND_VIDEO_STREAM_PREVIEWS,
        children: (0, i.jsx)(l.dOG, {
            label: u.intl.string(u.t["1CzWUK"]),
            description: u.intl.string(u.t.jTNPHM),
            checked: e,
            onChange: n
        })
    })
}