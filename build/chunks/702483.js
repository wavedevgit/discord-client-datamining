/** Chunk was on web.js **/
/** chunk id: 702483, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048), n(321073);
var r = n(22098),
    i = n(711371);
let a = "line";

function o(e, t) {
    if (i.VW.areStylesDisabled(e)) return [];
    let [n, o] = t, s = [];
    if (!i.AS.isType(n, a) || null == n.codeBlockState) return s;
    let {
        hljsTypes: l,
        isStyledCodeBlockLine: c
    } = n.codeBlockState;
    if (null == l || 0 === l.length || !c) return [];
    for (let t of l) {
        let a = n.children.map(e => i.l5.isText(e) ? e.text : null);
        s.push({
            hljsTypes: t.types,
            anchor: (0, r.Q)(e, o, a, t.start),
            focus: (0, r.Q)(e, o, a, t.end)
        })
    }
    return s
}