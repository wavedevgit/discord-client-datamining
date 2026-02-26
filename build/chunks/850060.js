/** chunk id: 850060, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(627968);
t(64700);
var l = t(397927),
    a = t(954571),
    s = t(253932),
    c = t(652215),
    r = t(985018);

function o() {
    let e = s.D_.useSetting(),
        n = s.SI.useSetting();
    return e ? null : (0, i.jsx)(l.sLh, {
        id: "preview-markdown-toggle",
        label: r.intl.string(r.t.sHJ9wZ),
        action: () => {
            let e = !n;
            a.default.track(c.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                    section: c.JJy.SETTINGS_CONTEXT_MENU
                }
            }), s.SI.updateSetting(e)
        },
        checked: n
    })
}