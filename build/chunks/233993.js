/** chunk id: 233993, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Gk: () => l,
    Kn: () => s,
    QY: () => a,
    Uu: () => c,
    Zq: () => o
}), n(896048);
var r = n(136722),
    i = n(652215);
let a = r.kg(i.xBc.MANAGE_CHANNELS, i.xBc.MUTE_MEMBERS, i.xBc.MOVE_MEMBERS);
r.kg(i.xBc.MANAGE_CHANNELS, i.xBc.MANAGE_ROLES);
let o = new Set([i.xBc.SPEAK, i.xBc.REQUEST_TO_SPEAK, i.xBc.USE_VAD]),
    s = r.kg(a, i.xBc.MANAGE_ROLES),
    l = r.kg(i.xBc.CONNECT, i.xBc.VIEW_CHANNEL),
    c = r.kg(l, i.xBc.READ_MESSAGE_HISTORY, i.xBc.REQUEST_TO_SPEAK, i.xBc.SPEAK, i.xBc.USE_VAD)