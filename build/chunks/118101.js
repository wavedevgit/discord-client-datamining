/** chunk id: 118101, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => s
});
var i = n(627968);
n(64700);
var l = n(158954),
    r = n(956793),
    a = n(849736),
    o = n(985018);

function s(t) {
    let {
        channel: e,
        transitionState: n,
        onClose: s
    } = t;

    function u() {
        r.default.disconnect(), s()
    }
    return (0, i.jsx)(l.Modal, {
        transitionState: n,
        title: o.intl.string(o.t.pADdJu),
        subtitle: o.intl.string(o.t.mT7jwN),
        onClose: s,
        actions: [{
            text: o.intl.string(o.t.xTwqz2),
            onClick: u,
            variant: "secondary"
        }, {
            text: o.intl.string(o.t["sBP/1s"]),
            onClick: function() {
                (0, a.OE)(e), u()
            },
            variant: "critical-primary"
        }]
    })
}