/** chunk id: 414940, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048), n(747238);
var r = n(186306),
    i = n(35277),
    a = n(711371),
    o = n(407315);
let s = new Set(["line", "blockQuote"]);

function l(e) {
    let {
        deleteBackward: t,
        deleteFragment: n,
        insertBreak: o,
        onChange: s
    } = e;
    e.deleteBackward = n => {
        let r = a.VW.getCurrentBlock(e);
        if ((null == r ? void 0 : r[0].type) === "blockQuote") {
            let t = a.ZF.toPoint(e.selection);
            if (null != t && a.PW.isFirstChild(r[1], t.path) && 0 === t.offset) return void i.b.setNodes(e, {
                type: "line"
            }, {
                at: r[1]
            })
        }
        t(n)
    }, e.deleteFragment = t => {
        if (null != e.selection) {
            let [o, s] = a.ZF.edges(e.selection), l = [o.path[0]], c = a.VW.node(e, l), u = [s.path[0]], d = a.PW.equals(l, u) ? null : a.VW.node(e, u);
            r.o.withSingleEntry(e, () => {
                (null == c ? void 0 : c[0].type) === "blockQuote" && a.Kh.isAtStart(o, c) && i.b.setNodes(e, {
                    type: "line"
                }, {
                    at: l
                }), (null == d ? void 0 : d[0].type) === "blockQuote" && a.Kh.isAtEnd(s, d) && i.b.setNodes(e, {
                    type: "line"
                }, {
                    at: u
                }), n(t)
            });
            return
        }
        n(t)
    }, e.insertBreak = () => {
        let t = a.VW.getCurrentBlock(e);
        if ((null == t ? void 0 : t[0].type) === "blockQuote") {
            let n = a.ZF.toPoint(e.selection);
            if (null == n) return;
            u(e, t, n) || i.b.splitNodes(e, {
                at: n,
                always: !0
            });
            return
        }
        o()
    };
    let l = null,
        d = !0;
    return e.onChange = () => {
        let t = a.VW.richValue(e);
        (t !== l || e.previewMarkdown !== d) && (r.o.withMergedEntry(e, () => {
            a.VW.withoutNormalizing(e, () => c(e))
        }), l = t, d = e.previewMarkdown), s()
    }, e
}

function c(e) {
    let t = !1;
    for (let l of a.VW.blocks(e)) {
        let [c, u] = l;
        if (!s.has(c.type)) continue;
        let d = {
            path: a.PW.child(u, 0),
            offset: 0
        };
        if ((0, o.W)(e, d)) {
            "blockQuote" === c.type && (i.b.setNodes(e, {
                type: "line"
            }, {
                at: u
            }), i.b.insertText(e, "> ", {
                at: d
            }));
            continue
        }
        if ("blockQuote" === c.type || a.VW.areStylesDisabled(e)) continue;
        let f = c.children[0];
        if (!a.l5.isText(f)) continue;
        let p = f.text.match(/^\s*>>> /),
            _ = f.text.match(/^\s*> /);
        if ((null != _ || null != p || t) && (i.b.setNodes(e, {
                type: "blockQuote"
            }, {
                at: u
            }), !t)) {
            var n, r;
            let o = null != (n = null != (r = null == _ ? void 0 : _[0].length) ? r : null == p ? void 0 : p[0].length) ? n : 0,
                s = a.PW.child(u, 0);
            i.b.delete(e, {
                at: {
                    anchor: {
                        path: s,
                        offset: 0
                    },
                    focus: {
                        path: s,
                        offset: o
                    }
                }
            }), t = null != p
        }
    }
}

function u(e, t, n) {
    if (!a.VW.isEmpty(e, t[0])) return !1;
    let r = a.VW.previous(e, {
        at: t[1]
    });
    return null != r && !!a.AS.isType(r[0], "blockQuote") && !!a.VW.isEmpty(e, r[0]) && !!a.Kh.isAtStart(n, t) && (i.b.setNodes(e, {
        type: "line"
    }, {
        at: t[1]
    }), i.b.removeNodes(e, {
        at: r[1]
    }), !0)
}