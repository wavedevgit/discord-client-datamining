/** chunk id: 641668, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => o
});
var r = n(64700),
    i = n(561392),
    a = n(844222);

function o() {
    let {
        reducedMotion: e
    } = r.useContext(a.C), {
        isOpen: t,
        setIsOpen: n,
        refs: o,
        floatingStyles: s,
        getReferenceProps: l,
        getFloatingProps: c,
        context: u
    } = (0, i.u)({
        placement: "bottom",
        matchReferenceWidth: !0,
        transform: e.enabled
    }), {
        styles: d
    } = (0, i.D)(u, {
        common: {
            transformOrigin: "top center"
        },
        initial: {
            opacity: .5,
            transform: "scaleY(0.96)"
        },
        duration: 100
    });
    return {
        isOpen: t,
        setIsOpen: n,
        refs: o,
        floatingStyles: s,
        getReferenceProps: l,
        getFloatingProps: c,
        transitionStyles: e.enabled ? {} : d
    }
}