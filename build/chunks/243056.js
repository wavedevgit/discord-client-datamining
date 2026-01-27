/** Chunk was on 11810 **/
/** chunk id: 243056, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    c = n(735438),
    s = n(131346),
    a = n(522437),
    d = n(158954),
    u = n(827734),
    f = n(397927),
    j = n(828208),
    p = n(513461),
    b = n(985018),
    y = n(592454);

function m(e) {
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

function O(e) {
    let {
        type: t
    } = e, n = i.useMemo(() => {
        switch (t) {
            case p.rX.MULTIPLE_CHOICE:
                return {
                    icon: f.jsc, text: b.intl.string(b.t.ooKh3m)
                };
            case p.rX.PARAGRAPH:
                return {
                    icon: f.$tc, text: b.intl.string(b.t.gG0JBN)
                };
            case p.rX.TEXT_INPUT:
                return {
                    icon: (0, f.kHD)(j.A), text: b.intl.string(b.t.w6Q9wz)
                };
            case p.rX.TERMS:
                return {
                    icon: f.B8Q, text: b.intl.string(b.t["3pz9t3"])
                };
            default:
                return null
        }
    }, [t]);
    return null == n ? null : (0, r.jsxs)("div", {
        className: y.L6,
        children: [(0, r.jsx)(n.icon, {
            size: "xs",
            color: "currentColor"
        }), (0, r.jsx)(d.EYj, {
            variant: "text-sm/medium",
            tag: "span",
            children: n.text
        })]
    })
}

function v(e) {
    let {
        title: t,
        children: n,
        fieldStyle: i,
        field: l
    } = e;
    return (0, r.jsx)("div", {
        className: y._Q,
        children: i === p.Vf.REGULAR ? (0, r.jsxs)("div", {
            className: y.pK,
            children: [(0, r.jsx)(d.EYj, {
                variant: "text-md/medium",
                className: y.Gp,
                children: t
            }), n]
        }) : (0, r.jsxs)("div", {
            className: y.ds,
            children: [(0, r.jsx)(d.EYj, {
                variant: "text-md/medium",
                className: y.ID,
                children: t
            }), (0, r.jsx)(O, {
                type: l.field_type
            })]
        })
    })
}
let x = "FORM_FIELD";

function h(e) {
    let {
        index: t,
        field: n,
        isDropHovered: l,
        onDrop: d,
        fieldStyle: j
    } = e, b = (0, c.debounce)(async (e, t, n) => {
        await d(e, t, n)
    }), O = i.useRef(null), [, h] = (0, s.i)({
        type: x,
        item: {
            index: t,
            field: n
        },
        end: (e, t) => {
            null == e || t.didDrop() || b(e.field, null, !0)
        }
    }), [, g] = (0, a.H)({
        accept: x,
        hover: (e, n) => {
            var r;
            let {
                index: i
            } = e, l = null == (r = O.current) ? void 0 : r.getBoundingClientRect(), o = n.getClientOffset();
            if (null == l || null == o) return;
            let c = (l.bottom - l.top) / 2,
                s = o.y - l.top;
            i < t && s < c || i > t && s < c || i === t || b(e.field, t, !1)
        },
        drop: e => {
            b(e.field, t, !0)
        }
    });
    return i.useLayoutEffect(() => (h(g(O)), () => {
        g(null), h(null)
    }), [h, g]), (0, r.jsxs)("div", {
        ref: O,
        "data-dnd-name": "field-".concat(t),
        className: o()(y.cK, {
            [y.TG]: l
        }),
        children: [(0, r.jsx)("div", {
            className: o()(y.VU, {
                [y.oE]: j === p.Vf.COMPACT
            }),
            children: (0, r.jsx)(f.WP0, {
                size: "xs",
                className: y.co,
                color: u.A.unsafe_rawColors.PRIMARY_400.css
            })
        }), (0, r.jsx)(v, m({}, e))]
    })
}

function g(e) {
    return (0, r.jsxs)("div", {
        className: o()(y.e4, {
            [y.oE]: e.fieldStyle === p.Vf.COMPACT
        }),
        children: [(0, r.jsx)("div", {
            className: y.Th,
            children: e.isDragEnabled ? (0, r.jsx)(h, m({}, e)) : (0, r.jsx)(v, m({}, e))
        }), "side" === e.actionsLocation && (0, r.jsxs)("div", {
            className: o()(y.fc, {
                [y.oE]: e.fieldStyle === p.Vf.COMPACT,
                [y.ZM]: e.canRemove
            }),
            children: [(0, r.jsx)(f.DUT, {
                className: y.hP,
                onClick: e.onEdit,
                "aria-label": b.intl.string(b.t.bt75uw),
                children: (0, r.jsx)(f.R2l, {
                    size: "xs"
                })
            }), e.canRemove && (0, r.jsx)(f.DUT, {
                className: y.hP,
                onClick: e.onRemove,
                "aria-label": b.intl.string(b.t.N86XcP),
                children: (0, r.jsx)(f.ucK, {
                    size: "xs"
                })
            })]
        })]
    })
}