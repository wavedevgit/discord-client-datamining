/** chunk id: 135261, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y,
    P: () => E
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(253018),
    l = n(621466),
    c = n(397927),
    u = n(750506),
    d = n(267102),
    f = n(186306),
    p = n(339871),
    _ = n(35277),
    h = n(711371),
    m = n(408269),
    g = n(574377);

function E(e) {
    var t;
    let {
        editorRef: n,
        options: i,
        iconClassName: a,
        dividerClassName: s
    } = e, l = null == (t = n.current) ? void 0 : t.getSlateEditor();
    return null == l ? null : (0, r.jsxs)("div", {
        className: g.Uo,
        children: [(0, r.jsx)(b, {
            slateEditor: l,
            markdownSyntax: "bold",
            children: (0, r.jsx)(c.$oz, {
                size: "md",
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        }), (0, r.jsx)(b, {
            slateEditor: l,
            markdownSyntax: "italics",
            children: (0, r.jsx)(c.yOR, {
                size: "md",
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        }), (0, r.jsx)(b, {
            slateEditor: l,
            markdownSyntax: "strikethrough",
            children: (0, r.jsx)(c.t64, {
                size: "md",
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        }), (0, r.jsx)("div", {
            className: o()(g.yF, s)
        }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, r.jsx)(O, {
            slateEditor: l,
            blockType: "blockQuote",
            children: (0, r.jsx)(c.cyi, {
                size: "md",
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        }), !(null == i ? void 0 : i.disableInlineCode) && (0, r.jsx)(b, {
            slateEditor: l,
            markdownSyntax: "inlineCode",
            children: (0, r.jsx)(c.GaO, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        }), (0, r.jsx)(b, {
            slateEditor: l,
            markdownSyntax: "spoiler",
            children: (0, r.jsx)(c.bMW, {
                size: "md",
                color: "currentColor",
                className: o()(g.Kk, a)
            })
        })]
    })
}
let y = i.forwardRef(function(e, t) {
    var n;
    let {
        editorRef: a,
        containerRef: o,
        options: c
    } = e, f = i.useRef(null), [p, _] = i.useState(!1), m = i.useRef(null), y = i.useContext(d.Ay), b = i.useCallback(() => {
        _(!1), clearTimeout(m.current)
    }, []), O = i.useCallback(e => {
        var t;
        let n = y.renderWindow;
        e.target instanceof n.Node && (null == (t = f.current) ? void 0 : t.contains(e.target)) || b()
    }, [y, b]), A = i.useCallback(e => {
        let t = y.renderWindow;
        if (e.target instanceof t.Element)
            if (0 !== e.button) b();
            else {
                var n;
                let r = e.target instanceof t.Node && (null == (n = f.current) ? void 0 : n.contains(e.target));
                clearTimeout(m.current), m.current = setTimeout(() => {
                    var t;
                    let n = null == (t = (0, l.BF)(e)) ? void 0 : t.activeElement,
                        i = o.current;
                    _(r || null != n && null != i && i.contains(n))
                }, 100)
            }
        else b()
    }, [y, o, b]);
    i.useImperativeHandle(t, () => ({
        hide: b
    }), [b]), i.useEffect(() => {
        let e = y.renderWindow;
        return e.document.addEventListener("keydown", b), e.document.addEventListener("mousedown", O), e.document.addEventListener("mouseup", A), e.addEventListener("focus", b), e.addEventListener("blur", b), () => {
            e.document.removeEventListener("keydown", b), e.document.removeEventListener("mousedown", O), e.document.removeEventListener("mouseup", A), e.removeEventListener("focus", b), e.removeEventListener("blur", b), clearTimeout(m.current)
        }
    }, [y, b, O, A]);
    let {
        x: I,
        y: S
    } = i.useMemo(() => {
        var e, t, n, r;
        let i = null == (t = a.current) ? void 0 : t.getSlateEditor();
        if ((null == i ? void 0 : i.selection) == null || h.ZF.isCollapsed(i.selection) || !p) return {
            x: null,
            y: null
        };
        let l = s.rL.findDocumentOrShadowRoot(i),
            c = l.getSelection();
        if (null == c || null == c.focusNode || null == c.anchorNode || c.isCollapsed) return {
            x: null,
            y: null
        };
        let u = l.createRange();
        u.setStart(c.focusNode, c.focusOffset), u.setEnd(c.focusNode, c.focusOffset);
        let d = u.getBoundingClientRect(),
            f = l.createRange();
        f.setStart(c.anchorNode, c.anchorOffset), f.setEnd(c.anchorNode, c.anchorOffset);
        let _ = f.getBoundingClientRect(),
            m = l.createRange();
        m.setStart(c.anchorNode, c.anchorOffset), m.setEnd(c.focusNode, c.focusOffset);
        let g = m.getBoundingClientRect(),
            E = d.x === _.x,
            y = E ? g.x : Math.min(d.x, _.x),
            b = E ? g.x + g.width : Math.max(d.x, _.x),
            O = null != (e = null == (r = o.current) || null == (n = r.getBoundingClientRect()) ? void 0 : n.y) ? e : 0;
        return {
            x: y + (b - y) / 2,
            y: Math.max(O, Math.min(_.y, d.y))
        }
    }, [o, p, a]), [T, C] = i.useState(0), [N, w] = i.useState(0);
    if (i.useLayoutEffect(() => {
            if (null == I || null == S || null == f.current) return;
            let e = f.current.getBoundingClientRect();
            w(e.width / 2), C(e.height + 12)
        }, [I, S]), null == I || null == S) return null;
    let R = null == (n = a.current) ? void 0 : n.getSlateEditor();
    return null == R ? null : (0, r.jsx)(u.Ay, {
        children: (0, r.jsxs)("div", {
            id: "slate-toolbar",
            ref: f,
            className: g.KE,
            style: {
                top: S - T,
                left: I - N
            },
            onMouseDown: e => {
                e.stopPropagation()
            },
            onMouseUp: e => {
                e.stopPropagation()
            },
            children: [(0, r.jsx)(v, {
                slateEditor: R
            }), (0, r.jsx)(E, {
                editorRef: a,
                options: c
            })]
        })
    })
});

function b(e) {
    let {
        slateEditor: t,
        markdownSyntax: n,
        children: i
    } = e, a = () => {
        null != t && f.o.withSingleEntry(t, () => (0, p.Px)(t, n))
    }, o = !1;
    if ((null == t ? void 0 : t.selection) != null) {
        let [e, r] = h.ZF.edges(t.selection);
        o = null != (0, p.Sx)(t, e, r).before[n]
    }
    return (0, r.jsx)("button", {
        "aria-pressed": o,
        className: g.x6,
        onClick: a,
        children: i
    })
}

function O(e) {
    let {
        blockType: t,
        slateEditor: n,
        children: i
    } = e, a = () => {
        null != n && f.o.withSingleEntry(n, () => (0, p.fO)(n, t))
    }, o = null != n ? h.VW.getCurrentBlock(n) : null, s = null != o && h.AS.isType(o[0], t);
    return (0, r.jsx)("button", {
        "aria-pressed": s,
        className: g.x6,
        onClick: a,
        children: i
    })
}

function v(e) {
    var t;
    let {
        slateEditor: n
    } = e, [r, a] = null != (t = h.VW.getSelectedVoid(n)) ? t : [null, null], o = i.useCallback(e => {
        if ((null == n ? void 0 : n.selection) == null || null == a) return;
        let t = n.selection;
        f.o.withSingleEntry(n, () => {
            _.b.voidToText(n, e, a), _.b.select(n, t)
        })
    }, [n, a]);
    return null == r ? null : (0, m.A)(r, {
        replace: o
    })
}