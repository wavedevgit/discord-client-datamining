/** Chunk was on 15687 **/
/** chunk id: 646938, original params: e,t,a (module,exports,require) **/
a.d(t, {
    default: () => u
});
var l = a(627968),
    i = a(64700),
    n = a(397927),
    d = a(442433),
    s = a(50268),
    r = a(985018);

function u(e) {
    var t;
    let a = (0, s.A)({
        id: e.id,
        label: e.label,
        shiftId: e.shiftId
    });
    return i.useEffect(() => {
        null == a && (0, d.Z_)()
    }, [a]), (0, l.jsx)(n.W1t, {
        "data-menu-migrated-auto": !0,
        onSelect: e.onSelect,
        navId: "dev-context",
        "aria-label": null != (t = e["aria-label"]) ? t : r.intl.string(r.t.ogxXGq),
        onClose: d.Z_,
        children: a
    })
}