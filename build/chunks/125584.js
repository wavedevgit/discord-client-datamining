/** Chunk was on web.js **/
/** chunk id: 125584, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => s
});
var r = n(683760),
    i = n(474090),
    a = n(652215),
    o = n(788868);

function s(e) {
    if (null == e) return a.TbF;
    let t = r.A.getPremiumTypeOverride();
    return e.isStaff() && t === o.$I ? a.mu : null != e.premiumType && (0, i.ki)(e) ? o.f5[e.premiumType].fileSize : a.TbF
}