/** chunk id: 337630, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
}), n(896048), n(321073);
var r = n(711371);
let i = "applicationCommand";

function a(e, t) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [n, a] = t, o = [];
    if (!r.l5.isText(n)) return o;
    let [s] = r.VW.node(e, r.PW.parent(a));
    return r.AS.isType(s, i) && n === s.children[0] && o.push({
        anchor: {
            path: a,
            offset: 0
        },
        focus: {
            path: a,
            offset: 0 + s.command.displayName.length + 1
        },
        commandName: !0
    }), o
}