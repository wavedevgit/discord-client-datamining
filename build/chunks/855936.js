/** chunk id: 855936 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(397927),
    o = n(936388),
    d = n(195338),
    c = n(661251);

function u() {
    let e = i.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: s()(c.nd, d.n),
        children: (0, a.jsx)(r.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.A.clearUploadedKeyVersions
        })
    })
}