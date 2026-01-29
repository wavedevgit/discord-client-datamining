/** Chunk was on 1113 **/
/** chunk id: 246084, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => i
});
var r = n(405018),
    l = n(652215);

function i(e) {
    let {
        channel: t,
        locked: n,
        video: i,
        selected: s
    } = e;
    return function(e) {
        let {
            channel: t,
            video: n,
            considerMaxStageVoiceUserLimit: i = !0
        } = e, {
            limit: s
        } = (0, r.A)(t), a = -1;
        return (t.userLimit > 0 && (a = t.userLimit), n && s > 0 && (a = a > 0 ? Math.min(a, s) : s), i && a === l.RCc) ? 0 : a
    }({
        channel: t,
        video: i
    }) > 0 && !n && !s
}