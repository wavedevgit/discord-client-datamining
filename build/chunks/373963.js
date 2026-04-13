/** chunk id: 373963 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(723702),
    l = n(837921),
    a = n(985018);

function c(e, t) {
    return r.isPlatformEmbedded && e?.length !== 0 ? (0, i.jsx)(s.Drp, {
        id: "copy",
        label: a.intl.string(a.t.OpuAlK),
        shortcut: (0, r.isMac)() ? "⌘C" : "Ctrl+C",
        leadingAccessory: {
            type: "icon",
            icon: s.TdU
        },
        action: () => {
            l.Ay.copy(e), t?.focus()
        }
    }) : null
}