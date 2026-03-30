/** chunk id: 359348 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(417597),
    a = n(342494),
    r = n(397927),
    o = n(442433),
    c = n(688810),
    d = n(384059),
    u = n(42473),
    h = n(186111),
    A = n(532624),
    m = n(350535),
    _ = n(274372),
    g = n(572164),
    p = n(399925),
    f = n(652215),
    x = n(985018),
    E = n(862741),
    C = n(145394);

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
        return (0, i.jsx)(a.AM, {
            shouldShow: l,
            targetElementRef: n,
            position: "top",
            title: x.intl.format(x.t["o+srEw"], {
                keybind: t,
                keybindHook: () => (0, i.jsx)("span", {
                    className: E.E,
                    children: (0, i.jsx)(r.e7I, {
                        className: E.d,
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
                src: C
            },
            caretConfig: {
                align: "center"
            },
            onRequestClose: c
        })
    },
    S = () => {
        let e = s.useRef(null),
            {
                parentAnalyticsLocation: t
            } = (0, c.Ay)(),
            n = (0, l.bG)([h.A], () => h.A.hasLayers()),
            a = (0, g.Et)(),
            o = (0, l.bG)([_.A], () => _.A.getIsAtMaxSaveClipOperations()),
            E = (0, l.bG)([A.Ay], () => A.Ay.getKeybindForAction(f.hCu.SAVE_CLIP));
        if (!a || null == E || n) return null;
        let C = m.dI(E.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N, {
                keybindString: C,
                targetElementRef: e
            }), (0, i.jsx)(u.A, {
                ref: e,
                disabled: o,
                tooltipText: null != E ? x.intl.formatToPlainString(x.t.HIMcv1, {
                    hotkey: m.dI(E?.shortcut, !0)
                }) : x.intl.string(x.t.s52pju),
                onClick: () => {
                    (0, p.l0)(), (0, d.X)(t, d.O.CLIP)
                },
                onContextMenu: I,
                icon: r.xgA
            })]
        })
    }