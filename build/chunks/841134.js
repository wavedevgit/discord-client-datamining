/** Chunk was on web.js **/
/** chunk id: 841134, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(724039);

function i() {
    return (i = r || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}

function a(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var s = n(868715),
    o = n(595042),
    l = n(64700),
    c = n(670200);
e.exports = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    a(t, e);
    var n = t.prototype;
    return n.shouldComponentUpdate = function(e) {
        var t = this.props.editorState,
            n = e.editorState;
        if (t.getDirectionMap() !== n.getDirectionMap() || t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) return !0;
        var r = n.getNativelyRenderedContent(),
            i = t.isInCompositionMode(),
            a = n.isInCompositionMode();
        if (t === n || null !== r && n.getCurrentContent() === r || i && a) return !1;
        var s = t.getCurrentContent(),
            o = n.getCurrentContent(),
            l = t.getDecorator(),
            c = n.getDecorator();
        return i !== a || s !== o || l !== c || n.mustForceSelection()
    }, n.render = function() {
        for (var e = this.props, t = e.blockRenderMap, n = e.blockRendererFn, r = e.blockStyleFn, a = e.customStyleMap, u = e.customStyleFn, d = e.editorState, f = e.editorKey, p = e.textDirectionality, _ = d.getCurrentContent(), h = d.getSelection(), m = d.mustForceSelection(), g = d.getDecorator(), E = c(d.getDirectionMap()), y = _.getBlocksAsArray()[0], b = [], O = y; O;) {
            var v = O.getKey(),
                A = {
                    blockRenderMap: t,
                    blockRendererFn: n,
                    blockStyleFn: r,
                    contentState: _,
                    customStyleFn: u,
                    customStyleMap: a,
                    decorator: g,
                    editorKey: f,
                    editorState: d,
                    forceSelection: m,
                    selection: h,
                    block: O,
                    direction: p || E.get(v),
                    tree: d.getBlockTree(v)
                },
                I = (t.get(O.getType()) || t.get("unstyled")).wrapper;
            b.push({
                block: l.createElement(s, i({
                    key: v
                }, A)),
                wrapperTemplate: I,
                key: v,
                offsetKey: o.encode(v, 0, 0)
            });
            var S = O.getNextSiblingKey();
            O = S ? _.getBlockForKey(S) : null
        }
        for (var T = [], C = 0; C < b.length;) {
            var N = b[C];
            if (N.wrapperTemplate) {
                var w = [];
                do w.push(b[C].block), C++; while (C < b.length && b[C].wrapperTemplate === N.wrapperTemplate);
                var R = l.cloneElement(N.wrapperTemplate, {
                    key: N.key + "-wrap",
                    "data-offset-key": N.offsetKey
                }, w);
                T.push(R)
            } else T.push(N.block), C++
        }
        return l.createElement("div", {
            "data-contents": "true"
        }, T)
    }, t
}(l.Component)