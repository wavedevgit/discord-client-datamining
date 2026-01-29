/** Chunk was on 95153 **/
/** chunk id: 850060, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(954571),
    a = n(253932),
    o = n(652215),
    c = n(985018);

function s() {
    let e = a.D_.useSetting(),
        t = a.SI.useSetting();
    return e ? null : (0, r.jsx)(i.sLh, {
        id: "preview-markdown-toggle",
        label: c.intl.string(c.t.sHJ9wZ),
        action: () => {
            let e = !t;
            l.default.track(o.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                enabled: e,
                location: {
                    section: o.JJy.SETTINGS_CONTEXT_MENU
                }
            }), a.SI.updateSetting(e)
        },
        checked: t
    })
}