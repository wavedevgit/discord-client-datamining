/** Chunk was on 39048 **/
/** chunk id: 546457, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
}), n(896048), n(142703);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(475743),
    c = n(761929),
    d = n(273875),
    u = n(530552),
    g = n(330299),
    m = n(698085);

function p(e) {
    let {
        resizableNode: t,
        onResize: n,
        onResizeEnd: i
    } = e, l = (0, c.A)({
        minDimension: u.vl,
        resizableDomNodeRef: t,
        onElementResize: n,
        onElementResizeEnd: i,
        orientation: c.R.VERTICAL_BOTTOM,
        throttleDuration: 16
    });
    return (0, r.jsx)("div", {
        onMouseDown: l,
        className: m.Di
    })
}
let f = i.forwardRef(function(e, t) {
    let {
        children: n,
        onFocus: l,
        onBlur: s,
        onClick: o
    } = e, c = i.useRef(null), [d, g] = i.useState(u.vl);
    return (0, r.jsxs)(a.DUT, {
        className: m.Tg,
        onFocus: l,
        onBlur: s,
        onClick: o,
        innerRef: c,
        ignoreKeyPress: !0,
        style: {
            minHeight: d
        },
        children: [(0, r.jsx)(a.T7Y, {
            className: m.Fg,
            style: {
                minHeight: d - 2
            },
            ref: t,
            children: n
        }), (0, r.jsx)(p, {
            resizableNode: c,
            onResize: g,
            onResizeEnd: e => {
                g(e), null == l || l()
            }
        })]
    })
});

function h(e) {
    var t;
    let {
        initialValue: n,
        onChangeTags: l,
        onChangeNewTagValue: c,
        tagErrors: u = {},
        placeholder: p,
        className: h,
        maxTags: b
    } = e, x = i.useRef(null), j = i.useRef(null), _ = i.useRef(null), O = (0, g.M)(n), {
        handlePasteEvent: v,
        handleInputChange: y,
        handleKeyDown: A,
        handleContainerKeyUp: E,
        handleRemoveTag: N,
        handleTagChangeEvent: S,
        handleSelectTag: I,
        handleUnselectTag: T,
        handleResetTagSelections: C,
        handleInputBlurEvent: P
    } = (0, g.d)(O, {
        scrollerRef: _,
        mainInputRef: x,
        mainContainerRef: j
    }), {
        state: {
            value: w,
            tags: R,
            selections: D,
            isSelecting: G
        }
    } = O, L = (0, o.A)(R), [k, M] = i.useState(!1), U = i.useCallback(() => {
        var e;
        M(!1), C(), null == (e = x.current) || e.focus({
            preventScroll: !0
        })
    }, [C]);
    i.useEffect(() => {
        L !== R && l(R)
    }, [l, L, R]), i.useEffect(() => {
        k || c(w)
    }, [c, w, k]);
    let B = i.useCallback(function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e && U(), M(!1)
        }, [U]),
        F = i.useCallback(e => t => {
            if (t) {
                var n;
                let t = D.includes(R[e]);
                null == (n = x.current) || n.focus(), t ? T(e) : (I(e), setImmediate(() => {
                    var e;
                    null == (e = x.current) || e.blur(), setTimeout(() => {
                        var e;
                        return null == (e = j.current) ? void 0 : e.focus()
                    }, 16)
                }))
            } else T(e, !0), M(!0)
        }, [I, T, D, R]);
    return (0, r.jsxs)("div", {
        className: s()(m.rs, h),
        ref: j,
        tabIndex: 0,
        onKeyUp: E,
        children: [(0, r.jsxs)(f, {
            ref: _,
            onClick: U,
            children: [R.map((e, t) => (0, r.jsx)(d.A, {
                value: e,
                onChange: S(t),
                onBlur: B,
                onFocus: F(t),
                onRemove: () => N(t),
                isSelected: D.includes(e),
                isSelecting: G,
                error: u[e],
                forceShowErrorTooltip: !k && t === R.length - 1
            }, t)), (0, r.jsx)("input", {
                className: s()(m.tM, {
                    [m.kD]: k
                }),
                ref: x,
                onChange: y,
                onKeyDownCapture: A,
                onPaste: v,
                onBlur: P,
                placeholder: 0 === R.length ? p : void 0,
                value: w
            })]
        }), null != b && (0, r.jsxs)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: m.MH,
            children: [null != (t = null == R ? void 0 : R.length) ? t : 0, "/", b]
        })]
    })
}