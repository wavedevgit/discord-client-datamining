/** Chunk was on 35934 **/
/** chunk id: 25997, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => s
});
var i = n(627968);
n(64700);
var l = n(158954),
    r = n(956793),
    a = n(849736),
    o = n(985018);
let s = t => {
    let {
        channel: e,
        transitionState: n,
        onClose: s
    } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        title: o.intl.string(o.t.xrYNBI),
        subtitle: o.intl.string(o.t.TP1D8l),
        onClose: s,
        actions: [{
            text: o.intl.string(o.t["ETE/oC"]),
            onClick: s,
            variant: "secondary"
        }, {
            text: o.intl.string(o.t.saZaRb),
            onClick: () => {
                (0, a.OE)(e), r.default.disconnect(), s()
            },
            variant: "critical-primary"
        }]
    })
}