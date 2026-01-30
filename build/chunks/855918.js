/** chunk id: 855918, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    AN: () => s,
    Uj: () => l,
    iR: () => o
});
var r = n(136722),
    i = n(34457),
    a = n(652215);

function o(e) {
    return (0, i._m)(e, a.xBc.VIEW_CHANNEL)
}

function s(e, t) {
    return null != t && (!!r.zy(t.deny, a.xBc.VIEW_CHANNEL) || e.isGuildVocal() && r.zy(t.deny, a.xBc.CONNECT))
}

function l(e, t) {
    return !(null == t || s(e, t)) && !!r.zy(t.allow, a.xBc.VIEW_CHANNEL) && (!e.isGuildVocal() || r.zy(t.allow, a.xBc.CONNECT))
}