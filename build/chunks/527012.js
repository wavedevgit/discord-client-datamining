/** chunk id: 527012, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => s
});
var r = n(627968);
n(64700);
var i = n(732955),
    l = n(397927),
    a = n(652215),
    o = n(321018);

function s(e) {
    let {
        buttonText: t,
        onGoBack: n,
        onDismiss: s,
        showCloseButton: c
    } = e;
    return (0, r.jsxs)(l.$Td, {
        className: o.eR,
        children: [c && (0, r.jsx)(l.PMB, {
            onClick: s,
            className: o.b,
            noticeType: a.kqX.BACK_TO_PREVIOUS_SCREEN
        }), (0, r.jsx)(i.$nd, {
            text: t,
            variant: "overlay-secondary",
            size: "sm",
            icon: l.rJJ,
            onClick: n
        })]
    })
}