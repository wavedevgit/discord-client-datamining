/** chunk id: 930958, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    k: () => o
}), n(747238), n(812715), n(733351);
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    a = e => e.replace(r, "").replace(i, " "),
    o = e => null == e ? [] : a(e).trim().split(" ")