/** Chunk was on 60449 **/
/** chunk id: 565824, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    I: () => x
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(314116),
    r = n(397927),
    a = n(827343),
    o = n(77729),
    c = n(195043),
    d = n(430452),
    u = n(723702),
    g = n(531525),
    h = n(985018);

function x(e) {
    (0, u.isMac)() && e ? (0, l.A)({
        title: h.intl.string(h.t["9jf31O"]),
        subtitle: h.intl.string(h.t.uBd6JW),
        variant: "primary",
        onConfirm: () => {
            a.A.setUseSystemScreensharePicker(e), o.A.app.relaunch()
        },
        confirmText: h.intl.string(h.t.BddRzS)
    }) : a.A.setUseSystemScreensharePicker(e)
}

function A() {
    let {
        videoHook: e,
        experimentalSoundshare: t,
        supportsExperimentalSoundshare: n,
        supportsHookSoundshare: l,
        useSystemScreensharePicker: o
    } = (0, s.cf)([d.A], () => ({
        videoHook: d.A.getVideoHook(),
        experimentalSoundshare: d.A.getExperimentalSoundshare(),
        supportsExperimentalSoundshare: d.A.supportsExperimentalSoundshare(),
        supportsHookSoundshare: d.A.supportsHookSoundshare(),
        useSystemScreensharePicker: d.A.getUseSystemScreensharePicker()
    }));
    return (0, i.jsxs)(c.x, {
        setting: g.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE,
        children: [(0, i.jsx)(c.x, {
            setting: g.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_VIDEO_HOOK,
            children: (0, i.jsx)(r.dOG, {
                label: h.intl.string(h.t.GmWk2E),
                description: h.intl.string(h.t["Fj/xn1"]),
                checked: e,
                onChange: e => a.A.setVideoHook(e)
            })
        }), n && l && (0, i.jsx)(c.x, {
            setting: g.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_EXPERIMENTAL_SOUNDSHARE,
            children: (0, i.jsx)(r.dOG, {
                label: h.intl.string(h.t["4I0qzZ"]),
                checked: t,
                onChange: e => a.A.setExperimentalSoundshare(e)
            })
        }), (0, i.jsx)(c.x, {
            setting: g.H.VOICE_AND_VIDEO_ADVANCED_SCREENSHARE_SYSTEM_PICKER,
            children: (0, i.jsx)(r.dOG, {
                label: h.intl.string(h.t.ie1mgY),
                checked: o,
                onChange: x
            })
        })]
    })
}