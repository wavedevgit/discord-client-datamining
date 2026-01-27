/** Chunk was on web.js **/
/** chunk id: 474012, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    K: () => s
}), n(321073), n(896048), n(228524);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    o = n(203632);
n(652215);
let s = e => null == e ? [] : e.reduce((e, t) => (t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)), t.type === r.R.PROFILE_EFFECT && e.push(o.A.fromServer(t)), t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)), e), [])