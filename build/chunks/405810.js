/** chunk id: 405810 params = (module,exports,require) **/
a.d(t, {
    A: () => s
});
var o = a(627968),
    _ = a(64700),
    n = a(397927),
    r = a(946274),
    i = a(453610);

function s(e) {
    let {
        onChange: t,
        onFileSizeError: a,
        multiple: s = !1,
        disabled: d = !1,
        maxFileSizeBytes: c,
        filters: l,
        ...p
    } = e, b = _.useRef(null);
    return (0, o.jsxs)("div", {
        children: [(0, o.jsx)("div", {
            className: i.l,
            children: (0, o.jsx)(r.Ay, {
                ref: b,
                onChange: t,
                onFileSizeError: a,
                multiple: s,
                maxFileSizeBytes: c,
                filters: l,
                disabled: d,
                tabIndex: -1,
                "aria-hidden": !0
            })
        }), (0, o.jsx)(n.Button, {
            ...p,
            disabled: d,
            onClick: () => {
                b.current?.activateUploadDialogue()
            }
        })]
    })
}