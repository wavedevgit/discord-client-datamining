/** chunk id: 359348 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(417597),
    r = n(342494),
    a = n(397927),
    o = n(442433),
    c = n(688810),
    d = n(384059),
    u = n(42473),
    h = n(186111),
    A = n(532624),
    m = n(350535),
    _ = n(274372),
    p = n(572164),
    g = n(399925),
    f = n(652215),
    x = n(985018),
    C = n(345314),
    E = n(145394);

function I(e) {
    (0, o.L3)(e, async () => {
        let {
            default: e
        } = await n.e("44751").then(n.bind(n, 575538));
        return t => (0, i.jsx)(e, {
            ...t
        })
    })
}
let N = e => {
        let {
            keybindString: t,
            targetElementRef: n
        } = e, [l, o] = s.useState(!1), c = s.useCallback(() => o(!1), []);
        return (0, i.jsx)(r.AM, {
            shouldShow: l,
            targetElementRef: n,
            position: "top",
            title: x.intl.format(x.t["o+srEw"], {
                keybind: t,
                keybindHook: () => (0, i.jsx)("span", {
                    className: C.E,
                    children: (0, i.jsx)(a.e7I, {
                        className: C.d,
                        shortcut: t
                    })
                })
            }),
            body: x.intl.format(x.t.DWeRm1, {
                keybindHook: () => t,
                keybind: t
            }),
            graphic: {
                type: "image",
                src: E
            },
            caretConfig: {
                align: "center"
            },
            onRequestClose: c
        })
    },
    b = () => {
        let e = s.useRef(null),
            {
                parentAnalyticsLocation: t
            } = (0, c.Ay)(),
            n = (0, l.bG)([h.A], () => h.A.hasLayers()),
            r = (0, p.Et)(),
            o = (0, l.bG)([_.A], () => _.A.getIsAtMaxSaveClipOperations()),
            C = (0, l.bG)([A.Ay], () => A.Ay.getKeybindForAction(f.hCu.SAVE_CLIP));
        if (!r || null == C || n) return null;
        let E = m.dI(C.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N, {
                keybindString: E,
                targetElementRef: e
            }), (0, i.jsx)(u.A, {
                ref: e,
                disabled: o,
                tooltipText: null != C ? x.intl.formatToPlainString(x.t.HIMcv1, {
                    hotkey: m.dI(C?.shortcut, !0)
                }) : x.intl.string(x.t.s52pju),
                onClick: () => {
                    (0, g.l0)(), (0, d.X)(t, d.O.CLIP)
                },
                onContextMenu: I,
                icon: a.xgA
            })]
        })
    }