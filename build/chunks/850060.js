/** chunk id: 850060, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => o
});
var n = i(627968);
i(64700);
var l = i(397927),
    s = i(954571),
    r = i(253932),
    a = i(652215),
    u = i(985018);

function o() {
    let t = r.D_.useSetting(),
        e = r.SI.useSetting();
    return t ? null : (0, n.jsx)(l.sLh, {
        id: "preview-markdown-toggle",
        label: u.intl.string(u.t.sHJ9wZ),
        action: () => {
            let t = !e;
            s.default.track(a.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: t,
                location: {
                    section: a.JJy.SETTINGS_CONTEXT_MENU
                }
            }), r.SI.updateSetting(t)
        },
        checked: e
    })
}