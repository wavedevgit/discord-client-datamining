/** Chunk was on web.js **/
/** chunk id: 35277, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    b: () => c
}), n(134528), n(947204), n(264879), n(896048), n(747238);
var r = n(719442),
    i = n(317681),
    a = n(711371),
    o = n(551483);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}
let c = function(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}(function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            s(e, t, n[t])
        })
    }
    return e
}({}, r.gB), {
    resetSelectionToEditorStart(e) {
        r.gB.select(e, a.VW.start(e, []))
    },
    resetSelectionToEditorEnd(e) {
        r.gB.select(e, a.VW.end(e, []))
    },
    delete(e, t) {
        let {
            at: n,
            distance: i,
            unit: o,
            reverse: s = !1,
            select: l = !1,
            bounds: c,
            voids: u
        } = t;
        if (null == n) {
            if (null == e.selection) return;
            n = e.selection
        }
        let [d, f] = a.ZF.isRange(n) ? a.ZF.edges(n) : a.VW.edges(e, n);
        if (null != i || null != o) {
            var p, _, h;
            if (s) {
                let t = null != (p = a.VW.before(e, d, {
                    distance: i,
                    unit: o
                })) ? p : a.VW.start(e, []);
                if ("character" === o && (null != i ? i : 1) === 1 && a.PW.equals(d.path, f.path)) {
                    let n = a.VW.leaf(e, d.path),
                        r = null != n ? n[0].text : "";
                    r.length > 0 && null != r[r.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null != (_ = a.VW.before(e, d, {
                        distance: i,
                        unit: "offset"
                    })) ? _ : a.VW.start(e, []))
                }
                d = t
            } else f = null != (h = a.VW.after(e, f, {
                distance: i,
                unit: o
            })) ? h : a.VW.end(e, [])
        }
        if (null != c) {
            let [e, t] = a.ZF.edges(c);
            a.Kh.isBefore(d, e) && (d = e), a.Kh.isAfter(f, t) && (f = t)
        }!a.Kh.equals(d, f) && (r.gB.delete(e, {
            at: {
                anchor: d,
                focus: f
            },
            hanging: !0,
            voids: u
        }), l && a.VW.hasPath(e, d.path) && r.gB.select(e, d))
    },
    textToText(e, t, n) {
        var i;
        let o = a.VW.getSelectionOverlap(e, n),
            [s, l] = a.ZF.edges(n),
            c = null != (i = a.VW.before(e, s)) ? i : a.VW.start(e, []),
            u = a.VW.after(e, l);
        a.ZF.isExpanded(n) && r.gB.delete(e, {
            at: n,
            voids: !0
        }), r.gB.insertText(e, t, {
            at: c
        }), c = null != c ? c : a.VW.start(e, []), u = null != u ? u : a.VW.end(e, []), d(e, o, c, u, u)
    },
    textToVoid(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            o = a.ZF.start(n),
            s = a.PW.next(o.path),
            l = {
                path: a.PW.next(s),
                offset: 0
            };
        r.gB.delete(e, {
            at: n,
            voids: !0
        }), 0 === o.offset && r.gB.insertNodes(e, [{
            text: ""
        }], {
            at: o.path
        }), r.gB.insertNodes(e, [t], {
            at: o
        }), a.VW.hasPath(e, l.path) && a.l5.isText(a.VW.node(e, l.path)[0]) || r.gB.insertNodes(e, [{
            text: ""
        }], {
            at: l.path
        }), d(e, i, o, l, l)
    },
    textToInline(e, t, n) {
        let i = a.VW.getSelectionOverlap(e, n),
            o = t.children[t.children.length - 1],
            s = a.ZF.start(n),
            l = a.PW.next(s.path),
            c = {
                path: a.PW.child(l, t.children.length - 1),
                offset: a.l5.isText(o) ? o.text.length : 0
            };
        r.gB.delete(e, {
            at: n,
            voids: !0
        }), 0 === s.offset && r.gB.insertNodes(e, [{
            text: ""
        }], {
            at: s.path
        }), r.gB.insertNodes(e, [t], {
            at: s
        }), d(e, i, s, c, c)
    },
    voidToText(e, t, n) {
        var i;
        let o = a.VW.getSelectionOverlap(e, n),
            s = null != (i = a.VW.before(e, n)) ? i : a.VW.start(e, []),
            l = {
                path: s.path,
                offset: s.offset + t.length
            };
        r.gB.delete(e, {
            at: n,
            voids: !0
        }), r.gB.insertText(e, t, {
            at: s
        }), d(e, o, s, s, l)
    },
    removeInline(e, t) {
        var n;
        let i = a.VW.getSelectionOverlap(e, t),
            o = null != (n = a.VW.before(e, t)) ? n : a.VW.start(e, []);
        r.gB.delete(e, {
            at: t,
            voids: !0
        }), d(e, i, o, o, o)
    },
    removeInlineChildren(e, t) {
        let [n, i] = t, o = a.VW.getSelectionOverlap(e, i), s = {
            path: a.PW.child(i, 0),
            offset: 0
        };
        a.VW.withoutNormalizing(e, () => {
            for (let t = n.children.length - 1; t >= 0; t--) r.gB.removeNodes(e, {
                at: a.PW.child(i, t),
                voids: !0
            })
        }), d(e, o, null, s, null)
    },
    selectCommandOption(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            o = i.n$(e);
        if (null != o)
            for (let i = 0; i < o[0].children.length; i++) {
                let s = o[0].children[i];
                if (a.AS.isType(s, "applicationCommandOption") && s.optionName === t) return void(n ? r.gB.select(e, [0, i]) : r.gB.select(e, a.VW.end(e, [0, i])))
            }
    },
    selectPreviousCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.VW.end(e, o.Xg).path,
            n = i.M3(e),
            s = a.VW.previous(e, {
                at: t,
                match: e => e !== (null == n ? void 0 : n[0]) && a.AS.isType(e, "applicationCommandOption")
            });
        null != s ? r.gB.select(e, s[1]) : a.PW.isAfter(t, o.fP) && r.gB.select(e, a.VW.end(e, o.fP))
    },
    selectNextCommandOption(e) {
        if (null == i.n$(e)) return;
        let t = null != e.selection ? e.selection.focus.path : a.VW.start(e, o.Xg).path,
            n = i.M3(e),
            s = a.VW.next(e, {
                at: t,
                match: e => e !== (null == n ? void 0 : n[0]) && a.AS.isType(e, "applicationCommandOption")
            });
        null != s ? r.gB.select(e, s[1]) : c.resetSelectionToEditorEnd(e)
    },
    insertCommandOption(e, t) {
        c.resetSelectionToEditorEnd(e), c.insertNodes(e, [{
            type: "applicationCommandOption",
            optionName: t.name,
            optionDisplayName: t.displayName,
            optionType: t.type,
            children: [{
                text: ""
            }]
        }])
    },
    keyboardMove(e, t) {
        let {
            distance: n = 1,
            unit: i = "character",
            reverse: o = !1,
            edge: s
        } = null != t ? t : {}, l = e.selection;
        if (null == l) return;
        let c = l.focus;
        if (a.ZF.isExpanded(l)) {
            if (void 0 === s && "character" === i) return void r.gB.collapse(e, {
                edge: o ? "start" : "end"
            });
            "focus" !== s && (c = "line" === i || o ? a.ZF.start(l) : a.ZF.end(l))
        }
        let u = (o ? a.VW.before : a.VW.after)(e, c, {
            unit: i,
            distance: n
        });
        null != u && r.gB.setSelection(e, "focus" === s ? {
            focus: u
        } : {
            anchor: u,
            focus: u
        })
    }
});

function u(e, t, n, r, i) {
    switch (t) {
        case "start":
            return n;
        case "inside":
            return r;
        case "end":
            return i
    }
    return e
}

function d(e, t, n, r, i) {
    var a, o;
    if (null == t.anchor && null == t.focus) return;
    let s = u(null == (a = e.selection) ? void 0 : a.anchor, t.anchor, n, r, i),
        l = u(null == (o = e.selection) ? void 0 : o.focus, t.focus, n, r, i);
    if (null == s || null == l) return;
    let d = {
        anchor: s,
        focus: l
    };
    c.select(e, d)
}