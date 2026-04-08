/** chunk id: 953756 params = (module,exports,require) **/
a.d(t, {
    Hq: () => o,
    O7: () => s,
    zn: () => c
});
var n = a(627968),
    r = a(64700);
let i = r.createContext(null),
    s = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: a
            } = e, s = r.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, n.jsx)(i.Provider, {
                value: s,
                children: a
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: a,
                children: s
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: c
            } = l(), d = o && c === t, u = r.useMemo(() => ({
                isParentWidthLimited: d,
                parentContainerInnerWidth: a
            }), [d, a]);
            return (0, n.jsx)(i.Provider, {
                value: u,
                children: s
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [a, r, i] = c(!0);
            return (0, n.jsx)(s.NestedContainer, {
                containerOuterWidth: r,
                containerInnerWidth: i,
                children: t(a)
            })
        }
    };

function l() {
    let e = r.useContext(i);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: a
    } = l();
    return t && a === e
}

function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = r.useRef(null),
        [a, n] = r.useState(0),
        [i, s] = r.useState(0);
    return r.useLayoutEffect(() => {
        if (null == t.current) return;
        let a = new ResizeObserver(() => {
            let a = t.current.getBoundingClientRect().width,
                r = getComputedStyle(t.current);
            n(a + (parseFloat(r.marginLeft) + parseFloat(r.marginRight))), e && s(a - (parseFloat(r.paddingLeft) + parseFloat(r.paddingRight) + parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth)))
        });
        return a.observe(t.current), () => a.disconnect()
    }, [e]), [t, a, i]
}