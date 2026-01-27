/** Chunk was on web.js **/
/** chunk id: 700713, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => a
});
var r = n(64700),
    i = n(158954);

function a() {
    let {
        reducedMotion: e
    } = r.useContext(i.CZY), {
        isOpen: t,
        setIsOpen: n,
        refs: a,
        floatingStyles: o,
        getReferenceProps: s,
        getFloatingProps: l,
        context: c
    } = (0, i.uaw)({
        placement: "bottom",
        matchReferenceWidth: !0,
        transform: e.enabled
    }), {
        styles: u
    } = (0, i.DLI)(c, {
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
        refs: a,
        floatingStyles: o,
        getReferenceProps: s,
        getFloatingProps: l,
        transitionStyles: e.enabled ? {} : u
    }
}