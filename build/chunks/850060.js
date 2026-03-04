/** chunk id: 850060, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(397927),
    s = i(954571),
    a = i(253932),
    r = i(652215),
    u = i(985018);

function o() {
    let t = a.D_.useSetting(),
        e = a.SI.useSetting();
    return t ? null : (0, n.jsx)(l.sLh, {
        id: "preview-markdown-toggle",
        label: u.intl.string(u.t.sHJ9wZ),
        action: () => {
            let t = !e;
            s.default.track(r.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: t,
                location: {
                    section: r.JJy.SETTINGS_CONTEXT_MENU
                }
            }), a.SI.updateSetting(t)
        },
        checked: e
    })
}