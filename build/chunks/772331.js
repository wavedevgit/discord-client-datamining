/** chunk id: 772331 params = (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(938796);
var i = n(627968);
n(64700);
var l = n(665260),
    r = n(397927),
    a = n(803316),
    s = n(307600),
    o = n(751775),
    d = n(652215),
    c = n(985018);

function u(e) {
    let t = (0, o.R)("use-save-voice-message-audio");
    return (0, l.Lt)(e.flags, d.pr7.IS_VOICE_MESSAGE) && t ? (0, i.jsx)(r.Drp, {
        id: "save-voice-message-audio",
        label: c.intl.string(c.t.vbAEaA),
        leadingAccessory: {
            type: "icon",
            icon: r.s3U
        },
        icon: r.s3U,
        action: () => {
            let t = (0, a.XW)(e.attachments[0].url);
            (0, s.h)({
                href: t
            })
        }
    }) : null
}