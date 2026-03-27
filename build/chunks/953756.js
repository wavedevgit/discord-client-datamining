/** chunk id: 953756 params = (module,exports,require) **/
t.d(n, {
    Hq: () => o,
    O7: () => a,
    zn: () => d
});
var i = t(627968),
    s = t(64700);
let r = s.createContext(null),
    a = {
        Root(e) {
            let {
                containerInnerWidth: n,
                children: t
            } = e, a = s.useMemo(() => ({
                isParentWidthLimited: !0,
                parentContainerInnerWidth: n
            }), [n]);
            return (0, i.jsx)(r.Provider, {
                value: a,
                children: t
            })
        },
        NestedContainer(e) {
            let {
                containerOuterWidth: n,
                containerInnerWidth: t,
                children: a
            } = e, {
                isParentWidthLimited: o,
                parentContainerInnerWidth: d
            } = l(), c = o && d === n, u = s.useMemo(() => ({
                isParentWidthLimited: c,
                parentContainerInnerWidth: t
            }), [c, t]);
            return (0, i.jsx)(r.Provider, {
                value: u,
                children: a
            })
        },
        AutoMeasuredNestedContainer(e) {
            let {
                children: n
            } = e, [t, s, r] = d(!0);
            return (0, i.jsx)(a.NestedContainer, {
                containerOuterWidth: s,
                containerInnerWidth: r,
                children: n(t)
            })
        }
    };

function l() {
    let e = s.useContext(r);
    if (null == e) throw Error("Cannot use the ComponentLayoutLimitContext system when not within the context");
    return e
}

function o(e) {
    let {
        isParentWidthLimited: n,
        parentContainerInnerWidth: t
    } = l();
    return n && t === e
}

function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        n = s.useRef(null),
        [t, i] = s.useState(0),
        [r, a] = s.useState(0);
    return s.useLayoutEffect(() => {
        if (null == n.current) return;
        let t = new ResizeObserver(() => {
            let t = n.current.getBoundingClientRect().width,
                s = getComputedStyle(n.current);
            i(t + (parseFloat(s.marginLeft) + parseFloat(s.marginRight))), e && a(t - (parseFloat(s.paddingLeft) + parseFloat(s.paddingRight) + parseFloat(s.borderLeftWidth) + parseFloat(s.borderRightWidth)))
        });
        return t.observe(n.current), () => t.disconnect()
    }, [e]), [n, t, r]
}