/** chunk id: 979766 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(687709),
    r = n(492841),
    a = n(145530),
    o = n(652215),
    c = n(985018);

function d(e, t) {
    return e.state !== o.cmJ.SEND_FAILED && (0, r.A)(e, t) ? !1 === e.pinned ? (0, i.jsx)(s.Drp, {
        id: "pin",
        action: function(n) {
            n.shiftKey ? l.A.pinMessage(t, e.id) : a.A.confirmPin(t, e)
        },
        label: c.intl.string(c.t.CvQ18w),
        leadingAccessory: {
            type: "icon",
            icon: s.tsw
        },
        icon: s.tsw
    }) : (0, i.jsx)(s.Drp, {
        id: "unpin",
        action: function(n) {
            n.shiftKey ? l.A.unpinMessage(t, e.id) : a.A.confirmUnpin(t, e)
        },
        label: c.intl.string(c.t["Bse+F/"]),
        leadingAccessory: {
            type: "icon",
            icon: s.tsw
        },
        icon: s.tsw
    }) : null
}