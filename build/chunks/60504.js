/** Chunk was on 77870 **/
/** chunk id: 60504, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(453903),
    s = n(397927),
    a = n(421773),
    o = n(650583),
    c = n(342910);

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function d(e) {
    let {
        renderPopout: t,
        onMouseEnter: n,
        onMouseLeave: i,
        closePopout: s,
        isHovered: a
    } = e, o = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
    return l.useEffect(() => {
        a || s()
    }, [s, a]), (0, r.jsx)("div", {
        onMouseEnter: n,
        onMouseLeave: i,
        children: t(u({
            closePopout: s
        }, o))
    })
}
let p = l.forwardRef(function(e, t) {
    let {
        renderPopout: n,
        popoutTargetRef: p,
        children: h,
        align: f = "left",
        isPopoutBlocked: g,
        onPopoutOpen: m,
        onPopoutClose: b,
        onRequestClose: A
    } = e, [y, _] = l.useState(!1), {
        isHovered: O,
        setIsHovered: j,
        onMouseEnter: v,
        onMouseLeave: x,
        cancelTimers: E
    } = (0, a.A)(200, 300);

    function C(e) {
        "focus" === e.type || y || v()
    }

    function S() {
        y || x()
    }

    function I(e) {
        E(), _(!y), y ? null == b || b() : null == m || m(), (!O || y) && e()
    }
    l.useImperativeHandle(t, () => ({
        hidePopout() {
            j(!1), _(!1)
        }
    }), [j, _]);
    let N = O && !g || y;
    return (0, r.jsx)(s.YNO, {
        targetElementRef: p,
        animation: s.YNO.Animation.FADE,
        shouldShow: N,
        animationPosition: "top",
        position: "top",
        align: f,
        spacing: 16,
        onRequestClose: () => {
            if ((null == A ? void 0 : A()) === i.o) return i.o;
            j(!1), _(!1), null == b || b()
        },
        renderPopout: e => (0, r.jsx)(d, u({
            isHovered: N,
            onFocus: () => _(!0),
            onMouseEnter: v,
            onMouseLeave: S,
            renderPopout: n
        }, e)),
        children: e => {
            let {
                onClick: t,
                onKeyDown: n
            } = e;
            return (0, r.jsx)(r.Fragment, {
                children: h({
                    onClick: e => I(() => t(e)),
                    onKeyDown: e => {
                        (e.key === o.dh.ENTER || e.key === o.dh.SPACE) && I(() => n(e))
                    },
                    className: c.g,
                    onMouseEnter: C,
                    onMouseLeave: S,
                    isActive: y
                })
            })
        }
    })
})