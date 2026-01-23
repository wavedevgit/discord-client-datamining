/** Chunk was on 15687 **/
/** chunk id: 646938, original params: e,t,l (module,exports,require) **/
l.d(t, {
    default: () => r
});
var a = l(627968),
    i = l(64700),
    n = l(397927),
    d = l(442433),
    s = l(50268),
    c = l(985018);

function r(e) {
    var t;
    let l = (0, s.A)({
        id: e.id,
        label: e.label,
        shiftId: e.shiftId
    });
    return i.useEffect(() => {
        null == l && (0, d.Z_)()
    }, [l]), (0, a.jsx)(n.W1t, {
        "data-menu-mixed": !0,
        onSelect: e.onSelect,
        navId: "dev-context",
        "aria-label": null != (t = e["aria-label"]) ? t : c.intl.string(c.t.ogxXGq),
        onClose: d.Z_,
        children: l
    })
}