/** chunk id: 304694 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(928658),
    a = i(446600),
    s = i(985018);

function d(n) {
    let t = a.A.isLive(n.id);
    return n.isGuildStageVoice() && t ? (0, e.jsx)(l.Drp, {
        id: "report-stage",
        label: s.intl.string(s.t.JGj6Ci),
        action: () => (0, r.pb)(n),
        icon: l.iFK,
        leadingAccessory: {
            type: "icon",
            icon: l.iFK
        },
        color: "danger"
    }) : null
}