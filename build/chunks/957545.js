/** Chunk was on 47841 **/
/** chunk id: 957545, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    J: () => a,
    P: () => o
}), n(321073), n(896048);
var r = n(136722),
    i = n(34457),
    l = n(558393),
    s = n(652215);

function a(e) {
    return r.X8(e.permissions, s.Lti)
}

function o(e, t) {
    let n = [],
        r = l.A.getGuildPermissionSpecMap(e);
    for (let e of s.nfo)(0, i._m)(t, e) && n.push(r[e.toString()].title);
    return n
}