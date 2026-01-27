/** Chunk was on web.js **/
/** chunk id: 167074, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => u
});
var r = n(136722),
    i = n(311907),
    a = n(406704),
    o = n(696451),
    s = n(576705),
    l = n(287809),
    c = n(652215);

function u(e) {
    let t = e.getGuildId(),
        n = (0, i.bG)([o.Ay, l.default], () => {
            var e, n;
            let r = l.default.getCurrentUser();
            return null != (e = null != t && null != r ? null == (n = o.Ay.getMember(t, r.id)) ? void 0 : n.isPending : null) && e
        }),
        {
            messagesDisabled: u
        } = (0, i.cf)([s.A], () => {
            let t = e.isPrivate(),
                i = s.A.computePermissions(e),
                o = r.zy(i, c.xBc.SEND_MESSAGES),
                l = (0, a.UJ)(e);
            return {
                messagesDisabled: n || !t && !o || l
            }
        }, [e, n]);
    return !u
}