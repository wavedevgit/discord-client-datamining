/** Chunk was on 87557 **/
/** chunk id: 855936, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(397927),
    o = n(936388),
    c = n(195338),
    d = n(661251);

function u() {
    let e = l.useRef(null);
    return (0, a.jsx)("div", {
        ref: e,
        className: i()(d.nd, c.n),
        children: (0, a.jsx)(s.Button, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: o.A.clearUploadedKeyVersions
        })
    })
}