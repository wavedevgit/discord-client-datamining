/** chunk id: 851580 params = (module,exports,require) **/
n.d(t, {
    v: () => A
});
var i = n(627968),
    l = n(554146),
    a = n(342494),
    r = n(932001),
    s = n(966597),
    o = n(49999),
    d = n(985018),
    c = n(936037);
let u = l.M.FOR_LATER_POPOUT_COACHMARK;

function A(e) {
    let {
        location: t,
        targetElementRef: n
    } = e, {
        enabled: l,
        inInbox: A
    } = s.A.useConfig({
        location: "ForLaterCoachmarkWeb"
    }), [h, _] = (0, r.kn)(l && t === (A ? "inbox-button" : "bookmarks-button") ? [u] : [], void 0);
    return h !== u ? null : (0, i.jsx)(a.AM, {
        targetElementRef: n,
        gradientColor: "purple",
        position: "bottom",
        align: "right",
        shouldShow: !0,
        caretConfig: {
            align: "end"
        },
        onRequestClose: () => _(o.i.USER_DISMISS),
        title: d.intl.string(d.t.qPbFK2),
        body: d.intl.string(d.t.URrJq1),
        actions: [{
            text: d.intl.string(d.t["NX+WJN"]),
            onClick: () => _(o.i.USER_DISMISS)
        }],
        graphic: {
            type: "image",
            src: c
        }
    })
}