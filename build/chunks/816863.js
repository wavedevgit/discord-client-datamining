/** chunk id: 816863 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    r = n(17143),
    a = n(430452),
    o = n(975571),
    d = n(652215),
    c = n(731854),
    u = n(985018),
    m = n(352461);
let g = `${o.A.getArticleURL(d.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`;

function _() {
    return (0, s.bG)([a.Ay], () => a.Ay.supports(c.O5.LOOPBACK)) ? (0, i.jsx)(r.A, {
        size: "md",
        notchBackground: r.V.GRAY,
        captionVoice: u.intl.string(u.t.bp3JOV),
        captionNoVoice: (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Text, {
                variant: "text-xs/semibold",
                color: "text-default",
                children: u.intl.string(u.t.bgn75v)
            }), u.intl.string(u.t["MA+OZh"]), (0, i.jsx)(l.MzZ, {
                className: m.X,
                href: o.A.getArticleURL(d.MVz.NO_INPUT_DETECTED),
                children: u.intl.string(u.t.RYKKox)
            })]
        }),
        helpText: u.intl.format(u.t["V+B3FH"], {
            guideURL: g
        }),
        buttonTest: u.intl.string(u.t.gyljWE),
        buttonStop: u.intl.string(u.t.I6OnJ3),
        buttonVariant: "primary",
        location: {
            page: d.liQ.USER_SETTINGS,
            section: d.JJy.SETTINGS_VOICE_AND_VIDEO
        }
    }) : null
}