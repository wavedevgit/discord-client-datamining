/** chunk id: 509929, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Si: () => s,
    a$: () => c,
    sm: () => l
});
var r = n(284009),
    i = n.n(r),
    a = n(565150),
    o = n(292348);

function s(e, t) {
    var n;
    i()(e.item.platform === a.xz.WEB, "Upload must be in the Web format");
    let r = (0, o.OW)(e, t);
    return Promise.resolve({
        file: e.item.file,
        name: null != (n = r.filename) ? n : ""
    })
}
async function l(e) {}

function c(e) {
    return !1
}