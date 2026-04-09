/** chunk id: 527012 params = (module,exports,require) **/
n.d(e, {
    y: () => o
});
var i = n(627968);
n(64700);
var l = n(732955),
    r = n(397927),
    s = n(652215),
    a = n(578125);

function o(t) {
    let {
        buttonText: e,
        onGoBack: n,
        onDismiss: o,
        showCloseButton: c
    } = t;
    return (0, i.jsxs)(r.$Td, {
        className: a.eR,
        children: [c && (0, i.jsx)(r.PMB, {
            onClick: o,
            className: a.b,
            noticeType: s.kqX.BACK_TO_PREVIOUS_SCREEN
        }), (0, i.jsx)(l.$nd, {
            text: e,
            variant: "overlay-secondary",
            size: "sm",
            icon: r.rJJ,
            onClick: n
        })]
    })
}