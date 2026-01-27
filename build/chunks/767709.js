/** Chunk was on web.js **/
/** chunk id: 767709, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(739305),
    i = n(410323),
    a = n(514575),
    o = n(412405),
    s = r.aTypedArray,
    l = r.getTypedArrayConstructor,
    c = r.exportTypedArrayMethod,
    u = i(r.TypedArrayPrototype.sort);
c("toSorted", function(e) {
    void 0 !== e && a(e);
    var t = s(this);
    return u(o(l(t), t), e)
})