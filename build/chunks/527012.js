/** chunk id: 527012 params = (module,exports,require) **/
"use strict";
n.d(e, {
    y: () => o
});
var i = n(627968);
n(64700);
var r = n(732955),
    s = n(397927),
    l = n(652215),
    a = n(321018);

function o(t) {
    let {
        buttonText: e,
        onGoBack: n,
        onDismiss: o,
        showCloseButton: c
    } = t;
    return (0, i.jsxs)(s.$Td, {
        className: a.eR,
        children: [c && (0, i.jsx)(s.PMB, {
            onClick: o,
            className: a.b,
            noticeType: l.kqX.BACK_TO_PREVIOUS_SCREEN
        }), (0, i.jsx)(r.$nd, {
            text: e,
            variant: "overlay-secondary",
            size: "sm",
            icon: s.rJJ,
            onClick: n
        })]
    })
}