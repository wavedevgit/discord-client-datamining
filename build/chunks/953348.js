/** Chunk was on 39048 **/
/** chunk id: 953348, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(985018),
    a = n(872430);

function o(e) {
    let {
        showSecondaryColor: t,
        palette: n,
        onPrimaryColorChange: o,
        onSecondaryColorChange: c
    } = e, d = i.useRef(null);
    return (0, l.tjt)(d), (0, r.jsxs)("div", {
        className: a.jC,
        children: [(0, r.jsx)(l.Text, {
            variant: "text-xs/semibold",
            color: "text-default",
            className: a.Fb,
            children: s.intl.string(s.t.JhNpgy)
        }), (0, r.jsxs)("div", {
            ref: d,
            className: a.Kf,
            children: [(0, r.jsxs)("div", {
                className: a.sg,
                children: [(0, r.jsx)("div", {
                    className: a.oP,
                    style: {
                        backgroundColor: n.primary
                    }
                }), (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: s.intl.string(s.t.C3KTQk)
                }), (0, r.jsx)(l.VNw, {
                    className: a.Ei,
                    value: n.primary,
                    eagerUpdate: !0,
                    wrapperComponentType: "div",
                    showEyeDropper: !0,
                    onChange: o
                })]
            }), t && (0, r.jsxs)("div", {
                className: a.sg,
                children: [(0, r.jsx)("div", {
                    className: a.oP,
                    style: {
                        backgroundColor: n.secondary
                    }
                }), (0, r.jsx)(l.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: s.intl.string(s.t["8elvy6"])
                }), (0, r.jsx)(l.VNw, {
                    className: a.Ei,
                    value: n.secondary,
                    eagerUpdate: !0,
                    wrapperComponentType: "div",
                    showEyeDropper: !0,
                    onChange: c
                })]
            })]
        })]
    })
}

function c(e) {
    let {
        shouldShow: t,
        showSecondaryColor: n,
        onRequestClose: i,
        children: s,
        palette: a,
        onPrimaryColorChange: c,
        onSecondaryColorChange: d,
        popoutTargetRef: u
    } = e;
    return (0, r.jsx)(l.YNO, {
        targetElementRef: u,
        renderPopout: () => (0, r.jsx)(o, {
            showSecondaryColor: n,
            palette: a,
            onPrimaryColorChange: c,
            onSecondaryColorChange: d
        }),
        position: "top",
        shouldShow: t,
        onRequestClose: i,
        animation: l.YNO.Animation.TRANSLATE,
        animationPosition: "right",
        children: s
    })
}