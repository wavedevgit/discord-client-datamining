/** chunk id: 246084, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => l
});
var i = n(405018),
    s = n(652215);

function l(e) {
    let {
        channel: t,
        locked: n,
        video: l,
        selected: a
    } = e;
    return function(e) {
        let {
            channel: t,
            video: n,
            considerMaxStageVoiceUserLimit: l = !0
        } = e, {
            limit: a
        } = (0, i.A)(t), r = -1;
        return (t.userLimit > 0 && (r = t.userLimit), n && a > 0 && (r = r > 0 ? Math.min(r, a) : a), l && r === s.RCc) ? 0 : r
    }({
        channel: t,
        video: l
    }) > 0 && !n && !a
}