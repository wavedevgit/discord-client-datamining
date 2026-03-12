/** chunk id: 850060 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(954571),
    r = n(253932),
    a = n(652215),
    o = n(985018);

function d() {
    let e = r.D_.useSetting(),
        t = r.SI.useSetting();
    return e ? null : (0, i.jsx)(s.sLh, {
        id: "preview-markdown-toggle",
        label: o.intl.string(o.t.sHJ9wZ),
        action: () => {
            let e = !t;
            l.default.track(a.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                    section: a.JJy.SETTINGS_CONTEXT_MENU
                }
            }), r.SI.updateSetting(e)
        },
        checked: t
    })
}