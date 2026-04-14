/** chunk id: 953756 params = (module,exports,require) **/
n.d(t, {
    Hq: () => o,
    O7: () => a,
    zn: () => d
});
var r = n(627968),
    l = n(64700);
let i = l.createContext(null),
    a = {
        Root(e) {
            let {
                containerInnerWidth: t,
                children: n
            } = e, a = l.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: t
            }), [t]);
            return (0, r.jsx)(i.Provider, {
                value: a,
                children: n
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: t,
                containerInnerWidth: n,
                children: a
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: d
            } = s(), c = o && d === t, u = l.useMemo(() => ({
                isParentWidthLimited: c,
                parentContainerInnerWidth: n
            }), [c, n]);
            return (0, r.jsx)(i.Provider, {
                value: u,
                children: a
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: t
            } = e, [n, l, i] = d(!0);
            return (0, r.jsx)(a.NestedContainer, {
                containerOuterWidth: l,
                containerInnerWidth: i,
                children: t(n)
            })
        }
    };

function s() {
    let e = l.useContext(i);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: t,
        parentContainerInnerWidth: n
    } = s();
    return t && n === e
}

function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = l.useRef(null),
        [n, r] = l.useState(0),
        [i, a] = l.useState(0);
    return l.useLayoutEffect(() => {
        if (null == t.current) return;
        let n = new ResizeObserver(() => {
            let n = t.current.getBoundingClientRect().width,
                l = getComputedStyle(t.current);
            r(n + (parseFloat(l.marginLeft) + parseFloat(l.marginRight))), e && a(n - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight) + parseFloat(l.borderLeftWidth) + parseFloat(l.borderRightWidth)))
        });
        return n.observe(t.current), () => n.disconnect()
    }, [e]), [t, n, i]
}