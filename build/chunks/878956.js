/** chunk id: 878956 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(965407),
    a = n(249700),
    s = n(652215),
    o = n(985018);

function d(e, t) {
    return e.state !== s.cmJ.SEND_FAILED ? null : (0, i.jsx)(l.Drp, {
        id: "resend",
        label: o.intl.string(o.t.lXHojr),
        leadingAccessory: {
            type: "icon",
            icon: l.fNY
        },
        action: () => (0, a.A)(t, e, void 0, r.A.getOptions(e.id))
    })
}