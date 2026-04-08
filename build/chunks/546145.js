/** chunk id: 546145 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(287809),
    i = n(622543);

function l(e) {
    let t = r.default.getCurrentUser();
    return null == t ? null : null != e ? i.A.getGuildMemberProfile(t.id, e) : i.A.getUserProfile(t.id)
}