/** chunk id: 359348 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968),
    l = n(64700),
    s = n(417597),
    a = n(342494),
    r = n(397927),
    o = n(442433),
    d = n(688810),
    c = n(384059),
    u = n(42473),
    h = n(186111),
    A = n(532624),
    _ = n(350535),
    m = n(274372),
    p = n(572164),
    g = n(399925),
    f = n(652215),
    E = n(985018),
    x = n(646693),
    I = n(145394);

function C(e) {
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
        } = e, [s, o] = l.useState(!1), d = l.useCallback(() => o(!1), []);
        return (0, i.jsx)(a.AM, {
            shouldShow: s,
            targetElementRef: n,
            position: "top",
            title: E.intl.format(E.t["o+srEw"], {
                keybind: t,
                keybindHook: () => (0, i.jsx)("span", {
                    className: x.E,
                    children: (0, i.jsx)(r.e7I, {
                        className: x.d,
                        shortcut: t
                    })
                })
            }),
            body: E.intl.format(E.t.DWeRm1, {
                keybindHook: () => t,
                keybind: t
            }),
            graphic: {
                type: "image",
                src: I
            },
            caretConfig: {
                align: "center"
            },
            onRequestClose: d
        })
    },
    T = () => {
        let e = l.useRef(null),
            {
                parentAnalyticsLocation: t
            } = (0, d.Ay)(),
            n = (0, s.bG)([h.A], () => h.A.hasLayers()),
            a = (0, p.Et)(),
            o = (0, s.bG)([m.A], () => m.A.getIsAtMaxSaveClipOperations()),
            x = (0, s.bG)([A.Ay], () => A.Ay.getKeybindForAction(f.hCu.SAVE_CLIP));
        if (!a || null == x || n) return null;
        let I = _.dI(x.shortcut, !0);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(N, {
                keybindString: I,
                targetElementRef: e
            }), (0, i.jsx)(u.A, {
                ref: e,
                disabled: o,
                tooltipText: null != x ? E.intl.formatToPlainString(E.t.HIMcv1, {
                    hotkey: _.dI(x?.shortcut, !0)
                }) : E.intl.string(E.t.s52pju),
                onClick: () => {
                    (0, g.l0)(), (0, c.X)(t, c.O.CLIP)
                },
                onContextMenu: C,
                icon: r.xgA
            })]
        })
    }