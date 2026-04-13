/** chunk id: 373963 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(723702),
    r = n(837921),
    a = n(985018);

function c(e, t) {
    return l.isPlatformEmbedded && e?.length !== 0 ? (0, i.jsx)(s.Drp, {
        id: "copy",
        label: a.intl.string(a.t.OpuAlK),
        shortcut: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
        leadingAccessory: {
            type: "icon",
            icon: s.TdU
        },
        action: () => {
            r.Ay.copy(e), t?.focus()
        }
    }) : null
}